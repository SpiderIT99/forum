import styles from './postView.module.css';

const PostView = ({ title, description, isEditing, handlePostEdit, handleDeletePost }) => {
    return (
        <div className={styles.wrapper}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className={styles.buttons}>
                <button onClick={handlePostEdit} className={styles.button}>Edit</button>
                <button onClick={handleDeletePost} className={styles.button}>Delete</button>
            </div>
        </div>
    );
};

export default PostView;
