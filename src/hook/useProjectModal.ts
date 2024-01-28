import { useContext, useEffect, useState } from 'react'
import { ProjectModalContext } from '../context/ProjectModalContext'

function useProjectModal() {
    const { modal, setModal } = useContext(ProjectModalContext)
    const [currentModalState, setCurrentModalState] = useState<boolean>(false)

    useEffect(() => {
        setCurrentModalState(modal)
    }, [modal])

    const openModal = () => {
        if (modal) {
            setModal(false)
            setInterval(() => {
                setModal(true)
            }, 1000)
        }
        setModal(true)
    }

    return { currentModalState, openModal }
}

export default useProjectModal