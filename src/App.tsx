import { HeroSection } from "./components";
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation()

  return (
    <>
      <div className="min-h-screen">
        <HeroSection />
      </div>
    </>
  )
}

export default App;
