import React, {Component} from 'react'
import ListItem from "../ListItem";

export class List extends Component {
  render() {

    return (
      <ul>
        {this.props.direct.map( elem => {
          if (elem.type === 'dir') {
            return (
                <ListItem name={elem.name} type={elem.type} key={elem.id}>
                  <List direct={elem.children}/>
                </ListItem>
            )
          } else {
            return (
              <ListItem key={elem.id} name={elem.name}/>
            )
          }
        })}
      </ul>
    )
  }
}

export default List;
