import style from "./Loading.module.css";

export default function loading() {
  return (
    <div className={style.loadingContainer}>
      <h1>
        Loading
        <span className={style.dotsContainer}>
          <span className={style.dotOne}>.</span>
          <span className={style.dotTwo}>.</span>
          <span className={style.dotThree}>.</span>
        </span>
      </h1>
    </div>
  );
}
