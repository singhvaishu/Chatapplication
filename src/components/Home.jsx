import React from 'react'
import Sidebar from '../componentsDetails/Sidebar'
import Chat from '../componentsDetails/Chat'


const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <Sidebar />
                <Chat />

            </div>
        </div>
    )
}

export default Home