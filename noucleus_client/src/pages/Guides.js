import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GuidesTable from '../components/tables/GuidesTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDna } from '@fortawesome/free-solid-svg-icons'

const URL = process.env.REACT_APP_API_URL

const Guides = ({ guides, genes, setGuides, setSidebarPage }) => {
  let navigate = useNavigate()

  const [guidesByEdit, setGuidesByEdit] = useState(null)
  const [selectedEdit, setSelectedEdit] = useState('disruption')
  const [formValues, setFormValues] = useState({
    gene: '',
    username: '',
    sequence: '',
    strand: '',
    cas: '',
    edit_type: selectedEdit,
    efficiency: 0
  })
  useEffect(() => {
    const getGuides = async () => {
      let res = await axios.get(`${URL}/guides`)
      setGuides(res.data)
      console.log(res.data)
    }
    getGuides()
    setSidebarPage('Designs')
    populateTable(selectedEdit)
  }, [])

  const populateTable = (editType) => {
    let guideProps = []
    guides.map((guideObj) => {
      if (guideObj.edit_type === editType) {
        guideProps.push(guideObj)
      }
    })
    setGuidesByEdit(guideProps)
  }

  const guidesTrue = (
    <div className="DesignsPage">
      <div className="VisualPickerContainer">
        <div
          className={
            selectedEdit === 'disruption'
              ? 'VisualPickerCardSelected'
              : 'VisualPickerCard'
          }
          onClick={() => {
            populateTable('disruption')
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
            populateTable('deletion')
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
            populateTable('correction')
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
            populateTable('insertion')
            setSelectedEdit('insertion')
          }}
        >
          <FontAwesomeIcon icon={faDna} /> Insertion{' '}
        </div>
      </div>
      <GuidesTable
        guides={guidesByEdit}
        setGuides={setGuides}
        populateTable={populateTable}
        genes={genes}
        selectedEdit={selectedEdit}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </div>
  )

  const guidesFalse = (
    <div className="DesignsPage">
      <h2>Guides page, guides loading...</h2>
    </div>
  )

  return guides ? guidesTrue : guidesFalse
}

export default Guides
