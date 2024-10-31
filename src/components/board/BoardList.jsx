import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import styles from '../../css/boardList.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BoardList = () => {
    const [list,setList] = useState([]);

    useEffect(() => {
        //withCredentials: true 추가 ( 선택 )
        axios.get('http://localhost:8080/spring/board/boardList')
             .then(res => setList(res.data))
    },[])
    return (
        <div className={styles.boardContainer}>
            <h3>게시글 목록</h3>
            <table className={styles.boardTable}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(item => (
                            <tr key={item.seq}>
                                <td>{item.seq}</td>
                                <td>
                                    <Link to={`/boardView/${item.seq}`} className={styles.link}>
                                        {item.subject}
                                    </Link>
                                </td>
                                <td>{item.id}</td>
                                <td>{item.logtime}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>

    );
};

export default BoardList;