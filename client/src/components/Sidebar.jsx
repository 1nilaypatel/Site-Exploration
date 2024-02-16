import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';

export default function Sidebar() {
  const location = useLocation();

  return (
    <header className='fixed top-0 w-[300px] z-50 h-full'>
      <div className='flex flex-col items-center'>
        <div className='pt-14 pb-7'>
          <img src={Logo} alt="Logo" className='h-20'/>
        </div>
        <div 
          className='p-14 text-lg font-thin text-gray-500'
        >
          Cart
        </div>
        <Link 
          to={'/'} 
          className={`p-14 text-lg font-${location.pathname === '/' ? 'bold' : 'thin'} text-${location.pathname === '/' ? '' : 'gray-500'}`}
        >
          Market
        </Link>
        <Link 
          // to={'/'} 
          className='p-14 text-lg font-thin text-gray-500'
        >
          Settings
        </Link>
        <Link 
          to={'/sign-up'} 
          className={`p-14 text-lg font-${location.pathname === '/sign-up' ? 'bold' : 'thin'} text-${location.pathname === '/sign-up' ? '' : 'gray-500'}`}
        >
          Logout
        </Link>
      </div>
    </header>
  )
}
