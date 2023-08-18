import React from 'react'
import style from "./contact.module.css"
function Contact() {
  function handleform()
  {
    alert("Thanks for the response")
  }




  return (
    <div className={style.container}>
      <div className={style.item} id={style.contact}>

        <div className={style.contact_item}> <h4> HELP US MAKE <span>FOOD HUB</span> BETTER</h4>
        </div>
        <div className={style.contact_item}> <img src="./images/phone.png" alt="" />
          <p>+91 96391 37005</p></div>
        <div className={style.contact_item}> <img src="./images/message.png" alt="" />
          <p>contactfoodhub@gmail.com</p></div>
        <div className={style.contact_item}> <img src="./images/location.png" alt="" />
          <p>Vivek Nagar, Opposite Pacific Mall -560047, Bangalore</p></div>

      </div>
      <div className={style.item} id={style.rigtsideitem}>
        <h4>“Good food is the foundation of genuine happiness” – <span>Auguste Escoffier</span></h4>
        <div id={style.form}>
          <input className={style.forminput} type='text' placeholder='Name'></input>
          <input className={style.forminput} type='email' placeholder='Email'></input>
          <input className={style.forminput} type='text' placeholder='Subject'></input>
          <textarea  id={style.message}type='text' placeholder='Message'></textarea>
          <button type='button' onClick={handleform}>Submit</button></div>

      </div>

    </div>
  )
}

export default Contact
