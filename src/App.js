import './assets/css/output.css';
import Img1 from './assets/images/pute.png';
import Img2 from './assets/images/oeil.jpg';
import Img3 from './assets/images/loser.jpeg';
import Movie1 from './assets/videos/movie1.mp4';
import Movie2 from './assets/videos/movie2.mp4';
import Movie3 from './assets/videos/movie3.mp4';
import Cosmogony from './assets/sons/cosmogony.mp3';
import Intrinsic from './assets/sons/intrinsic.mp3';

import React, {useState} from "react";

function App() {
    const [showPhotos, toggleShowPhotos] = React.useState(true);
    const [showVideos, toggleShowVideos] = React.useState(false);
    const [showSons, toggleShowSons] = React.useState(false);
    const [showBoutique, toggleShowBoutique] = React.useState(false);

    const [modalOn1, setModalOn1] = useState(false);
    const [modalOn2, setModalOn2] = useState(false);
    const [modalOn3, setModalOn3] = useState(false);
    const clicked1 = () => {
        setModalOn1(true)
    }
    const clicked2 = () => {
        setModalOn2(true)
    }
    const clicked3 = () => {
        setModalOn3(true)
    }
    const handleCancelClick1 = () => {
        setModalOn1(false)
    }
    const handleCancelClick2 = () => {
        setModalOn2(false)
    }
    const handleCancelClick3 = () => {
        setModalOn3(false)
    }

    return (
            <div className="app">
                <header>
                    <nav className="z-50 fixed w-full h-24 fixed bg-neutral-900">
                        <div className="w-full h-full px-64 flex flex-row justify-between items-center">
                            <div
                                className="w-52 h-20 bg-red1 rounded-2xl flex items-center justify-center border-4 border-black hover:bg-red-900 cursor-pointer"
                                onClick={() => toggleShowPhotos(true) & toggleShowVideos(false) & toggleShowSons(false) & toggleShowBoutique(false)}>
                                <p className="text-3xl text-white">
                                    Photos
                                </p>
                            </div>
                            <div
                                className="w-52 h-20 bg-red1 rounded-2xl flex items-center justify-center border-4 border-black hover:bg-red-900 cursor-pointer"
                                onClick={() => toggleShowVideos(true) & toggleShowPhotos(false) & toggleShowSons(false) & toggleShowBoutique(false)}>
                                <p className="text-3xl text-white">
                                    Vidéos
                                </p>
                            </div>
                            <div
                                className="w-52 h-20 bg-red1 rounded-2xl flex items-center justify-center border-4 border-black hover:bg-red-900 cursor-pointer"
                                onClick={() => toggleShowPhotos(false) & toggleShowVideos(false) & toggleShowSons(true) & toggleShowBoutique(false)}>
                                <p className="text-3xl text-white">
                                    Sons
                                </p>
                            </div>
                            <div
                                className="w-52 h-20 bg-neutral-700 rounded-2xl flex items-center justify-center border-4 border-black cursor-not-allowed"
                                //onClick={() => toggleShowPhotos(false) & toggleShowVideos(false) & toggleShowSons(false) & toggleShowBoutique(true)}
                                >
                                <p className="text-3xl text-white">
                                    Boutique
                                </p>
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
                <body className="w-full h-full">
                {showPhotos && <section className="w-full h-full">
                    <div className="w-full h-full grid grid grid-cols-3 justify-items-center">
                        <div className="relative col-span-1 w-96 h-96 object-cover overflow-hidden my-10 rounded-3xl cursor-pointer" onClick={clicked1}>
                            <img className="absolute w-full h-full object-cover" src={Img1}></img>
                        </div>
                        <div className="relative col-span-1 w-96 h-96 object-cover overflow-hidden my-10 rounded-3xl cursor-pointer" onClick={clicked2}>
                            <img className="absolute w-full h-full object-cover" src={Img2}></img>
                        </div>
                        <div className="relative col-span-1 w-96 h-96 object-cover overflow-hidden my-10 rounded-3xl cursor-pointer" onClick={clicked3}>
                            <img className="absolute w-full h-full object-cover" src={Img3}></img>
                        </div>
                        <div className="relative col-span-1 w-96 h-96 object-cover overflow-hidden my-10 rounded-3xl cursor-pointer" onClick={clicked3}>
                            <img className="absolute w-full h-full object-cover" src={Img3}></img>
                        </div>
                    </div>
                    {modalOn1 &&
                        <div className="fixed inset-0 z-50   ">
                            <div className="flex h-screen justify-center items-center ">
                                <div className="relative bg-opacity-80 flex-col justify-center bg-anthracite my-10 px-24 border-4 border-dark ">
                                    <div className="absolute w-full flex justify-end items-center mb-6 right-0">
                                        <button onClick={handleCancelClick1} className="rounded-full px-4 py-2 m-4 text-white bg-red1">✕</button>
                                    </div>
                                    <img className="relative w-full h-full object-cover my-10" src={Img1}></img>
                                </div>
                            </div>
                        </div>}
                    {modalOn2 &&
                        <div className="fixed inset-0 z-50   ">
                            <div className="flex h-screen justify-center items-center ">
                                    <div className="relative flex-col justify-center bg-anthracite my-10 px-24 border-4 border-dark rounded-xl ">
                                        <div className="absolute w-full flex justify-end items-center mb-6 right-0">
                                            <button onClick={handleCancelClick2} className="rounded-full px-4 py-2 m-4 text-white bg-red1 ">✕</button>
                                        </div>
                                        <img className="relative w-full h-full object-cover my-10" src={Img2}></img>
                                    </div>
                                </div>
                        </div>}

                    {modalOn3 &&
                        <div className="fixed inset-0 z-50   ">
                            <div className="flex h-screen justify-center items-center ">
                                <div className="relative flex-col justify-center bg-anthracite my-10 px-24 border-4 border-dark rounded-xl ">
                                    <div className="absolute w-full flex justify-end items-center mb-6 right-0">
                                        <button onClick={handleCancelClick3} className="rounded-full px-4 py-2 m-4 text-white bg-red1 ">✕</button>
                                    </div>
                                    <img className="relative w-full h-full object-cover my-10" src={Img3}></img>
                                </div>
                            </div>
                        </div>}
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

                    </div>
                </section>}
                {showSons &&
                    <section className="w-full h-full">
                        <div className="w-full h-full flex flex-col items-center justify-center my-6">

                            <div className="flex flex-row w-full my-5 h-72 justify-center items-center my-6">
                                <div className="w-72 h-72 bg-red1"/>
                                <div className="ml-24">
                                    <p className=" text-xl text-white">Cosmogony - _KrikKkrak_</p>
                                    <div className="relative h-12 w-sm overflow-hidden my-5 rounded-3xl">
                                        <audio className="player w-full h-full" controls controlsList="nodownload">
                                            <source src={Cosmogony} type="audio/mp3"/>
                                        </audio>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row w-full my-5 h-72 justify-center items-center my-6">
                                <div className="w-72 h-72 bg-red1"/>
                                <div className="ml-24">
                                    <p className=" text-xl text-white">Intrinsic - _KrikKkrak_</p>
                                    <div className="relative h-12 w-sm overflow-hidden my-5 rounded-3xl">
                                        <audio className="player w-full h-full" controls controlsList="nodownload">
                                            <source src={Intrinsic} type="audio/mp3"/>
                                        </audio>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>}
                {showBoutique &&
                    <section className="">

                    </section>}
                </body>
            </div>
        );
};

export default App;
