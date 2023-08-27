import { motion } from 'framer-motion'
import Project from './components/Project'
import { Darth, ControleEstoque, DeluxeFleet } from '../../utils/constants/images'

function Portfolio() {
    return (
        <section className='md:px-20 space-y-16 md:space-y-16 md:space-x-16'>
            <motion.h1 className='text-3xl text-titleprimary font-bold'
                initial={{ x: -45, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, ease: 'easeIn' }}
                viewport={{ once: true }}
            >
                Porfólio
            </motion.h1>
            <motion.div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-12 gap-y-28 md:gap-y-16 place-content-center'
                initial={{ x: 45, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, ease: 'easeIn' }}
                viewport={{ once: true }}
            >
                <Project image={Darth} />
                <Project image={ControleEstoque} />
                <Project image={DeluxeFleet} />
            </motion.div>
        </section>
    )
}

export default Portfolio