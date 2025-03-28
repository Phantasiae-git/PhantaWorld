import React, { CSSProperties, ReactNode } from 'react'
import "./TextSection.css"

interface Props {
  children: ReactNode;
  title?: string;
  type?: "rn";
  style?:CSSProperties;
}

const TextSection = ({ children, title, type, style }: Props) => {
  return (
    <div id="beige-section" className="beige-section" style={style}>
        {title && <h2>{title}</h2>}
        {type === "rn" ? (
                  children
                ) : (
                  <p>
        {children}
        </p>
                )}
      </div>
  )
}

export default TextSection