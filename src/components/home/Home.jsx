import React from 'react'
import './home.css'
import HomeHeader from '../homeheader/HomeHeader'
import HomeBody from '../homebody/HomeBodyy'
const Home = () => {
    return (
        <div className='home'>
            <HomeHeader />
            <HomeBody />
        </div>
    )
}

export default Home