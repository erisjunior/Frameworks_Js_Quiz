import { ButtonProps } from './types';
import './index.css';

function Button({ onClick, disabled, focused, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={focused ? 'button--focused' : ''}
    >
      {children}
    </button>
  );
}

export default Button;
