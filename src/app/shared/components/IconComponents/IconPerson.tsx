import { twMerge } from 'tailwind-merge';

interface IconPersonProps {
  className?: string;
}

const IconPerson = ({ className }: IconPersonProps) => {
  return (
    <svg
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge('w-20 h-20', className)}
    >
      <path
        d="M1.8291 17.7604C1.8291 14.3113 4.71069 11.5152 10.5992 11.5152C16.4876 11.5152 19.3692 14.3113 19.3692 17.7604C19.3692 18.3091 18.9689 18.754 18.475 18.754H2.7233C2.22945 18.754 1.8291 18.3091 1.8291 17.7604Z"
        stroke="currentColor"
        stroke-width="2"
      />
      <path
        d="M13.8879 4.50264C13.8879 6.31898 12.4155 7.79141 10.5992 7.79141C8.78282 7.79141 7.31039 6.31898 7.31039 4.50264C7.31039 2.6863 8.78282 1.21387 10.5992 1.21387C12.4155 1.21387 13.8879 2.6863 13.8879 4.50264Z"
        stroke="currentColor"
        stroke-width="2"
      />
    </svg>
  );
};

export default IconPerson;
