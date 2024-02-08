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
            <div className={styles.text}>Comment Section</div>
            <div className={styles.add}>
                <textarea
                    value={newComment}
                    required
                    onChange={handleInputChange}
                    className={styles.textarea}
                ></textarea>
                <div>
                    <button onClick={handleSubmit} className={styles.button}>Add Comment</button>
                </div>
            </div>
            <div>
                {comments.map((comment, index) => (
                    <div key={index}>
                        {editingIndex === index ? (
                            <div className={styles.comment}>
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
                            <div className={styles.comment}>
                                <div className={styles.textComment}>{comment}</div>
                                <div className={styles.buttons}>
                                    <button onClick={() => handleEditStart(index, comment)} className={styles.button}>Edit</button>
                                    <button onClick={() => deleteComment(index)} className={styles.button}>Delete</button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentArea;