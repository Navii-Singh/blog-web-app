import style from "./Settings.module.css";

import { useContext, useState } from "react";
import {AuthContext} from '../../Context/authContext'
import axios from 'axios'
export default function Settings() {
  const{user,dispatch} = useContext(AuthContext);
  console.log(user)
   const [updated , setUpdated] = useState(false)
  const [updatedProfile,setUpdatedProfile] = useState({
    username:user.username,
    email:user.email,
    password:user.password,
    userId:user._id,
    profilePic:user.profilePic
  })
 
  //InputHandling
  const handleUpdate = (e) =>{
    setUpdatedProfile((prev) =>{
        return {
          ...prev,
          [e.target.name]:e.target.value
        }
    })
    
  } 
  //FileHandling
  const handleFileUpdate = (e) =>{
   
    setUpdatedProfile((prev) =>{
        return{
          ...prev,
          file:e.target.files[0]
        }
    })
  
    
  }
  const handleSubmit =  async (e) =>{
    
    console.log(updatedProfile)
    e.preventDefault();
    dispatch({type:"START_UPDATING"})
    // updatedProfile.userId = user._id;
    
    
    if(updatedProfile.file){
      const form = new FormData();
      const fileName = Date.now() + updatedProfile.file.name;
      form.append('name',fileName)
      form.append('file',updatedProfile.file)
      updatedProfile.profilePic=fileName;
      
      try{
            await axios.post('http://localhost:5000/upload/post',form)
            
      }catch(err){
            console.log(err)
      }
    }
    
    try{
        
      const res = await axios.patch('http://localhost:5000/user/' + user._id,updatedProfile)
      console.log(res)
      dispatch({type:"UPDATED",payload:res.data})
      setUpdated(true)
      setTimeout(() =>{
        window.location.reload()
      },800)
    }catch(err){
      console.log(err)
      dispatch({ type:"UPDATING_FAILED" });
    }
  }

  
  return (
    <div className={style.settings}>
      <div className={style.settingWrapper}>
        <div className={style.settingTitles}>
          <span className={style.settingUpdateAcc}>Update Your Account</span>
          <span className={style.settingDeleteAcc}>Delete Account</span>
        </div>
        <form className={style.settingForm}>
              <label>Profile Picture</label>
              <div className={style.settingsPP}>
                <img className={style.settingImg} src={updatedProfile.file ? URL.createObjectURL(updatedProfile.file): ( user.profilePic ?`${process.env.REACT_APP_PORT}${user.profilePic}` : "https://archive.org/download/user-image-with-black-background_318-34564/user-image-with-black-background_318-34564.jpg")} alt="img" />
                <label htmlFor="fileInput" className={style.settingPPContainer}><i className={`fa-solid fa-circle-user ${style.settingProfileIcon}`}></i></label>
                <input type="file" onChange={handleFileUpdate} id="fileInput" hidden/>
              </div>
              <label>Username</label>
              <input type="text" placeholder={user.username} autoComplete='off'  name='username' onChange={handleUpdate}/>
              <label>Email</label>
              <input type="email"  name="email"  placeholder={user.email}  autoComplete='off' onChange={handleUpdate}/>
              <label>Password</label>
              <input type="password" placeholder="password" name="password"   onChange={handleUpdate}/>
              <button type="submit" onClick={handleSubmit}>Update</button>
              {updated && <span style={{color:'blue',textAlign:'center',marginTop:'15px'}}>Profile has Been Updated</span>}
        </form>
      </div>
      {/* <Sidebar /> */}
    </div>
  );
}
