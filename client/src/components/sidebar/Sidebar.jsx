
import style from "./Sidebar.module.css";
import {useHistory} from 'react-router-dom'

export default function Sidebar() {
  const history = useHistory();
const redirect = (e) =>{

  const target = e.target.textContent;
  // <Link to={`/?cat=${target}`}/>
  history.push(`/?cat=${target}`)
  
}

  return (
  
    
    <div className={style.sidebar}>
      <div className={style.sideBarItem}>
        <span className={style.sideBarTitle}>About Blogging</span>
        <img
          className={style.sidebarImg}
          src="https://media.istockphoto.com/photos/blog-and-information-website-concept-workplace-background-with-text-picture-id1130150680?k=20&m=1130150680&s=612x612&w=0&h=xS0ephM0yuIC3ploNT4CbbOoZmZ8fxQNJlrB4yPJC9k="
          alt="sidebarImg"
        />
        <p>
        A Blog is a website where bloggers can share their thoughts, knowledge, and information via text, images, audio, and videos.
        Blogs may be related to personal or political, maybe educational or entertainment related. It may be on a small subject or in a big range of products.
        </p>
      </div>
      <div className={style.sideBarItem}>
        <span className={style.sideBarTitle}>CATEGORIES</span>
        <ul className={style.sidebarList}>
          <li onClick={redirect} className={style.sidebarListitem}>Life</li>
          <li onClick={redirect} className={style.sidebarListitem}>Music</li>
          <li onClick={redirect} className={style.sidebarListitem}>Style</li>
          <li onClick={redirect} className={style.sidebarListitem}>Tech</li>
          <li onClick={redirect} className={style.sidebarListitem}>Education</li>
          <li onClick={redirect} className={style.sidebarListitem}>Sports</li>
          <li onClick={redirect} className={style.sidebarListitem}>Others</li>
        </ul>
      </div>
      <div className={style.sideBarItem}>
        <span className={style.sideBarTitle}>FOLLOW US</span>
        <div className={style.sideBarSocial}>
          <i className={`${style.sidebarIcon} fa-brands fa-facebook `}></i>
          <i className={`${style.sidebarIcon}  fa-brands fa-twitter `}></i>
          <i className={`${style.sidebarIcon}  fa-brands fa-pinterest `}></i>
          <i className={`${style.sidebarIcon}  fa-brands fa-instagram `}></i>
        </div>
      </div>
    </div>
  );
}
