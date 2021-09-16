import React from "react";
import { useHistory } from "react-router";
import { AppButton } from "./ui/button/AppButton";

export const PostItem = ({ post, id, remove }) => {
  const router = useHistory();
  // useHistory - даёт пользоваться маршрутизатором через js код *p.s. чекни console.log(router)

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>

      <div className="post__btns">
        <AppButton onClick={() => router.push(`/posts/${post.id}`)}>
          Открыть
        </AppButton>
        <AppButton onClick={() => remove(post)}>Удалить</AppButton>
      </div>
    </div>
  );
};
