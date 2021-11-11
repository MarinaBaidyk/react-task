import React, {Component} from 'react';
import ListItem from "../ListItem/index";
import List from "../List/index";
import './index.css';

export class Recurs extends Component {
  render() {

    return (
      <div className="list-info">
        <h2>List start</h2>
        <ul>
          {this.props.direct.map(elem => {
            // return (
            //   <li>
            //     {item.type === 'dir' ?
            //       <div className="dir" >
            //         <p>{item.name}</p>
            //         {item.children ? <Recurs direct={item.children}/> : null}
            //       </div> :
            //       <div className="file">
            //         <span style={{color: "red"}}>{item.name}</span>
            //       </div>
            //     }
            //   </li>
            // )
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
      </div>
    )}
}

export default Recurs;
