import React from "react";
import Images from "./Images";


const ShowCase = (prop)=> {
    return(
      <div className='cake'>
      <Images imgsrc={prop.imgsrc}/>
      <h3 className="cakeName">{prop.name}</h3>
      </div>
    );
}



export default ShowCase;
