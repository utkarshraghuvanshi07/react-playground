import React from 'react'

const ProductsCard = ({product,del}) => {
    // console.log(props.product);
  return (
    <div className='p-2 border-1 rounded flex flex-col gap-4'>
      <div className='w-40 h-50 flex items-center justify-center'>
        <img className='w-25' src={product.image} alt="" />
      </div>
      <div>
        <h2 className='font-semibold'>{product.title.substring(0,20)}</h2>
        <p className='text-xs'>{product.category}</p>
        <p className='text-green-600'>{product.price}</p>
      </div>
      <button onClick={()=>{
        del(product.id);
      }} className='p-1.5 bg-red-500 rounded-xl'>Delete</button>
    </div>
  )
}

export default ProductsCard
