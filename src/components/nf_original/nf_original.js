import React from 'react';
import './ns_original.css';
import SimpleImageSlider from "react-simple-image-slider";

function Nf_ori(){
    const sliderImages = [
        {
           url: "https://static.theprint.in/wp-content/uploads/2022/03/Shubhangi-feature.jpg",
        },
        {
           url: "https://th-i.thgim.com/public/entertainment/movies/1kolxb/article66386005.ece/alternates/FREE_1200/AARYAN.png",
        },
        {
           url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/01/glass-onion-daniel-craig-pale-blue-eye-christian-bale-the-good-nurse-jessica-chastain-do-revenge-camil-mendes-viola-davis-from-ma-rainey-s.jpg",
        },
        {
           url: "https://i.ytimg.com/vi/IE8HIsIrq4o/maxresdefault.jpg",
        },
        {
           url: "https://hips.hearstapps.com/hmg-prod/images/best-christmas-movies-on-netflix-1604597256.jpg?crop=1xw:0.7875xh;center,top",
        },
        {
           url: "https://miro.medium.com/v2/resize:fit:1400/1*R-4laTXe2wtJC_cBGUeBSw.jpeg",
        },
        {
           url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPh833VY13qkp90xjGTmCWUVRHYb6vBBfgQ&usqp=CAU",
        },
     ];
    return(
        
            <div>
               <h3>
                  {" "}
               </h3>
               <SimpleImageSlider
                  width={1519}
                  height={550}
                //   width: 1519px;
                //   height: 550px;
                  images={sliderImages}
                  showNavs={true}
               />
            </div>
         );
      }

export default Nf_ori;