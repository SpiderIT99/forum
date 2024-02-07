import styles from './post.module.css';
import logo from "../../assets/logo_small.svg";
import { useNavigate } from 'react-router-dom';

const Post = ({ data }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/post/${data.id}`, { state: data });
    };

    return (
        <div className={styles.wrapper}>
            <img className={styles.logo} src={logo} alt='logo'></img>
            <div className={styles.topic}>
                <div className={styles.title}>Post Title</div>
                <div className={styles.description}>
                    Deadsdaads dsadsadsd dadasasddsa daadsads daadsads<br />
                    Deadsdaads dsadsadsd dadasasddsa daadsads daadsads<br />
                    Deadsdaads dsadsadsd dadasasddsa daadsads daadsads<br />
                </div>
            </div>
            <button className={styles.button} onClick={() => handleClick()} >for more click to open</button>
        </div >
    );
};

export default Post;