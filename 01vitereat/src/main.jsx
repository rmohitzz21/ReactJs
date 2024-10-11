import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// function MyApp() {
//   return (
//     <>
     
//       <h1>Hello World ! |  Custom App</h1>
//     </>
//   )
// }


const anotherElement = (
  <a href="https://google.com" target='_blank'>
    Visit Google Here
  </a>
)

const user = "User1"

  const reactElement = React.createElement(
    'a',
    {href : 'https://google.com',target:'_blank'},
    'click me To visit Google',
    user
  )


ReactDOM.createRoot(document.getElementById("root")).render(

  reactElement

 )
