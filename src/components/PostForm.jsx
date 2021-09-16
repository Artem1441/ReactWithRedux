import React, { useState } from "react";
import { AppButton } from "./ui/button/AppButton";
import { AppInput } from "./ui/input/AppInput";

export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    // отмена перезагрузки страницы по нажатию на кнопку
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <AppInput
        type="text"
        placeholder="Название поста"
        value={post.title}
        onChange={(prev) => setPost({ ...post, title: prev.target.value })}
      />
      {/* <AppInput type="text" placeholder="Описание поста" ref={bodyInputRef} /> */}
      <AppInput
        type="text"
        placeholder="Название поста"
        value={post.body}
        onChange={(prev) => setPost({ ...post, body: prev.target.value })}
      />

      <AppButton onClick={addNewPost}>Создать пост</AppButton>
    </form>
  );
};
