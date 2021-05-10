import { useState } from 'react'
import Menu from './Menu'
import './View.scss'

const View = ({ id, title, text, bg, objectPosition, items }) => {
  const categoryList = [...new Set(items.map((item) => item.category))]
  const [categories, setCategories] = useState(categoryList)
  const [content, setContent] = useState('')
  const [showContent, setShowContent] = useState(false)

  const filterContent = (category) => {
    const result = items.filter((item) => item.category === category)
    const newContent = result[0].content
    setContent(newContent)
  }

  return (
    <a
      href="/"
      className="view"
      onMouseEnter={() => setShowContent(!showContent)}
      onMouseLeave={() => setShowContent(!showContent)}
    >
      <img
        src={bg}
        alt={title}
        className="view__background"
        // style={objectPosition ? { objectFit: 'none', objectPosition } : null}
      />
      <div className="view__content-wrapper">
        <div className="view__title">
          <p>{`${text[0]} `}</p>
          <p>{`${text[1]} `}</p>
        </div>
        <div className="view__content">
          {/* {showContent && (
            <> */}
          <Menu categories={categories} filterContent={filterContent} />
          {content && <div className="content">{content}</div>}

          {/* </> */}
          {/* )} */}
        </div>
      </div>
    </a>
  )
}

export default View
