import React from "react";
//import App from "../app/app";
//import { data } from "../post-list/post-list";

export default class PostListItem extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     important: false,
  //   };
  //   this.onImportant = this.onImportant.bind(this);
  // }

  // onImportant() {
  //   this.setState(({ important }) => ({
  //     important: !important,
  //   }));
  // }
  //state = {
  //important: this.props.important,
  //like: false,
  //};

  // changeClassImportant = () => {
  //   //console.log(`00---${this.state.important}`);
  //   this.setState(({ important }) => ({
  //     important: !important,
  //   }));
  // };

  // onLike = () => {
  //   this.setState(({ like }) => ({
  //     like: !like,
  //   }));
  // };

  // removePost = () => {
  //   this.setState(() => ({
  //     hidden: false,
  //   }));
  //   // console.log(data);
  //   // const i = data.filter((el) => el.id !== this.props.id);
  //   // console.log(i);
  // };

  render() {
    const { label, onDelete, onImportant, important, like, onLike } =
      this.props;
    //const { like } = this.state;
    //console.log(`11---${onLike}`);
    let classNames = "app-list-item";

    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }
    return (
      <div className={classNames}>
        <span onClick={onLike} className="app-list-item-label">
          {label}
        </span>
        <div className="app-list-item-button">
          <button
            onClick={onImportant}
            type="button"
            className="btn-star btn-sm"
          >
            <i className="fa icon-star-full"></i>
          </button>
          <button
            onClick={onDelete}
            type="button"
            className="icon-trash btn-sm"
          >
            <i className="fa fa-trash-o"></i>
          </button>
          <i onClick={onLike} className="fa icon-heart"></i>
        </div>
      </div>
    );
  }
}
