import style from "./Post.module.css";
import { NavLink } from "react-router-dom";

export default function Post({ post }) {

  return (
    <div className={style.post}>
      <img
        className={style.postImg}
        src={`${process.env.REACT_APP_PORT}${post.photo}` || "/images/natureImg2.jpg"}
        alt="natureImg"
      />
      <div className={style.postInfo}>
     <div className={style.container}>
     <div className={style.postCat}>{post.category}</div>
        <span className={style.postDate}>
          {new Date(post.createdAt).toDateString()}
        </span>
     </div>
        <NavLink className='link' to={`/single/${post._id}`}>
          <div className={style.postTitle}>{post.title}</div>
        </NavLink>
        <hr/>
       
      </div>
      <p className={style.postDes}>{post.desc.substring(0,100)}...<NavLink  to={`/single/${post._id}`}>Read More</NavLink></p>
    </div>
  );
}

