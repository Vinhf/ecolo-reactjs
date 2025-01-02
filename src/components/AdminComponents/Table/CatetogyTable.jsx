// src/components/CategoryTable.js
import React, { useEffect, useState } from "react";
import "../../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../../assets/vendor/boxicons/css/boxicons.min.css";
import "../../../assets/vendor/quill/quill.snow.css";
import "../../../assets/vendor/quill/quill.bubble.css";
import "../../../assets/vendor/remixicon/remixicon.css";
import "../../../assets/vendor/simple-datatables/style.css";
import "../../../assets/css/style.css";
import {
  fetchCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../../services/category-service";

export default function CategoryTable() {
  const [categories, setCategories] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleShowModal = (category = null) => {
    setSelectedCategory(category);
    setCategoryName(category ? category.nameCate : "");
    setModalVisible(true); // Show modal
  };

  // Handle close modal
  const handleCloseModal = () => {
    setModalVisible(false); // Hide modal
    setSelectedCategory(null); // Reset selected category
    setCategoryName(""); // Clear input
  };

  // Handle save category (create or update)
  const handleSaveCategory = () => {
    if (!categoryName.trim()) {
      console.error("Category name is required");
      return;
    }

    const categoryData = selectedCategory
      ? {
          idCate: selectedCategory.idCate,
          nameCate: categoryName,
        }
      : {
          nameCate: categoryName,
        };

    const action = selectedCategory ? updateCategory : createCategory;

    action(categoryData)
      .then(() => {
        fetchCategories().then((data) => setCategories(data));
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error saving category:", error);
      });
  };

  // Handle delete category
  const handleDeleteCategory = (categoryId) => {
    deleteCategory(categoryId)
      .then(() => {
        fetchCategories().then((data) => setCategories(data));
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error deleting category:", error);
      });
  };

  return (
    <>
      <div>
        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Dữ liệu danh mục sản phẩm</h1>
          </div>

          <div className="section">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <button
                      className="btn btn-primary my-4"
                      onClick={() => handleShowModal()}
                    >
                      Thêm danh mục bán hàng
                    </button>

                    <table
                      className="table table-striped datatable"
                      id="categoryTable"
                    >
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Tên danh mục</th>
                          <th>Trạng thái</th>
                          <th>Hành động</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map((category) => (
                          <tr key={category.$id}>
                            <td>{category.idCate}</td>
                            <td>{category.nameCate}</td>
                            <td>
                              {category.statusCate === 0
                                ? "Inactive"
                                : "Active"}
                            </td>
                            <td>
                              <button
                                className="btn btn-warning"
                                onClick={() => handleShowModal(category)}
                              >
                                Sửa
                              </button>
                              <button
                                className="btn btn-danger mx-3"
                                onClick={() =>
                                  handleDeleteCategory(category.idCate)
                                }
                              >
                                Xoá
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal for Category */}
          {modalVisible && (
            <div
              className="modal fade show"
              style={{ display: "block" }}
              aria-modal="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="categoryModalLabel">
                      {selectedCategory
                        ? "Chỉnh sửa danh mục"
                        : "Thêm danh mục"}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={handleCloseModal}
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form id="categoryForm">
                      <div className="mb-3">
                        <label htmlFor="categoryName" className="form-label">
                          Tên danh mục
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="categoryName"
                          value={categoryName}
                          onChange={(e) => setCategoryName(e.target.value)} // Update state on input change
                          required
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSaveCategory}
                      >
                        Lưu
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
