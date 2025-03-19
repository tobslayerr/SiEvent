import React from 'react'
import Caraousel from '../components/Home/Caraousel'
import EventTerdekat from "../components/Home/EventTerdekat"
import EventGratis from "../components/Home/EventGratis"
import BestCreator from "../components/Home/BestCreator"
import ToLogin from '../components/Home/ToLogin'

const Home = () => {
  return (
    <div>
      <Caraousel />
      <EventTerdekat />
      <EventGratis />
      <BestCreator />
      <ToLogin />
    </div>
  )
}

export default Home