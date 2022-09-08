import { useEffect } from 'react'

const Glossary = ({ setSidebarPage }) => {
  useEffect(() => {
    setSidebarPage('Glossary')
  }, [])

  return (
    <div>
      <h2>Glossary Page</h2>
      <h2>What is Crispr Cas9?</h2>
      <h2>sgRNA</h2>
      <h2>Editing</h2>
      <h2>http://www.crisprtx.com/gene-editing/crispr-cas9</h2>
      <h2></h2>
      <h2></h2>
      <h2></h2>
      <h2></h2>
    </div>
  )
}

export default Glossary
