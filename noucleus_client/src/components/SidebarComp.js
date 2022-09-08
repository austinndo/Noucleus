import React from 'react'
import { Sidebar, SidebarItem } from 'react-rainbow-components'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDna,
  faHouse,
  faScissors,
  faChartPie,
  faBook,
  faRightToBracket
} from '@fortawesome/free-solid-svg-icons'

const SidebarComp = ({ user, sidebarPage }) => {
  let navigate = useNavigate()

  class SimpleSidebar extends React.Component {
    constructor(props) {
      super(props)
      this.state = { selectedItem: null }
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
          <SidebarItem
            icon={<FontAwesomeIcon icon={faHouse} />}
            name="Dashboard"
            label="Dashboard"
            className={
              sidebarPage === 'Dashboard' ? 'selectedSidebarPage' : null
            }
            onClick={() => navigate('/dashboard')}
          />
          <SidebarItem
            icon={<FontAwesomeIcon icon={faDna} />}
            name="Genes"
            label="Genes"
            className={sidebarPage === 'Genes' ? 'selectedSidebarPage' : null}
            onClick={() => navigate('/')}
          />
          <SidebarItem
            icon={<FontAwesomeIcon icon={faScissors} />}
            name="Designs"
            label="Designs"
            className={sidebarPage === 'Designs' ? 'selectedSidebarPage' : null}
            onClick={() => navigate('/designs')}
          />
          <SidebarItem
            icon={<FontAwesomeIcon icon={faChartPie} />}
            name="Analytics"
            label="Analytics"
            className={
              sidebarPage === 'Analytics' ? 'selectedSidebarPage' : null
            }
            onClick={() => navigate('/analytics')}
          />
          <SidebarItem
            icon={<FontAwesomeIcon icon={faBook} />}
            name="Glossary"
            label="Glossary"
            className={
              sidebarPage === 'Glossary' ? 'selectedSidebarPage' : null
            }
            onClick={() => navigate('/glossary')}
          />
        </Sidebar>
      )

      const publicSidebar = (
        <Sidebar
          selectedItem={selectedItem}
          onSelect={this.handleOnSelect}
          id="sidebar-1"
        >
          <SidebarItem
            icon={<FontAwesomeIcon icon={faRightToBracket} />}
            name="Sign In"
            className={sidebarPage === 'Sign In' ? 'selectedSidebarPage' : null}
            label="Sign In"
            onClick={() => navigate('/signin')}
          />
          <SidebarItem
            icon={<FontAwesomeIcon icon={faDna} />}
            name="Genes"
            className={sidebarPage === 'Genes' ? 'selectedSidebarPage' : null}
            label="Genes"
            onClick={() => navigate('/')}
          />
          <SidebarItem
            icon={<FontAwesomeIcon icon={faScissors} />}
            name="Designs"
            label="Designs"
            className={sidebarPage === 'Designs' ? 'selectedSidebarPage' : null}
            onClick={() => navigate('/designs')}
          />
          <SidebarItem
            icon={<FontAwesomeIcon icon={faChartPie} />}
            name="Analytics"
            label="Analytics"
            className={
              sidebarPage === 'Analytics' ? 'selectedSidebarPage' : null
            }
            onClick={() => navigate('/analytics')}
          />
          <SidebarItem
            icon={<FontAwesomeIcon icon={faBook} />}
            name="Glossary"
            label="Glossary"
            className={
              sidebarPage === 'Glossary' ? 'selectedSidebarPage' : null
            }
            onClick={() => navigate('/glossary')}
          />
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
