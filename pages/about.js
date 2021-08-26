import Education from 'components/Pages/About/Education';
import Experiences from 'components/Pages/About/Experiences';
import Info from 'components/Pages/About/Info';
import Skills from 'components/Pages/About/Skills';

import styles from 'styles/pages/About.module.scss';

const About = () => {
  return (
    <div className={styles.container}>
      <div className="wrapper">
        <h1 className={styles.header}>ABOUT ME</h1>
        <div className={styles.info}>
          <h3>Hi, I'm <span className={styles.info_name}>Cemil UZUNHASAN</span></h3>
          <p className={styles.info_text}>
            I'm a Turkish based Front-End &amp; Mobile developer focused on
            crafting clean &amp; user‑friendly experiences, I am passionate about building excellent
            software that improves the lives of those around me.
          </p>
        </div>
        <Info />
        <Skills />
        <div className={styles.timeline}>
          <Experiences />
          <Education />
        </div>
      </div>
    </div>
  )
};

export default About;
