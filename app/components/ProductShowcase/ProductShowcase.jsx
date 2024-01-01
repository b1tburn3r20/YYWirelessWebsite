import React, { useRef, useEffect } from "react";
import latestProducts from "../../constants/home/latestProducts";
import "./ProductShowcase.css";

const ProductShowcase = () => {
  const showcaseRef = useRef(null);
  const scrollSpeed = 1; // Adjust the speed as needed

  useEffect(() => {
    // Create an extended list by duplicating the products
    let extendedProducts = [...latestProducts, ...latestProducts];
    let intervalId;

    const manageScroll = () => {
      if (showcaseRef.current) {
        // Append new items when nearing the end
        if (
          showcaseRef.current.scrollLeft >
          showcaseRef.current.scrollWidth -
            showcaseRef.current.clientWidth -
            500
        ) {
          extendedProducts = [...extendedProducts, ...latestProducts];
          renderProducts(extendedProducts);
        }

        showcaseRef.current.scrollLeft += scrollSpeed;
      }
    };

    const renderProducts = (products) => {
      const container = showcaseRef.current;
      container.innerHTML = ""; // Clear existing content
      products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product-item";
        productDiv.innerHTML = `<img class="product-image" src=${product.imageUrl} alt='${product.name}' /><h3 class="product-name">${product.name}</h3><h4 class="product-price">${product.price}</h4>`;
        container.appendChild(productDiv);
      });
    };

    renderProducts(extendedProducts);
    intervalId = setInterval(manageScroll, 20);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className="product-showcase-container" ref={showcaseRef}></div>;
};

export default ProductShowcase;
