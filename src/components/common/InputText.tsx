import React from 'react';
import cn from '../../utils/cn';
import { cva } from 'class-variance-authority';

interface InputProps {
  inputStyle?: string;
  variant?: 'default' | 'orange';
  shadow?: 'default' | 'lg';
  label: string;
  icon?: React.ReactElement;
  additionalClass?: string;
  type: string;
  id: string;
  name?: string;
  value?: any;
  disable?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const InputVariants = cva(
  //모든 경우에 공통으로 들어갈 CSS
  'h-[49px] w-[300px] bg-white text-[#C7C7CC] rounded-md px-2 border flex gap-4 items-center',
  {
    variants: {
      variant: {
        default: 'border-gray-300',
        orange: 'border-orange-400',
      },
      shadow: {
        default: '',
        lg: 'drop-shadow-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      shadow: 'default',
    },
  },
);

const InputText = ({
  type,
  inputStyle,
  variant,
  shadow,
  label,
  icon,
  additionalClass,
  id,
  name,
  value,
  disable = false,
  onChange,
  onKeyDown,
}: InputProps) => {
  return (
    <div className={cn(InputVariants({ variant, shadow }), additionalClass)}>
      <div className="w-[30px] flex justify-center items-center">{icon}</div>
      <input
        type={type}
        placeholder={label}
        id={id}
        name={name}
        value={value}
        className={
          disable
            ? 'outline-none text-sm bg-gray-200 cursor-not-allowed' + inputStyle
            : 'outline-none text-sm ' + inputStyle
        }
        onChange={onChange}
        disabled={disable}
      />
    </div>
  );
};

export default InputText;
