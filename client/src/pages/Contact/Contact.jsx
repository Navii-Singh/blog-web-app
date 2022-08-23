import style from './Contact.module.css'
import {useState} from 'react';
import axios from 'axios';
export default function Contact() {
  const [contact , setContact] = useState({
    name:"",
    email:"",
    query:""
  });
  const handleChange = (e) =>{
    setContact((prev) =>{
      return{
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }
  const handleSubmit = async (e) =>{
      e.preventDefault();
    try{
       await axios.post('http://localhost:5000/contact/post',contact)
        alert("we'll get back to you within 24 hrs");
    }catch(err){
        alert(err)
    }
    setContact({
      name:"",
      email:"",
      query:""
    })
  }
  return (
    <div className={style.contact}>
        <div className={style.left}>
           <div className={style.leftContainer}>
           <h1>Contact Us</h1>
            <p>Need to get in touch with us?<br/>
            fill out the form with your enquiry</p>
           </div>
        </div>
        <div className={style.right}>
            <form className={style.contactForm} onSubmit={handleSubmit}>
            <label>Name</label>
                <input type="text" value={contact.name} name='name' autoComplete='off' onChange={handleChange} />
                <label>email</label>
                <input type="email"  value={contact.email} name='email' autoComplete='off'   onChange={handleChange} />
                <label>what can we help you with </label>
                <textarea  value={contact.query} cols="30" rows="5" name="query" autoComplete='off'  onChange={handleChange}></textarea>
                <button  className={style.submit}>Submit</button>
            </form>
        </div>
    </div>
  );
}

