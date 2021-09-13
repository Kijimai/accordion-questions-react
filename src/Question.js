import React, { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
const Question = (props) => {
  const { id, title, info } = props
  const [expand, setExpand] = useState(false)

  const handleClick = () => {
    setExpand(!expand)
  }

  return (
    <article key={id} className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={handleClick}>
          {expand ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expand && <p>{info}</p>}
    </article>
  )
}

export default Question
