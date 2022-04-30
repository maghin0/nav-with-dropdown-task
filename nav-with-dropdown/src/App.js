import './App.css';
import NavBar from './components/navBar';
//import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive';

import heromob from './images/image-hero-mobile.png';
import herodesk from './images/image-hero-desktop.png';

import clientaudio from './images/client-audiophile.svg';
import clientdatabiz from './images/client-databiz.svg';
import clientmaker from './images/client-maker.svg';
import clientmeet from './images/client-meet.svg';

const App = () => {
  // const isBigScreen = useMediaQuery({ minDeviceWidth: 1224 });
  // const isMobile = useMediaQuery({ minDeviceWidth: 450 });
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait) ' }); //if phone is large
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' }); //use high quailty imgs

  return (
    <div>
      <NavBar />
      <div className="flex flex-col md:flex-row-reverse flex-auto container mx-auto px-4 my-10">
        {/* {isMobile && <img src={heromob} />}
        {isBigScreen && <img scr={herodesk} />} */}
        {/* <MediaQuery minWidth={1224}>
          <img src={herodesk} alt="img desktop" />
        </MediaQuery>
        <MediaQuery maxWidth={500}>
          <img src={heromob} alt="img mobile" />
        </MediaQuery> */}
        <div className="">
          <picture>
            <source media="(min-width: 1024px)" srcSet={herodesk} />
            <img src={heromob} alt="" styleName="brain-image" />
          </picture>
        </div>

        <div className="flex-auto container mx-auto md:mx-12 px-4 mt-12 md:pt-24   ">
          <div className="space-y-8 md:space-y-16">
            <h1 className="flex text-center md:text-left text-5xl md:text-8xl font-bold md:w-5/6 ">
              Make remote work
            </h1>
            <p className=" flex place-content-center text-center md:text-left  text-xl md:text-2xl md:w-4/5 text-gray-500 decoration-4">
              Get your team in sync. no matter your location. Streamline
              processes, create team rituals, and watch productivity soar
            </p>
            <div className="flex place-content-center md:place-content-start md:text-left">
              <a
                href="#"
                className="w-1/3 md:w-1/5 flex justify-center md:justify-left px-2 py-2 border border-transparent rounded-xl shadow-sm text-base md:text-lg font-medium  text-white bg-black hover:bg-white hover:text-black"
              >
                <p className="mb-1">Learn more</p>
              </a>
            </div>
          </div>
          <div class="columns-4 mx-2 md:mx-4 mt-16 md:mt-32 mb-24">
            <img src={clientdatabiz} alt="clientdatabiz" />
            <img src={clientaudio} alt="audiophile" />
            <img src={clientmeet} alt="clientmeet" />
            <img src={clientmaker} alt="clientmaker" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
