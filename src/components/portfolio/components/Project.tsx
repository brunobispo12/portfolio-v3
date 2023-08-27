import { AnimatePresence, motion } from 'framer-motion'
import rentAcar from '../../../utils/images/rentacar.png'
import { useState } from 'react'
import ViewMore from './viewMore'

interface ProjectProps {
  image: string
}

function Project({ image }: ProjectProps) {

  const [viewDetails, setViewDetails] = useState<boolean>(false)

  return (
    <motion.div className='border-2 border-secondary h-52 w-full rounded relative flex flex-col justify-center items-center'
      onHoverStart={() => setViewDetails(true)}
      onHoverEnd={() => setViewDetails(false)}
    >
      <img src={image} alt="rentacar" className='h-full w-full' />
      <AnimatePresence>{viewDetails && <ViewMore />}</AnimatePresence>
    </motion.div >
  )
}

export default Project