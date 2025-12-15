// src/components/productdetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>در حال بارگذاری...</p>;

  return (
    <div style={{ padding: "60px", display: "flex", gap: "40px" }}>
      <img
        src={`http://localhost:5000${product.image}`}
        alt={product.title}
        style={{ width: "350px", borderRadius: "16px" }}
      />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>{product.price.toLocaleString()} تومان</h3>
      </div>
    </div>
  );
};

export default ProductDetails;