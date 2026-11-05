import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.myLinks}>
        <a
          className={style.footerButton}
          href="https://github.com/Jonathan-Winter-Dev"
        >
          <b>My GitHub</b>
        </a>
      </div>
      <div className={style.storeButtons}>
        <button disabled className={style.footerButton}>
          About
        </button>
        <button disabled className={style.footerButton}>
          Contact
        </button>
        <button disabled className={style.footerButton}>
          Store Finder
        </button>
        <button disabled className={style.footerButton}>
          Careers
        </button>
        <button disabled className={style.footerButton}>
          Socials
        </button>
        <button disabled className={style.footerButton}>
          Terms & Conditions
        </button>
      </div>
    </footer>
  );
}
