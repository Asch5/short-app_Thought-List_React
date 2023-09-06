import React from "react";

const AppHeader = ({ numberOfPosts, numberOfLike }) => {
  return (
    <div className="app-header d-flex">
      <h1 className="app-header__el__h1">Anton Shashlov</h1>
      <h2 className="app-header__el__h2">
        {numberOfPosts} записей, из них понравилось {numberOfLike}
      </h2>
    </div>
  );
};

export default AppHeader;
