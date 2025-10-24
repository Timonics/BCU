import React, { useState } from 'react';
import Logo from '../logo';
import { MemberDetails } from '../../interfaces/member';
import { UnitDetails } from '../../interfaces/unit';
import { BandDetails } from '../../interfaces/bands';
import { useMembership } from '../../hooks/useMembership';

type DeleteModalProps = {
  data: MemberDetails | UnitDetails | BandDetails;
  type: string;
  setDeleteMemberIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeleteModal: React.FC<DeleteModalProps> = ({
  data,
  type,
  setDeleteMemberIsOpen,
}) => {
  const { deleteMember } = useMembership();
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async (id: number) => {
    try {
      setLoading(true);
      if (type === 'member') {
        await deleteMember(id);
      }
      setDeleteMemberIsOpen(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute overflow-hidden rounded-lg top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 flex w-[40%] p-4 shadow-xl shadow-blue-200 bg-white">
      <div className="absolute top-2 -right-50 opacity-5">
        <Logo size={700} width={800} />
      </div>
      <div className="absolute top-2 left-2">
        <Logo size={50} />
      </div>
      <div className="mt-12 border-black w-full p-2 flex flex-col gap-4">
        <h2 className="text-3xl text-red-600 font-bold pops">
          Delete {type.split('')[0].toUpperCase() + type.slice(1)}
        </h2>
        <p>Are you sure you want to delete this {type}</p>
        <div className="flex items-center justify-center gap-8 my-4 pops z-10">
          <button
            onClick={() => setDeleteMemberIsOpen(false)}
            className="border px-5 py-1.5 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => handleDelete(data.id)}
            className={`bg-red-600 hover:bg-red-700 text-white px-5 py-1.5 rounded-lg`}
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
