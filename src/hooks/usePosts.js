import { useMemo } from "react";

export const useSortedPost = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
      // localeCompare - сортировка строк
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPost(posts, sort);

  const sortedAndSearchingPosts = useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) |
        post.title.includes(query) |
        post.body.toLowerCase().includes(query) |
        post.body.includes(query)
        // логика поиска постов
    );
  }, [query, sortedPosts]);

  return sortedAndSearchingPosts;
};
