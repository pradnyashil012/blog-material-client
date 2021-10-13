import axios from "axios";

const url = "http://localhost:8000";

export const createPost = async (post) => {
  try {
    return await axios.post(`${url}/create`, post);
  } catch (error) {
    console.log("Error while calling createPost API", error);
  }
};

export const getAllPosts = async (param) => {
  try {
    let response = await axios.get(`${url}/posts${param}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getAllPosts API", error);
  }
};

export const getPost = async (id) => {
  try {
    let response = await axios.get(`${url}/post/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getPost API", error);
  }
};

export const updatePost = async (id, post) => {
  try {
    let response = await axios.post(`${url}/update/${id}`, post);
    return response;
  } catch (error) {
    console.log("Error while calling updatePost API", error);
  }
};

export const deletePost = async (id) => {
  try {
    let response = await axios.delete(`${url}/delete/${id}`);
    return response;
  } catch (error) {
    console.log("Error while calling deletePost API", error);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/file/upload`, data);
  } catch (error) {
    console.log("Error while calling uploadFile API", error);
  }
}

export const newComment = async (comment) => {
  try {
    return await axios.post(`${url}/comment/new/`, comment);
  } catch (error) {
    console.log("Error while calling newComment API", error);
  }
}

export const getComments = async (id) => {
  try {
    let response = await axios.get(`${url}/comments/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getComments API", error);
  }
}

export const deleteComment = async (id) => {
  try {
    let response = await axios.delete(`${url}/comment/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling deleteComment API", error);
  }
}
