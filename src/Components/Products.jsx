// src/components/products.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || data));

    if (token) {
      fetch("http://localhost:5000/api/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setFavorites(data));
    }
  }, []);

  return (
    <>
      <style>{`
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 24px;
          padding: 30px;
        }
        .product-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          text-decoration: none;
          color: #000;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          transition: 0.3s;
        }
        .product-card:hover {
          transform: translateY(-6px);
        }
        .product-image-wrapper {
          position: relative;
          height: 240px;
          background: #f5f5f5;
        }
        .product-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .icon-left,.icon-right {
          position: absolute;
          top: 12px;
          width: 34px;
          height: 34px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          cursor: pointer;
          z-index: 5;
        }
        .icon-left { left: 12px; }
        .icon-right { right: 12px; }
        .product-info {
          padding: 14px;
          text-align: center;
        }
      `}</style>

      <div className="products-grid">
        {products.map((p) => (
          <ProductCard
            key={p._id}
            product={p}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
      </div>
    </>
  );
};

export default Products;