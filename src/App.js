import './assets/css/output.css';
import Img1 from './assets/images/pute.png';
import Img2 from './assets/images/oeil.jpg';
import Img3 from './assets/images/loser.jpeg';
import Movie1 from './assets/videos/movie1.mp4';
import Movie2 from './assets/videos/movie2.mp4';
import Movie3 from './assets/videos/movie3.mp4';
import Cosmogony from './assets/sons/cosmogony.mp3';
import Intrinsic from './assets/sons/intrinsic.mp3';
import PreviousBtn from './assets/svg/previous.svg';
import NextBtn from './assets/svg/next.svg';
import PlayBtn from './assets/svg/play.svg';


import React from "react";


function App() {
    const [showPhotos, toggleShowPhotos] = React.useState(true);
    const [showVideos, toggleShowVideos] = React.useState(false);
    const [showSons, toggleShowSons] = React.useState(false);
    const [showBoutique, toggleShowBoutique] = React.useState(false);
    return (
            <div className="app">
                <header>
                    <nav className="z-50 fixed w-full h-24 fixed bg-neutral-900">
                        <div className="w-full h-full px-64 flex flex-row justify-between items-center">
                            <div
                                className="w-52 h-20 bg-red1 rounded-2xl flex items-center justify-center border-4 border-black hover:bg-red-900 cursor-pointer"
                                onClick={() => toggleShowPhotos(true) & toggleShowVideos(false) & toggleShowSons(false) & toggleShowBoutique(false)}>
                                <a className="text-3xl text-white">
                                    Photos
                                </a>
                            </div>
                            <div
                                className="w-52 h-20 bg-red1 rounded-2xl flex items-center justify-center border-4 border-black hover:bg-red-900 cursor-pointer"
                                onClick={() => toggleShowVideos(true) & toggleShowPhotos(false) & toggleShowSons(false) & toggleShowBoutique(false)}>
                                <a className="text-3xl text-white">
                                    Vidéos
                                </a>
                            </div>
                            <div
                                className="w-52 h-20 bg-red1 rounded-2xl flex items-center justify-center border-4 border-black hover:bg-red-900 cursor-pointer"
                                onClick={() => toggleShowPhotos(false) & toggleShowVideos(false) & toggleShowSons(true) & toggleShowBoutique(false)}>
                                <a className="text-3xl text-white">
                                    Sons
                                </a>
                            </div>
                            <div
                                className="w-52 h-20 bg-neutral-700 rounded-2xl flex items-center justify-center border-4 border-black">
                                <a className="text-3xl text-white">
                                    Boutique
                                </a>
                            </div>

                        </div>
                    </nav>
                    <div className="relative w-full h-96 pt-12 overflow-hidden">
                        <video className="absolute w-full top-24 object-cover" autoPlay loop muted>
                            <source src={Movie1} type="video/mp4"/>
                        </video>
                        <p className="absolute w-full text-center font-graffiti pt-12 pl-5 text-mxl text-white">BOUNCE</p>
                        <p className="absolute w-full text-center font-graffiti pt-12 text-mxl text-red1">BOUNCE</p>
                    </div>
                </header>
                <body>
                {showPhotos && <section className="w-full h-auto">
                    <div className="w-full h-full grid grid grid-cols-3 place-items-center">
                        <div className="relative col-span-1 w-96 h-96 object-cover overflow-hidden my-10 rounded-3xl"
                             onClick="goFullscreen()">
                            <img className="absolute w-full h-full object-cover" src={Img1}></img>
                        </div>
                        <div className="relative col-span-1 w-96 h-96 object-cover overflow-hidden my-10 rounded-3xl"
                             onClick="goFullscreen()">
                            <img className="absolute w-full h-full object-cover" src={Img2}></img>
                        </div>
                        <div className="relative col-span-1 w-96 h-96 object-cover overflow-hidden my-10 rounded-3xl">
                            <img className="absolute w-full h-full object-cover" src={Img3}></img>
                        </div>
                        <div className="relative col-span-1 w-96 h-96 object-cover overflow-hidden my-10 rounded-3xl"
                             onClick="goFullscreen()">
                            <img className="absolute w-full h-full object-cover" src={Img1}></img>
                        </div>
                        <div className="relative col-span-1 w-96 h-96 object-cover overflow-hidden my-10 rounded-3xl"
                             onClick="goFullscreen()">
                            <img className="absolute w-full h-full object-cover" src={Img2}></img>
                        </div>
                        <div className="relative col-span-1 w-96 h-96 object-cover overflow-hidden my-10 rounded-3xl">
                            <img className="absolute w-full h-full object-cover" src={Img3}></img>
                        </div>
                    </div>
                </section>}
                {showVideos && <section className="w-full h-auto">
                    <div className="w-full h-full flex flex-col justify-center place-items-center">

                        <div className="relative h-96 w-50% overflow-hidden my-10 rounded-3xl">
                            <video className="w-full h-full" controls controlsList="nodownload">
                                <source src={Movie1} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="relative h-96 w-50% overflow-hidden my-10 rounded-3xl">
                            <video className="w-full h-full" controls controlsList="nodownload">
                                <source src={Movie2} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="relative h-96 w-50% my-10 rounded-3xl">
                            <video className="w-full h-full" controls controlsList="nodownload">
                                <source className="" src={Movie3} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="relative h-96 w-50% overflow-hidden my-10 rounded-3xl">
                            <video className="w-full h-full" controls controlsList="nodownload">
                                <source src={Movie1} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="relative h-96 w-50% overflow-hidden my-10 rounded-3xl">
                            <video className="w-full h-full" controls controlsList="nodownload">
                                <source src={Movie2} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="relative h-96 w-50% overflow-hidden my-10 rounded-3xl">
                            <video className="w-full h-full" controls controlsList="nodownload">
                                <source src={Movie3} type="video/mp4"/>
                            </video>
                        </div>

                    </div>
                </section>}
                {showSons &&
                    <section className="w-full h-full">
                        <div className="w-full h-full flex flex-col items-center">

                            <div className="grid grid-cols-3 my-5">
                                <div className="col-span-1 w-36 h-36 bg-red1"/>
                                <div className="col-span-2">
                                    <p className=" text-xl text-white">Cosmogony - _KrikkKrak_</p>
                                    <div className="relative h-12 w-96 overflow-hidden my-5 rounded-3xl">
                                        <audio className="player w-full h-full" controls controlsList="nodownload">
                                            <source src={Cosmogony} type="audio/mp3"/>
                                        </audio>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 my-5">
                                <div className="col-span-1 w-36 h-36 bg-red1"/>
                                <div className="col-span-2">
                                    <p className=" text-xl text-white">Intrinsic - _KrikkKrak_</p>
                                    <div className="relative h-12 w-96 overflow-hidden my-5 rounded-3xl">
                                        <audio className="player w-full h-full" controls controlsList="nodownload">
                                            <source src={Intrinsic} type="audio/mp3"/>
                                        </audio>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>}
                {showBoutique &&
                    <section className="w-full h-auto">
                    </section>}
                </body>
            </div>
        );
};

export default App;
