import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Table, Column, MenuItem } from 'react-rainbow-components'
import GuideDesignForm from '../GuideDesignForm'

const URL = process.env.REACT_APP_API_URL

const GuidesTable = ({
  guides,
  setGuides,
  genes,
  populateTable,
  user,
  selectedEdit,
  formValues,
  setFormValues
}) => {
  let navigate = useNavigate()

  const [formToggle, setFormToggle] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState(null)

  const getGuides = async () => {
    let res = await axios.get(`${URL}/guides`)
    setGuides(res.data)
    console.log(res.data)
  }

  const handleClone = async (...data) => {
    let postData = {
      gene: data[1].gene,
      user: 'charlz-darwin',
      sequence: data[1].sequence,
      strand: data[1].strand,
      cas: data[1].cas,
      edit_type: selectedEdit,
      efficiency: 0,
      percent_gc: data[1].percent_gc
    }

    console.log(postData)

    await axios
      .post(`${URL}/guides`, postData)
      .catch((error) => console.log(error))

    const cloneConfirm = () => {
      alert(`Cloned design ${data[1].id}`)
    }

    cloneConfirm()

    if (cloneConfirm) {
      getGuides()
      populateTable(selectedEdit)
    }
  }

  const handleUpdate = (...data) => {
    formToggle === false ? setFormToggle(true) : setFormToggle(false)
    setSelectedRecord(data[1].id)

    let formData = {
      gene: data[1].gene,
      user: 'charlz-darwin',
      sequence: data[1].sequence,
      strand: data[1].strand,
      cas: data[1].cas,
      edit_type: selectedEdit,
      efficiency: 0,
      percent_gc: data[1].percent_gc
    }

    setFormValues(formData)
    console.log(formValues)
  }

  const handleDelete = async (...data) => {
    await axios.delete(`${URL}/guides/${data[1].id}`)

    alert(`Deleted design ${data[1].id}`)
    getGuides()
    populateTable(selectedEdit)
  }

  class GuidesTableComp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        sortedBy: undefined,
        sortDirection: 'asc',
        data: props.guides
      }
      this.handleOnSort = this.handleOnSort.bind(this)
    }

    handleOnSort(event, field, nextSortDirection) {
      const { data } = this.state

      const newData = [...data]

      const key = (value) => value[field]
      const reverse = nextSortDirection === 'asc' ? 1 : -1

      const sortedData = newData.sort((aItem, bItem) => {
        const aValue = key(aItem)
        const bValue = key(bItem)
        return reverse * ((aValue > bValue) - (bValue > aValue))
      })

      this.setState({
        data: sortedData,
        sortedBy: field,
        sortDirection: nextSortDirection
      })
    }

    render() {
      const { data, sortDirection, sortedBy } = this.state
      return (
        <div>
          <Table
            keyField="id"
            data={data}
            onSort={this.handleOnSort}
            sortDirection={sortDirection}
            sortedBy={sortedBy}
          >
            <Column header="Id" field="id" sortable />
            <Column header="Target" field="gene" sortable />
            <Column header="Sequence" field="sequence" width={300} />
            <Column header="GC Content" field="percent_gc" sortable />
            <Column header="Efficiency" field="efficiency" sortable />
            <Column header="Strand" field="strand" sortable />
            <Column type="action">
              <MenuItem label="Clone" onClick={handleClone} />
              <MenuItem label="Update" onClick={handleUpdate} />
              <MenuItem label="Delete" onClick={handleDelete} />
            </Column>
          </Table>
        </div>
      )
    }
  }

  if (guides) {
    return (
      <div className="DesignTable">
        <GuidesTableComp guides={guides} />
        {formToggle === true ? (
          <GuideDesignForm
            formValues={formValues}
            setFormValues={setFormValues}
            selectedEdit={selectedEdit}
            selectedRecord={selectedRecord}
            formToggle={formToggle}
            setFormToggle={setFormToggle}
          />
        ) : (
          <div></div>
        )}
      </div>
    )
  } else {
    return <div>Loading guides ...</div>
  }
}

export default GuidesTable
