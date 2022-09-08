import React, { useState } from 'react'
import {
  Table,
  Column,
  MenuItem,
  Input,
  Textarea,
  Select
} from 'react-rainbow-components'

const GuidesTable = ({ guides, user }) => {
  const casOptions = ['SpCas9', 'SaCas9', 'Cas12a (Cpf1)']
  const strandOptions = ['+', '-']
  const editOptions = ['disruption', 'deletion', 'correction', 'insertion']

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
                label="Clone"
                onClick={(event, data) => console.log(`open modal`)}
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
            placeholder="SpCas9"
            options={casOptions}
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

export default GuidesTable
