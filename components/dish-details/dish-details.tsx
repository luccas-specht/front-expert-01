import Styles from './style.module.css';
import { DishDetailsProps } from './type';
import { DeliveryIcon, CategoryIcon, ReviewsIcon } from '@/icons';

export function DishDetails({ type, subtitle, title }: DishDetailsProps) {
  const Icon =
    type === 'delivery'
      ? DeliveryIcon
      : type === 'category'
      ? CategoryIcon
      : ReviewsIcon;

  return (
    <div className={Styles.detail}>
      <div className={Styles.icon}>
        <Icon />
      </div>
      {subtitle && <span>{subtitle}</span>}
      {title}
    </div>
  );
}
