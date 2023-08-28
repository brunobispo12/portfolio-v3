import { motion } from "framer-motion"
import { IoCloseSharp } from 'react-icons/io5'
import { ProjectInterface } from "../../utils/types"
import Skill from "./components/Skill"

interface ProjectModal {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    project: ProjectInterface
}


function ProjectModal({ setModal, project }: ProjectModal) {
    return (
        <motion.div className='z-50 fixed right-0 top-0 border-l-4 border-secondary h-screen w-4/5 md:w-2/5 bg-primary bg-opacity-50 px-6 p-5 space-y-12'
            initial={{ x: 1500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 1500, opacity: 0 }}
            transition={{ duration: .5 }}
        >
            <div className="flex justify-end">
                <button onClick={() => setModal(false)}>
                    <IoCloseSharp size={32} />
                </button>
            </div>
            <div className="space-y-8">
                <h1 className="font-bold text-2xl text-titleprimary">{project.name}</h1>
                <p className="text-justify tracking-tighter leading-6">{project.about}</p>
                <div className="space-y-4">
                    <h2 className="font-bold text-xl text-titleprimary">Skills</h2>
                    <div className="flex gap-4 flex-wrap">
                        {project.skills.map((skill, index) => {
                            return <Skill skill={skill} index={index} />
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectModal 