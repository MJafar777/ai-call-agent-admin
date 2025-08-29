import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const OperatorsDetails = () => {
  const [visibleRow, setVisibleRow] = useState<number | null>(null); 

  const data = [
    {
      fullName: "Alijon Karimov",
      phone: "+998901234567",
      email: "alijon@example.com",
      password: "alijon123",
    },
    {
      fullName: "Dilshod Akramov",
      phone: "+998907654321",
      email: "dilshod@example.com",
      password: "dilshod456",
    },
    {
      fullName: "Malika Rasulova",
      phone: "+998909876543",
      email: "malika@example.com",
      password: "malika789",
    },
  ];

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ISM FAMILIYA</th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TELIFON RAQAM</th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EMAIL ADRESS</th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PASSWORD</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((lead, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className='flex gap-x-3'>
                    <div className='flex justify-center items-center text-zinc-500 bg-zinc-300 p-3 rounded-full'>
                      <PermIdentityIcon />
                    </div>
                    <div className='flex flex-col'>
                      <p className='font-bold'>{lead.fullName}</p>
                      <p className='text-sm text-zinc-500'>{lead.phone}</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span>{lead.email}</span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className='flex justify-between gap-x-2 items-center'>
                    <p>
                      {visibleRow === index
                        ? <span>{lead.password}</span>
                        : <span className='text-zinc-500'>●●●●●●●●●</span>}
                    </p>
                    <button
                      onClick={() =>
                        setVisibleRow(visibleRow === index ? null : index)
                      }
                      className='text-blue-600 hover:underline text-sm'
                    >
                      {visibleRow === index ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                    </button>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className='flex justify-center items-center gap-x-2'>
                    <EditNoteIcon className='text-zinc-500 cursor-pointer' />
                    <DeleteOutlineIcon className='text-red-900 cursor-pointer' />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OperatorsDetails;
