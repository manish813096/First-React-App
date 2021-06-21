import React from 'react'

const SearchR = ({imgName}) => {
    

    const imgSrc = `https://source.unsplash.com/1600x900/?${imgName}`
    return (
        <div className='image-box'>
           <img src={imgSrc} alt="random image" className='img-fluid searchImg'/>
        </div>
    )
}

export default SearchR
