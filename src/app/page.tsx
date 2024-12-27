import Hero from "./components/hero";
import WorkManage from "./components/work-manage";
import UseExtension from "./components/extension";
import Customise from "./components/customise";
import TryTaskey from "./components/taskey";
import Sponsers from "./components/sponsers";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
      
     
      {/* Hero section */}
      <Hero/>
      {/* Work management */}
      <WorkManage/>
      {/* Use as extension */}
      <UseExtension/>
      {/* Customise */}
      <Customise/>
      {/* Try taskey*/}
      <TryTaskey/>
      {/* Our sponsers */}
      <Sponsers/>
      {/* Footer */}
      <Footer/>
      
    </div>
  );
}
