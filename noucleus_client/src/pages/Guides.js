import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GuidesTable from '../components/tables/GuidesTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDna } from '@fortawesome/free-solid-svg-icons'
const Guides = ({ guides, setSidebarPage }) => {
  let navigate = useNavigate()

  const [guidesByEdit, setGuidesByEdit] = useState(null)
  const [selectedEdit, setSelectedEdit] = useState(null)

  useEffect(() => {
    setSidebarPage('Designs')
  }, [])

  const popTable = (editType) => {
    let guideProps = []
    guides.map((guideObj) => {
      if (guideObj.edit_type === editType) {
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
          className={
            selectedEdit === 'disruption'
              ? 'VisualPickerCardSelected'
              : 'VisualPickerCard'
          }
          onClick={() => {
            popTable('disruption')
            setSelectedEdit('disruption')
          }}
        >
          <FontAwesomeIcon icon={faDna} /> Disruption
        </div>
        <div
          className={
            selectedEdit === 'deletion'
              ? 'VisualPickerCardSelected'
              : 'VisualPickerCard'
          }
          onClick={() => {
            popTable('deletion')
            setSelectedEdit('deletion')
          }}
        >
          <FontAwesomeIcon icon={faDna} /> Deletion{' '}
        </div>
        <div
          className={
            selectedEdit === 'correction'
              ? 'VisualPickerCardSelected'
              : 'VisualPickerCard'
          }
          onClick={() => {
            popTable('correction')
            setSelectedEdit('correction')
          }}
        >
          <FontAwesomeIcon icon={faDna} /> Correction
        </div>
        <div
          className={
            selectedEdit === 'insertion'
              ? 'VisualPickerCardSelected'
              : 'VisualPickerCard'
          }
          onClick={() => {
            popTable('insertion')
            setSelectedEdit('insertion')
          }}
        >
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
