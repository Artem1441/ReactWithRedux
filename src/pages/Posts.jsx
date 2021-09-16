import React, { useState, useRef, useMemo, useEffect } from "react";
// import { Counter } from "./components/Counter";
// import { ClassCounter } from "./components/ClassCounter";
import "./../styles/App.css";
import { PostList } from "./../components/PostList";
import { PostForm } from "./../components/PostForm";
import { AppSelect } from "./../components/ui/select/AppSelect";
import { AppInput } from "./../components/ui/input/AppInput";
import { PostFilter } from "./../components/PostFilter";
import { AppModal } from "./../components/ui/modal/AppModal";
import { AppButton } from "./../components/ui/button/AppButton";
import { usePosts } from "./../hooks/usePosts";
import PostService from "./../API/PostService";
import { Loader } from "./../components/ui/loader/Loader";
import { useFetching } from "./../hooks/useFetching";
import { getPageCount } from "./../utils/pages";
import { usePagination } from "./../hooks/usePagination";
import { Pagination } from "./../components/ui/pagination/Pagination";
import { useObserver } from "./../hooks/useObserver";

export const Posts = () => {
  // const bodyInputRef = useRef();
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const responce = await PostService.getAll(limit, page);
    setPosts([...posts, ...responce.data]);
    const totalCount = responce.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });
  const sortedAndSearchingPosts = usePosts(posts, filter.sort, filter.query);
  const pagesArray = usePagination(totalPages);
  const lastElement = useRef();

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (oldPost) => {
    setPosts(posts.filter((post) => post.id !== oldPost.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <AppButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пост
      </AppButton>
      <AppModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </AppModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <AppSelect
        value={limit}
        onChange={(value) => {
          setLimit(value);
        }}
        default="Кол-во элементов на странице"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Показать все" },
          // https://jsonplaceholder.typicode.com/posts?_limit=-1 - все посты
        ]}
      />
      {postError && <h1>Произошла ошибка {postError}</h1>}
      {isPostsLoading && <Loader />}
      <PostList
        posts={sortedAndSearchingPosts}
        title="Список постов"
        remove={removePost}
      />
      <div ref={lastElement} className="lastElement"></div>
      <Pagination
        pagesArray={pagesArray}
        currentPage={page}
        setPage={changePage}
      />
    </div>
  );
};
// Intersection Observer API - для постоянной подгрузки

// useEffect(() => {
//   if (isPostsLoading) return;
//   if (observer.current) observer.current.disconnect();
//   var callback = function (entries, observer) {
//     if (entries[0].isIntersecting && page < totalPages) {
//       // проверка на видимость элемента div.lastElement, который просто невидимка
//       // console.log("DIV в зоне видимости");
//       setPage(page + 1);
//     }
//   };
//   observer.current = new IntersectionObserver(callback);
//   observer.current.observe(lastElement.current);
// }, [isPostsLoading]);
// // для понимания этого useEffect'а смотреть видео Ulbi React - https://www.youtube.com/watch?v=GNrdg3PzpJQ&t=4857s 2.51 минута
