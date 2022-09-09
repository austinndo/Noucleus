import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, Column, MenuItem } from 'react-rainbow-components'
import GuideDesignForm from '../GuideDesignForm'

const GuidesTable = ({ guides, user, selectedEdit, formData, setFormData }) => {
  let navigate = useNavigate()

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
              <MenuItem
                label="Clone"
                onClick={(event, data) => setFormData({ data })}
              />
              <MenuItem
                label="See Details"
                onClick={(event, data) => console.log(`${data.sequence}`)}
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
        <GuideDesignForm selectedEdit={selectedEdit} formData={formData} />{' '}
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
