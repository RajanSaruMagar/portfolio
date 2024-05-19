import React from 'react'

const page = ({params}:{params:{productid:string;reviewid:string;}}) => {
  return (
    <div>Review{params.reviewid}for products{params.productid}</div>
  )
}

export default page