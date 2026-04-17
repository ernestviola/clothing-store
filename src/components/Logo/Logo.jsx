import { useEffect, useState } from 'react';
import style from './logo.module.css';

const Logo = () => {
  const [rotation, setRotation] = useState(0);
  const clickLogo = () => {
    const rand = Math.floor(Math.random() * 1081);
    setRotation(rand);
  };

  useEffect(() => {
    let timeoutId;
    if (rotation != 0) {
      timeoutId = setTimeout(() => {
        setRotation(0);
      }, 2000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [rotation]);

  return (
    <span
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`${style.logo} ${style.load} `}
      onClick={() => clickLogo()}
    >
      STORE
    </span>
  );
};

export default Logo;
