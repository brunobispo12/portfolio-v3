import { createContext, useEffect, useState } from "react";
import { Theme, contextProps } from "../utils/types";

export const ProjectModalContext = createContext<any>(null)

export default function ThemeContextProvider({ children }: contextProps) {
    const [modal, setModal] = useState<boolean>(false)

    const projectModalValue = {
        modal,
        setModal,
    }

    return (
        <ProjectModalContext.Provider value={projectModalValue}>
            {children}
        </ProjectModalContext.Provider>
    )
}