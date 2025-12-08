// src/components/EditProfile.jsx
import React, { useEffect, useState, useRef } from "react";
import { buildAvatarUrl } from "../utils/avatar";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";
import nmp_mapboxgl from "@neshan-maps-platform/mapbox-gl";

export default function EditProfile() {

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    postalCode: "",
    address: "",
  });

  const [location, setLocation] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [removeAvatar, setRemoveAvatar] = useState(false);
  const [preview, setPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token") || "";
  const mapRef = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);

  const mapKey = import.meta.env.VITE_NESHAN_MAP_KEY;

  /* دریافت اطلاعات کاربر */
  useEffect(() => {
    if (!token) return;

    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();
        if (!res.ok) return;

        setFormData({
          name: data.name || "",
          lastName: data.lastName || "",
          email: data.email || "",
          gender: data.gender || "",
          phone: data.phone || "",
          postalCode: data.postalCode || "",
          address: data.address || "",
        });

        if (data.avatar) setPreview(buildAvatarUrl(data.avatar));

        if (data.location) {
          setLocation({
            lat: data.location.lat,
            lng: data.location.lng,
          });
        }

      } catch (err) {
        console.log("خطا:", err);
      }
    };

    fetchUser();
  }, [token]);

  /* نقشه نشن */
  useEffect(() => {
    if (!mapRef.current || !mapKey) return;

    map.current = new nmp_mapboxgl.Map({
      container: mapRef.current,
      mapKey,
      mapType: nmp_mapboxgl.Map.mapTypes.neshanVector,
      zoom: location ? 13 : 6,
      center: location ? [location.lng, location.lat] : [51.4, 35.7],
      pitch: 0,
      minZoom: 2,
      maxZoom: 21,
      poi: false,
      traffic: false,
    });

    // کنترل + و –
    map.current.addControl(new nmp_mapboxgl.NavigationControl(), "top-right");

    if (location) {
      marker.current = new nmp_mapboxgl.Marker()
        .setLngLat([location.lng, location.lat])
        .addTo(map.current);
    }

    map.current.on("click", (e) => {
      const { lng, lat } = e.lngLat;

      if (marker.current) {
        marker.current.setLngLat([lng, lat]);
      } else {
        marker.current = new nmp_mapboxgl.Marker()
          .setLngLat([lng, lat])
          .addTo(map.current);
      }

      setLocation({ lat, lng });
    });

    return () => {
      if (map.current) map.current.remove();
    };
  }, [location]);

  /* آپلود آواتار */
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setAvatarFile(file);
    setPreview(URL.createObjectURL(file));
    setRemoveAvatar(false);
  };

  /* ارسال فرم */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return alert("ابتدا وارد حساب شوید");

    setLoading(true);

    const fd = new FormData();
    Object.keys(formData).forEach((key) => fd.append(key, formData[key]));

    if (avatarFile) fd.append("avatar", avatarFile);
    if (removeAvatar) fd.append("removeAvatar", "true");
    if (location) {
      fd.append("locationLat", location.lat);
      fd.append("locationLng", location.lng);
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/update", {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });

      const data = await res.json();


if (!res.ok) return alert(data.message || "خطا در ذخیره");

      alert("اطلاعات با موفقیت ذخیره شد");

      const old = JSON.parse(localStorage.getItem("user") || "{}");
      localStorage.setItem("user", JSON.stringify({ ...old, ...data }));

      window.dispatchEvent(new Event("userUpdated"));

    } catch (err) {
      alert("خطا در اتصال به سرور");
    }

    setLoading(false);
  };

  return (
    <div style={{marginTop:"30vh"}} className="edit-profile">
      <h2>ویرایش حساب کاربری</h2>

      <form  onSubmit={handleSubmit}>

        {/* عکس پروفایل */}
        <div className="avatar-area">
          {preview && (
            <img className="avatar" src={preview} alt="avatar preview" />
          )}

          <input type="file" accept="image/*" onChange={handleFileChange} />

          {preview && (
            <button
              type="button"
              className="remove-avatar"
              onClick={() => {
                setRemoveAvatar(true);
                setAvatarFile(null);
                setPreview(null);
              }}
            >
              حذف عکس
            </button>
          )}
        </div>

        {/* ورودی‌ها */}
        
          <input
             
            type="text"
            placeholder="نام"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <input
            
            type="text"
            placeholder="نام خانوادگی"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        

        <input
          type="email"
          placeholder="ایمیل"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="شماره تماس"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="کد پستی"
          value={formData.postalCode}
          onChange={(e) =>
            setFormData({ ...formData, postalCode: e.target.value })
          }
        />

        <textarea
          placeholder="آدرس"
          rows={2}
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        ></textarea>

        {/* رمز عبور */}
        <div className="password-box">
          <input
          style={{display:"flex",alignItems:"center",justifyContent:"center"}}
            type={showPassword ? "text" : "password"}
            placeholder="رمز عبور جدید (اختیاری)"
            autoComplete="new-password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <span style={{marginRight:"90%"}} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaRegEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* نقشه */}
        <label className="map-label">موقعیت روی نقشه:</label>
        <div ref={mapRef} id="map"></div>

        <button className="save-btn" disabled={loading}>
          {loading ? "در حال ذخیره..." : "ثبت تغییرات"}
        </button>
      </form>

      {/* CSS داخلی */}
      <style>{`
        .edit-profile {
          max-width: 600px;
          margin: 30px auto;
          padding: 25px;
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.07);
          direction: rtl;
          font-family: IRANSans, sans-serif;
        }

        .edit-profile h2 {
          text-align: center;
          margin-bottom: 25px;
          color: #333;
        }

        .avatar-area {
          text-align: center;
          margin-bottom: 20px;
          width:100%;
        }
.avatar {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 10px;
          border: 3px solid #ddd;
        }

        .remove-avatar {
          background: #ff5555;
          color: #fff;
          padding: 6px 14px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
        }

        input, textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 10px;
          margin-bottom: 12px;
          font-size: 14.5px;
        }


        .password-box {
          position: relative;
        }

        .password-box span {
          position: absolute;
          top: 50%;
          right: 12px;
          font-size: 20px;
          cursor: pointer;
          color: #555;
          transform: translateY(-50%);
        }

        #map {
          width: 100%;
          height: 350px;
          border-radius: 12px;
          margin-top: 10px;
        }

        .save-btn {
          width: 100%;
          padding: 14px;
          background: #3b82f6;
          color: #fff;
          border: none;
          font-size: 16px;
          border-radius: 12px;
          margin-top: 15px;
          cursor: pointer;
          transition: .3s;
        }

        .save-btn:hover {
          background: #2563eb;
        }
      `}</style>
    </div>
  );
}