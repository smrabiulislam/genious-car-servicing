import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import './Banner.css';


const Bannar = () => {
    return (
        <div className="carousel w-full mb-4">
            <div id="slide1" className="carousel-item relative w-full  ">
                <div className='img-gradient '>
                    <img src={img1} className="w-full rounded-lg " />
                </div>
                <div className=" mt-16 absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 ">
                    <h1 className='text-6xl font-bold text-white text-left'>
                        Afforable <br />
                        Price for Car <br />
                        Servicing <br />
                    </h1>
                </div>
                <div className="  absolute flex justify-end transform -translate-y-1/2 left-24  top-2/4 ">
                    <p className='  text-xl  text-white'>
                        There is many Variations of Passages of Available,But <br />
                        The Majority Have Suffered Alteration in some form.
                    </p>
                </div>
                <div className=" -mt-28 absolute flex justify-end transform -translate-y-1/2 left-24  top-3/4 ">
                    <button className="btn btn-warning mr-2">Discover More</button>
                    <button className="btn btn-outline btn-accent ml-2">Latest Project</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={img2} className="w-full rounded-lg " />
                </div>
                <div className=" mt-16 absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 ">
                    <h1 className='text-6xl font-bold text-white text-left'>
                        Afforable <br />
                        Price for Car <br />
                        Servicing <br />
                    </h1>
                </div>
                <div className="  absolute flex justify-end transform -translate-y-1/2 left-24  top-2/4 ">
                    <p className='  text-xl  text-white'>
                        There is many Variations of Passages of Available,But <br />
                        The Majority Have Suffered Alteration in some form.
                    </p>
                </div>
                <div className=" -mt-28 absolute flex justify-end transform -translate-y-1/2 left-24  top-3/4 ">
                    <button className="btn btn-warning mr-2">Discover More</button>
                    <button className="btn btn-outline btn-accent ml-2">Latest Project</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={img3} className="w-full rounded-lg " />
                </div>
                <div className=" mt-16 absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 ">
                    <h1 className='text-6xl font-bold text-white text-left'>
                        Afforable <br />
                        Price for Car <br />
                        Servicing <br />
                    </h1>
                </div>
                <div className="  absolute flex justify-end transform -translate-y-1/2 left-24  top-2/4 ">
                    <p className='  text-xl  text-white'>
                        There is many Variations of Passages of Available,But <br />
                        The Majority Have Suffered Alteration in some form.
                    </p>
                </div>
                <div className=" -mt-28 absolute flex justify-end transform -translate-y-1/2 left-24  top-3/4 ">
                    <button className="btn btn-warning mr-2">Discover More</button>
                    <button className="btn btn-outline btn-accent ml-2">Latest Project</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={img5} className="w-full rounded-lg " />
                </div>
                <div className=" mt-16 absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 ">
                    <h1 className='text-6xl font-bold text-white text-left'>
                        Afforable <br />
                        Price for Car <br />
                        Servicing <br />
                    </h1>
                </div>
                <div className="  absolute flex justify-end transform -translate-y-1/2 left-24  top-2/4 ">
                    <p className='  text-xl  text-white'>
                        There is many Variations of Passages of Available,But <br />
                        The Majority Have Suffered Alteration in some form.
                    </p>
                </div>
                <div className=" -mt-28 absolute flex justify-end transform -translate-y-1/2 left-24  top-3/4 ">
                    <button className="btn btn-warning mr-2">Discover More</button>
                    <button className="btn btn-outline btn-accent ml-2">Latest Project</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Bannar;