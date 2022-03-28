import React from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import visa from "../../assets/visa.png"
import arrow from "../../assets/arrow.png"
import deloitte from "../../assets/deloitte.png"
import geiq from "../../assets/geiq.png"
import img1 from "../../assets/user-img-1.png"
import img2 from "../../assets/user-img-2.png"
import img3 from "../../assets/user-img-3.png"
import Card from './Card/Card';


const Carousel = ({generalLang}) => {
    const cards = [
        {
            "id": 1,
            "image":visa,
            "name": "Geiq ADI Alpin",
            "address": "ZA - 124 rue de la Prairie, 73420, VOGLANS, France",
            "rate": 2,
            "title": "Contributed in the lorem ipsum",
            "text": "J'ai été très déçu, suite aux événements et échanges avec certaines personnes, j'ai été prise par le geiq. Mais..",
            "user": "User#1",
            "userImage":img1
        },
        {
            "id": 2,
            "image":arrow,
            "name": "Productboard",
            "address": "ZA - 124 rue de la Prairie, 73420, VOGLANS, France",
            "rate": 3.5,
            "title": "Contributed in the lorem ipsum",
            "text": "J'ai été très déçu, suite aux événements et échanges avec certaines personnes, j'ai été prise par le geiq. Mais..",
            "user": "User#2",
            "userImage":img2
        },
        {
            "id": 3,
            "image":deloitte,
            "name": "Geiq ADI Alpin",
            "address": "ZA - 124 rue de la Prairie, 73420, VOGLANS, France",
            "rate": 4,
            "title": "Contributed in the lorem ipsum",
            "text": "J'ai été très déçu, suite aux événements et échanges avec certaines personnes, j'ai été prise par le geiq. Mais..",
            "user": "User#3",
            "userImage":img3
        },
        {
            "id": 4,
            "image":geiq,
            "name": "Geiq ADI Alpin",
            "address": "ZA - 124 rue de la Prairie, 73420, VOGLANS, France",
            "rate": 1,
            "title": "Contributed in the lorem ipsum",
            "text": "J'ai été très déçu, suite aux événements et échanges avec certaines personnes, j'ai été prise par le geiq. Mais..",
            "user": "User#3",
            "userImage":img3
        },
        {
            "id": 5,
            "image":deloitte,
            "name": "Geiq ADI Alpin",
            "address": "ZA - 124 rue de la Prairie, 73420, VOGLANS, France",
            "rate": 3,
            "title": "Contributed in the lorem ipsum",
            "text": "J'ai été très déçu, suite aux événements et échanges avec certaines personnes, j'ai été prise par le geiq. Mais..",
            "user": "User#2",
            "userImage":img2
        }
    ]
return (
    <Swiper
    modules={[ Pagination]}
    spaceBetween={30}
    slidesPerView={3.5}
    pagination={{ clickable: true }}
        breakpoints={{
        0: {
          width: 0,
          slidesPerView: 1,
        },
        600: {
          width: 600,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
       1000: {
          width: 1000,
          slidesPerView: 2.5,
        },
        1200: {
          width: 1200,
          slidesPerView: 3,
        },
      }}
    >
        {
            cards.map((card) => (
                <SwiperSlide key={card.id}>
                    <Card generalLang={generalLang} card={card} />
                </SwiperSlide>
            ))
    }
    </Swiper>
)
}

export default Carousel