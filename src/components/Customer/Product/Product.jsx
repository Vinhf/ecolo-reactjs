import React, { useState, useEffect } from "react";
import "./product.css";
const Product = () => {
  const products = {
    ao: [
      {
        id: 1,
        name: "Cá nhà táng",
        price: "465,000đ",
        image:
          "https://aodaitailoc.com/wp-content/uploads/2023/08/Ao-dai-lua-ngoc-trai-theu-chim-cong.png",
      },
      {
        id: 2,
        name: "cá đuối",
        price: "465,000đ",
        image:
          "https://aodaitailoc.com/wp-content/uploads/2023/08/Ao-dai-lua-ngoc-trai-theu-chim-cong.png",
      },
      {
        id: 9,
        name: "Con rùa",
        price: "45,000đ",
        image:
          "https://aodaitailoc.com/wp-content/uploads/2023/08/Ao-dai-lua-ngoc-trai-theu-chim-cong.png",
      },
      {
        id: 4,
        name: "Bò biển",
        price: "30,000đ",
        image:
          "https://aodaitailoc.com/wp-content/uploads/2023/08/Ao-dai-lua-ngoc-trai-theu-chim-cong.png",
      },
    ],
    daydeo: [
      {
        id: 9,
        name: "Dây đeo thẻ",
        price: "45,000đ",
        image:
          "https://aodaitailoc.com/wp-content/uploads/2023/08/Ao-dai-lua-ngoc-trai-theu-chim-cong.png",
      },
      {
        id: 4,
        name: "Bò biển",
        price: "30,000đ",
        image:
          "https://aodaitailoc.com/wp-content/uploads/2023/08/Ao-dai-lua-ngoc-trai-theu-chim-cong.png",
      },
    ],
  };

  const [selectedCategory] = useState("ao");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products[selectedCategory] || []);
  }, [selectedCategory]);

  const goToProductDetail = (productId) => {
    window.location.href = `shop-product-fashion.html?id=${productId}`;
  };

  return (
      <div className="container">
        <div className="row">
          <section className="">
            <div className="row">
              {productList.length > 0 ? (
                productList.map((product) => (
                  <div key={product.id} className="col-md-3">
                    <div className="d-flex justify-content-center">
                      <div className="text-design font-monospace">
                        {product.name}
                      </div>
                    </div>
                    <div
                      className="card"
                      onClick={() => goToProductDetail(product.id)}
                    >
                      <img
                        src={product.image}
                        className="card-img"
                        alt={product.name}
                      />
                      <div class="card-img"></div>
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
