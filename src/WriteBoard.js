import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import axios from 'axios';

const {Content} = Layout;

class WriteBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title : '',
      content : ''
    }
  }
  _addData = async(e) => {
    const { title,content } = this.state;
    e.preventDefault();
    
    const res = await axios('/add/data', {
      method : 'POST',
      data : { 'title' : title, 'content' : content },
      headers: new Headers()
    })

    if(res.data) {
      alert('데이터를 추가했습니다.');
      return window.location.reload();
    }
  }

  _titleUpdate(e) {
    this.setState({ title : e.target.value })
  }
  _contentUpdate(e) {
    this.setState({ content : e.target.value })
  }
  render() {
return (
    <div className="App">
            <Content>
            <div className='movie-container'>
                <h1>제목과 내용을 입력해주세요.</h1>
            </div>
            <div className='form-wrapper'>
            <form method='POST' onSubmit={this._addData}>
            <input className="title-input" type='text' placeholder='제목' onChange={(e) => this._titleUpdate(e)}/>
                <textarea className="text-area" placeholder='내용' onChange={(e) => this._contentUpdate(e)}></textarea>
                 <input type='submit' value='Add' />
            </form>
                
            </div>
            
            </Content>
        </div>
);
  }
}

export default WriteBoard;