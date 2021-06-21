import React,{useState} from 'react';
import SearchR from './SearchR';
import { FaSearch } from 'react-icons/fa';


function Search() {
    const [img, setImg] = useState('');
    const [imgData, setImageData] = useState('');
    const inputHandler =(element) =>{
        setImg(element.target.value);
    }
    const buttonHandler =() =>{
        setImageData(img);
    }

    return (
        <div className='search-div container'>
            <div className="row d-flex justify-content-center align-items-center w-100">
                <h1 className='text-center text-primary'>Image Finder</h1>
            </div>            
            <div className='input-box bg-dark mx-auto'>
            <input type="text" placeholder='Enter the name....' value={img} onChange={inputHandler} />
            <FaSearch className='btnIcon' onClick={buttonHandler} />            
            </div>
            <div className='show-div'>
               {imgData !== '' ? <SearchR imgName={imgData}/>: <h1> Enter the Image Name</h1> } 
            </div>     
                        
        
        </div>
    )
}

export default Search
