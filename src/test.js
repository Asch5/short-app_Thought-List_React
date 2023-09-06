import React from "react";
//import ReactDOM from "react-dom/client";

// const Elem = () => {
//   return (
//     <div>
//       <h2>Hello World</h2>
//       <input type={"text"} placeholder={"Type here"} />
//       <button></button>
//     </div>
//   );
// };
// let num = 0;
// const f = () => num;
// const set = setInterval(() => {
//   num += 1;
//   console.log(num);
//   f();
// }, 2000);

// console.log(set);

// const Header = () => {
//   return <h2>Hello World</h2>;
// };

// const Input = () => {
//   return <input type={"text"} placeholder={"Type here"} />;
// };

// const Button = () => {
//   const text = "Log in";
//   //const p = <p>Log inn</p>;
//   return <button>{text}</button>;
// };
//const elem = <h2>'Hello World'</h2>;

// function WhoAmI(props) {
//   return (
//     <React.Fragment>
//       <h1>
//         My name is {props.name}, surname - {props.surname}
//       </h1>
//       <a href={props.link}>My profile</a>
//     </React.Fragment>
//   );
// }

// function WhoAmI0({ name, surname, link }) {
//   return (
//     <React.Fragment>
//       <h1>
//         My name is {name}, surname - {surname}
//       </h1>
//       <a href={link}>My profile</a>
//     </React.Fragment>
//   );
// }

///////Var1////////////////////
// class WhoAmI1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26,
//     };
//     this.nextYear = () => {
//       this.setState((state) => ({ years: ++state.years }));
//     };
//   }

//   render() {
//     const { years } = this.state;
//     const { name, surname, link } = this.props;
//     return (
//       <React.Fragment>
//         <button onClick={this.nextYear}></button>
//         <h1>
//           My name is {name}, surname - {surname}, surname - {years}
//         </h1>
//         <a href={link}>My profile</a>
//       </React.Fragment>
//     );
//   }
// }

// ///////Var2   bind ////////////////////
// class WhoAmI2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26,
//     };
//     this.nextYear = this.nextYear.bind(this);
//   }
//   nextYear() {
//     this.setState((state) => ({ years: ++state.years }));
//   }
//   render() {
//     const { years } = this.state;
//     const { name, surname, link } = this.props;
//     return (
//       <React.Fragment>
//         <button onClick={this.nextYear}></button>
//         <h1>
//           My name is {name}, surname - {surname}, surname - {years}
//         </h1>
//         <a href={link}>My profile</a>
//       </React.Fragment>
//     );
//   }
// }

// ///////Var3////////////////////
// class WhoAmI3 extends React.Component {
//   state = {
//     years: 26,
//   };
//   nextYear = () => {
//     this.setState((state) => ({ years: ++state.years }));
//   };
//   render() {
//     const { years } = this.state;
//     const { name, surname, link } = this.props;
//     return (
//       <React.Fragment>
//         <button onClick={this.nextYear}></button>
//         <h1>
//           My name is {name}, surname - {surname}, surname - {years}
//         </h1>
//         <a href={link}>My profile</a>
//       </React.Fragment>
//     );
//   }
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI3 name="John1" surname="Smit" link="google.com" />
//       <WhoAmI3 name="John2" surname="Smit" link="google.com" />
//       <WhoAmI3 name="John3" surname="Smit" link="google.com" />
//     </>
//   );
// };

export { Header, Input, Button, All };

const obj = {
  name: "Anton",
  region: "dansk",
  words: "denmark",
};
const arrObj = Object.entries(obj);

const arr = ['name', 'words'];

arr.forEach(elem => {
  arrObj.filter(el => el[0] !== elem)
})
