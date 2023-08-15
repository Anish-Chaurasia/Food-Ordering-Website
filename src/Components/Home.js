import React, { useEffect, useState } from 'react';
import homestyle from './home.module.css'
import homeSliding from './data/homeSliding';
import { IoChevronForwardCircleSharp, IoChevronBackCircle, IoSearchSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Home() {

  const [count, setCount] = useState(0)
  const [bckimg, setBckimg] = useState(homeSliding[count]);
  const navigate=useNavigate()

  useEffect(() => {
    setBckimg(homeSliding[count])

  }, [count])
  useEffect(() => {
    setTimeout(() => {


      if (count === homeSliding.length - 1) {
        setCount(0)
      }
      else {
        setCount(count + 1)
      }



    }, 3000)
  })


  function handletransfrwd() {
    if (count === homeSliding.length - 1) {
      setCount(0)
    }
    else {
      setCount(count + 1)
    }
  }

  function handletransbcwd() {

    if (count === 0) {
      setCount(homeSliding.length - 1);
    }
    else {
      setCount(count - 1)
    }
  }
  function hanleorder()
  {
navigate("/menu")
  }

  return (
    <div>
      <div className={homestyle.container}>

        <div className={homestyle.trans} >
          <button className={homestyle.transbcwd} type="button" onClick={() => handletransbcwd()}><IoChevronBackCircle /></button>
          <div className={homestyle.transimage} ><img src={bckimg} /></div>
          <button className={homestyle.transfrwd} type="button" onClick={() => handletransfrwd()}><IoChevronForwardCircleSharp /></button>

        </div>


        <div id={homestyle.bcg}>

          <div className={homestyle.main1} >
            <button className={homestyle.btn} type='button' onClick={hanleorder}>Order Now</button>
            <h2>Choose Your Taste On FOOD HUB</h2>
            <p>Best Food of India Directly to your doorstep</p>

            <img src='/images/logo.png' />


          </div>
          <div className={homestyle.help}>
            <h2 id={homestyle.srch} ><IoSearchSharp /></h2>
            <input id={homestyle.srchtext} type="text" placeholder=" Search for help" name="search" />
          </div>


        </div>



      </div>



    </div>
  )
}

export default Home
