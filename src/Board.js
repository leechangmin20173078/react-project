import {React} from 'react';
import { Layout } from 'antd';
import './App.css';
import {Route,Link} from 'react-router-dom';
import WriteBoard from './WriteBoard';

const {Content} = Layout;


const Board = () => {
    return (
        <div className="App">
            <Content>
                <h1>Here's Board</h1>
                <div>
                    <Link to="./WriteBoard">
                        <button>
                            글쓰기
                        </button>
                    </Link>
                </div>
            </Content>
            <Route path="/WriteBoard" component={WriteBoard} />
        </div>
        
    )
};


export default Board;