import Button from '../Button/Button';
import styles from './Timer.module.scss';
import React, { useState, useEffect } from 'react';
import TimerFormatter from '../TimerFormatter/TimerFormatter';

const Timer = () => {
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(true);
  const [clock, setClock] = useState(0);

  useEffect(() => {
    let interval = null;

    if (start && stop === false) {
      interval = setInterval(() => {
        setClock((clock) => clock + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start, stop]);

  const handleStart = () => {
    setStart(true);
    setStop(false);
  };

  const handleStop = () => {
    setStart(false);
    setStop(true);
  };

  const handleReset = () => {
    setStart(false);
    setClock(0);
  };

  return (
    <div>
      <TimerFormatter time={clock} />
      <div className={styles.buttons}>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleStop}>Stop</Button>
        <Button onClick={handleReset}>Clear</Button>
      </div>
    </div>
  );
};

export default Timer;
