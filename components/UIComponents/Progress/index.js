import styles from './styles.module.scss';

const RADIUS = 50;
const PI = Math.PI;
const PERIMETER = 2 * RADIUS * PI;
const CENTER = [50, 50];
const WIDTH = 150;
const HEIGHT = 150;
const STROKE = 6;

const Progress = ({ text, percentage }) => {
  return (
    <div className={styles.container}>
      <svg
        width={WIDTH}
        height={HEIGHT}
        viewBox={`0 0 100 100`}
      >
        <circle
          className={styles.circular_bg}
          cx={CENTER[0]}
          cy={CENTER[1]}
          r={RADIUS - STROKE}
          strokeWidth={STROKE}
        />
        <circle
          className={styles.circular_progress}
          cx={CENTER[0]}
          cy={CENTER[1]}
          r={RADIUS - STROKE}
          strokeWidth={STROKE}
          strokeDasharray={PERIMETER}
          strokeDashoffset={PERIMETER - (PERIMETER * percentage / 115)}
        />
        <text
          className={styles.circular_text}
          x="50%"
          y="32%"
          dy={'8px'}
          textAnchor="middle"
        >
          {text}
        </text>
        <text
          className={styles.circular_percentage}
          x="50%"
          y="55%"
          dy={'8px'}
          textAnchor="middle"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  )
};

export default Progress;
