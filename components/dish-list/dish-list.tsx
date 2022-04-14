import styles from './dish-list.module.css';

import { Dish } from '@/components';

export function DishList() {
  return (
    <div className={styles.list}>
      <Dish />
      <Dish />
      <Dish />
      <Dish />
      <Dish />
    </div>
  );
}
