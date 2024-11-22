import React from 'react'
import CartIcon from './IconComponent/CartIcon'

export default function CartButton(props) {
  const {className, ...restProps} =props
  return (
    <div className={`btn text-m font-Inter hover:underline hover:drop-shadow-xl ${className}`} {...restProps}>
        <CartIcon className="h-8"/>
        <p>Shopping Cart</p>
        </div>
  )
}
