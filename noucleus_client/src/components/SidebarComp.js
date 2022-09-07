import React from 'react'
import { Sidebar, SidebarItem } from 'react-rainbow-components'

const SidebarComp = ({ user }) => {
  class SimpleSidebar extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        selectedItem: 'Genes'
      }
      this.handleOnSelect = this.handleOnSelect.bind(this)
    }

    handleOnSelect(event, selectedItem) {
      return this.setState({ selectedItem })
    }

    render() {
      const { selectedItem } = this.state

      const userSidebar = (
        <Sidebar
          selectedItem={selectedItem}
          onSelect={this.handleOnSelect}
          id="sidebar-1"
        >
          <SidebarItem name="Dashboard" label="Dashboard" />
          <SidebarItem name="Genes" label="Genes" />
          <SidebarItem name="Designs" label="Designs" />
          <SidebarItem name="Analytics" label="Analytics" />
          <SidebarItem name="Glossary" label="Glossary" />
        </Sidebar>
      )

      const publicSidebar = (
        <Sidebar
          selectedItem={selectedItem}
          onSelect={this.handleOnSelect}
          id="sidebar-1"
        >
          <SidebarItem name="Sign In" label="Sign In" />
          <SidebarItem name="Genes" label="Genes" />
          <SidebarItem name="Designs" label="Designs" />
          <SidebarItem name="Analytics" label="Analytics" />
          <SidebarItem name="Glossary" label="Glossary" />
        </Sidebar>
      )

      //////////////////////
      ////Remove bang op when user state is successfully set/////
      //////////////////////
      return !{ user } ? userSidebar : publicSidebar
    }
  }

  return <SimpleSidebar />
}

export default SidebarComp
