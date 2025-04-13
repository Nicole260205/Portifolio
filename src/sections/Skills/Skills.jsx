import styles from './SkillsStyles.module.css'
import lightCheckmark from '../../assets/checkmark-light.svg'
import darkCheckmark from "../../assets/checkmark-dark.svg";
import SkillList from '../../common/SkillList'
import { useTheme } from "../../common/ThemeContext";

function Skills() {

  const { theme, toggleTheme } = useTheme();

  const checkMarkIcon = theme === "light" ? lightCheckmark : darkCheckmark;
  
  return (
    <section id="skills" className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Python" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="MySql" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Laravel" />
      </div>
    </section>
  );
}

export default Skills
