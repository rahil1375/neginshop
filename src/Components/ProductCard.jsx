// src/components/productcard.jsx
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product, favorites, setFavorites }) => {
  const token = localStorage.getItem("token");

  const isLiked = favorites.some(
    (f) => f.product?._id === product._id
  );

  const toggleFavorite = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (!token) {
      alert("لطفا وارد حساب کاربری شوید");
      return;
    }

    if (isLiked) {
      await fetch(
        `http://localhost:5000/api/favorites/remove/${product._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // ✅ آپدیت لحظه‌ای state
      setFavorites((prev) =>
        prev.filter((f) => f.product._id !== product._id)
      );
    } else {
      const res = await fetch(
        "http://localhost:5000/api/favorites/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ productId: product._id }),
        }
      );

      const data = await res.json();
      setFavorites((prev) => [...prev, data]);
    }
  };

  return (
    <Link to={`/product/${product._id}`} className="product-card">
      <div className="product-image-wrapper">
        <span className="icon-left" onClick={toggleFavorite}>
          {isLiked ? <FaHeart color="red" /> : <FaRegHeart />}
        </span>

        <span className="icon-right">
          <FaRegBookmark />
        </span>

        <img
          src={`http://localhost:5000${product.image}`}
          alt={product.title}
        />
      </div>

      <div className="product-info">
        <h6>{product.title}</h6>
        <span>{product.price.toLocaleString()} تومان</span>
      </div>
    </Link>
  );
};

export default ProductCard;