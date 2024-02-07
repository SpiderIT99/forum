import Post from '../../../components/Post/Post';
import styles from './categories.module.css';
import CreatePost from '../../../components/CreatePost/CreatePost'

const Categories = () => {
  const data = { 'id': '1', 'title': 'Title', 'description': 'Description', };

  return (
    <div className={styles.wrapper}>
      <CreatePost/>
      <Post className={styles.post} data={data}></Post>
      <Post className={styles.post} data={data}></Post>
      <Post className={styles.post} data={data}></Post>
      <Post className={styles.post} data={data}></Post>
      <Post className={styles.post} data={data}></Post>
    </div >
  );
};

export default Categories;