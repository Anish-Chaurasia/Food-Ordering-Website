import React from 'react'
import Navbar from './Navbar'
import gstyle from './gallery.module.css'
import Footer from './Footer'



function Gallery() {

    return (
        <div>
            <Navbar />

            <div className={gstyle.container}>

                <div className={gstyle.textpart}>
                    <h1>GALLERY</h1>
                    <p>Nature is the ultimate source of our living.
                        Both living and non-living things include nature, and everyone is interdependent, which
                        helps maintain the ecosystem. Plants, animals, and humans all depend on nature for their survival. It supplies oxygen, sunlight, soil, water, and other necessary components.</p>
                </div>
                <div className={gstyle.gallery}>

                    <div id={gstyle.box1} className={gstyle.box}>Tree</div>
                    <div id={gstyle.box2} className={gstyle.box}>Mountain</div>
                    <div id={gstyle.box3} className={gstyle.box}>Sky</div>
                    <div id={gstyle.box4} className={gstyle.box}>Bridge</div>
                    <div id={gstyle.box5} className={gstyle.box}>Forest</div>
                    <div id={gstyle.box6} className={gstyle.box}>Ocean</div>
                    <div id={gstyle.box7} className={gstyle.box}>Night Sky</div>
                </div>

            </div>
            <Footer />
        </div>

    )

}

export default Gallery
