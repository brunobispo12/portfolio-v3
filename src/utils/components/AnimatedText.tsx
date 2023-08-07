import { motion } from 'framer-motion'

type Props = {
    text: string
}

function AnimatedText({ text }: Props) {

    const characters = text.split('')

    return (
        <>
            <div className='flex whitespace-pre'>
                    {characters.map((char, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.04 * index }}
                        >
                            {char}
                        </motion.div>
                    ))}
            </div>

        </>
    )
}

export default AnimatedText