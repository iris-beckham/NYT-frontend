import Forms from "./Forms";
import { Link } from "react-router-dom";
import { writeOutMonth } from "../Helpers/helpers";


const NavBar = ({ searchInputs, setSearchInputs }) => {
  const { day, month, year } = searchInputs;

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full">
      <div className="flex flex-row justify-between">
        <Link to="/" style={{ fontSize: '2rem' }} className="text-white text-4xl font-bold dm-serif-text-regular ml-4 mt-4">Nostalgia News</Link>
        <h1 className="text-white text-4xl font-bold dm-serif-text-regular ml-4 mt-4">{`${writeOutMonth(month)} ${day}, ${year}`}</h1>
        <Forms searchInputs={searchInputs} setSearchInputs={setSearchInputs} />
      </div>
    </nav>
  );
};

export default NavBar;
