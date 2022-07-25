import './assets/css/output.css';
import Movie from './assets/videos/movie.mp4';
import Img1 from './assets/images/pute.png';
import Img2 from './assets/images/oeil.jpg';
import Img3 from './assets/images/loser.jpeg';
import React from "react";


function App() {
    const [showPhotos, toggleShowPhotos] = React.useState(true);
    const [showVideos, toggleShowVideos] = React.useState(false);
    return (
            <div className="app">
                <header>
                    <nav className="z-50 fixed w-full h-24 fixed bg-neutral-900">
                        <div className="w-full h-full px-64 flex flex-row justify-between items-center">
                            <div
                                className="w-52 h-20 bg-red1 rounded-2xl flex items-center justify-center border-4 border-black hover:bg-red-900"
                                onClick={() => toggleShowPhotos(true) & toggleShowVideos(false)}>
                                <a className="text-3xl text-white">
                                    Photos
                                </a>
                            </div>
                            <div
                                className="w-52 h-20 bg-red1 rounded-2xl flex items-center justify-center border-4 border-black hover:bg-red-900"
                                onClick={() => toggleShowVideos(true) & toggleShowPhotos(false)}>
                                <a className="text-3xl text-white">
                                    Vidéos
                                </a>
                            </div>
                            <div
                                className="w-52 h-20 bg-red1 rounded-2xl flex items-center justify-center border-4 border-black hover:bg-red-900"
                                onClick={() => toggleShowPhotos(!showPhotos)}>
                                <a className="text-3xl text-white">
                                    Sons
                                </a>
                                {showPhotos && <div className="h-96 w-96 text-white">Hi there</div>}
                            </div>
                            <div
                                className="w-52 h-20 bg-neutral-700 rounded-2xl flex items-center justify-center border-4 border-black"
                                onClick={() => toggleShowPhotos(!showPhotos)}>
                                <a className="text-3xl text-white">
                                    Boutique
                                </a>
                                {showPhotos && <div className="h-96 w-96 text-white">Hi there</div>}
                            </div>

                        </div>
                    </nav>
                    <div className="relative w-full h-96 pt-12 overflow-hidden">
                        <video className="absolute w-full top-24 object-cover" autoPlay loop muted>
                            <source src={Movie} type="video/mp4"/>
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
                    <div className="w-full h-full grid grid grid-cols-1 place-items-center">
                        <div className="relative col-span-1 w-96 h-40 object-cover overflow-hidden my-10 rounded-3xl">
                            <video className="w-full h-full object-cover" controls>
                                <source src={Movie} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="relative col-span-1 w-96 h-40 object-cover overflow-hidden my-10 rounded-3xl">
                            <video className="w-full h-full object-cover" controls>
                                <source src={Movie} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="relative col-span-1 w-96 h-40 object-cover overflow-hidden my-10 rounded-3xl">
                            <video className="w-full h-full object-cover" controls>
                                <source src={Movie} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="relative col-span-1 w-96 h-40 object-cover overflow-hidden my-10 rounded-3xl">
                            <video className="w-full h-full object-cover" controls>
                                <source src={Movie} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="relative col-span-1 w-96 h-40 object-cover overflow-hidden my-10 rounded-3xl">
                            <video className="w-full h-full object-cover" controls>
                                <source src={Movie} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </section>}
                </body>
            </div>
        );}

export default App;
