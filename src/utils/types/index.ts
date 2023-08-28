import { ReactNode } from "react"

export type contextProps = {
    children: ReactNode
}

export type Theme = 'dark' | 'light'

export interface ProjectInterface {
    name: string
    showcaseImage: string
    about: string
    skills: Array<string>
    github: string
    link?: string
}