import React from 'react'
import { useEffect } from 'react'
import {
  Table,
  Column,
  MenuItem,
  ButtonGroup,
  ButtonIcon,
  Badge
} from 'react-rainbow-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDna, faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const Guides = ({ guides, setSidebarPage }) => {
  useEffect(() => {
    setSidebarPage('Designs')
  }, [])

  ///////////////

  class GuidesTable extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        sortedBy: undefined,
        sortDirection: 'asc',
        data: guides
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
            <Column header="Cas" field="cas" sortable />
            <Column header="Edit" field="edit_type" sortable />
            <Column type="action">
              <MenuItem
                label="Clone"
                onClick={(event, data) => console.log(`Edit ${data.name}`)}
              />
              <MenuItem
                label="See Details"
                onClick={(event, data) => console.log(`Edit ${data.name}`)}
              />
            </Column>
          </Table>
        </div>
      )
    }
  }

  /////////////////////

  if (guides) {
    return (
      <div>
        <GuidesTable />
        {/* <Table keyField="id" data={guides}>
          <Column header="Target" field="gene_target" />
          <Column header="Strand" field="strand" />
          <Column header="Cas" field="strand" />
          <Column header="Edit" field="edit_type" />
          <Column type="action" >
            <MenuItem label="Clone" onClick={(event, data) => console.log(`Edit ${data.name}`)} />
            <MenuItem label="See Details" onClick={(event, data) => console.log(`Edit ${data.name}`)} />
          </ Column>
        </Table> */}
        {/*         
        <h2>Guides page</h2>
        <div className="GuideCardContainer">
          {guides.map((guide) => (
            <div className="GuideCard" key={guide.id}>
              <h2>Target: {guide.gene}</h2>
              <h2>Strand: {guide.strand}</h2>
              <h2>Cas: {guide.cas}</h2>
              <h2>Edit type: {guide.edit_type}</h2>
              <h4>Seq: {guide.sequence}</h4>

              {/* make button show modal }
              <button>Clone sequence</button>
            </div>
          ))}
        </div> 
      */}
      </div>
    )
  } else {
    return (
      <div>
        <h2>Guides page, guides loading...</h2>
      </div>
    )
  }
}

export default Guides
