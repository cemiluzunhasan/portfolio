import { EXPERIENCES } from 'helpers/constants';
import styles from './styles.module.scss';

const ExperienceItem = ({ item }) => (
  <div className={styles.experience_item + ' card'}>
    <h3>{item.companyName} ({item.startDate} - {item.endDate})</h3>
    <p>{item.title}</p>
    <p>{item.description}</p>
  </div>
);

const Experiences = () => {
  return (
    <div className={styles.container}>
      <h3>EXPERIENCES</h3>
      {EXPERIENCES.map(x => (
        <ExperienceItem key={x.id} item={x} />
      ))}
    </div>
  );
};

export default Experiences;