import { motion } from "framer-motion"

interface ProjectModal {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}


function ProjectModal({ setModal }: ProjectModal) {
    return (
        <motion.div className='z-50 fixed right-0 top-0 border-l-4 border-secondary h-screen w-4/5 md:w-2/5 bg-primary bg-opacity-50 px-6 p-2'
            initial={{ x: 1500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 1500, opacity: 0 }}
            transition={{ duration: .4 }}
        >
            <div className="flex justify-end"><button onClick={() => setModal(false)}>Fechar</button></div>
        </motion.div>
    )
}

export default ProjectModal