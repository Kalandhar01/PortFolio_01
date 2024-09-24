import React, { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '../animation'

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim()

    }, [])
    return (
        <>
            <div className="preloader">
                <div className="text-container">
                    <span>Developer</span>
                    <span>Creater</span>
                    <span>Vibe</span>
                </div>
            </div>

        </>
    )
}

export default PreLoader
