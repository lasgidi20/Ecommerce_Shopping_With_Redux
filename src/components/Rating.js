import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({rate, style, onClick}) => {
  return (
    <>
    {[...Array(5)].map((_,i) => (
       <span key={i} onClick={()=>onClick(i)} style={style}>
          {rate > i ? (<AiFillStar />) : (<AiOutlineStar />)}
       </span>

    ))}
    </>
  )
}

export default Rating