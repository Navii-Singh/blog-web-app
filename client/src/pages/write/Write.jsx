import style from "./Write.module.css";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";

export default function Write() {
  const {user} =useContext(AuthContext)
  const [post, setPost] = useState({});
  const handleUpload = (e) => {
    setPost({ ...post, photo: e.target.files[0] || null });
  };
  const handler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
   post.authorName = user.username;
    
    if(post.photo){
      const form = new FormData();
      const fileName = Date.now() + post.photo.name;
      console.log(fileName)
      form.append('name',fileName)
      form.append('file',post.photo)
      post.photo=fileName;
      
      try{
            await axios.post('http://localhost:5000/upload/post',form)

      }catch(err){
            console.log(err)
      }
    }
    
    try{
      const res = await axios.post('http://localhost:5000/post/create',{...post})
      console.log(post)
      window.location.replace(`/single/${res.data._id}`);
    }catch(err){
      console.log(err)
    }
    // setPost({});
  };

  return (
    <div className={style.writePage}>
      <img className={style.writeImg} src={post.photo ? URL.createObjectURL(post.photo) : '/images/upload.jpg'} alt="pic" />
      <form className={style.writeForm} onSubmit={handleSubmit}>
      <select name="category" onChange={handler} className={style.options}>
            <option>Tech</option>
            <option>Education</option>
            <option>Cooking</option>
            <option>Music</option>
            <option>Fashion</option>
            <option>Others</option>
        </select>
        <div className={style.writeFormGroup}>
        
          <label htmlFor="file">
            <i className={`${style.writeFormIcon} fa-solid fa-plus`}></i>
          </label>
          <input onChange={handleUpload}  name="file" type="file" id="file" hidden />
          <input
            type="text"
            name="title"
            className={style.writeFormTitle}
            placeholder="Title"
            onChange={handler}
          />
        </div>
        <div className={style.writeFormGroup}>
          <textarea
            className={style.writeFormStory}
            
            rows="10"
            name="desc"
            onChange={handler}
            placeholder="Tell your story..."
          ></textarea>
        </div>
        <button type="submit" className={style.writeFormButton}>
          Publish
        </button>
      </form>
    </div>
  );
}
