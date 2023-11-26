// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  // 회원가입 폼의 상태를 관리하는 state
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  // 회원가입 성공 여부를 관리하는 state
  const [isRegistered, setIsRegistered] = useState(false);

  // input 값이 변경될 때 실행되는 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    // 현재의 state를 복사하고 변경된 값을 적용하여 새로운 state를 설정
    setFormData({ ...formData, [name]: value });
  };

  // 폼 제출 시 실행되는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // 회원가입 성공 시 setIsRegistered(true)를 호출
    setIsRegistered(true);
  };

  // 화면을 렌더링하는 부분
  return (
    <div className="App">
      {/* 6. 회원가입이 성공한 경우 */}
      {isRegistered ? (
        <div>
          {/* 7. 성공 메시지 출력 */}
          <h2>{formData.username}님 회원가입에 성공하셨습니다.</h2>
        </div>
      ) : (
        // {/* 8. 여기에서 다른 화면을 보여줄 수 있음. */}
        // {/* react fragment : 렌더링되지 않으며, 불필요한 DOM 레이아웃을 추가하지 않고 여러 요소를 그룹화  */}
        <> 

          <h2>회원가입 폼</h2>
          {/* 10. 폼 제출 시 handleSubmit 함수 실행 */}
          <form onSubmit={handleSubmit}>
            <label>
              사용자명:
              <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </label>
            <br />
            <label>
              비밀번호:
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <br />
            <label>
              이메일:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">가입하기</button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;