import { FaHome } from "react-icons/fa";
import { MdOutlineBuild } from "react-icons/md";
import { GiBinoculars } from "react-icons/gi";
import { CiCircleInfo } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { FaBaseballBatBall } from "react-icons/fa6";
import { FaBaseballBall } from "react-icons/fa";
import { GiWinterGloves } from "react-icons/gi";
import { MdSportsCricket } from "react-icons/md";

const NavBar = ({ type, setType }) => {
  const location = useLocation();

  return (
    <div className='w-[250px] h-screen bg-dark-blue flex pt-4 px-3 flex-col'>
      <div className='h-1/2 flex flex-col justify-evenly'>
        <Link to="/" className={`flex justify-between cursor-pointer items-center rounded-md p-3 ${location.pathname === '/' ? 'bg-white bg-opacity-20' : ''}`}>
          <div className='text-white'>Home</div>
          <FaHome style={{ color: 'white' }} />
        </Link>
        <Link to="/build" className={`flex justify-between cursor-pointer items-center rounded-md p-3 ${location.pathname === '/build' ? 'bg-white bg-opacity-20' : ''}`}>
          <div className='text-white'>Build Your Team</div>
          <MdOutlineBuild style={{ color: 'white' }} />
        </Link>
        <Link to="/talentscout" className={`flex justify-between cursor-pointer items-center rounded-md p-3 ${location.pathname === '/talentscout' ? 'bg-white bg-opacity-20' : ''}`}>
          <div className='text-white'>Talent Scout</div>
          <GiBinoculars style={{ color: 'white' }} />
        </Link>
        <Link to="/about" className={`flex justify-between cursor-pointer items-center rounded-md p-3 ${location.pathname === '/about' ? 'bg-white bg-opacity-20' : ''}`}>
          <div className='text-white'>About Us</div>
          <CiCircleInfo style={{ color: 'white' }} />
        </Link>
      </div>
      <hr />
      {(location.pathname === '/build' || location.pathname === '/talentscout') && (
        <div className="h-1/2 flex flex-col justify-evenly">
          <div onClick={() => { setType('Batsmen') }} className={`flex justify-between cursor-pointer items-center rounded-md p-3 ${type === 'Batsmen' ? 'bg-white bg-opacity-20' : ''}`}>
            <div className="text-white">
              Batsman
            </div>
            <FaBaseballBatBall style={{ color: 'white' }} />
          </div>
          <div onClick={() => { setType('Bowlers') }} className={`flex justify-between cursor-pointer items-center rounded-md p-3 ${type === 'Bowlers' ? 'bg-white bg-opacity-20' : ''}`}>
            <div className="text-white">
              Bowler
            </div>
            <FaBaseballBall style={{ color: 'white' }} />
          </div>
          {/* <div onClick={() => { setType('keeper') }} className={`flex justify-between cursor-pointer items-center rounded-md p-3 ${type === 'keeper' ? 'bg-white bg-opacity-20' : ''}`}>
            <div className="text-white">
              Wicket Keepers
            </div>
            <GiWinterGloves style={{ color: 'white' }} />
          </div> */}
          <div onClick={() => { setType('Allrounders') }} className={`flex justify-between cursor-pointer items-center rounded-md p-3 ${type === 'Allrounders' ? 'bg-white bg-opacity-20' : ''}`}>
            <div className="text-white">
              All Rounders
            </div>
            <MdSportsCricket style={{ color: 'white' }} />
          </div>

        </div>
      )

      }
    </div>
  );
};

export default NavBar;
