import React, {Component} from 'react'
import NavItem from './NavItem'
class Navbar extends Component {
  render() {
    return (
      <div className="row navbar">
        <div className="col-12 navbar">
          <div>
            <NavItem link="/stats/1" text="TERAZ" selected={true} alternative={['/stats']}/>
            <NavItem link="/games" text="GRY"/>
            <NavItem link="#" text="POLECANE"/>
          </div>
        </div>
      </div>
    )

  }

}

export default Navbar;
