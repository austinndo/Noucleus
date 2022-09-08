import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GuidesTable from '../components/tables/GuidesTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDna } from '@fortawesome/free-solid-svg-icons'
const Guides = ({ guides, setSidebarPage }) => {
  let navigate = useNavigate()

  const [guidesByEdit, setGuidesByEdit] = useState(null)

  useEffect(() => {
    setSidebarPage('Designs')
  }, [])

  const popTable = (selectedEdit) => {
    let guideProps = []
    guides.map((guideObj) => {
      if (guideObj.edit_type === selectedEdit) {
        guideProps.push(guideObj)
      }
    })
    console.log(guideProps)
    setGuidesByEdit(guideProps)
  }

  const guidesTrue = (
    <div>
      <div>Choose Edit Type here</div>
      <div className="VisualPickerContainer">
        <div
          className="VisualPickerCard"
          onClick={() => {
            popTable('disruption')
          }}
        >
          <FontAwesomeIcon icon={faDna} /> Disruption
        </div>
        <div className="VisualPickerCard" onClick={() => popTable('deletion')}>
          <FontAwesomeIcon icon={faDna} /> Deletion{' '}
        </div>
        <div
          className="VisualPickerCard"
          onClick={() => popTable('correction')}
        >
          <FontAwesomeIcon icon={faDna} /> Correction
        </div>
        <div className="VisualPickerCard" onClick={() => popTable('insertion')}>
          <FontAwesomeIcon icon={faDna} /> Insertion{' '}
        </div>
      </div>
      <GuidesTable guides={guidesByEdit} />
    </div>
  )

  const guidesFalse = (
    <div>
      <h2>Guides page, guides loading...</h2>
    </div>
  )

  return guides ? guidesTrue : guidesFalse
}

export default Guides
