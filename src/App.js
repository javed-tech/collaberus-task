import React, { useState } from 'react';
import About from "./About";
import Functioncontent from './Functioncontent';
import Myreact from "./Myreact";
import Myreact1 from "./Myreact1";
import './App.css';
import Myreact2 from './Myreact2';
import Myreact3 from './Myreact3';
import Myreact4 from './Myreact4';
import Myreact5 from './Myreact5';
import Myreact6 from './Myreact6';
import Myreact7 from './Myreact7';
import Myreact8 from './Myreact8';
import Myreact9 from './Myreact9';
import Myreact10 from './Myreact10';
import Myreact11 from './Myreact11';
import Home from './Home';
import { Link, Route,Switch, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
function App() {
  const [name, setname] = useState("Tiger");
  return (
    <div className="App">
      {/*<h1>Hello World</h1>*/}
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
           <Nav.Link href="#pricing"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/Myreact6" >Data</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="Myreact8">Buttons</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="Myreact9">User</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="Myreact11">Employee</Link></Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/Myreact6">
            <Myreact6 />
          </Route>
          <Route path="/Myreact8">
            <Myreact8 />
          </Route>
          <Route path="/Myreact9">
            <Myreact9 />
            </Route>
            <Route path="/Myreact11">
              <Myreact11 />
            </Route>
            <Route path="/">
              <Home />
          </Route>
        </Switch>
        {/*<About />*/}
        {/*<Functioncontent />*/}
        {/*<Myreact />*/}
        {/*<Myreact1 />*/}
        {/*<Myreact2 />*/}
        {/*<Myreact3 name= {name} />*/}
        {/*<button onClick={()=>{setname("Cat")}}>update props</button>*/}
        {/*<Myreact4 name={name}/>*/}
        {/*<Myreact5 />*/}
        {/*<Myreact6 />
         <Myreact7 />
        <Myreact8 />
        <Myreact9 />
        <Myreact10 />*/}
      </Router>
    </div>
  );
}
export default App;
