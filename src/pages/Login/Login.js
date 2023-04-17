import React from 'react'
import './Login.css'


export default function Login() {
    
  return (
        <div className='wrap'>
            <div className='container'>
                <div className='inner'>
                    <h1 className='logo'>Westagram</h1>
                    <div className='inputBox'>
 
                    <form className='form'>
                        <input id= 'inputId'
                        className='inputId2'
                        type='text'
                        placeholder='전화번호, 사용자 이름 또는 이메일'
                        />

                        <input id= 'passWord'
                        className='inputId2'
                        type='password'
                        placeholder='비밀번호'
                        />
                        <button id= 'loginButton'
                        className = 'buttonBox'
                        type='button'
                        disabled='disabled'>
                            <span>로그인</span>
                        </button>
                    </form>
                  </div>
                <div className='passWordForgot'>
                    <p>
                        <a href='/' className='forgotPassword'>
                            비밀번호를 잊으셨나요?
                        </a>
                    </p>
                </div>

                </div>
            </div>



















        </div>
  )
}
