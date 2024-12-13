import Featuredcourses from "@/components/mainComponents/featuredcourses";
import Footer from "@/components/mainComponents/footer";
import Hero from "@/components/mainComponents/Hero";
import { Teachers } from "@/components/mainComponents/Teachers";
import TestimonialCards from "@/components/mainComponents/TestimonialCards";
import UpcomingWebinars from "@/components/mainComponents/upcomingWebinars";
import WhyChooseUs from "@/components/mainComponents/whyChooseUs";

export default function Home() {
  return(
   <main className="h-[100dvh]">
    
    <Hero />
    <Featuredcourses/>
    <WhyChooseUs/>
    <TestimonialCards/>
    <UpcomingWebinars/>
    <Teachers />
    <Footer />
   </main>
  );
}
