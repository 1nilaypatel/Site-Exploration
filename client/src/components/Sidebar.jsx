import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../assets/images';

export default function Sidebar() {
  const location = useLocation();

  return (
    <header className='fixed top-0 w-[80px] md:w-[300px] z-50 h-full'>
      <div className='flex flex-col items-center'>
        <div className='pt-14 pb-7'>
          <img src={Logo} alt="Logo" className='h-10 lg:h-20'/>
        </div>
        <div 
          className='p-7 lg:p-14 lg:text-lg font-thin text-gray-400'
        >
          Cart
        </div>
        <Link 
          to={'/'} 
          className={`p-7 lg:p-14 lg:text-lg font-${location.pathname === '/' ? 'bold' : 'thin'} text-${location.pathname === '/' ? '' : 'gray-400'}`}
        >
          Market
        </Link>
        <div  
          className='p-7 lg:p-14 lg:text-lg font-thin text-gray-400'
        >
          Settings
        </div>
        <Link 
          to={'/sign-up'} 
          className={`p-7 lg:p-14 lg:text-lg font-${location.pathname === '/sign-up' ? 'bold' : 'thin'} text-${location.pathname === '/sign-up' ? '' : 'gray-400'}`}
        >
          Logout
        </Link>
      </div>
    </header>
  )
}
