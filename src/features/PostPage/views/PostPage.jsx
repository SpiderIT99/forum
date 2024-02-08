import { useState } from 'react';
import styles from './postPage.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import PostView from '../../../components/PostView/PostView';
import DescriptionPost from '../../../components/DescriptionPost/DescriptionPost.jsx';
import CommentsSection from '../../../components/CommentsSection/CommentsSection.jsx';

const PostPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;
    const [comments, setComments] = useState([]);
    const [editingIndex, setIndex] = useState(null);
    const [editedComment, setComment] = useState('');
    const [editedTitle, setTitle] = useState(state.title);
    const [editedDescription, setDescription] = useState(state.description);
    const [isEditingPost, setEditingPost] = useState(false);
    const [startTitle, setStartTitle] = useState(state.title);
    const [startDescription, setStartDescription] = useState(state.description);
    const [isAlert, setAlert] = useState(false);
    const [newComment, setNewComment] = useState('');

    const handleDeletePost = () => {
        navigate('/categories');
    };

    const addComment = (newComment) => {
        setComments([...comments, newComment]);
    };

    const editComment = (index, editedComment) => {
        const updatedComments = [...comments];
        updatedComments[index] = editedComment;
        setComments(updatedComments);
        setIndex(null);
        setComment('');
    };

    const handleEditStart = (index, comment) => {
        setIndex(index);
        setComment(comment);
    };

    const handleEditCancel = () => {
        setIndex(null);
        setComment('');
        setAlert(false);
    };

    const handleEditSave = (index) => {
        if (editedComment.trim() === '') {
            setAlert(true);
            return;
        }
        editComment(index, editedComment);
        setAlert(false);
    };

    const handlePostEdit = () => {
        setEditingPost(true);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const deleteComment = (index) => {
        const updatedComments = [...comments];
        updatedComments.splice(index, 1);
        setComments(updatedComments);
    };

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleInputChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newComment.trim() === '') return;
        addComment(newComment);
        setNewComment('');
    };

    const handlePostSave = () => {
        if (editedTitle.trim() === '' || editedDescription.trim() === '') {
            setAlert(true);
            return;
        }
        setEditingPost(false);
        setStartTitle(editedTitle);
        setStartDescription(editedDescription);
        setAlert(false);
    };

    const handlePostCancel = () => {
        setEditingPost(false);
        setTitle(startTitle);
        setDescription(startDescription);
        setAlert(false);
    };

    return (
        <div className={styles.wrapper}>
            {isEditingPost ? (
                <DescriptionPost
                    title={editedTitle}
                    description={editedDescription}
                    handleTitleChange={handleTitleChange}
                    handleDescriptionChange={handleDescriptionChange}
                    handlePostCancel={handlePostCancel}
                    handlePostSave={handlePostSave}
                />
            ) : (
                <div>
                    <PostView
                        title={editedTitle}
                        description={editedDescription}
                        isEditing={isEditingPost}
                        handlePostEdit={handlePostEdit}
                        handleDeletePost={handleDeletePost}
                    />
                    <CommentsSection
                        comments={comments}
                        deleteComment={deleteComment}
                        editingIndex={editingIndex}
                        editedComment={editedComment}
                        handleEditStart={handleEditStart}
                        handleEditCancel={handleEditCancel}
                        handleEditSave={handleEditSave}
                        handleChange={handleChange}
                        handleInputChange={handleInputChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            )}
            {isAlert ? (<p className={styles.error}>you can't save an empty field!</p>) : <></>}
        </div>
    );
};

export default PostPage;