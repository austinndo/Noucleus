import React from 'react'
import { useEffect } from 'react'
import GuidesTable from '../components/GuidesTable'

const Guides = ({ guides, setSidebarPage }) => {
  useEffect(() => {
    setSidebarPage('Designs')
  }, [])

  const guidesTrue = (
    <div>
      <GuidesTable guides={guides} />
    </div>
  )

  const guidesFalse = (
    <div>
      <h2>Guides page, guides loading...</h2>
    </div>
  )

  // if (guides) {
  //   return (
  //     <div>
  //       <GuidesTable guides={guides} />
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <h2>Guides page, guides loading...</h2>
  //     </div>
  //   )
  // }

  return guides ? guidesTrue : guidesFalse
}

export default Guides
