import styles from './commentsSection.module.css';

const CommentArea = ({
    comments,
    deleteComment,
    editingIndex,
    editedComment,
    handleEditStart,
    handleEditCancel,
    handleEditSave,
    handleChange,
    handleInputChange,
    handleSubmit,
    newComment
}) => {

    return (
        <div className={styles.wrapper}>
            <div>
                <textarea
                    value={newComment}
                    onChange={handleInputChange}
                    required
                    className={styles.textarea}
                ></textarea>
                <button onClick={handleSubmit} className={styles.button}>add comment</button>
            </div>
            <div className={styles.commentList}>
                {comments.map((comment, index) => (
                    <div key={index} className={styles.comment}>
                        {editingIndex === index ? (
                            <div className={styles.commentEdit}>
                                <input
                                    value={editedComment}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                                <div className={styles.buttons}>
                                    <button onClick={() => handleEditSave(index)} className={styles.button}>Save</button>
                                    <button onClick={handleEditCancel} className={styles.button}>Cancel</button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <p>{comment}</p>
                                <div className={styles.buttons}>
                                    <button onClick={() => handleEditStart(index, comment)} className={styles.button}>Edit</button>
                                    <button onClick={() => deleteComment(index)} className={styles.button}>Delete</button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentArea;