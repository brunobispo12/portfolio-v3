import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiTranslate } from 'react-icons/hi'

function ChangeLanguageButton() {

    const { i18n } = useTranslation()

    function handleChangeLanguage() {
        const cachedLanguage: string = localStorage.getItem('language') || 'portuguese'
        const newLanguage = cachedLanguage == 'portuguese' ? 'english' : 'portuguese'
        localStorage.setItem("language", newLanguage)
        location.reload()
    }

    useEffect(() => {
        const reloadLanguage = localStorage.getItem("language")
        if (reloadLanguage) {
            i18n.changeLanguage(reloadLanguage)
        }
    }, [])

    return (
        <button onClick={handleChangeLanguage}><HiTranslate size={23} /></button>
    )
}

export default ChangeLanguageButton