"use client";

import Contact_form from "@/components/ContactForm";
import Map from "@/components/Map";
import PageBanner from "@/components/PageBanner";

export default function Contact() {
  return (
    <>
    <PageBanner title={'Contact'} imageUrl={'/images/contact_banner.jpg'}/>
      <Contact_form />
      <Map />
    </>
  );
}
