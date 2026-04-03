import style from './button.module.css';

const Button = ({ handleClick, children }) => {
  return (
    <>
      <button className={style.btn} onClick={handleClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
