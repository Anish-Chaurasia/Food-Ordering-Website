import React, { useEffect, useState } from 'react';
import mnustyl from "./menu.module.css"
import data from './data/menuData';
import { useDispatch,useSelector } from 'react-redux';
import { addcart } from '../cartaddremove';


function Menu() {
    const uniqueitem = ["All", ...new Set(data.map(item => item.category))]
    const [menu, setMenu] = useState(data);
    const dispatch = useDispatch()
    const obj=useSelector(state=>state.count)
    console.log(obj)
    function handleMenu(val) {
        if (val === "All") {
            setMenu(data)
        }
        else {
            const newdata = data.filter((item) => item.category === val);
            setMenu(newdata);
        }


    }
    function handlecart(item)
    {
        dispatch(addcart({ title: item.title, img: item.img, price: item.price }))
        alert("added to cart")
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
                    menu.map((item, index) => {
                        return (<div className={mnustyl.Menuitem}>

                            <img className={mnustyl.innermenuitem} id={mnustyl.menu_image} src={item.img} alt="image" />
                            <div className={mnustyl.innermenuitem} id={mnustyl.menu_detail}>

                                <div className={mnustyl.menu_inner_item} id={mnustyl.menu_title}  >{item.title}</div>
                                <div className={mnustyl.menu_inner_item} id={mnustyl.menu_desc}>{item.desc}</div>
                                <div className={mnustyl.price_button}>
                                    <p className={mnustyl.menu_inner_item} id={mnustyl.menu_price} >&#8377;{item.price}</p>
                                    <button  className={mnustyl.menu_inner_item} id={mnustyl.menu_button} type="button" onClick={()=>handlecart(item)}>Add To Cart</button>
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
