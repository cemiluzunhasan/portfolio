import { EDUCATION } from 'helpers/constants';
import styles from './styles.module.scss';

const EducationItem = ({ item }) => (
  <div className={styles.education_item + ' card'}>
    <h3>{item.school} ({item.startDate} - {item.endDate})</h3>
    <p>{item.department}</p>
    <p>{item.description}</p>
  </div>
);

const Education = () => {
  return (
    <div className={styles.container}>
      <h3>Education</h3>
      {EDUCATION.map(x =>
        <EducationItem key={x.id} item={x} />
      )}
    </div>
  );
};

export default Education;