import React from 'react'
import ContentSlider from "../Components/Home/ContentSlider"
import AboutMe from '../Components/Home/AboutMe'
import ProductosDestacados from '../Components/ProductosDestacados/ProductosDestacados'
import Footer from '../Components/Footer'
import SkinTest from './SkinTest'

const Home = () => {
  return (
      <>
          <ContentSlider></ContentSlider>   
          <AboutMe></AboutMe>
          <ProductosDestacados />
          <SkinTest />
          <Footer></Footer>
      </>
  )
}

export default Home