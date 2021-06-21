import React from "react";
import { useState } from "react";

const Contactus = () => {
    const [inputVal, setInputVal] = useState({
        fullname:"",
        number:"",
        email:"",
        message:""
    });
    // const [showInput, setShowInput] = useState();
    const inputHandler =(element)=>{
        const {name, value} = (element.target);
        setInputVal((preValue)=>{
                return {...preValue, [name]:value}
        })
    }
   
   
    const formSubmitHandler = (element)=>{
        element.preventDefault();
       const  {fullname, number, email, message} = inputVal
        if(fullname === '' && number === '' && email === '' && message === '' ){
            alert('All fields are compulsary, please input a valid data');
        }else{
            alert(`Mr. ${fullname} your form is submitted successfuly`);
        }
        setInputVal({
            fullname:"",
            number:"",
            email:"",
            message:""
        });
    
    }
  return (
    <>
      <div className="container-fluid">
        <div className="conatiner p-2 mx-auto">
          <div className="row mx-auto">
            <div className="col-10 mx-auto">
              <h1 className="text-primary text-center">Contact Us</h1>
              
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <form className="w-md-50 w-75" onSubmit={formSubmitHandler}>
                <div className="mb-3">
                  <label  className="form-label">
                    Name
                  </label>
                  <input
                    name='fullname'
                    onChange={inputHandler}
                    value={inputVal.fullname}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label  className="form-label">
                    Contact Number
                  </label>
                  <input
                    name='number'
                    onChange={inputHandler}
                    value={inputVal.number}
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Email
                  </label>
                  <input
                    name='email'
                    onChange={inputHandler}
                    value={inputVal.email}
                    type="email"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Message
                  </label>
                  <textarea
                    onChange={inputHandler}
                    value={inputVal.message}
                    className="mb-3 form-control"
                    name="message"
                    id=""
                    cols=""
                    rows=""
                  ></textarea>
                </div>
                <div className="mb-3 d-flex justify-content-center align-items-center">
                  <button type="submit" className="btn btn-primary mx-auto">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
