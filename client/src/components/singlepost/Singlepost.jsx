import style from "./Singlepost.module.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Context/authContext";

import axios from "axios";

export default function Singlepost({ post,setPost}) {

  const { user } = useContext(AuthContext);

  const [data, setdata] = useState({});
  useEffect(() => {
    setdata({
      title:post.title,
      desc:post.desc,
      authorName:post.authorName
    })
  }, [post]);

  const [updateMode, setUpdateMode] = useState(false);
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/posts/${post._id}`, {
        data: {
          authorName: user.username,
        },
      });
      window.location.replace("/");
    } catch (err) {}
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
  console.log(data)
    try{
        await axios.put(`http://localhost:5000/post/${post._id}`,data)
        // window.location.reload();
        setUpdateMode(false)
    }  catch(err){

    }
  };
  
  return (
    <div className={style.singlePost}>
      <div className={style.singlePostWrapper}>
        <img
          src={
            `${process.env.REACT_APP_PORT}${post.photo}` ||
            "/images/mountain.jpg"
          }
          alt="mountainImg"
          className={style.singlePostImg}
        />
        {updateMode ? (
          <input
            placeholder="Title"
            value={data.title}
            className={style.singlePostTitleInput}
            type="text"
            name="title"
            onChange={(e) => {
              setdata({ ...data, [e.target.name]: e.target.value });
            }}
          />
        ) : (
          <h1 className={style.singlePostTitle}>
            {post.title}
            {post.authorName === user?.username && (
              <div className={style.singlePostEdit}>
                <i
                  className={`${style.singlePostIcon} far fa-edit`}
                  onClick={() => {
                    setUpdateMode(true);
                  }}
                ></i>
                <i
                  className={`${style.singlePostIcon} far fa-trash-alt`}
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className={style.singlePostinfo}>
          <Link className="link" to={`/?user=${post.authorName}`}>
           
            <span className="singlePostAuthor">
              Author: <b>{post.authorName}</b>{" "}
            </span>
          </Link>
          <span className="singlePostDate">
          
            <b>{new Date(post.createdAt).toDateString()}</b>{" "}
          </span>
        </div>
        {updateMode ? (
          <textarea
            value={data.desc}
            className={style.singlePostDescInput}
            rows="6"
            name="desc"
            onChange={(e) => {
              setdata({ ...data, [e.target.name]: e.target.value });
            }}
          ></textarea>
        ) : (
          <p className={style.singlePostDes}>{post.desc}</p>
        )}
        {updateMode && (
          <button
            type="submit"
            onClick={handleUpdate}
            className={style.updateBtn}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
}

// //Just Another Component
// import style from "./Singlepost.module.css";
// import { Link } from "react-router-dom";
// import { useContext, useState, useEffect } from "react";
// import { AuthContext } from "../../Context/authContext";
// import axios from "axios";
// export default function Singlepost({ post }) {
//   const { user } = useContext(AuthContext);
//   console.log(user)
//   return (
//     <div className={style.singlePost}>
//       <div className={style.singlePostWrapper}>
//         <img
//           src="/images/mountain.jpg"
//           alt="mountainImg"
//           className={style.singlePostImg}
//         />

//         <h1 className={style.singlePostTitle}>
//           {post.title}

//           <div className={style.singlePostEdit}>
//             <i className={`${style.singlePostIcon} far fa-edit`}></i>
//             <i className={`${style.singlePostIcon} far fa-trash-alt`}></i>
//           </div>
//         </h1>

//         <div className={style.singlePostinfo}>
//           <Link className="link" to={`/?user=${post.authorName}`}>
//             <span className="singlePostAuthor">
//               Author: <b>{post.authorName}</b>{" "}
//             </span>
//           </Link>
//           <span className="singlePostDate">
//             {" "}
//             <b>{new Date(post.createdAt).toDateString()}</b>{" "}
//           </span>
//         </div>

//         <p className={style.singlePostDes}>{post.desc}</p>
//       </div>
//     </div>
//   );
// }
