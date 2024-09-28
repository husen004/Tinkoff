import React from 'react'

const WhiteButton = ({ title, className }) => {
  return (
    <div>
        <button type='button' className={`${className} rounded-lg bg-white p-3 transition-all ease-in-out duration-300 hover:opacity-60`}>{title}</button>
    </div>
  )
}

export default WhiteButton
