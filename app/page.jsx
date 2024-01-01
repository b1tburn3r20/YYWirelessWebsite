"use client";

import Image from "next/image";
import HomePageBanner from "./components/HomePageBanner/HomePageBanner";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WhyTrustUsComponent from "./components/WhyTrustUsComponent/WhyTrustUsComponent";
import Testimonials from "./components/Testimonials/Testimonials";
import ShopNowComponent from "./components/ShopNowComponent/ShopNowComponent";
import EmailSignUp from "./components/EmailSignup/EmailSignup";
import Footer from "./components/Footer/Footer";
import ProductShowCase from "./components/ProductShowcase/ProductShowcase";
export default function Home() {
  return (
    <main>
      <div className="home-page-container">
        <HomePageBanner />
        <Navbar />
        <Hero />
        <ProductShowCase />

        <EmailSignUp />
        <WhyTrustUsComponent />
        <ShopNowComponent />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
