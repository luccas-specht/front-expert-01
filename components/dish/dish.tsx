import Image from 'next/image';
import { DishDetails } from '@/components';

import style from './style.module.css';

export function Dish() {
  return (
    <div className={style.dish}>
      <div className={style.wrapper}>
        <Image
          src="https://storage.googleapis.com/onfood/peperoni.jpg"
          alt="Prato"
          width={592}
          height={312}
        />
      </div>
      <div>
        <div className={style.header}>
          <h2>product name</h2>
        </div>
        <div className={style.details}>
          <DishDetails type="reviews" title="(201)" subtitle="4.5" />
          <DishDetails type="category" title="Categoria" />
          <DishDetails type="delivery" title="30 - 40 min" />
        </div>
      </div>
    </div>
  );
}
