import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>
       <p>
        Total {length === 1 ? "task" : "tasks"}: {length}
        </p>
    </footer>
  )
}

export default Footer