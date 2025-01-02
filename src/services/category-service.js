import axios from "axios";

const API_URL =
  "https://api-store-ecoclo-hgbqevexadb0eefs.eastasia-01.azurewebsites.net";

// Lấy token từ localStorage (hoặc sessionStorage tùy vào cách bạn lưu trữ)
const getAuthToken =
  "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ0cnVvbmdob2FpYW5oMDEwOUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImM4NzgxY2FkLWEwMWQtNDE5Mi04NDhmLTc4MjA4NTNhOTcwZiIsImp0aSI6IjNhMGJiMzQ2LTU0MTgtNDg0OS04YzJiLWZmOTQ1MjM0MWFmMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluaXN0cmF0b3IiLCJleHAiOjE3MzU4MDY3MzEsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNDkiLCJhdWQiOiJVc2VyIn0.nC-2v_TizFjGks8kZk2YURmmPOG3hR3RlktJ9cc46I_CwFAHj8RDLNe-d68RXp3tTts5eTL9VEtxLTUsLQAB1A";

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/Category`, {
      headers: {
        Authorization: `Bearer ${getAuthToken}`, // Thêm token vào header
      },
    });
    return response.data.$values; // Return the categories data
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Rethrow the error to handle it later
  }
};

// Create category
export const createCategory = async (categoryData) => {
  try {
    const response = await axios.post(`${API_URL}/api/Category`, categoryData, {
      headers: {
        Authorization: `Bearer ${getAuthToken}`, // Thêm token vào header
      },
    });
    return response.data; // Return the created category data
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};

// Update category
export const updateCategory = async (categoryData) => {
  try {
    const response = await axios.put(
      `${API_URL}/api/Category/${categoryData.idCate}`,
      { nameCate: categoryData.nameCate },
      {
        headers: {
          Authorization: `Bearer ${getAuthToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
};

// Delete category
export const deleteCategory = async (categoryId) => {
  try {
    await axios.delete(`${API_URL}/api/Category/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${getAuthToken}`, // Thêm token vào header
      },
    });
    return categoryId; // Return the id of the deleted category
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
};
