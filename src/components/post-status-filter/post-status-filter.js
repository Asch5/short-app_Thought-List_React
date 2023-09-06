import React from "react";
import styled from "styled-components";

const CssDivPostStatusFilter = styled.div`
  display: flex;
  height: 25px;
  width: 30%;
  .btn-grou__btn1 {
    width: 30%;
    color: ${(props) => (props.coloredall ? "white" : "")};
    background-color: ${(props) => (props.coloredall ? "blue" : "")};
  }
  .btn-grou__btn2 {
    flex-grow: 1;
    color: ${(props) => (props.coloredall ? "" : "white")};
    background-color: ${(props) => (props.coloredlike ? "blue" : "")};
  }
`;

export default class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conditionButAll: true,
      conditionButLike: false,
    };
    this.onAllPosts = this.onAllPosts.bind(this);
    this.onLikePosts = this.onLikePosts.bind(this);
  }
  onAllPosts() {
    this.setState({
      conditionButAll: !this.state.conditionButAll,
    });
    this.setState({
      conditionButLike: this.state.conditionButAll,
    });
    this.props.getButtomSearchLike(!this.state.conditionButLike);
  }

  onLikePosts() {
    this.setState({
      conditionButLike: !this.state.conditionButLike,
    });
    this.setState({
      conditionButAll: this.state.conditionButLike,
    });
    this.props.getButtomSearchLike(!this.state.conditionButLike);
  }

  render() {
    const { conditionButAll, conditionButLike } = this.state;

    return (
      <CssDivPostStatusFilter
        coloredall={conditionButAll}
        coloredlike={conditionButLike}
      >
        <button onClick={this.onAllPosts} className="btn-grou__btn1">
          Все
        </button>
        <button onClick={this.onLikePosts} className="btn-grou__btn2">
          Понравилось
        </button>
      </CssDivPostStatusFilter>
    );
  }
}
