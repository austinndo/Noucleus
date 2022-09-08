import { useEffect } from 'react'

const Glossary = ({ setSidebarPage }) => {
  useEffect(() => {
    setSidebarPage('Glossary')
  }, [])

  return <h2>Glossary Page</h2>
}

export default Glossary
