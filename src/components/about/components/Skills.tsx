import { SiReact, SiNestjs, SiMongodb, SiTypescript, SiRuby, SiRubyonrails } from 'react-icons/si'
import { motion } from 'framer-motion'


function Skills() {
    return (
        <div className='flex gap-6'>
            <motion.div className='flex flex-col space-y-3'
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -30, opacity: 0 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
            >
                <h1 className='self-center font-bold text-lg text-titleprimary'>Skills</h1>
                <div className='flex gap-2'>
                    <SiReact size={32} />
                    <SiNestjs size={32} />
                    <SiMongodb size={32} />
                    <SiTypescript size={32} />
                </div>
            </motion.div>
            <motion.div className='w-1 rounded-2xl bg-bar'
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 30, opacity: 0 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
            />
            <motion.div className='flex flex-col space-y-3'
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 30, opacity: 0 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
            >
                <h1 className='self-center font-bold text-lg text-titleprimary'>Learning</h1>
                <div className='flex gap-4'>
                    <SiRuby size={30} />
                    <SiRubyonrails size={45} />
                </div>
            </motion.div>
        </div>
    )
}

export default Skills