import React, { useState } from 'react'
import './homeheader.css'
const HomeHeader = () => {
    const [spanColor, setSpanColor] = useState(false)
    function changeColor() {
        setSpanColor(!spanColor)
    }
    return (
        <header className='homeHeader'>
            <div className='joblist' onClick={changeColor}>
                <p>Job List</p>
                <span></span>
            </div>
            <div className='myjobs' onClick={changeColor}>
                <p>Myjobs</p>
                <span style={{ background: spanColor ? "blue" : "grey" }}></span>
            </div>
        </header>
    )
}

export default HomeHeader