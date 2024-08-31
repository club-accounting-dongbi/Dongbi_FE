import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { cva } from 'class-variance-authority';
import cn from '@/src/utils/cn';

interface CommonButtonProps {
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  bgColor: 'orange' | 'white';
  textColor: 'black' | 'white' | null | undefined;
  radius: 'lessRounded' | 'moreRounded';
  shadowColor: 'lightShadow' | 'mediumShadow';
  borderColor?: 'lightBorder' | null | undefined;
  fontSize: 'sm' | 'lg';
  additionalClass?: string;
  onClickEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void; // 버튼 클릭 이벤트 타입
}

export const buttonVariants = cva('py-2 font-semibold', {
  variants: {
    bgColor: {
      orange: 'bg-custom-orange',
      white: 'bg-white',
    },
    textColor: {
      white: 'text-white',
      black: 'text-black',
    },
    radius: {
      lessRounded: 'rounded-[6.25px]',
      moreRounded: 'rounded-[20px]',
    },
    shadowColor: {
      lightShadow: 'shadow-custom-shadow',
      mediumShadow: 'shadow-custom-shadow-light',
    },
    borderColor: {
      lightBorder: 'border-1 border-custom-border',
    },
    fontSize: {
      lg: 'text-lg',
      sm: 'text-sm',
    },
  },
  defaultVariants: {
    bgColor: 'orange',
    textColor: 'white',
    radius: 'moreRounded',
    shadowColor: 'mediumShadow',
    fontSize: 'lg',
  },
});

const CommonButton = ({
  buttonType,
  text,
  bgColor,
  textColor,
  radius,
  shadowColor,
  borderColor,
  fontSize,
  additionalClass,
  onClickEvent,
}: CommonButtonProps) => {
  return (
    <button
      type={buttonType !== undefined ? buttonType : 'button'}
      onClick={onClickEvent}
      className={cn(
        buttonVariants({
          bgColor,
          textColor,
          radius,
          shadowColor,
          borderColor,
          fontSize,
        }),
        additionalClass,
      )}
    >
      {text}
    </button>
  );
};

export default CommonButton;
