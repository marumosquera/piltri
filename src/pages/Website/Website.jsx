import React from 'react'
import { BannerInfo } from '../../components/BannerInfo/BannerInfo'
import { AboutPage } from '../AboutPage/AboutPage'
import { Contact } from '../Contact/Contact'
import { Footer } from '../Footer/Footer'
import { HomePage } from '../HomePage/HomePage'
import { KnowUs } from '../KnowUs/KnowUs'

export const Website = () => {
  return (
    <div>
    <HomePage/>
    {/* <div className='web-bg-second'> */}
    <BannerInfo/>
    <AboutPage/>
    <KnowUs/>
    <Contact/>
    {/* </div> */}

    </div>
  )
}
