import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../css/boardView.module.css';

const BoardView = () => {
    const { seq } = useParams();
    const [view, setView] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/spring/board/boardView?seq=${seq}`)
             .then(res => setView(res.data))
             .catch(error => console.error(error));
    },[seq])

    return (
        <div className={styles.postContainer}>
            <h3 className={styles.postTitle}>{view.subject}</h3>
            <p className={styles.postInfo}>작성자: {view.id} | 작성일: {view.logtime}</p>
            <p className={styles.postContent}>{view.content}</p>
        </div>
    );
};

export default BoardView;