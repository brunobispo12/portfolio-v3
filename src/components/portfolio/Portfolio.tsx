import { motion } from 'framer-motion'
import Project from './components/Project'

function Portfolio() {
    return (
        <section className='md:px-20 space-y-16 md:space-y-16 md:space-x-16'>
            <motion.h1 className='text-3xl text-titleprimary font-bold'
                initial={{ x: -45, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5, ease: 'easeIn' }}
                viewport={{ once: true }}
            >
                Porfólio
            </motion.h1>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-8 gap-y-28 md:gap-y-16 place-content-center'>
                <Project />
                <Project />
                <Project />
            </div>
        </section>
    )
}

export default Portfolio