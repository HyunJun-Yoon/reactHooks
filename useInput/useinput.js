// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

// const App = () => {
//   const maxLen = (value) => value.length <= 10;
//   const name = useInput("Mr.", maxLen);
//   return (
//     <div className="App">
//       <h2>Hello</h2>
//       <input placeholder="Name" {...name} />
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
