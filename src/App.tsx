// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// React + TypeScript + MUI のサンプルコード
import React from "react";
import Button from "@mui/material/Button";

const App: React.FC = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
};

export default App;
