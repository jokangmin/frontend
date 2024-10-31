import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../../css/login.module.css';

const BoardWrite = () => {
    const navigate = useNavigate();

    const [id,setId] = useState('');
    const [subject,setSubject] = useState('');
    const [content,setContent] = useState('');

    const [subjectDiv,setSubjectDiv] = useState('');
    const [contentDiv,setContentDiv] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(()=>{
        setId(JSON.parse(sessionStorage.getItem('id')))
    },[])

    const onBoardSubmit = (e) => {
        e.preventDefault();

        setSubjectDiv('');
        setContentDiv('');
        setAlertMessage('');

        if(!subject) {setSubjectDiv('제목을 입력해주세요');
        }else if(!content){ setContentDiv('내용을 입력해주세요');
        }else{
            //withCredentials: true 추가 ( 선택 )
            axios.post(`http://localhost:8080/spring/board/boardWrite?id=${id}&subject=${subject}&content=${content}`)
                 .then(alert("글 작성 완료"))
                 .catch(error => {
                    console.error('Error during login:', error);
                    setAlertMessage('글작성 중 오류가 발생했습니다.');
                 });
            navigate('/boardList');
        }
    }

    return (
        <div className={styles.formcontainer}>
            <br/>
            <div>
                <h3>게시글 작성</h3>
                <form>
                    <div className={styles.formgroup}>
                        <label htmlFor="id">작성자</label>
                        <input type="text" name='id' id="id" value={id} readOnly/>
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor="subject">제목</label>
                        <input type="text" name='subject' id="subject" onChange={e => setSubject(e.target.value)} />
                        <div className={styles.errorDiv}>{subjectDiv}</div>
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor="content">내용</label>
                        <textarea type="text" name='content' id="content" onChange={e => setContent(e.target.value)} />
                        <div className={styles.errorDiv}>{contentDiv}</div>
                    </div>
                    <button onClick={ onBoardSubmit }>글 작성</button>&nbsp;
                    <button>초기화</button>
                    {alertMessage && <div className={styles.alertDiv}>{alertMessage}</div>}
                </form>
            </div>
        </div>
    );
};

export default BoardWrite;