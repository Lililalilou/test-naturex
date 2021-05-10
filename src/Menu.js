import './Menu.scss'

const Menu = ({ categories, filterContent }) => {
  return (
    <ul className="menu">
      {categories.map((category) => {
        return (
          <li key={category} onMouseEnter={() => filterContent(category)}>
            {category}
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
