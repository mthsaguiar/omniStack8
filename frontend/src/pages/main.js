import React from 'react'
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import './main.css'
export default function Main({ match }){
    return(
        <div className="main-container">
            <img src={logo} alt="TindevLogo" />
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="imgdev" />
                    <footer>
                        <strong>Diego Rocketseat</strong>
                        <p>A nice guy.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dilike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="imgdev" />
                    <footer>
                        <strong>Diego Rocketseat</strong>
                        <p>A nice guy.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dilike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="imgdev" />
                    <footer>
                        <strong>Diego Rocketseat</strong>
                        <p>A nice guy.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dilike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="imgdev" />
                    <footer>
                        <strong>Diego Rocketseat</strong>
                        <p>A nice guy.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dilike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="like" />
                        </button>
                    </div>
                </li>
            </ul>

        </div>
    );
}