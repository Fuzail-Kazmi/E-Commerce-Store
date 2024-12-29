import React from 'react'
import { Carousel } from '../components/Carousel'
import { Category } from '../components/Category'
import { SpecilOffers } from '../components/SpecilOffers'
import { RelatedProducts } from '../components/RelatedProducts'
import { Footer } from '../components/Footer'

export const HomePg = () => {
  return (
    <div>
      <Carousel/>
      <SpecilOffers/>
      <Category/>
      <RelatedProducts/>
      <Footer/>
    </div>
  )
}
