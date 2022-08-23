import Header from "../../components/Header/Header";
import Posts from "../../components/Postt/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./Home.module.css";
import {useEffect,useState} from 'react'
import axios from 'axios'
import { useLocation } from "react-router-dom";
export default function Home() {
  window.scrollTo(0,0)
  const {search} = useLocation();
  const [posts , setPosts]=useState([])
  useEffect(() => {
    const fetchPost = async () =>{
         const posts = await axios.get('http://localhost:5000/post' + search);
         
         setPosts(posts.data);
    }
    fetchPost();
}, [search]);
  return (
    <>
      <Header title="Crunch Blogs" image="cover.jpg"/>
      <div className={styles.section}>
        <Posts posts={posts} />
        <Sidebar/>
      </div>
    </>
  );
}
