import styles from './postView.module.css';

const PostView = ({ title, description, isEditing, handlePostEdit, handleDeletePost }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.buttons}>
                <button onClick={handlePostEdit} className={styles.button}>Edit Post</button>
                <button onClick={handleDeletePost} className={styles.button}>Delete Post</button>
            </div>
        </div>
    );
};

export default PostView;
