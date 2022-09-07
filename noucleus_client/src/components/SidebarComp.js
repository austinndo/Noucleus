import React from 'react'
import { Sidebar, SidebarItem } from 'react-rainbow-components'
import { useNavigate } from 'react-router-dom'

const SidebarComp = ({ user, sidebarPage }) => {
  let navigate = useNavigate()

  class SimpleSidebar extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        selectedItem: null
      }
      // this.state = { selectedItem }
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

      const publicsSidebar = (
        <SidebarItem
          name="Sign In"
          label="Sign In"
          onClick={() => navigate('/signin')}
        />
      )

      const publicSidebar = (
        <Sidebar
          selectedItem={selectedItem}
          onSelect={this.handleOnSelect}
          id="sidebar-1"
        >
          <SidebarItem
            name="Sign In"
            className={sidebarPage === 'Sign In' ? 'selectedSidebarPage' : null}
            label="Sign In"
            onClick={() => navigate('/signin')}
          />
          <SidebarItem
            name="Genes"
            className={sidebarPage === 'Genes' ? 'selectedSidebarPage' : null}
            label="Genes"
            onClick={() => navigate('/')}
          />
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
