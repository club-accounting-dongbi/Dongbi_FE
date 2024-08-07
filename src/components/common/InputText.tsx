import React from 'react';
import cn from '../../utils/cn';
import { cva } from 'class-variance-authority';

interface InputProps {
  variant?: 'default' | 'orange';
  shadow?: 'default' | 'lg';
  label: string;
  icon?: React.ReactElement;
  additionalClass?: string;
  type: string;
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
  variant,
  shadow,
  label,
  icon,
  additionalClass,
}: InputProps) => {
  return (
    <div className={cn(InputVariants({ variant, shadow }), additionalClass)}>
      <div className="w-[30px] flex justify-center items-center">{icon}</div>
      <input
        type={type}
        placeholder={label}
        className="outline-none text-sm "
      />
    </div>
  );
};

export default InputText;
