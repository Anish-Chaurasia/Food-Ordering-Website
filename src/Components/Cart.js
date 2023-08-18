import React from 'react'
import cartstyle from './cart.module.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const navigate=useNavigate()
    const cartlist = useSelector(state => state.count)
    const cartlenth = cartlist.length
    return (
        <div className={cartstyle.container}>
            {
                cartlenth === 0 ? (<div className={cartstyle.emptycart}>
                    <div className={cartstyle.emptycart_item}>
                        <h1>Cart Is Empty !! 🙁</h1>
                        <p>You Probably haven't ordered Food yet. To Order a Food, go to menu page.</p>
                    </div>
                    <div className={cartstyle.emptycart_item}><img  src='./images/emptyCart.png'></img></div>
                    <div className={cartstyle.emptycart_item}><button type='buton' onClick={()=>navigate("/menu")} >Go To Menu</button></div>

                </div>) :


                    (<div className={cartstyle.notemptycart}> <h1>working on cart page...</h1></div>)
            }

        </div>

    )
}

export default Cart
