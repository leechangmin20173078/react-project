import './App.css';
import {React} from 'react';
import { Layout } from 'antd';
import './App.css';


const {Content} = Layout;


const WriteBoard = () => {
    return (
        <div className="App">
            <Content>
            <div className='movie-container'>
                <h1>제목과 내용을 입력해주세요.</h1>
            </div>
            <div className='form-wrapper'>
                <input className="title-input" type='text' placeholder='제목' />
                <textarea className="text-area" placeholder='내용'></textarea>
            </div>
                 <button className="submit-button">입력</button>
            </Content>
        </div>
    )
};


export default WriteBoard;