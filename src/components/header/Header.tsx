import ChangeThemeButton from "./components/ChangeThemeButton"


function Header() {

  return (
    <header className="flex justify-end px-6 md:px-12 py-4 gap-8">
      <ChangeThemeButton />
    </header>
  )
}

export default Header