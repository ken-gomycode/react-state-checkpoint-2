import {FC, useCallback} from "react";

type Props = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ActionButton: FC<Props> = ({ disabled, label, onClick }) => {
  const handleClick = useCallback(() => {
    if (!disabled && onClick) {
      onClick();
    }
  }, [disabled, onClick]);

  if (disabled) {
    return (
      <button disabled className="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded cursor-not-allowed">
        {label}
      </button>
    );
  }

  return (
    <button onClick={handleClick} className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out">
      {label}
    </button>
  );
}

export default ActionButton;