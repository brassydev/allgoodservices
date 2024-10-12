import PageBanner from '@/components/PageBanner'
import Services from '@/components/Services'
import React from 'react'

export default function page() {
  return (
    <>
      <PageBanner title={'Services'} imageUrl={'/images/service_banner.jpg'}/>
      <Services/>
    </>

  )
}
