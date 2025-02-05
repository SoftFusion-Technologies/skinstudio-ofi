import React from 'react'
import ContentSlider from "../Components/Home/ContentSlider"
import AboutMe from '../Components/Home/AboutMe'
import ProductosDestacados from '../Components/ProductosDestacados/ProductosDestacados'
import ProductLink from '../Components/Home/GoToProducts'
import SkinTest from './SkinTest'
import Mapa from '../Components/Mapa'
import Welcome from '../Components/Home/Welcome'
const Home = () => {
  return (
    <div className='overflow-hidden'>
      <ContentSlider></ContentSlider>
      <Welcome></Welcome>
      <AboutMe></AboutMe>
      <ProductLink />
      <Mapa></Mapa>
    </div>
  );
}

export default Home