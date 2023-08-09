import React, { useEffect, useState } from 'react';
import homestyle from './home.module.css'
import Footer from './Footer';
import data from './Data';
import { IoChevronForwardCircleSharp, IoChevronBackCircle, IoSearchSharp } from "react-icons/io5";

function Home() {

  const [count, setCount] = useState(0)
  const [bckimg, setBckimg] = useState(data[count]);

  useEffect(() => {
    setBckimg(data[count])

  }, [count])
  useEffect(() => {
    setTimeout(() => {


      if (count === data.length - 1) {
        setCount(0)
      }
      else {
        setCount(count + 1)
      }



    }, 3000)
  })


  function handletransfrwd() {
    if (count === data.length - 1) {
      setCount(0)
    }
    else {
      setCount(count + 1)
    }
  }

  function handletransbcwd() {

    if (count === 0) {
      setCount(data.length - 1);
    }
    else {
      setCount(count - 1)
    }
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
            <button className={homestyle.btn} type='button'>Order Now</button>
            <h2>Choose Your Taste On FOOD HUB</h2>
            <p>Best Food of India Directly to your doorstep</p>
   
            <img  src='/logo.png'/>


          </div>
          <div className={homestyle.help}>
            <h2 id={homestyle.srch} ><IoSearchSharp /></h2>
            <input id={homestyle.srchtext} type="text" placeholder=" Search for help" name="search" />
          </div>


        </div>



      </div>

      <Footer />

    </div>
  )
}

export default Home
