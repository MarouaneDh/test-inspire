import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"
import menu from "../assets/menu.png"

const Navbar = ({setGeneralLang}) => {
    const [lang, setLang] = useState("FR")
    const [langColor, setLangColor] = useState("#153754")
    const [displayLang, setDisplayLang] = useState("none")
    const [menuOpen, setMenuOpen]= useState(false)
    const displayLangModal = () => {
        displayLang===""?setDisplayLang("none"):setDisplayLang("")
    }
    const toggleLang = () => {
        lang === "FR" ? setLang("EN") : setLang("FR");
    }
    const mouseInLang = () => {
        displayLangModal()
        setLangColor("#EF7171")
    }
    const mouseOutLang = () => {
        displayLangModal()
        setLangColor("#153754")
    }
    const toggleMenu = () => {
        const a = !menuOpen
        setMenuOpen(a)
    }
    useEffect(() => {
        setGeneralLang(lang)
    }, [lang,setGeneralLang])
    
return (
    <div className='navbar'>
        <img src={logo} alt="logo"></img>
        {
            lang === "FR" ?
                <ul id='navbar-ul'>
                    <li>Noter</li>
                    <li id='audit'>Audit RSE</li>
                    <li>Devenir pro</li>
                    <li>Contact</li>
                </ul> :
                <ul id='navbar-ul'>
                    <li>Rate</li>
                    <li id='audit'>CSR Audit</li>
                    <li>Become pro</li>
                    <li>Contact</li>
                </ul>
        }
        <div className='third'>
            <div onMouseEnter={()=>mouseInLang()} onMouseLeave={()=>mouseOutLang()} className='lang'>
                <svg style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" width="15.115" height="15.115" viewBox="0 0 15.115 15.115">
                    <g id="icon-language" transform="translate(-2.25 -2.25)">
                        <path id="Tracé_28637" data-name="Tracé 28637" d="M9.808,16.615A6.808,6.808,0,1,0,3,9.808,6.808,6.808,0,0,0,9.808,16.615Z" transform="translate(0 0)" fill="none" stroke={langColor} strokeLinejoin="round" strokeWidth="1.5"/>
                        <rect id="Rectangle_1008" data-name="Rectangle 1008" width="12.77" height="0.845" transform="translate(3.423 7.131)" fill={langColor} stroke={langColor} strokeLinejoin="round" strokeWidth="0.5"/>
                        <rect id="Rectangle_1009" data-name="Rectangle 1009" width="12.77" height="0.845" transform="translate(3.423 11.639)" fill={langColor} stroke={langColor} strokeLinejoin="round" strokeWidth="0.5"/>
                        <path id="Tracé_28638" data-name="Tracé 28638" d="M12,3s3.381,3.4,3.381,6.808S12,16.615,12,16.615" transform="translate(-2.421 0)" fill="none" stroke={langColor} strokeLinejoin="round" strokeWidth="1.5"/>
                        <path id="Tracé_28639" data-name="Tracé 28639" d="M11.381,3S8,6.4,8,9.808s3.381,6.808,3.381,6.808" transform="translate(-1.345 0)" fill="none" stroke={langColor} strokeLinejoin="round" strokeWidth="1.5"/>
                    </g>
                </svg>
                <span style={{color:`${langColor}`}}>{lang}</span>
                
                    {
                    lang === "FR" ?
                        <div style={{display:`${displayLang}`}} className='lang-choices'>
                            <span className='selected-lang'>Français</span>
                            <span onClick={()=>toggleLang()}>English</span>
                        </div> :
                        <div style={{display:`${displayLang}`}} className='lang-choices'>
                            <span onClick={()=>toggleLang() }>Français</span>
                            <span className='selected-lang'>English</span>
                        </div>
                    }
                
            </div>
            {
                lang==="FR"?<span id='conn'>Connexion</span>:<span id='conn'>Login</span>
            }
            {
                lang==="FR"?<span id='inscrip'>Inscription</span>:<span id='inscrip'>Sign up</span>
            }
        </div>
        <div id='menu'>
            <img onClick={() => toggleMenu()} src={menu} alt="menu"></img>
            {
            menuOpen === true ?
            <div style={{display:"flex",flexDirection:"column",position:"absolute",alignItems:"center",width:"200px",backgroundColor:"white",padding:"25px",transform:"translateX(-70px)"}}>
                <ul style={{display:"flex",flexDirection:"column"}}>
                    <li>Noter</li>
                    <li style={{width:"120px"}} id='audit'>Audit RSE</li>
                    <li style={{width:"100px"}}>Devenir pro</li>
                    <li>Contact</li>
                </ul>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} className='menu-tab'>
                    <div className='lang'>
                        <svg style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" width="15.115" height="15.115" viewBox="0 0 15.115 15.115">
                            <g id="icon-language" transform="translate(-2.25 -2.25)">
                                <path id="Tracé_28637" data-name="Tracé 28637" d="M9.808,16.615A6.808,6.808,0,1,0,3,9.808,6.808,6.808,0,0,0,9.808,16.615Z" transform="translate(0 0)" fill="none" stroke={langColor} strokeLinejoin="round" strokeWidth="1.5"/>
                                <rect id="Rectangle_1008" data-name="Rectangle 1008" width="12.77" height="0.845" transform="translate(3.423 7.131)" fill={langColor} stroke={langColor} strokeLinejoin="round" strokeWidth="0.5"/>
                                <rect id="Rectangle_1009" data-name="Rectangle 1009" width="12.77" height="0.845" transform="translate(3.423 11.639)" fill={langColor} stroke={langColor} strokeLinejoin="round" strokeWidth="0.5"/>
                                <path id="Tracé_28638" data-name="Tracé 28638" d="M12,3s3.381,3.4,3.381,6.808S12,16.615,12,16.615" transform="translate(-2.421 0)" fill="none" stroke={langColor} strokeLinejoin="round" strokeWidth="1.5"/>
                                <path id="Tracé_28639" data-name="Tracé 28639" d="M11.381,3S8,6.4,8,9.808s3.381,6.808,3.381,6.808" transform="translate(-1.345 0)" fill="none" stroke={langColor} strokeLinejoin="round" strokeWidth="1.5"/>
                            </g>
                        </svg>
                        <span onClick={()=>mouseInLang()} style={{color:`${langColor}`}}>{lang}</span>
                            {
                            lang === "FR" ?
                                <div style={{display:`${displayLang}`}} className='lang-choices'>
                                    <span className='selected-lang'>Français</span>
                                    <span onClick={()=>toggleLang()}>English</span>
                                </div> :
                                <div style={{display:`${displayLang}`}} className='lang-choices'>
                                    <span onClick={()=>toggleLang() }>Français</span>
                                    <span className='selected-lang'>English</span>
                                </div>
                            }
                    </div>
                    <span id='conn'>Connexion</span>
                    <span id='inscrip'>Inscription</span>
                </div>
            </div>:
            null
            }
            </div>
    </div>
)
}

export default Navbar