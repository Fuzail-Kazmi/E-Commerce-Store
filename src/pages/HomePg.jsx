import React from 'react'
import { Carousel } from '../components/Carousel'
import { Category } from '../components/Category'
import { SpecilOffers } from '../components/SpecilOffers'

export const HomePg = () => {
  return (
    <div>
      <Carousel/>
      <SpecilOffers/>
      {/* <Category/> */}
    </div>
  )
}
