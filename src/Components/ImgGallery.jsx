import React from "react";
import { useState } from "react";
import ImgData from "./ImageData";

const ImgCat = ImgData.map((element, index)=>{
    return (element.category);
})
const Cat = [...new Set(ImgCat),'All'];
// console.log(Cat);

const ImgGallery = () => {
    const [items, setItems] = useState(ImgData);
    const filterItem = (imgCat) =>{
        if(imgCat === 'All'){
            setItems(ImgData)
            return;
        }
        
       const imageCatagory = ImgData.filter((currEl)=>{           
           return imgCat === currEl.category;
        })
        setItems(imageCatagory);
    }
  
  return (
    <>
      <div className="container-fluid p-5">
          <div className="container p-3">              
            <h1 className='text-center text-primary'>Image Gallery</h1>
          <hr />
          </div>
          <div className="container">
              <div className="row d-flex justify-content-center align-item-center">
                    <div className="col-md-10 col-12 mx-auto d-flex justify-content-between align-item-center flex-wrap">
                    {
                            Cat.map((currEl, key)=>{
                                return <button key={key} className='btn bg-primary text-light my-md-2 my-2' onClick={()=>filterItem(currEl)}>{currEl}</button>
                            })
                        }
                    </div>
                   <div className="container p-2 my-2">
                        <div className="row d-flex justify-content-between align-item-center m-2">
                            {
                                items.map((element, key)=>{
                                    return(
                                        <div key={key} className="col-lg-3 col-md-12 d-flex justify-content-between align-item-center my-2 flex-column">
                                            <img className='catImg' src={element.image} alt="" />
                                            
                                        </div>
                                    
                                    ) 
                                })
                            }
                        </div>
                    </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default ImgGallery;
