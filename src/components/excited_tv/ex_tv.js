import React from 'react';
import './style.css';
import Data from './data';
import Card from './card';
import Carousel from "@itseasy21/react-elastic-carousel";


const breakPoints = [
    { width: 1, itemsToShow: 1 , pagination: false},
    { width: 0, itemsToShow: 2, itemsToScroll: 2 , pagination: false},
    { width: 0, itemsToShow: 3 , pagination: false},
    { width: 0, itemsToShow: 5 , pagination: false}
  ];
  

function Extv(){
    // {Data.map((val,index)=>{
    //     console.log(Data[0].image)

        return(
            
            <>
            <div>
                <h3 className="pop_nf_h3">Exciting TV Shows</h3>
            </div>
                
                <div className="pop_main">
                <Carousel  breakPoints={breakPoints} pagination="false">
                

                <Card
                name={Data[0].name}
                imgs={Data[0].image}
                link={Data[0].link}
                />
                
               
                    
                
                <Card
                name={Data[1].name}
                imgs={Data[1].image}
                link={Data[1].link}
                />
               
               

                <Card
                name={Data[3].name}
                imgs={Data[3].image}
                link={Data[3].link}
                />
                
                

                <Card
                name={Data[4].name}
                imgs={Data[4].image}
                link={Data[4].link}
                />
                
                <Card
                name={Data[5].name}
                imgs={Data[5].image}
                link={Data[5].link}
                />
                

                <Card
                name={Data[6].name}
                imgs={Data[6].image}
                link={Data[6].link}
                />
                
                    
                <Card
                name={Data[7].name}
                imgs={Data[7].image}
                link={Data[7].link}
                />
                <Card
                name={Data[8].name}
                imgs={Data[8].image}
                link={Data[8].link}
                />
                <Card
                name={Data[9].name}
                imgs={Data[9].image}
                link={Data[9].link}
                />
                <Card
                name={Data[10].name}
                imgs={Data[10].image}
                link={Data[10].link}
                />
                {/* <Card
                name={Data[11].name}
                imgs={Data[11].image}
                link={Data[11].link}
                />
                <Card
                name={Data[12].name}
                imgs={Data[12].image}
                link={Data[12].link}
                /> */}
                


               
                </Carousel>
                </div>
    </>

);
// })}
        }


export default Extv;