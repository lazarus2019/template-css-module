import clsx from 'clsx';
import classNames from './styles.module.css';
import { dangerType } from './styles.css';

interface IButtonProps {
  type?: 'danger' | 'warning' | 'success' | 'normal';
}

export const Button = ({ type = 'normal' }: IButtonProps) => {
  return (
    <button
      className={clsx(classNames['button'], classNames[type], dangerType)}
    >
      Click me
    </button>
  );
};
