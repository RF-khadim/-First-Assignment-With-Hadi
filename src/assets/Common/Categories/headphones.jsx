import React, { useState } from 'react'
import Navbar from '../Navbar'
import HeadphoneCover from './Headphones/HeadphonesCover.jpg'
import Headphone1 from './Headphones/Headphones.1.jpg'
import Headphone2 from './Headphones/Headphones.2.jpg'
import Headphone3 from './Headphones/Headphones.3.jpg'
import Headphone4 from './Headphones/Headphones.4.jpg'
import Headphone5 from './Headphones/Headphones.5.jpg'
import Headphone6 from './Headphones/Headphones.6.jpg'
import Headphone7 from './Headphones/Headphones.7.jpg'
import Headphone8 from './Headphones/Headphones.8.jpg'
import Headphone9 from './Headphones/Headphones.9.jpg'
import Headphone10 from './Headphones/Headphones.10.jpg'
import Headphone11 from './Headphones/Headphones.11.jpg'
import Headphone12 from './Headphones/Headphones.12.jpg'
import Headphone13 from './Headphones/Headphones.13.jpg'
import Headphone14 from './Headphones/Headphones.14.jpg'
import Headphone15 from './Headphones/Headphones.15.jpg'
import Headphone16 from './Headphones/Headphones.16.jpg'
import Headphone17 from './Headphones/Headphones.17.jpg'
import Headphone18 from './Headphones/Headphones.18.jpg'
import Headphone19 from './Headphones/Headphones.19.jpg'
import Headphone20 from './Headphones/Headphones.20.jpg'
import CardModal from '../../Components/CardModal/CardModal'
import MenShirtCard from '../../Components/MenShirtCard/MenShirtCard'





const ImgComp = ({ img }) => {
    return (
        <img className="object-fill w-full h-full" src={img} />
    )
}

const HeadphonesItems = [

    {
        id: 1,
        title: "Grado- The Bloody Sound",
        Price: 5000,
        discount: 10,
        image: <ImgComp img={Headphone1} />
    },

    {
        id: 2,
        title: "Grado- Spider Silver-Black Boom",
        Price: 5000,
        discount: 10,
        image: <ImgComp img={Headphone2} />
    },

    {
        id: 3,
        title: "Grado- Demon Black-Boom",
        Price: 5000,
        discount: 10,
        image: <ImgComp img={Headphone3} />
    },

    {
        id: 4,
        title: "Grado- Demon Magic",
        Price: 5000,
        discount: 10,
        image: <ImgComp img={Headphone4} />
    },

    {
        id: 5,
        title: "Beats- S&G Amazed",
        Price: 5000,
        discount: 10,
        image: <ImgComp img={Headphone5} />
    },

    {
        id: 6,
        title: "Bests- Indi Pro",
        Price: 7200,
        discount: 10,
        image: <ImgComp img={Headphone6} />
    },

    {
        id: 7,
        title: "SoundCore The B&R Beast",
        Price: 8100,
        discount: 10,
        image: <ImgComp img={Headphone7} />
    },

    {
        id: 8,
        title: "Sony- Luster Smooth Sound",
        Price: 5000,
        discount: 10,
        image: <ImgComp img={Headphone8} />
    },

    {
        id: 9,
        title: "Sony- Metalic Red HQS",
        Price: 9000,
        discount: 10,
        image: <ImgComp img={Headphone9} />
    },

    {
        id: 10,
        title: "AKG- Black Beast",
        Price: 6300,
        discount: 10,
        image: <ImgComp img={Headphone10} />
    },

    {
        id: 11,
        title: "STAX The Indigo Star",
        Price: 7200,
        discount: 10,
        image: <ImgComp img={Headphone11} />
    },

    {
        id: 12,
        title: "Bose- Bisque Base (3B)",
        Price: 8100,
        discount: 10,
        image: <ImgComp img={Headphone12} />
    },

    {
        id: 13,
        title: "UBL The Magic Build",
        Price: 7200,
        discount: 10,
        image: <ImgComp img={Headphone13} />
    },

    {
        id: 14,
        title: "Sony- Blue 2D Factor",
        Price: 8100,
        discount: 10,
        image: <ImgComp img={Headphone14} />
    },

    {
        id: 15,
        title: "Audionic Base Factor",
        Price: 6000,
        discount: 10,
        image: <ImgComp img={Headphone15} />
    },

    {
        id: 16,
        title: "Beats- Gold HQ Sound ",
        Price: 9000,
        discount: 10,
        image: <ImgComp img={Headphone16} />
    },

    {
        id: 17,
        title: "AkG- Pro Pink",
        Price: 8200,
        discount: 10,
        image: <ImgComp img={Headphone17} />
    },

    {
        id: 18,
        title: "AkG- Orange Monster",
        Price: 8200,
        discount: 10,
        image: <ImgComp img={Headphone18} />
    },

    {
        id: 19,
        title: "Focal- Pro Blue Neon",
        Price: 9900,
        discount: 10,
        image: <ImgComp img={Headphone19} />
    },

    {
        id: 20,
        title: "Focal- Balck Neon",
        Price: 9000,
        discount: 10,
        image: <ImgComp img={Headphone20} />
    },
]

const Headphones = () => {

    const [popUp, setPopUp] = useState("");
    const handleClick = (item) => {
        setPopUp(item);
    };

    return (
        <div>
            <Navbar />
            <div className=' flex items-center justify-center mt-[100px] border-2 bg-gray-500/20 -z-0'>

                <img className='w-auto h-[280px] object-fill overflow-hidden' src={HeadphoneCover} alt="" />
                <div className=' mt-[100px] w-full h-[280px] opacity-60 z-10 bg-black absolute top-0 left-0'></div>

                <div className='flex items-center justify-center flex-col z-20 absolute'>
                    <h1 className=' lg:text-5xl lg:font-extrabold lg:py-2 lg:mb-3 text-white sm:text-2xl sm:mb-2 sm:py-1 sm:font-bold font-bold text-2xl mb-2 text-center py-1'>ShopIN - Doesnt Compromise On The Quality</h1>
                    <p className='text-white Lg:text-xl lg:w-[900px] text-center lg:font-medium sm:text-base sm:w-96 w-96 '>We producing the best brands across the world.Easy and fast delivery across the country within given time.</p>

                    <h1 className=" lg:text-5xl lg:font-extrabold lg:py-2 lg:mb-3 text-white sm:text-2xl sm:mb-2 sm:py-1 sm:font-bold font-bold text-2xl mb-2 py-1">High Quality Headphones Colllections</h1>
                </div>

            </div>
            <div className=" w-full h-full grid grid-cols-1 mt-10 lg:grid-cols-4 text-center md:grid-cols-2 sm:grid-cols-1">
                {HeadphonesItems.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(item)}
                        className=" shadow-lg bg-slate-900 w-80 rounded-md mx-auto my-10"
                    >
                        <MenShirtCard item={item} handleClick={handleClick} popUp={popUp} />
                    </div>
                ))}

                {popUp && <CardModal item={popUp} setPopUp={setPopUp} />}
            </div>

        </div>
    )
}

export default Headphones