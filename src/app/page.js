import Banner from "@/HomePages/BannerSection/Banner";
import GlobalCurrentSetution from "@/HomePages/GlobalCurrentSetution/GlobalCurrentSetution";
import GolsSection from "@/HomePages/GolsSection/GolsSection";
import Banner1 from "./components/HomePage2/HomePages2Jsx/Banner1";
import Mission from "./components/HomePage2/HomePages2Jsx/Mission";
import Vission from "./components/HomePage2/HomePages2Jsx/Vission";
import Questions from "./components/HomePage2/HomePages2Jsx/Questions";
import OurTeacher from "./components/HomePage2/HomePages2Jsx/OurTeacher";
import Banner2 from "./components/HomePage2/HomePages2Jsx/Banner2";

export default function Home() {
  return (
    <div>
      <Banner1></Banner1>
      <Banner2></Banner2>
      <Mission></Mission>
      <Vission></Vission>
      <Questions></Questions>
      <OurTeacher></OurTeacher>
    </div>
  );
}
