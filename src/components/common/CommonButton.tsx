import React from 'react';
import { cva } from 'class-variance-authority';
import cn from '@/src/utils/cn';

// 197 45
// 441 45
// 71 36
// 127 49

interface CommonButtonProps {
  text: string;
  bgColor: 'orange' | 'white';
  textColor: 'black' | 'white' | null | undefined;
  radius: 'lessRounded' | 'moreRounded';
  shadowColor: 'lightShadow' | 'mediumShadow';
  borderColor?: 'lightBorder' | null | undefined;
  fontSize: 'sm' | 'lg';
  additionalClass?: string;
}

export const buttonVariants = cva('py-2 font-semibold', {
  variants: {
    bgColor: {
      orange: 'bg-custom-orange',
      white: 'bg-custom-white',
    },
    textColor: {
      white: 'text-custom-white',
      black: 'text-custom-black',
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
      lg: 'text-16',
      sm: 'text-14',
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
  text,
  bgColor,
  textColor,
  radius,
  shadowColor,
  borderColor,
  fontSize,
  additionalClass,
}: CommonButtonProps) => {
  return (
    <button
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
