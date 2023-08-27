import { AnimatePresence, motion } from 'framer-motion'
import rentAcar from '../../../utils/images/rentacar.png'
import { useEffect, useState } from 'react'
import ViewMore from './viewMore'
import ProjectModal from '../../project-modal/ProjectModal'

interface ProjectProps {
  image: string
  project: object
}

function Project({ image, project }: ProjectProps) {

  const [viewDetails, setViewDetails] = useState<boolean>(false)
  const [projectModal, setProjectModal] = useState<boolean>(false)

  return (
    <>
      <motion.div className='border-2 border-secondary h-52 w-full rounded relative flex flex-col justify-center items-center'
        onHoverStart={() => setViewDetails(true)}
        onHoverEnd={() => setViewDetails(false)}
      >
        <img src={image} alt="rentacar" className='h-full w-full' />
        <AnimatePresence>{viewDetails && <ViewMore setModal={setProjectModal} />}</AnimatePresence>
      </motion.div >
      <AnimatePresence>{projectModal && <ProjectModal setModal={setProjectModal} />}</AnimatePresence>
    </>
  )
}

export default Project