import React from 'react'
import { Sidebar, SidebarItem } from 'react-rainbow-components'

const SidebarComp = () => {
  class SimpleSidebar extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        selectedItem: 'GettingStarted'
      }
      this.handleOnSelect = this.handleOnSelect.bind(this)
    }

    handleOnSelect(event, selectedItem) {
      return this.setState({ selectedItem })
    }

    render() {
      const { selectedItem } = this.state

      return (
        <Sidebar
          selectedItem={selectedItem}
          onSelect={this.handleOnSelect}
          id="sidebar-1"
        >
          <SidebarItem name="Dashboard" label="Dashboard" />
          <SidebarItem name="Aplications" label="Applications" />
          <SidebarItem name="Components" label="Components" />
          <SidebarItem name="Messages" label="Messages" />
          <SidebarItem name="Charts" label="Charts" />
        </Sidebar>
      )
    }
  }

  return <SimpleSidebar />
}

export default SidebarComp
