import AnimatedText from "../../utils/components/AnimatedText"
import Header from "./Header"

function HeroSection() {

    return (
        <>
            <div className="h-screen">
                <div className="h-[10vh]">
                    <Header />
                </div>
                <section className="flex flex-col justify-center items-center h-[80vh] space-y-2">
                    <h1 className="text-3xl font-bold">Olá meu nome é Bruno!</h1>
                    <h2 className="text-xl font-bold"><AnimatedText text='Desenvolvedor⠀Web'/></h2>
                </section>
            </div>
        </>

    )
}

export default HeroSection