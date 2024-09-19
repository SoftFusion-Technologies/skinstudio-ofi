import React from 'react'
import ContentSlider from "../Components/Home/ContentSlider"
import AboutMe from '../Components/Home/AboutMe'
import ProductosDestacados from '../Components/ProductosDestacados/ProductosDestacados'
import ProductLink from '../Components/Home/GoToProducts'
import SkinTest from './SkinTest'
import Mapa from '../Components/Mapa'
const Home = () => {
  return (
    <>
      <ContentSlider></ContentSlider>
      <AboutMe></AboutMe>
      <ProductLink />
      <Mapa></Mapa>
    </>
  );
}

export default Home