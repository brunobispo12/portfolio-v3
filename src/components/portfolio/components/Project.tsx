import { AnimatePresence, motion } from 'framer-motion'
import rentAcar from '../../../utils/images/rentacar.png'
import { useEffect, useState } from 'react'
import ViewMore from './viewMore'
import ProjectModal from '../../project-modal/ProjectModal'
import { ProjectInterface } from '../../../utils/types'
import useProjectModal from '../../../hook/useProjectModal'

interface ProjectProps {
  image: string
  project: ProjectInterface
}

function Project({ image, project }: ProjectProps) {

  const [viewDetails, setViewDetails] = useState<boolean>(false)
  const [projectModal, setProjectModal] = useState<boolean>(false)

  const { currentModalState, openModal } = useProjectModal()

  return (
    <>
      <motion.div className='border-2 border-secondary h-52 w-full rounded relative flex flex-col justify-center items-center'
        onHoverStart={() => setViewDetails(true)}
        onHoverEnd={() => setViewDetails(false)}
      >
        <img src={image} alt="rentacar" className='h-full w-full' />
        <AnimatePresence>{viewDetails && <ViewMore setModal={setProjectModal} />}</AnimatePresence>
      </motion.div >
      <AnimatePresence>{currentModalState && <ProjectModal setModal={openModal} project={project} />}</AnimatePresence>
    </>
  )
}

export default Project