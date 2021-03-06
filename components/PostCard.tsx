import React, { Component } from "react";
import moment from "moment";
import Link from "next/link";
import { Post } from "../services/generated/graphql";

interface PostProp {
  post: Post;
}

export const PostCard: React.FC<PostProp> = ({ post }: PostProp) => {
  console.log(post);
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="h-50 absolute w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
        />
      </div>
      <h1 className="mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-700 hover:text-pink-600">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
    </div>
  );
};

export default PostCard;
