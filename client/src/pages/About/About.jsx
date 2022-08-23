import style from './About.module.css'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card.jsx'
export default function About() {
  return (
    <div className={style.about}>
    <Header title="About Us" image="cloud.jpg"/>
    <div className={style.aboutSection}>
            <Card heading="Our Company" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <Card 
            heading="Our Employess"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
             <Card 
            heading="What We Do"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
    </div>
    </div>
  )
}

