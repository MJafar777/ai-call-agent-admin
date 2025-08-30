import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const LeadsDetails = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      phone: "+1234567890",
      status: "Javob berdi",
      callsCount: 5,
      date: "2023-10-01"
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "+0987654321",
      status: "Javob bermadi",
      callsCount: 3,
      date: "2023-10-02"
    },
    {
      id: 3,
      name: "Alice Johnson",
      phone: "+1122334455",
      status: "Kutayotgan",
      callsCount: 1,
      date: "2023-10-03"
    },
    {
      id: 4,
      name: "Bob Brown",
      phone: "+2233445566",
      status: "Javob berdi",
      callsCount: 2,
      date: "2023-10-04"
    }
  ]
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LEAD MA'LUMOTLAR</th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HOLAT</th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{"QO'NG'IROQLAR SONI"}</th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{"OXIRGI QO'NG'IROQLAR"}</th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className='flex gap-x-3'>
                    <div className='flex justify-center items-center text-zinc-500 bg-zinc-300 p-3 rounded-full'>
                      <PermIdentityIcon />
                    </div>
                    <div className='flex flex-col'>
                      <p className='font-bold'>{lead.phone}</p>
                      <p className='text-sm text-zinc-500'>{lead.name}</p>
                      
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${lead.status === 'Javob berdi' ? 'bg-green-100 text-green-800' :
                      lead.status === 'Javob bermadi' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'}`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">-</td>
                <td className="px-6 py-4 whitespace-nowrap">-</td>
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
  )
}

export default LeadsDetails;

