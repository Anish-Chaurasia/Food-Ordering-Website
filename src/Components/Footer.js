import React from 'react'
import ftrstyle from './footer.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IoSearchSharp } from "react-icons/io5";

function Footer() {
  return (
    <footer className={ftrstyle.footer}>
      <div className={ftrstyle.item} id={ftrstyle.div1} >
        <div className={ftrstyle.div1item}><h4>About us</h4>
          <a href='#'>Who we Are</a>
          <a href='#'>Services</a>
          <a href='#'>Outlets</a>
          <a href='#'>Partners</a>
        </div>
        <div className={ftrstyle.div1item}><h4>Help & Support</h4>
          <a href='#'>Work with us</a>
          <a href='#'>Partner with us</a>
          <a href='#'>Ride with us</a>
          <a href='#'>Open Outlets</a></div>
        <div className={ftrstyle.div1item}><h4>Social Links</h4>
          <a href='#'>Linkedin</a>
          <a href='#'>Github</a>
          <a href='#'>Twitter</a>
          <a href='#'>Instagram</a>
        </div>
        <div className={ftrstyle.div1item}><h4>Learn More</h4>
          <a href='#'>Privacy</a>
          <a href='#'>Security</a>
          <a href='#'>Sitemap</a>
          <a href='#'>Terms</a></div>


      </div>
      <div className={ftrstyle.item} id={ftrstyle.div2}><p>&copy; Copyright 2023 FOOD HUB</p>
      </div>

      <div className={ftrstyle.item} id={ftrstyle.div3}>
        <div id={ftrstyle.logo}>
          <img src='/logo.png' />
          <h3>FOOD HUB</h3></div>
        <div className={ftrstyle.help}>
          <h2 id={ftrstyle.srch} ><IoSearchSharp /></h2>
          <input id={ftrstyle.srchtext} type="text" placeholder=" Search for help" name="search" />
        </div>

        <div id={ftrstyle.ftrcontact}>
          <a href='https://www.linkedin.com/in/anish-chaurasia-985171227/' target='_blank'><LinkedInIcon fontSize="large" /></a>
          <a href='https://www.linkedin.com/in/anish-chaurasia-985171227/' target='_blank'><GitHubIcon fontSize="large" /></a>
          <a href="#"><TwitterIcon fontSize="large" /></a>
          <a href='#'><InstagramIcon fontSize="large" /></a>
        </div>
      </div>








    </footer>
  )
}

export default Footer;
