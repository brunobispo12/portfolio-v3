import useTheme from "../../../hook/useTheme"
import { motion } from "framer-motion"
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

function ChangeThemeButton() {

    const { currentTheme, changeTheme } = useTheme()

    const buttonVariants = {
        left: { x: -31 },
        right: { x: 30 },
    }

    return (
        <div onClick={changeTheme} className="cursor-pointer w-28 h-7 border-2 border-primary rounded-2xl px-2 overflow-hidden relative flex justify-center items-center text-titleprimary">
            <BsFillSunFill size={18} className="z-20" />
            <motion.div
                className="w-14 h-9 border-2 border-primary bg-secondary rounded-2xl relative z-10"
                initial={currentTheme === 'dark' ? 'right' : 'left'}
                animate={currentTheme === 'dark' ? 'right' : 'left'}
                variants={buttonVariants}
            />
            <BsFillMoonFill className="z-20" />
        </div>
    )
}

export default ChangeThemeButton