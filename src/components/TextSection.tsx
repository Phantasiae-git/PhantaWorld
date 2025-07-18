import React, { CSSProperties, ReactNode } from 'react'
import "./TextSection.css"

interface Props {
  children: ReactNode;
  title?: string;
  type?: "rn";
  style?:CSSProperties;
  fontstyle?:CSSProperties;
  titlestyle?:CSSProperties;
  h5?:boolean;
  id?: string;
}

const TextSection = ({ children, title, type, style, fontstyle, titlestyle, h5, id }: Props) => {
  return (
    <div id={id} className="beige-section" style={style}>
        {title && !h5 && <h2 style={titlestyle}>{title}</h2>}
        {title && h5 && <h5 style={titlestyle}>{title}</h5>}
        {type === "rn" ? (
                  children
                ) : (
                  <p style={fontstyle}>
        {children}
        </p>
                )}
      </div>
  )
}

export default TextSection