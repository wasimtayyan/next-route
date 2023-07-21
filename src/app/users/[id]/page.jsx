"use client";
import React, { useState, useEffect } from "react";
import getUserPosts from "@/lib/getUserPost";
function Page({ params }) {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    getUserPosts(params.id).then((res) => setPost(res));
  }, []);

  console.log(posts)
  const post = posts?.map((post) => {
    return(
        <div key={post.id}>
          <p>{post.id}</p>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>)
      })
  return (
  <div>
    {post}
  </div>
  );
}

export default Page;
