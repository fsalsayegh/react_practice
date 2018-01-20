import React, { Component } from 'react';
import List from './Components/List';
import {Button ,Navbar, NavItem,NavDropdown,Nav,MenuItem, Jumbotron} from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
    this.state ={
      projects:[]
    }
  }

  addProject(project)
  {
    let x = this.state.projects
    x.push(project)
    this.setState({projects: x})
  }

  render (){
    return(
  <div className="container">

  <Navbar>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#home">Home</a>
			</Navbar.Brand>
		</Navbar.Header>
		<Nav>
			<NavItem href="#">
				Link
			</NavItem>
			<NavItem href="#">
				Link
			</NavItem>
			<NavDropdown title="Dropdown" id="basic-nav-dropdown">
				<MenuItem>page1</MenuItem>
        <MenuItem>page2</MenuItem>
        <MenuItem>page3</MenuItem>
        <MenuItem>page4</MenuItem>
			</NavDropdown>
		</Nav>
	</Navbar>

    <Jumbotron>
    		<h1>Welcome!</h1>
    		<p>
    			<Button bsStyle="primary">Learn more</Button>
    		</p>
	  </Jumbotron>

      <List />
  </div>


    );
  }
  }
export default App;
