import React from "react"
import Year from '../components/year'

const Copyright = () => {
    return (
        <div style={{
            color: 'rgba(0, 0, 0, 0.4', 
            marginTop: '60px', 
            marginBottom: '180px',
            fontFamily: 'Inter'
            }}> 
            &copy; Srinivasan Kumaresan <Year /> 
        </div>

    )
}

export default Copyright