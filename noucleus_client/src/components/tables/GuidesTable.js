import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Table, Column, MenuItem } from 'react-rainbow-components'
import GuideDesignForm from '../GuideDesignForm'

const URL = process.env.REACT_APP_API_URL

const GuidesTable = ({
  guides,
  genes,
  user,
  selectedEdit,
  formValues,
  setFormValues
}) => {
  let navigate = useNavigate()
  let geneClone = ''

  const handleClone = async (...data) => {
    // const geneIds = (genes, cloneGeneName) => {
    //   genes.map((gene) => {
    //     if (cloneGeneName === gene.name) {
    //       geneClone = gene.id
    //     }
    //   })
    // }
    // geneIds(genes, data[1].gene)

    //gene:geneClone

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
    alert(`cloned design ${data[1].id}`)
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
            <Column header="Target" field="gene" sortable />
            <Column header="GC Content" field="percent_gc" sortable />
            <Column header="Efficiency" field="efficiency" sortable />
            <Column header="Strand" field="strand" sortable />
            <Column type="action">
              <MenuItem label="Clone" onClick={handleClone} />
              <MenuItem
                label="See Details"
                onClick={(event, data) => console.log(`${data.sequence}`)}
              />
              <MenuItem
                label="Delete"
                onClick={async (event, data) =>
                  await axios.delete(`${URL}/guides/${data.id}`)
                }
              />
            </Column>
          </Table>
        </div>
      )
    }
  }

  if (guides) {
    return (
      <div>
        <GuidesTableComp guides={guides} />
        <GuideDesignForm
          selectedEdit={selectedEdit}
          formValues={formValues}
        />{' '}
      </div>
    )
  } else {
    return (
      <div>
        <GuidesTableComp />
      </div>
    )
  }
}

export default GuidesTable
