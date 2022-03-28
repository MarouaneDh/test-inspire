import React from 'react'
import banner from "../assets/banner.png"
import "./Banner.css"

const Banner = ({generalLang}) => {
return (
    <div style={{position:"relative"}}>
        <img id='banner' src={banner} alt="banner"></img>
        <div id='text'>
            <div id='big-text'>
                {generalLang==="FR"?<span>Chercher les entreprises</span>:<span>Search the most</span>}
                {generalLang==="FR"?<span>les plus responsables</span>:<span>responsible companies</span>}
            </div>
            <div id='small-text'>
                {generalLang === "FR" ?
                    <span>Sautons le pas pour que chaque voix compte quand il s'agit de sauver ce</span> :
                    <span>Let's take the leap to make every voice count when it comes</span>
                }
                {generalLang==="FR"?<span>que nous avons de plus précieux</span>:<span>to saving what we hold most precious</span>}
            </div>
            <div id='play-video'>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
                    <g id="play" transform="translate(-146 -533)">
                        <path id="Tracé_3683" data-name="Tracé 3683" d="M26,0A26,26,0,1,1,0,26,26,26,0,0,1,26,0Z" transform="translate(146 533)" fill="#fff"/>
                        <path id="Polygone_1" data-name="Polygone 1" d="M10.5,0,21,18H0Z" transform="translate(183.5 548.5) rotate(90)" fill="#0c263b"/>
                    </g>
                </svg>
                {generalLang==="FR"?<span>LANCER LA VIDEO</span>:<span>PLAY VIDEO</span>}
            </div>
        </div>
    </div>
)
}

export default Banner