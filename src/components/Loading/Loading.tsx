import style from './loading.module.css';
import { Autorenew } from '@mui/icons-material';

const Loading = () => {
  return (
    <div className={style.loader}>
      <Autorenew className={style.spin} />
    </div>
  );
};

export default Loading;
