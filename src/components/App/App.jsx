import Feedback from '../Feedback/Feedback';

import Style from './App.module.css';

export const App = () => {
  return (
    <div className={Style.app__wrapper}>
      <Feedback />
    </div>
  );
};
