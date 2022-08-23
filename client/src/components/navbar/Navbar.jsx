import styles from "./Navbar.module.css";
import { Link ,useHistory} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";
export default function Navbar() {
  const { user,dispatch } = useContext(AuthContext);
  let history = useHistory();
 const handleSettings = () =>{
  history.push("/settings");
 }
  const handleLogout = () =>{
   
      dispatch({type: "LOG_OUT"})
    
  }
  return (
    <nav className={styles["nav-bar"]}>
      <div className={styles.topLeft}>
        <i className={`fa-brands fa-facebook ${styles.topIcon}`}></i>
        <i className={`topIcon fa-brands fa-twitter ${styles.topIcon}`}></i>
        <i className={`topIcon fa-brands fa-pinterest ${styles.topIcon}`}></i>
        <i className={`topIcon fa-brands fa-instagram ${styles.topIcon}`}></i>
      </div>
      <div className={styles.topCenter}>
        <ul className={styles.topList}>
          <li className={styles.topListItem}>
            <Link className="link" to="/">
              Home
            </Link>
          </li>

          <li className={styles.topListItem}>
          
            <Link className="link" to="/about">
              About
            </Link>
          </li>

          <li className={styles.topListItem}>
            {" "}
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>

          <li className={styles.topListItem}>
           
            <Link className="link" to="/write">
              Write
            </Link>
          </li>

          {user && (
            <li className={styles.topListItem}>
              
              <Link onClick={handleLogout} className="link" to="/login">
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className={styles.topRight}>
        <ul className={styles.topList}>
          {!user && (
            <>
              <li className={styles.topListItem}>
                <Link className="link" to="/register">
                  Register{" "}
                </Link>
              </li>

              <li className={styles.topListItem}>
                {" "}
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
        {user && (
            <img
            onClick={handleSettings}
              className={styles.topImg}
              src={user.profilePic ? `${process.env.REACT_APP_PORT}${user.profilePic}`: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"}
              alt="profilePic"
            />
          )} {user && (
            <i
              className={`fa-solid fa-magnifying-glass ${styles.topSearchIcon}`}
            ></i>
          )}
      </div>
    </nav>
  );
}
