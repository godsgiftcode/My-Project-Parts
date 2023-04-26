import React from 'react'
import { productData } from '../../data/Data'
import './Card.css'
import Top from './top'
import SecondTop from './SecondTop'
import { FaPaperPlane } from "react-icons/fa"


function Card() {
    return (
        <>
        <div className='qq'>
            <Top />
            <SecondTop />
           
            <div className='general-div'>

            {
                productData.map((card) => {
                    return (
                        <div className='div-container'>
                            <div className='img-div'>
                                <img className='image-top-1' src={card.img_path} alt='' />
                            </div>
                            <div className='div-city'>
                            <p className='city-name'>{card.cityName}</p>
                            <p className='city-name'>{card.price}</p>
                            </div>
                            <p className='trip-time'>{card.tripTime}</p>
                            <div>
                            <FaPaperPlane className='gg' />
                            </div>
                        </div>
                    )
                })
            }
            </div>
            </div>
        </>
    )
}

export default Card