import React from 'react';
// import CategoryForm from '../category-form/CategoryForm.js'

export default class CategoryItem extends React.Component {
    constructor(props) {
        super(props)
    this.editView = this.editView.bind(this)
    }

    //only submit action refreshes the page
    editView(note) {
        
        this.props.updateMode(note)
        // console.log(e.target)
    }

    render() {
        return(
            <React.Fragment>
                <ul className="nav">
                {
                    this.props.category.map((note) =>
                            <li className="note" name={note.id} key={note.id} onDoubleClick={() => this.editView(note)}>
                                <h3>{note.name}</h3>
                                <p>{note.budget}</p>
                                <input type="button" onClick={this.props.removeCategory} name={note.id} value="delete"/>
                                {this.props.updateId === note.id && this.props.children}
                            </li>
                        )
                }
                </ul>
            </React.Fragment>
        )
    }
}