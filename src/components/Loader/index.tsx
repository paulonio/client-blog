import React from 'react';
import classes from './styled.module.scss';

const Loader = () => {
  return (
    <div className={classes.loader__wrapper}>
      <div className={classes.loader__inner} />
    </div>
  );
};

export default Loader;
