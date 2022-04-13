import { DishDetailsProps } from './type';

import { DeliveryIcon, CategoryIcon, ReviewsIcon } from '@/icons';

import style from './style.module.css';

export function DishDetails({ type, title, subtitle }: DishDetailsProps) {
  const Icon =
    type === 'delivery'
      ? DeliveryIcon
      : type === 'category'
      ? CategoryIcon
      : ReviewsIcon;

  return (
    <div className={style.detail}>
      <div className={style.icon}>
        <Icon />
      </div>
      <div>{subtitle && <span>{subtitle}</span>}</div>
      {title}
    </div>
  );
}
