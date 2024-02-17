import { Airport, Drop, Highway, Location, Map, Notification, Premium, Progress, ThemePark, Thunder, TopRight, Tractor } from '../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Button, Category, CompleteProfile, ContentBox, Landmarks, LandMetrics, PriceOffer } from '../components';
import { useRef, useState } from 'react';

export default function Home() {
  const tasksContainerRef = useRef(null);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete Profile', subTitle: 'Good job!', completionText: 'Complete', btnTxt: 'Complete', btnTxt2: 'Download', completed: false },
    { id: 2, title: 'Step 1', subTitle: '5% of total amount', completionText: 'Rs 1,00,000', btnTxt: 'Pay', btnTxt2: 'Receipt', completed: false },
    { id: 3, title: 'Step 2', subTitle: '', completionText: 'Complete', btnTxt: 'Pay', btnTxt2: 'Download', completed: false },
    { id: 4, title: 'Step 3', subTitle: 'Back to you in 3 months', completionText: 'Complete', btnTxt: 'Complete', btnTxt2: 'Download', completed: false },
    { id: 5, title: 'Step 4', subTitle: 'Enjoy your stay', completionText: 'Enjoying', btnTxt: 'Complete', btnTxt2: 'Enjoy', completed: false },
    { id: 6, title: 'Step 5', subTitle: 'Good Bye!', completionText: 'Visit again', btnTxt: 'Finish', btnTxt2: 'Do Again', completed: false },
  ]);
  
  const toggleTaskCompletion = (taskId) => {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  };

  const scrollToTasks = () => {
    tasksContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='ml-[70px] md:ml-[300px] py-10 px-5 lg:px-16 flex flex-col gap-10 lg:gap-20'>
      
      <section className='flex flex-row items-center justify-between'>
        <Button px={6} text="Complete Profile" onClick={scrollToTasks} />
        <img src={Notification} alt="notification" className='h-5 md:h-7'/>
      </section>

      <section className='flex flex-row items-center justify-between'>
        <span className='text-2xl md:text-4xl font-bold'>
          Choose your new site
        </span>
        <img src={Progress} alt="Progress" className='h-5 hidden lg:inline' />
      </section>

      <section className='md:mt-6 text-xs'>
        <div className='text-gray-400 flex flex-row items-center gap-1'>
          Market <FontAwesomeIcon icon={faAngleRight} className='lg:h-5' /> Category 1 <FontAwesomeIcon icon={faAngleRight} className='lg:h-5' /> Theme park site <FontAwesomeIcon icon={faAngleRight} className='lg:h-5' />
        </div>
        <div>
        <img src={ThemePark} alt="notification" className='mt-7'/>
        </div>
      </section>

      <section className='lg:px-8 lg:py-4 flex flex-col lg:flex-row lg:justify-between'>
        <section className='flex flex-col gap-5 lg:gap-9 lg:w-2/3'>
          <div className='text-2xl lg:text-4xl font-bold'>
            Theme Park Site
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <img src={Location} alt="location-icon" className='h-3 lg:h-6' />
            <span className='text-gray-300 text-sm md:text-base'>
              Address of the site
            </span>
          </div>
          <div className='flex flex-col lg:flex-row gap-1 lg:gap-2 -mt-3 lg:-mt-6'>
            <div className='flex flex-row gap-[27px] lg:gap-2'>
              <Category imgSrc={Thunder} text="Adult rides" />
              <Category imgSrc={Drop} text="Family rides" />
            </div>
            <div className='flex flex-row gap-[20px] lg:gap-2'>
              <Category imgSrc={Tractor} text="Restaurants" />
              <Category imgSrc={Premium} text="Premium" />
            </div>
          </div>
          <div className='flex flex-row gap-2 items-center border border-customBlue w-fit px-2 py-0.5 cursor-pointer'>
            <img src={TopRight} className='h-4' />
            <span className='text-sm text-customBlue underline'>
              View opportunity on polygon
            </span>
          </div>
          <div className='flex flex-col lg:flex-row gap-4 lg:gap-8'>
            <LandMetrics title="200 Acres" subTitle="Area" />
            <LandMetrics title="5 Lacks" subTitle="Starting price" />
            <LandMetrics title="10 days" subTitle="Remaining Days" />
            <LandMetrics title="2.5 years" subTitle="Next check" />
          </div>
        </section>

        <section className='flex flex-col gap-2 flex-grow max-w-auto lg:max-w-72 mt-6 lg:mt-0'>
          <Button px={0} text="Complete" onClick={scrollToTasks} />
          <div className='flex justify-end'>
            <button className='w-40 border border-customBlue text-customBlue hover:bg-customBlue hover:text-gray-100 '>
              <div className='flex flex-row justify-center items-center gap-5 py-4'>
                <span>Site visit</span>
                <FontAwesomeIcon icon={faAngleRight} className='h-5' />
              </div>
            </button>
          </div>
          <PriceOffer price={6500000} offerPrice={2000000} />
        </section>
      </section>

      <section className='lg:px-8 lg:py-4 flex flex-col lg:flex-row justify-between gap-5'>
        <div className='lg:w-1/2 flex flex-col gap-16'>
          <ContentBox title="Overview" />
          <ContentBox title="Why ?" />
          <ContentBox title="What ?" />
          <div className='flex flex-col gap-5'>
            <div className='text-3xl'>Landmarks</div>
            <div className='px-3 flex flex-col gap-3'>
              <Landmarks imgSrc={Airport} distance="100" destination="Airport" subDestination="Airport 1" />
              <Landmarks imgSrc={Airport} distance="25" destination="Airport" subDestination="Green Which Terminal" />
              <Landmarks imgSrc={Highway} distance="100" destination="Highway" subDestination="Highway number 5" />
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='text-3xl'>Map</div>
            <img src={Map} alt="map-img" />
            <div className='flex justify-end'>
              <button className='w-40 border border-customBlue text-customBlue hover:bg-customBlue hover:text-gray-100 '>
                <div className='flex flex-row justify-center items-center gap-5 py-4'>
                  <span>Schedule a call</span>
                  <FontAwesomeIcon icon={faAngleRight} className='h-5' />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className='lg:w-1/2 -mt-5' ref={tasksContainerRef}>
          {tasks.map(task => (
            <CompleteProfile 
              key={task.id} 
              title={task.title} 
              subTitle={task.subTitle}
              completionText={task.completionText}
              btnTxt={task.btnTxt}
              btnTxt2={task.btnTxt2}
              completed={task.completed} 
              onComplete={() => toggleTaskCompletion(task.id)} 
            />
          ))}
        </div>
      </section>
      
    </div>
  )
}
