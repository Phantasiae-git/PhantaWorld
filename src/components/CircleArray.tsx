import React from 'react'

interface item{
    color: string;
    label: string;
}

interface CirclArrayProps {
  items: item[];
}

const CircleArray: React.FC<CirclArrayProps> = ({ items }) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
      alignItems: 'center'
    }}>
      {items.map((item, index) => (
        <div key={index} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '80px'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: item.color,
            marginBottom: '8px'
          }} />
          <span style={{
            fontSize: '17px',
            textAlign: 'center',
            wordBreak: 'break-word',
            fontFamily: 'poppins',
          }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default CircleArray