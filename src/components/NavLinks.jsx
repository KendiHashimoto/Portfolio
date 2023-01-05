let items = ["Início", "Sobre", "Skills", "Projetos", "Contato"]
let links = ["#Início", "#Sobre", "#Skills", "#Projetos", "#Contato"]

export default function Links() {
  return (
    <nav className="flex">
      <ul className="flex gap-10 items-center">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a className="nav-links" href="">
                {item}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
