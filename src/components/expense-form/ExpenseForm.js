import React from 'react'
import { expenseTest, expenseCreate } from '../../action/expense-actions.js'
import { connect } from 'react-redux';


class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            expense : {
                name : '',
                price : '',
                categoryId : ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({expense :{...this.state.expense, [e.target.name] : e.target.value}})
    }

    handleSubmit(e) {
        e.preventDefault()
        let categoryId = this.props.updateId
        // setStae is async so having the second arg a CB of the next action is the only way to do it sync
        this.setState({
            expense : {...this.state.expense, categoryId}
        },()=>this.props.onComplete(this.state.expense))
        document.getElementById('expForm').reset();
    }

    render() {
        return(
            <React.Fragment>
                <h2>Add Expense</h2>
                <form id="expForm" onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    <label>Expense Name:</label>
                    <input name="name" type="text" />

                    <label>Expense Price:</label>
                    <input name="price" type="number" />

                    <button>Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    expenseCreate : (payload) => dispatch(expenseCreate(payload)),
    expenseTest : (payload) => dispatch(expenseTest(payload))
})

export default connect(null,mapDispatchToProps)(ExpenseForm)