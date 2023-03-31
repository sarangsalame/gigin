import React, { useEffect, useState } from 'react'
import './homebody.css'
import Job from '../job/Job'
const HomeBody = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function getdata() {
            let ans = await fetch('https://dev123.gigin.ai/abc/index.php/v4/gigs/postings/list?limit=10&offset=0&is_precal_done=1&scope=recomm',
                {
                    method: "GET", headers: { 'Content-Type': "application/json" }, request: {
                        "employee_id": "",
                    }
                }
            )

            const ansdata = await ans.json()
            console.log(ansdata)

        }
        getdata()

    }, [])
    return (
        <div className='body_joblist_wrapper'>
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
        </div>
    )
}

export default HomeBody