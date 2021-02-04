import './App.css';
import {React, useState} from 'react';
import { Layout } from 'antd';
import './App.css';


const {Content} = Layout;

function WriteBoard() {
    const [inputs,setInputs] =useState({
        title: '',
        content: ''
    });

    const { title, content } = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
      const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
      setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        [name]: value // name 키를 가진 값을 value 로 설정
      });
    };
    const getValue = e => {
        const { name, value } = e.target;
        console.log(name, value);
    };

    return(
        <div className="App">
            <Content>
            <div className='movie-container'>
                <h1>제목과 내용을 입력해주세요.</h1>
            </div>
            <div className='form-wrapper'>
                <input className="title-input" type='text' placeholder='제목' onChange={getValue} name='title'/>
                <textarea className="text-area" placeholder='내용'></textarea>
            </div>
                 <button className="submit-button">입력</button>
            </Content>
        </div>
    );
}

export default WriteBoard;