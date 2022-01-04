import React, { createContext, useState } from 'react';
import './App.css';
import Dummy from './Dummy';
import Myreact11 from './Myreact11';
import Task from './Task';
import TodoList from './TodoList';
import '../node_modules/jquery'
import CompA from './Context-API/CompA';
import Pagination from './pagination/Pagination';
import Page from './pagination/Page';
const context = createContext();

function App() {
  // const Data = [
  //   {
  //     name: "javed",
  //     Profile: "Software Developer",
  //     ctc: "10 Lakh",
  //     hobby: "programming"
  //   },
  //   {
  //     name: "sahil",
  //     Profile: "Software Developer",
  //     ctc: "10 Lakh",
  //     hobby: "programming"
  //   },
  //   {
  //     name: "sagar",
  //     Profile: "Software Developer",
  //     ctc: "10 Lakh",
  //     hobby: "programming"
  //   }


  // ]
  // const [myState, setMyState] = useState(Data);

  return (
    <>
      {/* {/* <Task/> */}
       {/* <Dummy/> */}
      {/* <TodoList /> */}
      {/* <context.Provider value={myState}> */}
        {/* <CompA /> */}
      {/* </context.Provider> */}
  {/* <Pagination/> */}
  <Page/>
    </>
  );
}
export default App;
export { context };
