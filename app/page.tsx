import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import AimsObjectives from "@/components/AimsObjectives";
import Programs from "@/components/Programs";
import Facilities from "@/components/Facilities";
import StudentJourney from "@/components/StudentJourney";
import CampusLife from "@/components/CampusLife";
import VideoShowcase from "@/components/VideoShowcase";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import AdmissionProcess from "@/components/AdmissionProcess";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Trust />
        <About />
        <VisionMission />
        <AimsObjectives />
        <Programs />
        <Facilities />
        <StudentJourney />
        <CampusLife />
        <VideoShowcase />
        <WhyChoose />
        <Testimonials />
        <AdmissionProcess />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

