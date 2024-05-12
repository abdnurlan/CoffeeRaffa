import React from 'react'
import CoffeeBean from './CoffeeBean/CoffeeBean'
import Information from './Information/Information'
import SortCoffee from './SortCoffees/SortCoffee'
import Superiority from './Superiority/Superiority'
import Statistics from './Statistics/Statistics'
import WatchVideo from './WatchVideo/WatchVideo'
import PopularProduct from './PopularProduct/PopularProduct'
import ProductShop from './ProductShop/ProductShop'

const Home = () => {
  return (
    <>
        <CoffeeBean />
        <Information />
        <SortCoffee />
        <Superiority />
        <WatchVideo />
        <Statistics />
        <PopularProduct/>
        <ProductShop />
    </>
  )
}

export default Home
