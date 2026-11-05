import style from "./Error.module.css";
import { Link } from "react-router";

export default function ErrorDisplay({ errorMessage }) {
  return (
    <div className={style.errorDisplay}>
      <h1>Oops! Something's not working.</h1>
      <p>{errorMessage}</p>
      <Link className={style.link} to={`/`}>
        Take me home
      </Link>
    </div>
  );
}
