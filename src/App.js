import logo from './logo.svg';
import './App.css';
import { Layout} from "antd";

const { Header, Sider,Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <h1>
            Weather application
          </h1>
        </Header>
        <Sider >
          <h1 style={{background : 'red'}}>
            Menu
          </h1>
          <h2>
            Find
          </h2>
        </Sider>
        <Content>
          content
        </Content>
      </Layout>
    </div>
  );
}

export default App;
