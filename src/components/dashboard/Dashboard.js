import React from 'react'
import CategoryItem from '../category-item/CategoryItem.js'
import CategoryForm from '../category-form/CategoryForm.js'
import ExpenseItem from '../expense-item/ExpenseItem.js'
import ExpenseForm from '../expense-form/ExpenseForm.js'
import { categoryCreate, categoryDestroy, categoryUpdate } from '../../action/category-actions.js'
//////////////////////////////
import { expenseCreate, expenseUpdate } from '../../action/expense-actions.js'
// import { expenseTest } from '../../action/expense-actions.js'
//////////////////////////////

import { connect } from 'react-redux';

class Dashboard extends React.Component {
    // make an expense version of updateId and category
    constructor(props) {
        super(props)
        this.state = {
            category: {
                id: '',
                name: '',
                budget: '',
            },
            updateId: '',
            updateExp: '',
        }
        // this.addNote = this.addNote.bind(this)
        this.updateMode = this.updateMode.bind(this)
        this.cancelUpdate = this.cancelUpdate.bind(this)
        this.removeCategory = this.removeCategory.bind(this)
        this.updateCategory = this.updateCategory.bind(this)
        this.updateExp = this.updateExp.bind(this)
        this.populateCategoryObj = this.populateCategoryObj.bind(this)
    }

    updateCategory(e) {
        // const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const val = e.target.value;
        this.setState({category: {...this.state.category,[e.target.name] : val}})
    }

    updateExp(expense) {
        // let updateExp = expense.id
        // this.setState({
        //     updateExp
        // })
        console.log('Update Exp')
        if(this.state.updateExp) {
            this.setState({updateExp : ''})
        } else {
            this.setState({updateExp : expense.id})
        }

        // this.props.expenseUpdate(expense)
    }

    updateMode(note) {
        let updateId = note.id
        // e.preventDefault()
        // let updateId = e.target.name;

        // console.log('updateMode updateId:',updateId)
        // console.log('updateMode note:',note)

        this.setState({
            updateId
        })
        this.populateCategoryObj(note);
        // console.log('updateMode')
    }

    populateCategoryObj(note) {
        // console.log('pop Id:', note.id)
        let category = note
        this.setState({
            category
        })
    }

    cancelUpdate() {
        let id = '';
        let budget= '';
        let name= '';
        let category = {...this.state.category, id, name, budget}
        this.setState({
            category,
            updateId : ''
        })
    }
    removeCategory(e) {
        e.preventDefault()
        this.props.categoryDestroy(e.target.name)
    }

    render() {
        // refactor some of the function passed from this class to child components to actions and reducers
        return (
            <React.Fragment>
                <CategoryForm onComplete={this.props.categoryCreate} />

                <CategoryItem categoryUpdate={this.props.categoryUpdate} removeCategory={this.removeCategory} updateId={this.state.updateId} category={this.props.category} updateMode={this.updateMode}>
                    <CategoryForm onComplete={this.props.categoryUpdate} updateId={this.state.updateId}/>
                    
                    <ExpenseForm updateExp={this.state.updateExp} uExp={this.updateExp} updateId={this.state.updateId} onComplete={this.props.expenseCreate}/>

                    <ExpenseItem updateId={this.state.updateId} updateExp={this.state.updateExp} uExp={this.updateExp}>
                        <ExpenseForm updateId={this.state.updateId} updateExp={this.state.updateExp} uExp={this.updateExp} onComplete={this.props.expenseUpdate}/>
                    </ExpenseItem>
                    
                </CategoryItem>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    categoryCreate : (payload) => dispatch(categoryCreate(payload)),
    categoryDestroy : (payload) => dispatch(categoryDestroy(payload)),
    categoryUpdate : (payload) => dispatch(categoryUpdate(payload)),
    expenseUpdate : (payload) => dispatch(expenseUpdate(payload)),
    expenseCreate : (payload) => dispatch(expenseCreate(payload)),
    // expenseTest : () => dispatch(expenseTest())
})

// have to adjust this to target only category state portion or expense state portion
const mapStateToProps = state => ({
    category : state.catReducer,
    // expense : state.expReducer
})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)