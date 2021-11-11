import React, {Component} from 'react'
import PDF from "../assets/pdf.svg";
import EXEL from "../assets/xlsx.svg";
import DOC from "../assets/docx.svg";
import FOLDER from "../assets/folder.svg"

export class ListItem extends Component {
  render() {
    const {name, type} = this.props
    let icon = PDF

    if (/\.xlsx/mg.test(name)) icon = EXEL

    if (/\.docx/mg.test(name)) icon = DOC

    if(type === 'dir') icon = FOLDER

    return (
        <li>
          <div className="title-wrapper">
            <i className="icon-wrapper">
              <img src={icon} alt={name}/>
            </i>
            <span className="parent-list">{name}</span>
          </div>
          {this.props.children}
        </li>
    )
  }
}

export default ListItem;
