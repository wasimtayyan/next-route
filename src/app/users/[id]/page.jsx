"use client";
import React, { useState, useEffect } from "react";
import getUserPosts from "@/lib/getUserPost";


function Page({ params }) {

  const [posts, setPost] = useState([]);
  
  useEffect(() => {
    console.log(params)
    getUserPosts(params.id).then((res) => setPost(res));
  }, []);


  const post = posts?.map((post) => {
    return(
        <div key={post.id}
        className="container mx-auto max-w-screen-lg px-4">
          <p className="pt-2">`(${post.id})`</p>
          <h1 className="font-bold py-2">{post.title}:</h1>
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
