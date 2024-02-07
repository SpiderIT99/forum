import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/create-post');
    };

    const buttonStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        padding: '15px 30px',
        margin: '50px',
        borderRadius: '5px',
        border: 'none',
        background: 'var(--Secondary)',
        color: 'white',
    };

    return (
        <>
            <button style={buttonStyle} onClick={() => handleClick()} >click to create post</button>
        </>
    );
};

export default CreatePost;