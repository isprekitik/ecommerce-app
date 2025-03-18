import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  // Ensure image exists and has at least one entry before accessing index 0
  const imageUrl = image && image.length > 0 ? image[0] : "default-image.jpg";

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={imageUrl}
          alt={name || "Product Image"}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name || "Unknown Product"}</p>
      <p className="text-sm font-medium">
        {currency} {price !== undefined ? price : "N/A"}
      </p>
    </Link>
  );
};

export default ProductItem;
