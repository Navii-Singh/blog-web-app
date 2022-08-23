import Sidebar from "../../components/sidebar/Sidebar";
import Singlepost from "../../components/singlepost/Singlepost";
import style from "./Single.module.css";
import { useEffect,useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Single() {
  window.scrollTo(0,0)
  const [post , setPost] = useState({});
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];

 
  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(`http://localhost:5000/post/${id}`);
      setPost(data);
    };
    getPost();
  }, [id]);
  return (
    <div className={style.single}>
      <Singlepost post={post} setPost={setPost} />
      <Sidebar post={post} />
    </div>
  );
}
