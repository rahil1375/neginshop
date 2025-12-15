// src/pages/dashboard/MyOrders.jsx
import React, { useEffect, useState } from "react";

/**
 * MyOrders page
 * - Fetches: GET /api/orders/my  (Authorization: Bearer <token>)
 * - Shows a list of order cards with items, date, total, status.
 *
 * نکات:
 * - اگر تصاویر آیتم‌ها آدرس کامل باشند (http...) نمایش داده می‌شوند.
 * - اگر مسیر مثل "/avatars/..." یا "avatars/..." باشد، به http://localhost:5000 پیش‌وند زده می‌شود.
 */

const resolveImage = (img) => {
  if (!img) return "http://localhost:5000/public/default.png";
  if (typeof img !== "string") return "http://localhost:5000/public/default.png";
  if (img.startsWith("http")) return img;
  if (img.startsWith("/")) return `http://localhost:5000${img}`;
  // fallback: treat as avatar filename
  return `http://localhost:5000/avatars/${img}`;
};

const formatPrice = (price) => {
  if (price == null) return "—";
  try {
    return Number(price).toLocaleString("fa-IR");
  } catch {
    return price;
  }
};

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetchUserOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUserOrders = async () => {
    setLoading(true);
    setErr(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setErr("ابتدا وارد شوید.");
        setLoading(false);
        return;
      }
      const res = await fetch("http://localhost:5000/api/orders/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "خطا در دریافت سفارش‌ها");
      }
      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
      setErr(e.message || "خطای شبکه");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{marginTop:"150px"}} className="myorders-page">
      <h2 className="page-title">سفارش‌های من</h2>

      {loading ? (
        <div className="center">
          <div className="spinner" />
          <p>در حال بارگذاری سفارش‌ها...</p>
        </div>
      ) : err ? (
        <div className="center error-box">
          <p>{err}</p>
          <button className="btn" onClick={fetchUserOrders}>
            تلاش دوباره
          </button>
        </div>
      ) : orders.length === 0 ? (
        <div className="center empty-box">
          <p>هنوز سفارشی ثبت نکرده‌اید.</p>
          <p>محصولات مورد نظرتان را ببینید و اولین سفارش را ثبت کنید.</p>
        </div>
      ) : (
        <div className="orders-wrapper">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <div className="order-header">
                <div>
                  <div className="order-date">
                    تاریخ:{" "}
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleString("fa-IR")
                      : "—"}
                  </div>
                  <div className="order-id">#: {order._id.slice(-8)}</div>
                </div>
                <div className={`order-status status-${order.status || "pending"}`}>
                  {order.status || "pending"}
                </div>
              </div>

              <div className="order-body">
                <div className="items-list">
                  {Array.isArray(order.items) && order.items.length > 0 ? (
                    order.items.map((item, i) => (
                      <div key={i} className="order-item">
                        <img
                          src={resolveImage(item.image)}
                          alt={item.name || "product"}
className="item-img"
                          onError={(e) => {
                            e.currentTarget.src = "http://localhost:5000/public/default.png";
                          }}
                        />
                        <div className="item-meta">
                          <div className="item-name">{item.name || "نام محصول"}</div>
                          <div className="item-qty">تعداد: {item.qty || 1}</div>
                        </div>
                        <div className="item-price">
                          {formatPrice(item.price)} تومان
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="no-items">این سفارش آیتمی ندارد.</div>
                  )}
                </div>

                <div className="order-summary">
                  <div className="summary-row">
                    <span>قیمت کالاها:</span>
                    <strong>
                      {formatPrice(
                        order.items?.reduce((s, it) => s + (Number(it.price || 0) * (Number(it.qty || 1))), 0)
                      )}{" "}
                      تومان
                    </strong>
                  </div>
                  <div className="summary-row">
                    <span>هزینه ارسال:</span>
                    <strong>{formatPrice(order.shippingCost || 0)} تومان</strong>
                  </div>
                  <div className="summary-row total">
                    <span>مجموع پرداخت:</span>
                    <strong>
                      {formatPrice(order.totalPrice || (
                        order.items?.reduce((s, it) => s + (Number(it.price || 0) * (Number(it.qty || 1))), 0)
                        + Number(order.shippingCost || 0)
                      ))}{" "}
                      تومان
                    </strong>
                  </div>

                  <div className="order-actions">
                    {/* در صورت نیاز می‌توان دکمه‌های جزئیات/لغو/پیگیری اضافه کرد */}
                    <button className="btn small" onClick={() => alert("نمایش جزئیات سفارش (آینده)")}>
                      جزئیات
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ====== استایل داخلی (CSS-in-JSX) ====== */}
      <style>{`
        .myorders-page {
          direction: rtl;
          padding: 2.2rem;
          max-width: 1100px;
          margin: 0 auto 6rem;
          font-family: Vazir, "IRANSans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }

        .page-title {
          text-align: center;
          margin-bottom: 1.4rem;
          font-size: 1.6rem;
          color: #111827;
        }

        .center {
          display: flex;
          flex-direction: column;
          gap: .8rem;
          align-items: center;
          justify-content: center;
          padding: 2rem 0;
          color: #374151;
        }

        .spinner {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 4px solid rgba(0,0,0,0.08);
          border-top-color: #6b21a8;
          animation: spin 1s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .empty-box {
          border: 1px dashed #d1d5db;
          padding: 2rem;
          border-radius: 12px;
          background: #fff;
        }

        .error-box {
          border: 1px solid #fecaca;
          background: #fff7f7;
          padding: 1rem 1.2rem;
          border-radius: 10px;
        }

        .orders-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        /* order card */
        .order-card {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(15,23,42,0.06);
          padding: 1rem;
          overflow: hidden;
        }

Rahil💎 Khosravi, [17/09/1404 09:55 ب.ظ]
.order-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.8rem;
        }

        .order-date {
          color: #374151;
          font-size: 0.95rem;
        }
        .order-id {
          color: #6b7280;
          font-size: 0.85rem;
        }

        .order-status {
          padding: 0.35rem 0.8rem;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: capitalize;
          color: white;
        }
        .status-pending { background: #f59e0b; }       /* در انتظار */
        .status-processing { background: #06b6d4; }    /* در حال پردازش */
        .status-sent { background: #2563eb; }          /* ارسال شده */
        .status-delivered { background: #10b981; }     /* تحویل شده */
        .status-canceled { background: #ef4444; }      /* لغو شده */

        .order-body {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .items-list {
          flex: 1.4;
          min-width: 220px;
          max-height: 260px;
          overflow-y: auto;
          padding-right: .4rem;
        }

        .order-item {
          display: flex;
          gap: 0.8rem;
          align-items: center;
          padding: .5rem;
          border-radius: 8px;
          transition: background .15s;
        }
        .order-item + .order-item { margin-top: 0.4rem; }
        .order-item:hover { background: #fafafa; }

        .item-img {
          width: 64px;
          height: 64px;
          object-fit: cover;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          flex-shrink: 0;
        }

        .item-meta {
          flex: 1;
          min-width: 0;
        }
        .item-name {
          font-weight: 600;
          color: #111827;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: .95rem;
        }
        .item-qty { color: #6b7280; font-size: .85rem; margin-top: .25rem; }

        .item-price {
          min-width: 120px;
          text-align: left;
          font-weight: 700;
          color: #111827;
        }

        .order-summary {
          flex: .9;
          min-width: 220px;
          border-radius: 10px;
          padding: .8rem;
          background: linear-gradient(180deg, #f8fafc, #ffffff);
          border: 1px solid #eef2ff;
          height: fit-content;
          align-self: flex-start;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          gap: .6rem;
          padding: .35rem 0;
          color: #374151;
        }
        .summary-row.total { margin-top: .6rem; font-size: 1.05rem; }

        .order-actions { margin-top: .8rem; display:flex; gap:.6rem; justify-content:flex-end; }

        .btn {
          background: #6b21a8;
          color: white;
          border: none;
          padding: .5rem .9rem;
          border-radius: 8px;
          cursor: pointer;
        }
        .btn.small { padding: .35rem .6rem; font-size: .9rem; background: #2563eb; }

        /* responsive */
        @media (max-width: 880px) {
          .order-body { flex-direction: column; }
          .order-summary { width: 100%; }
          .items-list { max-height: 400px; }
        }

      `}</style>
    </div>
  );
};

export default MyOrders;