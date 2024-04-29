import React from 'react'
import CoffeeBean from './CoffeeBean/CoffeeBean'
import Information from './Information/Information'
import SortCoffee from './SortCoffees/SortCoffee'
import ProductDescription from './ProductDescription/ProductDescription'
import Superiority from './Superiority/Superiority'
import Statistics from './Statistics/Statistics'

const Home = () => {
  return (
    <>
        <CoffeeBean />
        <Information />
        <SortCoffee />
        <ProductDescription />
        <Superiority />
        <Statistics />
    </>
  )
}

export default Home
