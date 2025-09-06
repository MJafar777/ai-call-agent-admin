import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2  px-4 py-3 shadow-md border-zinc-400 ">
        <div className="flex gap-x-2 items-center justify-center md:justify-start">
          <div className="p-2 rounded-xl bg-blue-700 text-white">
            <CallIcon />
          </div>
          <p className="font-bold text-xl">AI Call Agent</p>
        </div>


        <div className='flex gap-x-2 items-center justify-between md:justify-end'>
          <p className="text-xl">Muhammadqodir</p>
          <div className="flex gap-x-2">
            <p className="text-sm px-2 py-1 rounded-full text-white bg-green-300">
              Admin
            </p>


            <Link to="/Login" className="text-sm">
              <LogoutIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
