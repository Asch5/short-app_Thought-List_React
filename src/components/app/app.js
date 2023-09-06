import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
//import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import "./app.css";
import "../app-header/app-header.css";
import "../post-add-form/post-add-form.css";
import "../post-list/post-list.css";
import "../post-list-item/post-list-item.css";
import "../post-status-filter/post-status-filter.css";
import "../search-panel/search-panel.css";
//import { render } from "node-sass";

const CssDivAppWrap = styled.div`
  display: flex;
  .app {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    min-width: 600px;
    color: ${(props) => (props.colored ? "black" : "blue")};
    .search-panel {
      display: flex;
      margin: 1rem 0;
    }
  }
`;

// const CssApp = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;
//   min-width: 600px;
// `;

//console.log(`app ${data}`);
// let data = [
//   { label: "Going to Learn react1", important: true, id: 1 },
//   { label: "Going to Learn react2", important: false, id: 2 },
//   { label: "Going to Learn react3", important: true, id: 3 },
// ];

export default class App extends React.Component {
  state = {
    data: [
      { label: "Going to Learn react1", important: false, like: false, id: 1 },
      { label: "Going to Learn react2", important: false, like: false, id: 2 },
      { label: "Going to Learn react3", important: false, like: false, id: 3 },
    ],
    textSearch: "",
    conditionButLike: false,
  };
  maxId = 4;

  // //update information about number of posts
  // numberOfPosts = () => {
  //   this.setState(({ data }) => {
  //     const number = data.length;
  //     return {
  //       numberOfPosts: number,
  //     };
  //   });
  //   console.log("numberOfPosts");
  // };

  // //update information about number of like
  // numberOfLike = () => {
  //   this.setState(({ data }) => {
  //     const number = data.filter((el) => el.important).length;
  //     return {
  //       numberOfLike: number,
  //     };
  //   });
  //   console.log("numberOfLike");
  // };
  ////////////Change important////////////////
  onImportant = (id) => {
    this.setState(({ data }) => {
      const newArr = [];
      data.forEach((el) => {
        if (el.id === id) {
          newArr.push({ ...el, important: !el.important });
        } else {
          newArr.push(el);
        }
      });
      return {
        data: newArr,
      };
    });
  };

  ////////////Change important////////////////
  // onLike = (id) => {
  //   this.setState(({ data }) => {
  //     const newArr = [];
  //     data.forEach((el) => {
  //       if (el.id === id) {
  //         newArr.push({ ...el, like: !el.like });
  //       } else {
  //         newArr.push(el);
  //       }
  //     });
  //     return {
  //       data: newArr,
  //     };
  //   });
  //   this.numberOfLike();
  //   this.numberOfPosts();
  // };

  ////////////Change important #2 ////////////////
  onLike = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id === id);
      const old = data[index];
      const newItem = { ...old, like: !old.like };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      console.log(newArr);
      return {
        data: newArr,
      };
    });
  };

  ///////////////Deleting a post///////////
  // onDelete = (i) => {
  //   this.setState(({ data }) => ({
  //     data: data.filter((el) => el.id !== i),
  //   }));
  // };
  onDelete = (i) => {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id === i);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];
      return {
        data: newArr,
      };
    });
  };

  //adding a post
  // onAdd = (e) => {
  //   e.preventDefault();
  //   const value = e.target.previousElementSibling.value;
  //   const newPost = {
  //     label: `${value}`,
  //     important: false,
  //     id: this.maxId++,
  //   };
  //   this.setState(({ data }) => {
  //     const newArr = [...data, newPost];
  //     return {
  //       data: newArr,
  //     };
  //   });
  //   e.target.parentElement.reset();
  // };

  //adding a post #2 ////////////////
  onAdd = (text) => {
    //e.preventDefault();
    const newPost = {
      label: `${text}`,
      important: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newPost];
      return {
        data: newArr,
      };
    });
  };

  getButtomSearchLike = (like) => {
    this.setState({ conditionButLike: like });
  };
  onTextSearch = (e) => {
    this.setState({ textSearch: e.target.value });
  };

  doSearch = (data, textSearch) => {
    if (!textSearch) {
      return data;
    } else {
      return data.filter((el) => {
        return el.label.indexOf(textSearch) > -1;
      });
    }
  };

  onButtomSearch(like, arr) {
    if (like) {
      return arr.filter((el) => {
        return el.like;
      });
    } else {
      return arr;
    }
  }

  render() {
    const { data, textSearch, conditionButLike } = this.state;
    const numberOfPosts = data.length;
    const numberOfLike = data.filter((el) => el.like).length;

    //const visiblePosts = this.doSearch(data, textSearch);

    const visiblePosts = this.onButtomSearch(
      conditionButLike,
      this.doSearch(data, textSearch)
    );
    // console.log(`conditionButAll----- ${conditionButAll}`);
    // console.log(`conditionButLike ----- ${conditionButLike}`);
    // console.log(`visiblePosts ----- ${visiblePosts}`);
    // console.log(`filter ----- ${filter}`);
    console.log(this.state);
    return (
      <CssDivAppWrap colored>
        <div className="app">
          <AppHeader
            numberOfPosts={numberOfPosts}
            numberOfLike={numberOfLike}
          />
          <div className="search-panel">
            <SearchPanel onTextSearch={this.onTextSearch} />
            <PostStatusFilter getButtomSearchLike={this.getButtomSearchLike} />
          </div>
          <PostList
            data={visiblePosts}
            onDelete={this.onDelete}
            onImportant={this.onImportant}
            onLike={this.onLike}
          />
          <PostAddForm onAdd={this.onAdd} />
        </div>
      </CssDivAppWrap>
    );
  }
}

//export { data };
