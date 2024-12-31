import React from 'react';

interface Props {
  id: string;
  checked?: boolean;
  className?: string;
  [key: string]: any;
}

const ToggleSwitch: React.FC<Props> = ({ id, checked = false, className, ...attrs }) => {
  return (
    <label
      htmlFor={id}
      className={`relative flex cursor-pointer items-center ${className}`}
      {...attrs}
    >
      <input type="checkbox" id={id} className="sr-only" defaultChecked={checked} />
      <span
        className={[
          'bg-gray-200 dark:bg-gray-700',
          'border-gray-200 dark:border-gray-600',
          'toggle-bg h-6 w-11 rounded-full border',
        ].join(' ')}
      ></span>
    </label>
  );
};

export default ToggleSwitch;
