import React, {Component} from 'react'
import NavItem from './NavItem'
class Navbar extends Component {
  render() {
    return (
      <div>
        <NavItem link="#" text="TERAZ" selected={true}/>
        <NavItem link="#" text="GRY"/>
        <NavItem link="#" text="POLECANE"/>
      </div>
    )

  }

}

export default Navbar;
