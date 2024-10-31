import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import styles from '../../css/login.module.css';

const Login = ({onLogin}) => {
    const [id,setId] = useState('');
    const [pwd,setPwd] = useState('');

    const [idDiv, setIdDiv] = useState('');
    const [PwdDiv, setPwdDiv] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const navigate = useNavigate();
    
    const onLoginSubmit = (e) => {
        e.preventDefault();

        setIdDiv('');
        setPwdDiv('');
        setAlertMessage('');

        if(!id) {setIdDiv('아이디를 입력해주세요');
        }else if(!pwd){ setPwdDiv('비밀번호를 입력해주세요');
        }else{
            axios.get(`http://localhost:8080/spring/member/login?id=${id}&pwd=${pwd}`)
                .then(res => {
                    if (res.data === "fail") {
                        setAlertMessage('아이디 또는 비밀번호가 올바르지 않습니다.'); // 로그인 실패 시 경고 메시지 설정
                    } else {
                        alert("로그인 성공!!");
                        sessionStorage.setItem('id', JSON.stringify(id));
                        onLogin();
                        navigate('/');
                    }
                })
                .catch(error => {
                    console.error('Error during login:', error);
                    setAlertMessage('로그인 중 오류가 발생했습니다.'); // 오류 발생 시 경고 메시지 설정
                });
        }
    }

    return (
        <div className={styles.formcontainer}>
            <br/>
            <div>
                <h3>LOGIN</h3>
                <form>
                    <div className={styles.formgroup}>
                        <label htmlFor="id">아이디</label>
                        <input type="text" name='id' id="id" onChange={e => setId(e.target.value)} />
                        <div id={styles.idDiv}>{idDiv}</div>
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor="pwd">비밀번호</label>
                        <input type="password" name='pwd' id="pwd" onChange={e => setPwd(e.target.value)} />
                        <div id={styles.pwdDiv}>{PwdDiv}</div>
                    </div>
                    <button onClick={ onLoginSubmit }>로그인</button>
                    {alertMessage && <div className={styles.alertDiv}>{alertMessage}</div>}
                </form>
            </div>
        </div>
    );
};

export default Login;