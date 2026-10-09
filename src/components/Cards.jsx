import React, { useState } from 'react'
import "../components/cards.css"
import data from "../burgers.json";

const Cards = () => {

console.log(data);

return (
    <div className='cards' id='menu'>
            <div className="section-title">
            <h1>popular items</h1>
        </div>

    

        <div className="section-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {
                data.map((item)=>{
                    const message = `Hello, I would like to order a ${item.name} at LUXE.`
                    const whatsAapLink = `https://wa.me/9647841664018?text=${encodeURIComponent(message)}`
                    return(
                                            <div className="card" key={item.id}>
                <div className="img">
                    <img src={item.image} alt="" />
                </div>
                <div className="title-card">
                    <h1>{item.name}</h1>
                    <span>${item.price}</span>
                </div>
                <div className="discription">
                    <p>{item.description}</p>
                </div>
                <div className="button">
                    <a  href={whatsAapLink}
                        target="_blank"
                        rel="noopener noreferrer"><i class="bi bi-cart3"></i> Order Now</a>
                </div>
            </div>
                    )

                })
            }

        </div>

    </div>
  )
}

export default Cards