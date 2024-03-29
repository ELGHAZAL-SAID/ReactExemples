import React, { useEffect } from 'react';

const Products = () => {
    const startTime = performance.now();

    const products = Array.from({ length: 100000 }, (_, index) => ({
      name: `Product ${index + 1}`,
      price: Math.floor(Math.random() * 100) + 1,
      description: `This is the description for Product ${index + 1}`,
    }));

    const endTime = performance.now();
    const timeTaken = endTime - startTime;

    console.log(`Time taken to generate 100,000 products: ${timeTaken} milliseconds`);

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <div className="product-item" key={index}>
                    <h3 className="product-name">ProductName: {product.name}</h3>
                    <p className="product-price">Price: ${product.price}</p>
                    <p className="product-description">Description: {product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Products;
