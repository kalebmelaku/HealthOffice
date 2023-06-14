/* eslint-disable no-unused-vars */
import Lottie from "lottie-react";
import HeroLottie from '../assets/lotties/hero.json';
const HeroSection = () => {
    return (
        <>
    <div id="home" className="pt-8 pb-24 hero gradient relative">
      <div className="max-w-[1240px] px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        
          <h1 className="my-4 text-5xl text-white font-bold leading-tight">
          Somali Region Health Bureau.
          </h1>
          <p className="leading-normal text-white text-2xl mb-8">
          Somali RHB has visioned to see a region of healthy individuals, families and communities
          </p>
          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Contact Us
          </button>
        </div>
  
        <div className="w-full md:w-3/5 py-6 text-center">
        
          <Lottie
          className="w-full md-w-4/5"
                    animationData={HeroLottie}
                    width={150}
                /> 
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1686642048">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div>
</div>
        </>
    );
};

export default HeroSection;