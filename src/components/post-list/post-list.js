import React from "react";
import PostListItem from "../post-list-item/post-list-item";

const PostList = ({ data, onDelete, onImportant, onLike }) => {
  const posts = data.map((el) => {
    const { ...iteamProps } = el;
    const { id } = el;
    //console.log(`...iteamProps---${important}`);
    return (
      <div key={id} className="list-group-item">
        <PostListItem
          {...iteamProps}
          onDelete={() => onDelete(id)}
          onImportant={() => onImportant(id)}
          onLike={() => onLike(id)}
          // onDelete={() => {
          //   console.log("delete");
          // }}
        />
      </div>
    );
  });
  return <ul className="app-list list-group">{posts}</ul>;
};

export default PostList;
