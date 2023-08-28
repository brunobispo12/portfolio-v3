import { motion } from "framer-motion"

interface SkillProps {
    skill: string
    index: number
}


function Skill({ skill, index }: SkillProps) {
    return (
        <motion.div className="bg-bar px-2 py-1 rounded text-white font-bold"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.3 * index }}
        >
            {skill}
        </motion.div>
    )
}

export default Skill