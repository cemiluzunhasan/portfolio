import styles from './styles.module.scss';

const InfoItem = ({ name, value }) => (
  <div className={styles.info_item}>
    <span className={styles.info_item_name}>{name}:</span>
    <span className={styles.info_item_value}>{value}</span>
  </div>
)

const Info = () => {
  return (
    <div className={styles.container}>
      <InfoItem name="Full Name" value="Cemil Uzunhasan" />
      <InfoItem name="Nationality" value="Turkish" />
      <InfoItem name="Current Title" value="Frontend Engineer" />
      <InfoItem name="E-mail" value="cmluzunhasan@gmail.com" />
      <InfoItem name="Address" value="Berlin / Germany" />
      <InfoItem name="Marital Status" value="Single" />
      <InfoItem name="Military Status" value="Delayed" />
      <InfoItem name="Driving License" value="B Class" />
      <InfoItem name="Languages" value="English (C1) - Turkish (Native Lang.)" />
      <InfoItem name="Birthday" value="01 March 1997" />
    </div>
  );
}

export default Info;
