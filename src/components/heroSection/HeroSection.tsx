import { useTranslation } from "react-i18next"
import AnimatedText from "../../utils/components/AnimatedText"
import Header from "../header/Header"

function HeroSection() {

    const { t, i18n } = useTranslation()

    return (
        <>
            <div className="h-screen flex flex-col">
                <div className="h-[10vh]">
                    <Header />
                </div>
                <section className="flex flex-col justify-center items-center h-[80vh] space-y-2">
                    <h1 className=" text-3xl md:text-4xl font-bold">{t('main.hero-title')}</h1>
                    <h2 className="text-2xl font-bold"><AnimatedText text={t('main.hero-subtitle')} /></h2>
                </section>
            </div>
        </>

    )
}

export default HeroSection