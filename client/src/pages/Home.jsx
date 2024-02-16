import { Drop, Location, Notification, Premium, ThemePark, Thunder, TopRight, Tractor } from '../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Button, Category, LandMetrics, PriceOffer } from '../components';

export default function Home() {
  return (
    <div className='ml-[300px] py-10 px-16 flex flex-col gap-20'>
      
      <section className='flex flex-row items-center justify-between'>
        <Button px={6} text="Complete Profile" />
        <img src={Notification} alt="notification" className='h-7'/>
      </section>

      <section className='flex flex-row items-center justify-between'>
        <span className='text-4xl font-bold'>
          Choose your new site
        </span>
        <span>
          Progress
        </span>
      </section>

      <section className='mt-6'>
        <div className='text-gray-400 flex flex-row items-center gap-1'>
          Market <FontAwesomeIcon icon={faAngleRight} className='h-5' /> Category 1 <FontAwesomeIcon icon={faAngleRight} className='h-5' /> Theme park site <FontAwesomeIcon icon={faAngleRight} className='h-5' />
        </div>
        <div>
        <img src={ThemePark} alt="notification" className='mt-7'/>
        </div>
      </section>

      <section className='px-8 py-4 flex flex-row justify-between'>
        <div className='flex flex-col gap-9'>
          <div className='text-4xl font-bold'>
            Theme Park Site
          </div>
          <div className='flex flex-row gap-2'>
            <img src={Location} alt="location-icon" className='h-6' />
            <span className='text-gray-300'>Address of the site</span>
          </div>
          <div className='flex flex-row gap-2 -mt-6'>
            <Category imgSrc={Thunder} text="Adult rides" />
            <Category imgSrc={Drop} text="Family rides" />
            <Category imgSrc={Tractor} text="Restaurants" />
            <Category imgSrc={Premium} text="Premium" />
          </div>
          <div className='flex flex-row gap-2 items-center border border-customBlue w-fit px-2 py-0.5'>
            <img src={TopRight} className='h-4' />
            <span className='text-sm text-customBlue underline'>View opportunity on polygon</span>
          </div>
          <div className='flex flex-row gap-8'>
            <LandMetrics title="200 Acres" subTitle="Area" />
            <LandMetrics title="5 Lacks" subTitle="Starting price" />
            <LandMetrics title="10 days" subTitle="Remaining Days" />
            <LandMetrics title="2.5 years" subTitle="Next check" />
          </div>
        </div>
        <div className='flex flex-col gap-2 flex-grow max-w-72'>
          <Button px={0} text="Complete" />
          <div className='flex justify-end'>
            <button className='w-40 border border-customBlue text-customBlue hover:bg-customBlue hover:text-gray-100 '>
              <div className='flex flex-row justify-center items-center gap-5 py-4'>
                <span>Site visit</span>
                <FontAwesomeIcon icon={faAngleRight} className='h-5' />
              </div>
            </button>
          </div>
          <PriceOffer price={6500000} offerPrice={2000000} />
        </div>
      </section>
      
    </div>
  )
}
