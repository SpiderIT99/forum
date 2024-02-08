import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './createPostPage.module.css';

const CreatePostPage = () => {
    const navigate = useNavigate();
    const [editedTitle, setTitle] = useState('');
    const [editedDescription, setDescription] = useState('');
    const [isAlert, setAlert] = useState(false);

    const savePost = () => {
        if (editedTitle === '' || editedDescription === '') {
            setAlert(true);
        }
        else {
            navigate('/')
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>Title:</div>
            <input
                className={styles.input}
                type="text"
                value={editedTitle}
                onChange={(eve) => setTitle(eve.target.value)}
            />
            <div className={styles.text}>Description:</div>
            <textarea
                className={styles.textarea}
                value={editedDescription}
                onChange={(eve) => setDescription(eve.target.value)}
            />
            <div>
                <button className={styles.button} onClick={savePost}>Save</button>
            </div>
            {isAlert ? (<p className={styles.error}>you need to give a title and description!</p>) : <></>}
        </div>
    );
};

export default CreatePostPage;