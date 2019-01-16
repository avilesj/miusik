import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo.jsx';

let IndexPage = () => {
    return (
        <div id="index-page">
            <Logo/>
            <div id="search-container">
                <div id="search-form-container">
                    <form>
                        <input id="search-input" name="track" type="text" placeholder="Name a track"></input>
                        <button id="search-button" type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
            <main id="content-container" className="centered-container">
                <div id="track-container">
                    <div className="track" style={{background: "url(https://i.scdn.co/image/6f8b24b316e271517026fdb327b1ca940d338eef) no-repeat center/cover"}}>
                        <Link to="/404">
                            <div className="track-info">
                                <div className="track-name">
                                    <h1>Big Things Going Down</h1>
                                </div>
                                <div className="track-artists">
                                    <h2>Dan Patlansky </h2>
                                </div>
                                <div className="track-album">
                                    <h3>Don's Tunes greatest hits</h3>
                                </div>
                            </div>
                            </Link>
                    </div>
                    <div className="track" style={{/*"background: url(https://i.scdn.co/image/3aa37254a41cf96e81572524ec523cb870f2bb89) no-repeat center/cover;"*/}}>
                        <Link to="/track/123id">
                            <div className="track-info">
                                <h1>Sunflower</h1>
                                <h2>Post Malone</h2>
                                <h3>Spider Man: Into the Spiderverse</h3>
                            </div>
                            </Link>
                    </div>
                    <div className="track" style={{/*"background: url(https://i.scdn.co/image/c63b1ae207d03f8966b891471d3d5612ffe0ab5c) no-repeat center/cover;"*/}}>
                        <a href="404.html">
                            <div className="track-info">
                                <h1>Misil en mi Placard</h1>
                                <h2>Soda Stereo</h2>
                                <h3>Soda Stereo Unplugged</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </main>
            <footer>
                Made by José Avilés. Powered by the Spotify API.
                </footer>
        </div>

    )
}

export default IndexPage;