import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PostService from "./../API/PostService";
import { useFetching } from "./../hooks/useFetching";
import { Loader } from "./../components/ui/loader/Loader";

export const PostIdPage = () => {
  const params = useParams();
  //   useParams - помогает работать с url запросом
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState("");
  const [fetchPostById, isLoading, postError] = useFetching(async (id) => {
    const responce = await PostService.getById(id);
    setPost(responce.data);
  });
  const [fetchComment, isComLoading, postComError] = useFetching(async (id) => {
    const responce = await PostService.getCommentByPostId(id);
    setComments(responce.data);
    console.log(responce.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComment(params.id);
  }, []);

  return (
    <div>
      <h1>Вы попали на страницу поста c id={params.id}</h1>
      {isLoading ? <Loader /> : <div>{post.title}</div>}
      <h1>Комментарии поста c id={params.id}</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        comments && (
          <div>
            {comments.map((comm) => (
              <div style={{ marginTop: 15 }}>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};
