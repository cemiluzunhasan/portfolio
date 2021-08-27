import dynamic from 'next/dynamic';
import styles from './styles.module.scss';

const Progress = dynamic(() => import('components/UIComponents/Progress'));

const Skills = () => {
  return (
    <div className={styles.container}>
      <h3>SKILLS</h3>
      <Progress percentage={80} text="React" />
      <Progress percentage={80} text="LESS" />
      <Progress percentage={60} text="Vue" />
      <Progress percentage={60} text="SCSS - SASS" />
      <Progress percentage={80} text="HTML5" />
      <Progress percentage={80} text="Javascript" />
      <Progress percentage={50} text="Flutter" />
      <Progress percentage={30} text="React Native" />
    </div>
  );
};

export default Skills;
