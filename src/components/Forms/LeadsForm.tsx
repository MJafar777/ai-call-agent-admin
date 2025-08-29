import PersonPinIcon from '@mui/icons-material/PersonPin';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const LeadsForm = () => {
    return (
        <form className="bg-white/80  w-full flex justify-center rounded-2xl shadow-md">
            <div className="flex flex-col px-5 py-10 bg-zinc-200 justify-center gap-y-4 w-full rounded-lg p-4">
                <div className="flex flex-col ">
                    <label htmlFor="name" className="font-bold text-zinc-600">F/M</label>
                    <div className='flex justify-between border-1 px-3 bg-white border-zinc-300 py-1 rounded-md'>
                        <input type="text" placeholder="Full name.." className=" focus:outline-none font-semibold" id="name" name="name" required />
                        <PersonPinIcon style={{color:"GrayText"}}/>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="name" className="font-bold text-zinc-600">Telifon raqam</label>
                    <div className='flex justify-between border-1 px-3 bg-white border-zinc-300 py-1 rounded-md'>
                        <input type="text" placeholder="Telifon raqam.." className=" focus:outline-none font-semibold" id="name" name="name" required />
                        <LocalPhoneIcon style={{color:"GrayText"}}/>
                    </div>
                </div>
                
               
                <div className='flex justify-between'>
                    <button className='bg-green-300 border-1 hover:cursor-pointer hover:opacity-80 border-green-700 px-4 py-1 text-md font-bold text-green-800 rounded-lg'>Tozalash</button>
                    <button className='bg-blue-300 border-1 hover:cursor-pointer hover:opacity-80 border-blue-700 px-4 py-1 text-md font-bold text-blue-800 rounded-lg'>{"Qo'shish"}</button>
                </div>
            </div>
        </form>
    );
};

export default LeadsForm;