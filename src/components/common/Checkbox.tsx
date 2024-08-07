import React from 'react';

const Checkbox = ({
  isDisabled = true,
  isChecked = true,
  onChange,
}: {
  isDisabled: boolean;
  isChecked: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <label>
        <input
          id="checkbox"
          type="checkbox"
          value=""
          disabled={isDisabled}
          checked={isChecked}
          onChange={onChange}
          className="w-4 h-4 bg-contain bg-no-repeat bg-square-check-no appearance-none disabled checked:bg-square-check-yes checked:border-none !bg-no-repeat"
        />
      </label>
    </div>
  );
};

export default Checkbox;
