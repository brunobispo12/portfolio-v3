import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiArrowSmRight } from 'react-icons/hi'

function viewMore() {

    const [arrow, setArrow] = useState<boolean>(false)

    return (
        <motion.div className='text-black absolute top-0 bg-[#e5e7eb94] h-full w-full flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.span className='font-bold flex gap-1 items-center cursor-pointer text-lg'
                onHoverStart={() => setArrow(true)}
                onHoverEnd={() => setArrow(false)}
            >
                Detalhes
                <motion.span
                    variants={{
                        hover: {
                            x: 3
                        },
                        initial: {
                            x: 0
                        }
                    }}
                    animate={arrow ? 'hover' : 'initial'}
                >
                    <HiArrowSmRight size={20} />
                </motion.span>
            </motion.span>
        </motion.div >
    )
}

export default viewMore