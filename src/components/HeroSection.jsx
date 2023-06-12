import Lottie from "lottie-react";
import HeroLottie from '../assets/lotties/hero.json';
const HeroSection = () => {
    return (
        <>
            <div className="heroSection flex justify-between items-center max-w-[1240px] mx-auto px-4">
                <div className="heroText">
                    <h1>Hello there</h1>
                </div>
                <Lottie
                    animationData={HeroLottie}
                    width={200}
                />
            </div>
        </>
    );
};

export default HeroSection;