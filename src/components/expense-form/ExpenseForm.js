import React from 'react'

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        let payload;

        if(this.props.updateExp) {
            payload = {
                id : this.props.updateExp,
                name : e.target.name.value,
                price : e.target.price.value,
                categoryId : this.props.updateId
            }
        } else {
            payload = {
                name : e.target.name.value,
                price : e.target.price.value,
                categoryId : this.props.updateId
            }
        }
        this.props.onComplete(payload);
        document.getElementById('expForm').reset();
    }

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