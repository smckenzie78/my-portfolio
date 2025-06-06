//import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser,  faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import './navbar.css'
import { poppins } from "@/app/layout";

export default function Navbar(){
    return(
        <div className="h-screen w-full gap-20 flex flex-col justify-center items-center ">
            <Link href={{pathname: './'}}>
                <div className={`buttonclass bg-cyan-600 p-4 rounded-full text-2xl flex items-center justify-between h-[50px] w-[200px] text-gray-200 hover:text-white absolute right-0`}>
                    <span className={`${poppins.className} font-[700] text-sm uppercase`}>Home</span>
                    <FontAwesomeIcon icon={faHouse} className='icon'/>
                </div>
            </Link>
            <Link href={{pathname: '/about'}}>
                <div className={`buttonclass bg-cyan-600 p-4 rounded-full text-2xl flex items-center justify-between h-[50px] w-[200px] text-gray-200 hover:text-white absolute right-0`}>
                    <span className={`${poppins.className} font-[700] text-sm uppercase`}>About</span>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </Link>
            <Link href={{pathname: '/contact'}}>
                <div className={`buttonclass bg-cyan-600 p-4 rounded-full text-2xl flex items-center justify-between h-[50px] w-[200px] text-gray-200 hover:text-white absolute right-0`}>
                    <span className={`${poppins.className} font-[700] text-sm uppercase`}>Contact</span>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
            </Link>
        </div>
    );
}