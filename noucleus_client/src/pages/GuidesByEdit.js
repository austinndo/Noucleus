import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { VisualPicker, VisualPickerOption } from 'react-rainbow-components'
import GuidesByEditTable from '../components/tables/GuidesByEditTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDna,
  faHouse,
  faScissors,
  faChartPie,
  faBook,
  faRightToBracket
} from '@fortawesome/free-solid-svg-icons'

const GuidesByEdit = ({ guides, setSidebarPage }) => {
  let { editType } = useParams()

  const [guidesByEdit, setGuidesByEdit] = useState(null)

  useEffect(() => {
    setSidebarPage('Designs')
  }, [])

  class ChooseEditType extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        value: null
      }
      this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(value) {
      return this.setState({ value })
    }

    render() {
      const { value } = this.state
      return (
        <VisualPicker
          label="Choose Edit Type"
          value={value}
          onChange={this.handleOnChange}
        >
          <VisualPickerOption name="disruption">
            <FontAwesomeIcon icon={faDna} />
            Disruption
          </VisualPickerOption>
          <VisualPickerOption name="deletion">
            <FontAwesomeIcon icon={faDna} />
            Deletion
          </VisualPickerOption>
          <VisualPickerOption name="correction">
            <FontAwesomeIcon icon={faDna} />
            Correction
          </VisualPickerOption>
          <VisualPickerOption name="insertion">
            <FontAwesomeIcon icon={faDna} />
            Insertion
          </VisualPickerOption>
        </VisualPicker>
      )
    }
  }

  return (
    <div>
      <ChooseEditType />
      <GuidesByEditTable guides={guidesByEdit} />
    </div>
  )
}

export default GuidesByEdit
