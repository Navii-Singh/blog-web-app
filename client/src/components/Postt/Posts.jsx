import Post from '../Post/Post';
import style from './Posts.module.css';

export default function Posts({posts}) {

  return (
    <div className={style.posts}>
   {posts.map((post) =>{
    return <Post key={post._id} post={post} />
   })}
      
    
    </div>
  );
}
