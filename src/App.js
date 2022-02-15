import React, { useState } from 'react';
import './App.css';
import './HiddenMessage'
import HiddenMessage from './HiddenMessage';

function App() {
  const [content, setContent] = useState('Hello World!');
  const [testMessage, setMessage] = useState("test message");
  return (
    <div
      className="app"
      // 方便测试用例中获取 DOM 节点
      data-testid="container"
      onClick={() => {

        if (content === 'Hello World!') {
          setContent('Hello Jack!');
          setMessage('test clicked');
        }
        else {
          setContent('Hello World!')
          setMessage('test message')
        }

      }}
    >
      <br></br>
      <div>
        <HiddenMessage className="hidden" data-testid="hidden_message">{testMessage}</HiddenMessage>
      </div>
      {content}
    </div >
  );
}
export default App;
