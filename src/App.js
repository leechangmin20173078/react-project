import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import Board from './Board';
import Foot from './Foot';
import Home from './Home';
import {Route,Link} from 'react-router-dom';
import WriteBoard from './WriteBoard';
import axios from 'axios';

const { Header, Footer, Sider,Content} = Layout;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      host : '',
    }
  }

  componentDidMount() {
    this._getHost();
  }

  _getHost = async() => {
    const res = await axios.get('/api/host');
    this.setState({ host : res.data.host })
  }

  componentDidMount() {
    this._dbTest();
  }
  
  _dbTest = async() => {
    const res = await axios.get('/api/test');
    console.log(res.data)
  }

  render() {
return (
 

  <div className="App">
    <Layout>
      <Header>
        <h1>
          Chang's Blog
          <h3> Welcome to <u> {this.state.host} </u> Blog! </h3>
        </h1>
      </Header>
      <Sider>
        <h1 style={{background:'red'}}>
        Menu
        </h1>
        <h2>
          <ul>
            <li>
            <Link to="/">
              Home
             </Link> 
            </li>
            <li>
            <Link to="./Board">
              Board
            </Link> 
            </li>
          </ul>
         
        </h2>
      </Sider>
      <Content>
       <Route path="/" component={Home} exact={true}/>
      </Content>
      <Footer className="footer" style={{ textAlign: 'center' }} exact={true}>      
         <Route path="/" component={Foot} exact={true}/>   
      </Footer>
      
    </Layout>
    <Route path="/WriteBoard" component={WriteBoard} />
    <Route path="/Board" component={Board} />
  </div>

);
  }
}

export default App;