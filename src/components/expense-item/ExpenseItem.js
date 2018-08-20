import React from 'react'
import { expenseDelete } from '../../action/expense-actions.js'
import { connect } from 'react-redux';

class ExpenseItem extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(e) {
        let id = e.target.name
        this.props.expenseDelete(id)
    }

    render() {
        return(
            <React.Fragment>
                <h2>Expense Item</h2>
                <ul className="nav">
                {
                    this.props.expense.map((expense) =>
                    {
                        if(expense.categoryId === this.props.updateId) {
                            return <li className="note" name={expense.id} key={expense.id} onDoubleClick={() => this.props.uExp(expense)}>
                                <h3>{expense.name}</h3>
                                <p>{expense.price}</p>
                                <input type="button" onClick={this.handleDelete} name={expense.id} value="delete"/>
                                {this.props.updateExp === expense.id && this.props.children}
                            </li>
                        }
                    })
                }
                </ul>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    expenseDelete : (payload) => dispatch(expenseDelete(payload)),
})

const mapStateToProps = state => ({
    expense : state.expReducer
})

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseItem)