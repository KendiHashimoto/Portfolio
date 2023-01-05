import Links from "./NavLinks"

export default function Navbar() {
  return (
    <div className="m-auto flex w-[80%] h-28 justify-between">
      <img
        className="w-[60px] h-14 self-center cursor-pointer"
        src="../../assets/icons/onigiri.png"
        alt="Logo"
      />
      <Links />
    </div>
  )
}
