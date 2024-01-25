import React from 'react'
import Head from './Head'
import Sidebarnew from './Sidebarnew'

const Feedback = () => {
  return (
    <div>
        <Head />
        <div className="admin-class">
            <Sidebarnew/>
            <div className="feedback">
                <p>No feedback available</p>
            </div>
        </div>
    </div>
  )
}

export default Feedback