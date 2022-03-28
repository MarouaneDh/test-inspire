import React from 'react'
import "./Footer.css"
import logo from "../assets/logo-footer.png"

const Footer = ({generalLang}) => {
return (
    <div className='footer'>
        <div>
            <img id='logo' src={logo} alt="logo"></img>
            <div>
                <svg id="in" xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43">
                    <circle id="Ellipse_3" data-name="Ellipse 3" cx="21.5" cy="21.5" r="21.5" fill="none" opacity="0"/>
                    <path id="Forma_1" data-name="Forma 1" d="M231.5,47.65h-3.858V36.076H231.5Zm-1.929-13.761a2.315,2.315,0,1,1,2.315-2.315A2.305,2.305,0,0,1,229.575,33.889ZM245.652,47.65h-3.858V40.835a1.929,1.929,0,1,0-3.859,0V47.65h-3.858V36.076h3.858v1.543a4.155,4.155,0,0,1,3.215-1.8,4.556,4.556,0,0,1,4.5,4.5Z" transform="translate(-214.55 -17.702)" fill="#fff"/>
                </svg>
                <svg id="twitter" xmlns="http://www.w3.org/2000/svg" width="43.302" height="43.302" viewBox="0 0 43.302 43.302">
                    <path id="Tracé_1871" data-name="Tracé 1871" d="M21.651,0A21.651,21.651,0,1,1,0,21.651,21.651,21.651,0,0,1,21.651,0Z" fill="none" opacity="0"/>
                    <path id="Forma_1" data-name="Forma 1" d="M137.354,27.318a8.589,8.589,0,0,1-2.729,1.056A4.253,4.253,0,0,0,131.492,27,4.324,4.324,0,0,0,127.2,31.35a4.435,4.435,0,0,0,.111.991,12.138,12.138,0,0,1-8.851-4.547,4.4,4.4,0,0,0,1.329,5.81,4.244,4.244,0,0,1-1.945-.546v.054a4.344,4.344,0,0,0,3.444,4.269,4.3,4.3,0,0,1-1.131.153,4.225,4.225,0,0,1-.809-.08,4.309,4.309,0,0,0,4.01,3.024,8.544,8.544,0,0,1-5.332,1.862A8.962,8.962,0,0,1,117,42.281a12.044,12.044,0,0,0,6.583,1.955c7.9,0,12.217-6.633,12.217-12.384l-.014-.564a8.7,8.7,0,0,0,2.146-2.25,8.477,8.477,0,0,1-2.465.686A4.367,4.367,0,0,0,137.354,27.318Z" transform="translate(-105.722 -13.982)" fill="#fff"/>
                </svg>
                <svg id="fb" xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43">
                    <circle id="Ellipse_1" data-name="Ellipse 1" cx="21.5" cy="21.5" r="21.5" fill="none" opacity="0"/>
                    <path id="Forma_1" data-name="Forma 1" d="M169.932,52.255V42.988h-3V38.9h3V37.306c0-2.747,2.063-5.221,4.6-5.221h3.3v4.089h-3.3c-.362,0-.784.438-.784,1.1V38.9h4.089v4.089h-4.089v9.267Z" transform="translate(-150.885 -19.537)" fill="#fff"/>
                </svg>
                <svg id="youtube" xmlns="http://www.w3.org/2000/svg" width="44" height="43" viewBox="0 0 44 43">
                    <ellipse id="Ellipse_8" data-name="Ellipse 8" cx="22" cy="21.5" rx="22" ry="21.5" fill="none" opacity="0"/>
                    <path id="Forma_1" data-name="Forma 1" d="M311.908,41.336H310.67l.006-.712a.58.58,0,0,1,.583-.575h.079a.581.581,0,0,1,.585.575Zm-4.646-1.526a.528.528,0,0,0-.571.465v3.463a.585.585,0,0,0,1.144,0V40.274A.528.528,0,0,0,307.262,39.809Zm7.545-1.936V44.46a2.989,2.989,0,0,1-3.077,2.873H299.077A2.989,2.989,0,0,1,296,44.46V37.873A2.989,2.989,0,0,1,299.077,35H311.73A2.99,2.99,0,0,1,314.807,37.873Zm-14.886,7.3V38.236h1.569V37.209l-4.181-.006v1.01l1.305,0v6.958Zm4.7-5.905h-1.308v3.705a6.462,6.462,0,0,1,0,.9c-.106.287-.584.592-.771.031a7.323,7.323,0,0,1,0-.9l-.005-3.731h-1.3l0,3.672c0,.563-.013.983,0,1.173.032.337.021.729.336.953a1.587,1.587,0,0,0,2-.662l0,.765h1.05v-5.9Zm4.184,4.243,0-3.085c0-1.175-.889-1.879-2.1-.928l.005-2.293-1.306,0-.006,7.914,1.074-.015.1-.493C307.946,45.862,308.808,45.008,308.807,43.514Zm4.093-.41-.981.006c0,.039,0,.083,0,.131v.541a.533.533,0,0,1-.536.526h-.192a.533.533,0,0,1-.536-.526V42.358H312.9v-.836a13.12,13.12,0,0,0-.067-1.571c-.161-1.105-1.729-1.281-2.521-.715a1.462,1.462,0,0,0-.549.73,4.069,4.069,0,0,0-.167,1.3v1.839C309.595,46.166,313.347,45.734,312.9,43.1Zm-5.03-9.982a.881.881,0,0,0,.314.393.921.921,0,0,0,.535.147.837.837,0,0,0,.5-.154,1.187,1.187,0,0,0,.367-.464l-.025.508h1.458V27.416h-1.148V32.19a.478.478,0,0,1-.956,0V27.416h-1.2v4.138c0,.527.01.879.025,1.057A1.79,1.79,0,0,0,307.869,33.122Zm-4.417-3.465a5.055,5.055,0,0,1,.148-1.381,1.543,1.543,0,0,1,.536-.8,1.558,1.558,0,0,1,.988-.3,1.824,1.824,0,0,1,.868.193,1.44,1.44,0,0,1,.559.5,1.973,1.973,0,0,1,.27.639,5.027,5.027,0,0,1,.073,1V31.07a8.325,8.325,0,0,1-.068,1.254,1.968,1.968,0,0,1-.287.745,1.361,1.361,0,0,1-.561.511,1.806,1.806,0,0,1-.791.164,2.22,2.22,0,0,1-.843-.14,1.156,1.156,0,0,1-.538-.425,1.878,1.878,0,0,1-.274-.688,6.542,6.542,0,0,1-.081-1.21V29.657Zm1.142,2.436a.581.581,0,1,0,1.158,0V28.828a.581.581,0,1,0-1.158,0Zm-4.034,1.649h1.375V29.038l1.625-4.031h-1.5L301.193,28l-.876-3h-1.488l1.729,4.041Z" transform="translate(-283.753 -15.075)" fill="#fff"/>
                </svg>
            </div>
        </div>
        <div className='blocs'>
            <div className='bloc'>
            <span className='title'>Rate a company</span>
            <div className='inBloc'>
                {generalLang==="FR"?<span>A propos de Rate A company</span>:<span>About Rate A company</span>}
                {generalLang==="FR"?<span>Articles sur la RSE</span>:<span>Articles on CSR</span>}
                {generalLang==="FR"?<span>Vidéos sur la RSE</span>:<span>CSR Videos</span>}
                {generalLang==="FR"?<span>Tarifs</span>:<span>Prices</span>}
                <span>Contact</span>
            </div>
            </div>
            <div className='bloc'>
            {generalLang==="FR"?<span className='title'>Services PRO</span>:<span className='title'> PRO Services</span>}
            <div className='inBloc'>
                {generalLang==="FR"?<span>AUDIT RSE</span>:<span>CSR AUDIT</span>}
                {generalLang==="FR"?<span>Devenir PRO</span>:<span>Become PRO</span>}
            </div>
            </div>
            <div className='bloc'>
            <span className='title'>Legal</span>
            <div className='inBloc'>
                {generalLang==="FR"?<span>Mentions légales</span>:<span>Legal Notices</span>}
                {generalLang==="FR"?<span>Conditions d'utilisation</span>:<span>Terms of use</span>}
                {generalLang==="FR"?<span>Plan du site</span>:<span>Sitemap</span>}
            </div>
        </div>
        </div>
    </div>
)
}

export default Footer