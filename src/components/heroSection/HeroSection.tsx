import AnimatedText from "../../utils/components/AnimatedText"
import Header from "../header/Header"
import { BsArrowDown } from "react-icons/bs"
import { motion } from "framer-motion"

function HeroSection() {

    return (
        <>
            <div className="h-screen flex flex-col relative">
                <div className="h-[10vh]">
                    <Header />
                </div>
                <section className="flex flex-col justify-center items-center h-[80vh] space-y-2">
                    <h1 className=" text-3xl md:text-4xl font-bold text-titleprimary">Olá meu nome é Bruno</h1>
                    <h2 className="text-2xl font-bold text-titleprimary"><AnimatedText text='Desenvolvedor Web' /></h2>
                </section>
                <motion.div
                    className="flex justify-center items-center relative bottom-1"
                    animate={{ translateY: [-30, 5, -30] }}
                    transition={{ repeat: Infinity, ease: "easeInOut", duration: 1.5 }}
                >
                    <BsArrowDown size={35} className="text-titleprimary"/>
                </motion.div>
            </div>
        </>

    )
}

export default HeroSection