import React from 'react'
// import { expenseTest, expenseCreate } from '../../action/expense-actions.js'
// import { connect } from 'react-redux';


class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
        // this.state = {
        //     expense : {
        //         name : '',
        //         price : '',
        //         categoryId : ''
        //     }
        // }
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleChange = this.handleChange.bind(this)
    }

    // handleChange(e) {
    //     this.setState({expense :{...this.state.expense, [e.target.name] : e.target.value}})
    // }

    handleSubmit(e) {
        e.preventDefault()
        // let categoryId = this.props.updateId
        // setState is async so having the second arg a CB of the next action is the only way to do it sync
        // this.setState({
        //     expense : {...this.state.expense, categoryId}
        // },()=>this.props.onComplete(this.state.expense))
        // document.getElementById('expForm').reset();
        let payload;

        // is the categoryId in update necessary

        if(this.props.updateExp) {
            // console.log('handleSub UP')
            payload = {
                id : this.props.updateExp,
                name : e.target.name.value,
                price : e.target.price.value,
                categoryId : this.props.updateId
            }
        } else {
            // console.log('handleSub Create')
            payload = {
                name : e.target.name.value,
                price : e.target.price.value,
                categoryId : this.props.updateId
            }
        }
        this.props.onComplete(payload);
        document.getElementById('expForm').reset();
    }

    // handleUpdate(e) {
    //     // send the id of the expense and the payload
    //     // doubleclick adds the expense.id to the updateExp field making the form child per that LI visible
    //     e.preventDefault()
    //     this.props.onComplete()
    // }

    // onChange={this.handleChange}

    //document.getElementById("expForm").closest("#expForm")
    render() {
        return(
            <React.Fragment>
                <h2>Add Expense</h2>
                <form id="expForm" onSubmit={this.handleSubmit}>
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

export default ExpenseForm;