import React from 'react';
import { TbEdit, TbEye, TbTrash } from 'react-icons/tb';

type ActionProps = {
  onEdit?: () => void;
  onView?: () => void;
  onDelete?: () => void;
};

const Action: React.FC<ActionProps> = ({ onEdit, onView, onDelete }) => {
  return (
    <div className="p-1 bg-gray-100 w-fit rounded-full items-center justify-center flex">
      <button
        onClick={onEdit}
        className="hover:bg-gray-200 p-1.5 rounded-full cursor-pointer transition ease-in-out duration-300 hover:text-blue-500 text-gray-600"
      >
        <TbEdit size={20} />
      </button>
      <hr />
      <button
        onClick={onView}
        className="hover:bg-gray-200 p-1.5 rounded-full  cursor-pointer transition ease-in-out duration-300 hover:text-purple-800 text-gray-600"
      >
        <TbEye size={20} />
      </button>
      <button
        onClick={onDelete}
        className="hover:bg-gray-200 p-1.5 rounded-full  cursor-pointer transition ease-in-out duration-300 hover:text-red-500 text-gray-600"
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
};

export default Action;
