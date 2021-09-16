import React, { useState } from "react";
import { PostItem } from "./PostItem";

export const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          id={index}
          key={index}
          post={{
            id: post.id,
            title: post.title,
            body: post.body,
          }}
          remove={remove}
        />
      ))}
    </div>
  );
};
