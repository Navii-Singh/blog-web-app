import style from "./Header.module.css";

export default function Header({title,image}) {
  return (
    <div className={style.header}>
      <div className={style.headerTitles}>
        {/* <div className={style.headerTitleSm}>React & Node</div> */}
        <div className={style.headerTitleLg}>{title}</div>
      </div>
      <img className={style.headerImg} src={`/images/${image}`} alt="blog-img" />
    </div>
  );
}
