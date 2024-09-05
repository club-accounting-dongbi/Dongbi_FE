import { twMerge } from 'tailwind-merge';

interface IconDeleteProps {
  className?: string;
}

const IconDelete = ({ className }: IconDeleteProps) => {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.6852 0.532715C1.24901 0.532715 0.830676 0.705992 0.522241 1.01443C0.213805 1.32286 0.0405273 1.74119 0.0405273 2.17739V13.6901C0.0405273 14.1263 0.213805 14.5446 0.522241 14.853C0.830676 15.1615 1.24901 15.3348 1.6852 15.3348H13.1979C13.6341 15.3348 14.0524 15.1615 14.3609 14.853C14.6693 14.5446 14.8426 14.1263 14.8426 13.6901V2.17739C14.8426 1.74119 14.6693 1.32286 14.3609 1.01443C14.0524 0.705992 13.6341 0.532715 13.1979 0.532715H1.6852Z"
        fill="#FF3B30"
      />
      <path
        d="M10.0405 5.24341L7.54053 7.74339M7.54053 7.74339L5.04053 10.2434M7.54053 7.74339L10.0405 10.2434M7.54053 7.74339L5.04053 5.24341"
        stroke="white"
        stroke-width="1.57135"
        stroke-linecap="round"
      />
    </svg>

    // <svg
    //   viewBox="0 0 17 17"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={twMerge('w-20 h-20', className)}
    // >
    //   <path
    //     d="M3.125 4.49992L7.57309 7.69342C7.82993 7.87781 8.17007 7.87781 8.42691 7.69342L12.875 4.49992M3.5 12.6666H12.5C13.3284 12.6666 14 11.9701 14 11.111V4.88881C14 4.0297 13.3284 3.33325 12.5 3.33325H3.5C2.67157 3.33325 2 4.0297 2 4.88881V11.111C2 11.9701 2.67157 12.6666 3.5 12.6666Z"
    //     stroke="currentColor"
    //     strokeWidth="1.41667"
    //   />
    // </svg>
  );
};

export default IconDelete;
