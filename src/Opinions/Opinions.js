import React from 'react'
import Carousel from './Carousel/Carousel'
import "./Opinions.css"

const Opinions = ({generalLang}) => {
return (
    <div id='opinions'>
        <div id='first-text'>
            {
                generalLang === "FR" ?
                <span id='opinions-title'>Derniers avis déposés</span> :
                <span id='opinions-title'>Last notices submitted</span>
            }
            {
                generalLang === "FR" ?
                <span id='opinions-subtitle'>
                    Derniers avis déposés par des utilisateurs
                    inscrits sur la plateforme ou publiés en ligne
                    suite à un audit RSE
                </span> :
                <span id='opinions-subtitle'>
                    Latest reviews posted by users
                    registered on the platform or published online
                    following a CSR audit
                </span>
            }
        </div>
        <div>
            <Carousel generalLang={generalLang} />
        </div>
    </div>
)
}

export default Opinions