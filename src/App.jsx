import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './components/Button/Button';

const App = () => {
  const [pressed, setPressed] = useState(0);

  const handleClick = () => {
    setPressed(pressed + 1);
  };
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        </ul>
      </nav>
      <h1>React Router with Prop Types and Vitest Template</h1>
      <h2>Pressed: {pressed}</h2>
      <Button handleClick={handleClick}>Press Button</Button>
    </div>
  );
};

export default App;
