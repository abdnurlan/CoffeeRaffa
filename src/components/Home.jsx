import React from 'react'
import CoffeeBean from './CoffeeBean/CoffeeBean'
import Information from './Information/Information'
import SortCoffee from './SortCoffees/SortCoffee'
import ProductDescription from './ProductDescription/ProductDescription'
import Superiority from './Superiority/Superiority'
import Statistics from './Statistics/Statistics'
import WatchVideo from './WatchVideo/WatchVideo'
import PopularProduct from './PopularProduct/PopularProduct'

const Home = () => {
  return (
    <>
        <CoffeeBean />
        <Information />
        <SortCoffee />
        <ProductDescription />
        <Superiority />
        <WatchVideo />
        <Statistics />
        <PopularProduct/>
    </>
  )
}

export default Home
