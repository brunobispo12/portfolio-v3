import eu from '../../utils/images/eu.jpg'
import { motion } from 'framer-motion'
import Skills from './components/Skills'

function About() {
    return (
        <>
            <div className='space-y-16 md:space-y-6'>
                <div className='flex justify-center gap-24 flex-wrap'>
                    <div className='space-y-4 '>
                        <motion.h1
                            className='font-bold text-3xl text-titleprimary'
                            initial={{ translateX: -30, opacity: 0 }}
                            whileInView={{ translateX: 0, opacity: 1 }}
                            transition={{ delay: 0.5, ease: 'easeIn' }}
                            viewport={{ once: true }}
                        >
                            Sobre mim
                        </motion.h1>
                        <motion.div
                            className='md:w-[37rem] text-justify tracking-tight'
                            initial={{ translateY: 40, opacity: 0 }}
                            whileInView={{ translateY: 0, opacity: 1 }}
                            transition={{ delay: 0.5, ease: 'easeIn' }}
                            viewport={{ once: true }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi numquam aspernatur illo a ipsum velit maiores, unde mollitia eos enim repudiandae aliquam sed debitis quod non. Asperiores, necessitatibus distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odio voluptatem laborum tempore magni, asperiores minus ea doloribus pariatur ducimus possimus molestiae reprehenderit placeat sequi? Facilis ullam natus nostrum in.
                        </motion.div>
                    </div>
                    <div className=''>
                        <motion.div
                            className='border-2 border-primary rounded-full h-56 w-56 overflow-hidden shadow-2xl shadow-primary'
                            initial={{ translateX: 30, opacity: 0 }}
                            whileInView={{ translateX: 0, opacity: 1 }}
                            transition={{ delay: 1, ease: 'easeIn' }}
                            viewport={{ once: true }}
                        >
                            <img src={eu} alt="Foto minha" />
                        </motion.div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <Skills />
                </div>
            </div>
        </>
    )
}

export default About