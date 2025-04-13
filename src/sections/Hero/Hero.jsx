import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero.png'
import sun from '../../assets/sun.svg'
import moon from "../../assets/moon.svg";
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from '../../assets/Profile.pdf'
import {useTheme} from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme()

    const themeIcon = theme === 'light' ? sun : moon
    const twitterIcon = theme === "light" ? twitterLight : twitterDark;
    const githubIcon = theme === "light" ? githubLight : githubDark;
    const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;


  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Nicole Rodrigues"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Nicole
          <br />
          Rodrigues
        </h1>
        <h2>Desenvolvedora Frontend</h2>
        <span>
          <a href="https://x.com/home" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Nicole260205" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/nicole-coelho-6a8685269/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Transformando desafios de negócios em aplicações web modernas com
          React, de forma criativa e eficiente
        </p>
        <a href={CV} download>
          <button className="hover">Currículo</button>
        </a>
      </div>
    </section>
  );
}

export default Hero
