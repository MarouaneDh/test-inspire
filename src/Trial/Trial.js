import React from 'react'
import "./Trial.css"
import bg from "../assets/bg-types.svg"

const Trial = ({generalLang}) => {
return (
    <div id='trial'>
        <div id='trial-blocs'>
            <div className='trial-bloc'>
                {generalLang==="FR"?<span className='trial-title'>PARTICULIERS</span>:<span className='trial-title'>PRIVATES</span>}
                {
                    generalLang==="FR"?
                    <span className='sub-title'>
                        Contribuez à améliorer l'impact des entreprises
                    </span>:
                    <span className='sub-title'>
                        Help improve business impact
                    </span>
                }
                {
                    generalLang==="FR"?
                    <span className='text'>
                        Ceux et celles qui se sentent concernés par
                        les enjeux actuels et veulent contribuer à
                        l’amélioration du bien-être, de
                        l’environnement et des pratiques économiques
                        peuvent s’inscrire gratuitement sur notre
                        plateforme. Vous trouverez des entreprises
                        avec lesquelles vous interagissez et vous
                        pourrez les noter sur de multiples critères
                        de développement durable
                    </span>:
                    <span className='text'>
                        Those who feel concerned by
                        current issues and want to contribute to
                        improving well-being,
                        environment and economic practices
                        can register for free on our
                        platform. You will find companies
                        with which you interact and you
                        can rate them on multiple criteria
                        sustainable development
                    </span>
                }
                {generalLang==="FR"?<button>Inscription gratuite</button>:<button>Free registration</button>}
            </div>
            <div className='trial-bloc'>
                {generalLang==="FR"?<span className='trial-title'>PROFESSIONNELS</span>:<span className='trial-title'>PROFESSIONALS</span>}
                {
                    generalLang==="FR"?
                    <span className='sub-title'>Evaluez gratuitement votre RSE auprès de vos parties prenantes</span>:
                    <span className='sub-title'>Evaluate your CSR for free with your stakeholders</span>
                }
                {
                    generalLang === "FR" ?
                    <span className='text'>
                        Les principes de la norme ISO 26000
                        établissent la référence mondiale en matière
                        de développement durable. Pourtant, ils sont
                        impossibles à estimer sans le retour de ses
                        parties prenantes. Nos solutions d’audits RSE
                        pour toutes les tailles d’entreprises
                        permettent d’évaluer la performance de ces
                        critères
                    </span> :
                    <span className='text'>
                        The principles of the ISO 26000 standard set
                        the global benchmark for sustainability.
                        However, they are impossible to estimate
                        without feedback from its stakeholders. Our
                        CSR audit solutions for all sizes of companies
                        make it possible to assess the performance of
                        these criteria
                    </span>
                }
                {generalLang==="FR"?<button>Je découvre les audits RSE</button>:<button>I discover CSR audits</button>}
            </div>
        </div>
        <img id="bg" src={bg} alt="background-img"></img>
    </div>
)
}

export default Trial