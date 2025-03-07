import Image from "next/image";
import styles from "./styles.module.css";

function getCurrentYearString(): string {
  return new Date().getFullYear().toString();
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <pre>
        <a href="https://ko-fi.com/heimatfront">
          Spenden
          <Image
            src="/kofi_symbol.png"
            alt="Official Ko-fi logo"
            width={30}
            height={30}
          />
        </a>
      </pre>
      <pre>
        <a href="https://discord.gg/heimatfront">
          Discord
          <Image
            src="/Discord-Symbol-Blurple.png"
            alt="Official Discord logo"
            width={35}
            height={30}
          />
        </a>
      </pre>
      <pre>
        <a href="https://github.com/B1tstorm/Heimafront-web/">
          Projekt
          <Image
            src="/github-mark.png"
            alt="Official GitHub logo"
            width={30}
            height={30}
          />
        </a>
      </pre>
      <pre>
        <a href="https://discord.gg/Es8RVSNW">
          Dev Kontakt
          <Image
            src="https://avatars.githubusercontent.com/u/51802149?v=4"
            alt="Picture of the author"
            width={30}
            height={30}
          />
          {getCurrentYearString()}
        </a>
      </pre>
    </footer>
  );
}

export default Footer;
