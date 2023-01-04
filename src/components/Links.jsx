import { List } from "../functions/List"

const list = List(5)

export default function Links() {
  return (
    <ul>
      {list.map((item, index) => (
        <li className="font-bold" key={index}>{item}</li>
      ))}
      <li className="font-bold">Início</li>
      <li className="font-bold">Sobre</li>
      <li className="font-bold">Skills</li>
      <li className="font-bold">Projetos</li>
      <li className="font-bold">Contato</li>
    </ul>
  )
}
