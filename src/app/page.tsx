import Featuredcourses from "@/components/mainComponents/featuredcourses";
import Hero from "@/components/mainComponents/Hero";
import TestimonialCards from "@/components/mainComponents/TestimonialCards";
import UpcomingWebinars from "@/components/mainComponents/upcomingWebinars";
import WhyChooseUs from "@/components/mainComponents/whyChooseUs";

export default function Home() {
  return(
   <main className="h-[100dvh] bg-gray-800">
    
    <Hero />
    <Featuredcourses/>
    <WhyChooseUs/>
    <TestimonialCards/>
    <UpcomingWebinars/>
   </main>
  );
}
