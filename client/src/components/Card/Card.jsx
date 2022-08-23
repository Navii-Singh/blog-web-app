import style from './Card.module.css'

export default function Card ({heading,desc}) {
  return (
    <div className={style.card}>
      <h1>{heading}</h1>
      <p>
       {desc}
      </p>
    </div>
  );
};
