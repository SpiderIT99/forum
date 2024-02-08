import styles from './DescriptionPost.module.css';

const TitleDescription = ({ handlePostSave, handlePostCancel, title, description, handleTitleChange, handleDescriptionChange }) => {
    return (
        <div className={styles.wrapper}>
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                className={styles.input}
            />
            <textarea
                value={description}
                onChange={handleDescriptionChange}
                className={styles.textarea}
            />
            <div className={styles.buttons}>
                <button onClick={handlePostSave} className={styles.button}>Save</button>
                <button onClick={handlePostCancel} className={styles.button}>Cancel</button>
            </div>
        </div>
    );
};

export default TitleDescription;
