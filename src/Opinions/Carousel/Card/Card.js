import React from 'react'
import selectedStar from "../../../assets/star-selected.svg"
import notSelectedStar from "../../../assets/star-not-selected.svg"
import "./Card.css"

const Card = ({ generalLang,card }) => {
  return (
    <div className='card'>
      <div className='company'>
        <img className='company-logo' src={card.image} alt="company-logo"></img>
        <div className='company-info'>
          <span className='company-name'>{card.name}</span>
          <span className='company-address'>{card.address}</span>
        </div>
      </div>
      <hr/>
      <div className='rating'>
        <div className='stars'>
        {
          card.rate>=1?<img className='star' src={selectedStar} alt="firstStar"></img>:<img className='star' src={notSelectedStar} alt="no star"></img>
          }
          {
          card.rate>=2?<img className='star' src={selectedStar} alt="firstStar"></img>:<img className='star' src={notSelectedStar} alt="no star"></img>
          }
          {
          card.rate>=3?<img className='star' src={selectedStar} alt="firstStar"></img>:<img className='star' src={notSelectedStar} alt="no star"></img>
          }
          {
          card.rate>=4?<img className='star' src={selectedStar} alt="firstStar"></img>:<img className='star' src={notSelectedStar} alt="no star"></img>
          }
          {
          card.rate>=5?<img className='star' src={selectedStar} alt="firstStar"></img>:<img className='star' src={notSelectedStar} alt="no star"></img>
          }
        </div>
        <span className='rate'>{card.rate}</span>
      </div>
      <div className='card-opinion'>
        <span className='card-title'>{card.title}</span>
        <span className='card-text'>{card.text}</span>
      </div>
      <div className='user'>
        <img className='user-image' src={card.userImage} alt=""></img>
        <span className='user-name'>{card.user}</span>
      </div>
    </div>
  )
}

export default Card