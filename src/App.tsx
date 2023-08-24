import { About, HeroSection, Portfolio } from "./components";

function App() {

  return (
    <>
      <div className="min-h-screen space-y-24">
        <HeroSection />
        <div className="px-8 space-y-40">
          <About />
          <Portfolio />
        </div>
        <div className="min-h-screen">

        </div>
      </div>
    </>
  )
}

export default App;
