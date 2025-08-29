import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
const Header = () => {
  return (
    <header>
      <div className="flex justify-between px-4 py-3 shadow-md border-zinc-400 items-center select-none">
        <div className="flex gap-x-2 items-center justify-center">
          <div className="p-2 rounded-xl bg-blue-700 text-white">
            <CallIcon />
          </div>
          <p className="font-bold text-xl">AI Call Agent</p>
        </div>

        <div className="flex gap-x-2 items-center justify-center">
          <p className="text-xl">Muhammadqodir</p>

          <p className="text-sm px-2 py-1 rounded-full text-white bg-green-300">
            Admin
          </p>

          <Link to="/Login" className="text-sm">
            <LogoutIcon />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
