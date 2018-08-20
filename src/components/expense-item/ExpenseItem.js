import React from 'react'
// import { expenseTest } from '../../action/expense-actions.js'
import { expenseDelete } from '../../action/expense-actions.js'
import { connect } from 'react-redux';

// each item handles its own update but form handles the initial creaet

class ExpenseItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            expense : {
                name : '',
                price : '',
                categoryId : ''
            },
            updateExp : '',
        }
        // this.handleUpdate = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        // this.editView = this.editView.bind(this)
    }


    // onDoubleClick={() => this.editView(expense)}
    // editView(expense) {

    //     // change this to setState in Dashboard updateExp state and method / pass as props
    //     // console.log('EXP UPDATE')

    //     this.props.uExp(expense)
    // }

    handleDelete(e) {
        //passing the reducer method expenseDelete the expense.id to go through the expense array and filter out this specific expense
        let id = e.target.name
        // console.log('DELETE ID: ',id)
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
                        // console.log('UPDATE ID:',this.props.updateId)
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
    // expenseUpdate : (payload) => dispatch(expenseUpdate(payload)),
    expenseTest : () => dispatch(expenseTest())
})

// have to adjust this to target only category state portion or expense state portion
const mapStateToProps = state => ({
    category : state.catReducer,
    expense : state.expReducer
})

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseItem)