import styles from './TimerFormatter.module.scss';

const FormattedTime = (props) => {
  const converTime = (miliseconds) => {
    let milliseconds = Math.floor(miliseconds % 1000);
    let seconds = Math.floor((miliseconds / 1000) % 60);
    let minutes = Math.floor((miliseconds / (1000 * 60)) % 60);
    let hours = Math.floor((miliseconds / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return <div className={styles.timeFormat}>{converTime(props.time)}</div>;
};

export default FormattedTime;
