import useTheme from "../../hook/useTheme"
import { motion } from "framer-motion"
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'


function Header() {

  const { currentTheme, changeTheme } = useTheme()

  const buttonVariants = {
    left: { x: -28 },
    right: { x: 27 },
  }

  return (
    <header className="flex justify-end px-6 md:px-12 py-4">
      <div onClick={changeTheme} className="w-24 h-7 border-2 border-primary rounded-2xl px-2 overflow-hidden relative flex justify-center items-center">
        <BsFillSunFill size={18} className="z-20" />
        <motion.div
          className="w-12 h-7 border-2 border-primary bg-secondary rounded-2xl relative z-10"
          initial={currentTheme === 'dark' ? 'left' : 'right'}
          animate={currentTheme === 'dark' ? 'right' : 'left'}
          variants={buttonVariants}
        />
        <BsFillMoonFill className="z-20" />
      </div>
    </header>
  )
}

export default Header