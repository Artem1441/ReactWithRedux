import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const responce1 = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((response) => response.json());
    // .then((json) => console.log(json)); - через fetch

    const responce2 = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );
    // .then((res) => console.log(res.data)); - через axios

    return responce2;
  }

  static async getById(id) {
    const responce = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    return responce;
  }

  static async getCommentByPostId(id) {
    const responce = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    return responce;
  }
}
