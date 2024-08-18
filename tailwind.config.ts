import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7D45',
        black: '#000000',
        'custom-black': '#2E2E2E',
        'custom-red': '#F45959',
        'custom-blue': '#257CFE',
        'custom-orange': '#FF7D45',
        'custom-orange-light': '#FFCFBC',
        'custom-shadow': '#FFEBE2',
        'custom-border': '#FFEBE2',
        'custom-shadow-light': '#FFF7E0',
        'custom-gray': '#8E8E93',
        'custom-gray-2': '#AEAEB2',
        'custom-gray-3': '#C7C7CC',
        'custom-gray-4': '#D1D1D6',
        'custom-gray-5': '#E5E5EA',
        'custom-gray-6': '#F2F2F7',
      },
      fontSize: {
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px',
        20: '20px',
        24: '24px',
        40: '40px',
      },
      borderRadius: {
        'rounded-[6.25px]': '6.25px',
        'rounded-[20px]': '20px',
      },
      lineHeight: {
        120: '1.2',
        130: '1.3',
        140: '1.4',
        150: '1.5',
      },
      boxShadow: {
        'custom-shadow':
          '0 4px 6px -1px rgba(255, 123, 69, 0.1), 0 2px 4px -1px rgba(255, 123, 69, 0.06)',
        'custom-shadow-light':
          '0 4px 6px -1px rgba(255, 247, 224, 0.1), 0 2px 4px -1px rgba(255, 247, 224, 0.06)',
      },
      backgroundImage: {
        'square-check-yes': "url('/icon/icon_square_check_Y.svg')",
        'square-check-no': "url('/icon/icon_square_check_N.svg')",
        'custom-gradient': 'linear-gradient(to bottom, #FFF5F0, #FFFFFF)',
        'circle-check-yes': "url('@/public/icon/icon_circle_check_Y.svg')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const centerUtilities = {
        '.absolute-center': {
          '@apply absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2':
            {},
        },
        '.flex-center': {
          '@apply flex justify-center items-center': {},
        },
      };
      const typoUtilities = {
        '.typo-heading-20-semibold': {
          'font-size': '20px',
          'font-weight': 600,
          'line-height': '150%',
          'letter-spacing': '-0.02em',
        },
      };
      const inputDatePlaceholderUtilities = {
        '.input-date-placeholder::-webkit-calendar-picker-indicator': {
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          background: 'transparent',
          cursor: 'pointer',
        },
        '.input-date-placeholder': {
          appearance: 'none', // 기본 캘린더 아이콘 숨기기
          '-webkit-appearance': 'none', // 웹킷 브라우저에서 기본 아이콘 숨기기
          '-moz-appearance': 'textfield', // Firefox에서 기본 아이콘 숨기기
          position: 'relative',
          color: 'transparent',
          fontFamily: 'inherit', // 기본 폰트 스타일
          padding: '0.5rem', // 기본 패딩 추가
        },
        '.input-date-placeholder::before': {
          position: 'absolute',
          left: '32px',
          top: '50%',
          transform: 'translateY(-50%)',
          paddingLeft: '0.75rem',
          color: '#6B7280', // 텍스트 색상 (gray-500)
          pointerEvents: 'none', // 클릭 이벤트 무시
          width: '100%',
          whiteSpace: 'nowrap',
          zIndex: '1000',
        },
        '.input-date-placeholder:focus::before, .input-date-placeholder:valid::before':
          {
            display: 'none', // 날짜 선택 후 placeholder 숨기기
          },
      };

      addUtilities({
        ...typoUtilities,
        ...centerUtilities,
        ...inputDatePlaceholderUtilities,
      });
    },
  ],
};

export default config;
