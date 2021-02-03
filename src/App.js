import {React} from 'react';
import './App.css';
import { Layout } from 'antd';
import Board from './Board';
import Foot from './Foot';
import Home from './Home';
import {Route,Link} from 'react-router-dom';
import WriteBoard from './WriteBoard';

const { Header, Footer, Sider,Content} = Layout;

function App() {

return (

  <div className="App">
    <Layout>
      <Header>
        <h1>
          Chang's Blog
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

export default App;