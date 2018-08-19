import React from 'react';
import { connect } from 'react-redux';

class CategoryItem extends React.Component {
    constructor(props) {
        super(props)
    this.editView = this.editView.bind(this)
    }

    editView(category) {
        this.props.updateMode(category)
    }

    render() {
        return(
            <React.Fragment>
                <ul className="nav">
                {
                    this.props.category.map((category) =>
                            <li className="note" name={category.id} key={category.id} onDoubleClick={() => this.editView(category)}>
                                <h3>{category.name}</h3>
                                <p>{category.budget}</p>
                                <input type="button" onClick={this.props.removeCategory} name={category.id} value="delete"/>

                                {this.props.updateId === category.id && this.props.children}
                            </li>
                        )
                }
                </ul>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    expense : state.expReducer
})

export default connect(mapStateToProps)(CategoryItem)