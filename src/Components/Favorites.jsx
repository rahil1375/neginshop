// src/components/favorites.jsx
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/api/favorites", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setFavorites(data));
  }, []);
if(favorites.length===0){
  return(
    <div className="" style={{padding:"80px",textAlign:"center",marginTop:"120px"}}>
      <h2>علاقه مندی ای نداری 💔</h2>
      <p>محصولاتی که دوست داری اینجا نمایش داده میشن</p>
    </div>
  );
}
  return (
    <div className="products-grid">
      {favorites.map(f => (
        <ProductCard
          key={f._id}
          product={f.product}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      ))}
    </div>
  );
};

export default Favorites;