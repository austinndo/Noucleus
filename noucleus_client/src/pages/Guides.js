import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { VisualPicker, VisualPickerOption } from 'react-rainbow-components'
import GuidesTable from '../components/tables/GuidesTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDna } from '@fortawesome/free-solid-svg-icons'
const Guides = ({ guides, setSidebarPage }) => {
  let navigate = useNavigate()
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

  const guidesTrue = (
    <div>
      <ChooseEditType />
      <GuidesTable guides={guidesByEdit} />
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
