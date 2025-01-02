import React, { useState, useEffect } from "react";

const Product = () => {
  const products = {
    ao: [
      {
        id: 1,
        name: "Áo thun con rùa",
        price: "465,000đ",
        image: "../assets/img/shop/fashion/product/01.png",
      },
      {
        id: 2,
        name: "Áo thun cá đuối",
        price: "465,000đ",
        image: "../assets/img/shop/fashion/product/03.png",
      },
    ],
    daydeo: [
      {
        id: 9,
        name: "Dây đeo thẻ",
        price: "45,000đ",
        image: "../assets/img/shop/fashion/product/99.png",
      },
      {
        id: 4,
        name: "Dây đeo chìa khóa",
        price: "30,000đ",
        image: "../assets/img/shop/fashion/product/99.png",
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("ao");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products[selectedCategory] || []);
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const goToProductDetail = (productId) => {
    window.location.href = `shop-product-fashion.html?id=${productId}`;
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Sidebar */}
        <aside className="col-md-3">
          <div className="list-group">
            {Object.keys(products).map((category) => (
              <button
                key={category}
                className={`list-group-item list-group-item-action ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category === "ao"
                  ? "Áo"
                  : category === "daydeo"
                  ? "Dây đeo"
                  : "Khác"}
              </button>
            ))}
          </div>
        </aside>

        {/* Product Listing */}
        <section className="col-md-9">
          <div className="row">
            {productList.length > 0 ? (
              productList.map((product) => (
                <div key={product.id} className="col-md-4 product-item">
                  <div
                    className="card mb-3"
                    onClick={() => goToProductDetail(product.id)}
                  >
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.price}</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => goToProductDetail(product.id)}
                      >
                        Mua
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Không có sản phẩm nào.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
