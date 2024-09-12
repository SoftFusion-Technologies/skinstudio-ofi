import React from 'react'
import ContentSlider from "../Components/Home/ContentSlider"
import AboutMe from '../Components/Home/AboutMe'
import ProductosDestacados from '../Components/ProductosDestacados/ProductosDestacados'

const Home = () => {
  return (
      <>
        <ContentSlider></ContentSlider>   
        <AboutMe></AboutMe>
        <ProductosDestacados />
      </>
  )
}

export default Home