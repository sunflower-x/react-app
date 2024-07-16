import styles from './ui.module.css';

import { Orders } from 'orders';

export function Ui() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui!</h1>
      <Orders/>
    </div>
  );
}

export default Ui;
