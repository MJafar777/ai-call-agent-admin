import SearchIcon from '@mui/icons-material/Search';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LeadsDetails from './LeadsDetails';
import LeadsForm from '../../../components/Forms/LeadsForm';
import DownloadIcon from '@mui/icons-material/Download';
import { useState } from 'react';
const Leads = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen flex flex-col gap-y-4 bg-zinc-100 pt-10 py-5 p-1 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 justify-between px-7 py-7 items-center rounded-2xl bg-white shadow-md">
        <div className='flex  border-1 border-zinc-200 px-1 py-1   rounded-md '>
          <SearchIcon style={{ color: "grey" }} />
          <input type="text" placeholder='Tel raqami yoki ism bilan...' className="w-60 px-2 focus:outline-none" />
        </div>
        <div className='flex justify-end gap-x-2'>
          <button className='bg-blue-800 p-2 flex justify-center items-center rounded-full text-white hover:cursor-pointer hover:shadow-xl hover:bg-blue-500 transform transition-colors hover:text-white'>
            <DownloadIcon />
          </button>
          <button onClick={() => setOpen(true)} className='bg-blue-800 p-2 flex justify-center items-center rounded-full text-white hover:cursor-pointer hover:shadow-xl hover:bg-blue-500 transform transition-colors hover:text-white'>
            <PersonAddAltIcon />
          </button>

        </div>
      </div>
      <div className='bg-white rounded-2xl shadow-md '>
        <div className='p-5'>
          <h2 className='text-lg font-semibold'>Lead Ro'yhati (4)</h2>
        </div>
        <LeadsDetails />
      </div>
      {open && (
        <div className="fixed  inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 font-bold hover:cursor-pointer text-black hover:text-gray-800"
            >
              ✕
            </button>

            <h2 className="text-xl text-center font-semibold mb-4">Operator {"qo'shish"}</h2>

            <LeadsForm />
          </div>
        </div>
      )}
    </div>
  )
}

export default Leads