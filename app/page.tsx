import Slider from "@components/Slider";
import About from "@components/About";
import Welcome from "@components/Welcome";
import Learning from "@components/Learning"


export default function Home() {
  return (
    <main className="">
      <div>
        <Slider />
        <About />
        <Welcome />
        <Learning />
      </div>
    </main>
  );
}
