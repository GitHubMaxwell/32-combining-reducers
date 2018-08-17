import React from 'react'

export default class CategoryForm extends React.Component {
    constructor(props) {
        super(props)
        this.configurePayload = this.configurePayload.bind(this)
    }
    configurePayload(e) {
        e.preventDefault()
        let payload;
        console.log('updateId',this.props.updateId)
        if(this.props.updateId) {
            payload = {
                id : this.props.updateId,
                name : e.target.name.value,
                budget : e.target.budget.value
            }
        } else {
            payload = {
                name : e.target.name.value,
                budget : e.target.budget.value
            }
        }

        
        console.log(payload)
        this.props.onComplete(payload);

        document.getElementById('form').reset();
    }
    render() {
        return(
            <React.Fragment>
                {/* {
                    if(this.props.note.id) {
                        {}
                    }
                } */}
                <h2>Create Category</h2>
                <form id="form" onSubmit={this.configurePayload}>
                    <label>Category Name:</label>
                    <input name="name" type="text" />

                    <label>Category Budget:</label>
                    <textarea name="budget"></textarea>

                    <button>Submit</button>
                </form>
            </React.Fragment>
        )
    }
}