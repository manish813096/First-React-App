import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [inputData, SetInputData] = useState("");
  const [showItems, setShowItems] = useState([]);
//   const [toggleBtn, setToggleBtn] =useState(true);
  const addListHandler = ()=> {
      if(inputData){
          setShowItems([...showItems, inputData]);
          SetInputData("");
      }
    // console.log(showItems);
  };
  const deleteHandler =(index)=>{
      const remainItem = showItems.filter((element, id)=>{
            return index!==id
      })
      setShowItems(remainItem);
  }
  const removeall=()=>{
      if(showItems){
          setShowItems([]);
      }
  }
    
  
  return (
    <>
      <div className="container-fluid my-1">
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <div className="row d-flex justify-content-center">
            <h2 className="text-center text-primary">Todos App</h2>
          </div>
          <div className="row main-container">
            <div className="compbox border border-dark">
              <div className="col-12 col-md-6">
                <div className="inputbox d-flex align-items-center bg-primary">
                  <input
                    type="text"
                    value={inputData}
                    onChange={(event) => SetInputData(event.target.value)}
                    placeholder=" ✍️ Enter The list item..."
                  />
                  <i className="fas fa-plus" onClick={addListHandler}></i>                  
                </div>
              </div>
              <div className="col-12 col-md-6">
                {showItems.map((element, index) => {
                  return <div key={index} className="show-box d-flex align-items-center bg-primary">
                    
                    <div className='pt-2'>
                    <p  className="para text-light">{element}</p>
                    </div>
                    <div className=''>
                   
                    <i onClick={()=>deleteHandler(index)} className="mx-2 fas fa-trash-alt"></i>
                    </div>
                  </div>;
                })}
              </div>
              <div className="col-6 w-100 d-flex align-items-center">
                <button onClick={removeall} className="my-3 mx-auto btn bg-primary text-light">
                    Remove All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
