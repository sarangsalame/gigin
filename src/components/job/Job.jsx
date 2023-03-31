import React, { useState } from 'react'
import './job.css'
const Job = () => {
    const [isApplied, setIsApplied] = useState(false);
    let count = 0;
    function handleApply() {
        if (count < 1) {
            setIsApplied(true)
        } else {
            setIsApplied(false)
        }
    }
    return (
        <div className='job_wrapper'>
            <div className='job_title'>Title</div>
            <div className='job_location'>location</div>
            <button onClick={handleApply} style={{ backgroundColor: isApplied ? 'green' : "purple" }}>{isApplied ? "Applied" : "Apply"}</button>
        </div>
    )
}

export default Job