import React from 'react'
import cartstyle from './cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { removecart, countminus, countplus } from '../cartaddremove';

function Cart() {
    const navigate = useNavigate()
    const cartlist = useSelector(state => state.count)
    const dispatch = useDispatch()
    console.log(cartlist)
    const cartlenth = cartlist.length
    return (
        <div className={cartstyle.container}>
            {
                cartlenth === 0 ? (<div className={cartstyle.emptycart}>
                    <div className={cartstyle.emptycart_item}>
                        <h1>Cart Is Empty !! 🙁</h1>
                        <p>You Probably haven't ordered Food yet. To Order a Food, go to menu page.</p>
                    </div>
                    <div className={cartstyle.emptycart_item}><img src='./images/emptyCart.png'></img></div>
                    <div className={cartstyle.emptycart_item}><button type='buton' onClick={() => navigate("/menu")} >Go To Menu</button></div>

                </div>) :


                    (<div className={cartstyle.notemptycart}>
                        <div className={cartstyle.leftCart}>

                            <div id={cartstyle.header}>
                                <h1>Shopping Cart</h1>
                                <h1>{cartlenth} items</h1>
                            </div>
                            <table id={cartstyle.cartable}>
                                <tr>
                                    <th>PRODUCT DETAILS</th>
                                    <th>QUANTITY</th>
                                    <th>PRICE</th>
                                    <th>TOTAL</th>
                                </tr>

                                {
                                    cartlist.map((item, index) => {
                                        return (
                                            <tr>
                                                <td id={cartstyle.product_details}>
                                                    <div id={cartstyle.product_image} ><img src={item.img} alt="" /></div>
                                                    <div id={cartstyle.name_btn}><p> {item.title}</p>
                                                        <button key={index} onClick={() => dispatch(removecart(index))}>Remove</button></div>
                                                </td>
                                                <td >
                                                    <div id={cartstyle.quantity}>
                                                        <button key={index} onClick={() => dispatch(countminus(index))}><AiOutlineMinus /></button>
                                                        <p>{item.quantity}</p>
                                                        <button key={index} onClick={() => dispatch(countplus(index))}><AiOutlinePlus /></button>

                                                    </div>
                                                </td>
                                                <td> {item.price} Rs</td>
                                                <td>{item.quantity * item.price} Rs</td>
                                            </tr>

                                        )
                                    })
                                }


                            </table>
                        </div>
                        <div className={cartstyle.rightCart}>
                            <div id={cartstyle.header}>
                                <h1>Order Summary

                                </h1>
                            </div>
                            <div>

                            </div>
                        </div>

                    </div>)
            }

        </div>

    )
}

export default Cart
