import React, { useEffect, useState } from 'react';
import mnustyl from "./menu.module.css"
import data from './data/menuData';


function Menu() {
    const uniqueitem = ["All", ...new Set(data.map(item => item.category))]
    const [menu, setMenu] = useState(data);
    function handleMenu(val) {
        if (val === "All") {
            setMenu(data)
        }
        else {
            const newdata = data.filter((item) => item.category === val);
            setMenu(newdata);
        }


    }




    return (
        <div className={mnustyl.container}>
            <div className={mnustyl.contItem} id={mnustyl.text}><p>Our Menu</p></div>
            <div className={mnustyl.contItem} id={mnustyl.buttondiv}>

                {
                    uniqueitem.map((item) => {
                        return (
                            <div>
                                <button type='button' onClick={() => handleMenu(item)}>{item}</button>
                            </div>
                        )
                    })
                }
            </div>
            <div className={mnustyl.contItem} id={mnustyl.menudiv}>
                {
                    menu.map((item) => {
                        return (<div className='item'>

                            <img className='inneritem' id='image' src={item.img} alt="image" />
                            <div className="inneritem">
                                <div className="inneritem2">
                                    <h4 className='item title-price' id='para1'  >{item.title}</h4>
                                    <p className='item title-price' id='para2'>&#8377; {item.price}</p>
                                    <p className='item' id='para3'>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
            </div>

        </div>
    )
}

export default Menu
