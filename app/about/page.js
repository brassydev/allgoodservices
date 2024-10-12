import AboutUs from '@/components/About_Us'
import PageBanner from '@/components/PageBanner'
import React from 'react'

export default function page() {
  return (
    <>
          <PageBanner title={'All Good Financial Services'} imageUrl={'/images/service_banner.jpg'}/>
          <br/>
          <br/>
        <AboutUs/> 
        </>
  )
}
