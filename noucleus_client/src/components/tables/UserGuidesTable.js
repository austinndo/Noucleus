import React, { useState } from 'react'
import {
  Table,
  Column,
  MenuItem,
  Input,
  Textarea,
  Select
} from 'react-rainbow-components'

const UserGuidesTable = ({ guides, user }) => {
  const casOptions = [
    { value: 'SpCas9', label: 'SpCas9' },
    { value: 'SaCas9', label: 'SaCas9' },
    { value: 'Cas12a', label: 'Cas12a (Cpf1)' }
  ]
  const strandOptions = [
    { value: '+', label: 'forward' },
    { value: '-', label: 'reverse' }
  ]
  const editOptions = [
    { value: 'disruption', label: 'disruption' },
    { value: 'deletion', label: 'deletion' },
    { value: 'correction', label: 'correction' },
    { value: 'insertion', label: 'insertion' }
  ]

  const [formValues, setFormValues] = useState({
    gene: '',
    username: '',
    sequence: '',
    strand: '',
    cas: '',
    edit_type: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
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
              <MenuItem
                label="Edit"
                onClick={(event, data) => console.log(`open modal`)}
              />
              <MenuItem
                label="Delete"
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
        <form className="DesignForm">
          <Input
            onChange={handleChange}
            name="gene"
            type="text"
            placeholder="gene target"
            value={formValues.gene}
            required
          />
          <Input
            onChange={handleChange}
            name="user"
            type="text"
            placeholder="username"
            value={formValues.username}
            required
          />
          <Select
            onChange={handleChange}
            name="cas"
            placeholder="Cas"
            options={casOptions}
          />
          <Select
            onChange={handleChange}
            name="strand"
            placeholder="strand"
            options={strandOptions}
          />
          <Select
            onChange={handleChange}
            name="edit_type"
            placeholder="type of edit"
            options={editOptions}
          />
          <Textarea
            onChange={handleChange}
            name="sequence"
            placeholder="design sequence"
            value={formValues.sequence}
            required
          />
        </form>
        <GuidesTableComp guides={guides} />
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

export default UserGuidesTable
