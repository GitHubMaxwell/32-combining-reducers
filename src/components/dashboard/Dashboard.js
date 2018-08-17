import React from 'react'
import CategoryItem from '../category-item/CategoryItem.js'
import CategoryForm from '../category-form/CategoryForm.js'
import { categoryCreate, categoryDestroy, categoryUpdate } from '../../action/actions.js'
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: {
                id: '',
                name: '',
                budget: '',
            },
            updateId: ''
        }
        // this.addNote = this.addNote.bind(this)
        this.updateMode = this.updateMode.bind(this)
        this.cancelUpdate = this.cancelUpdate.bind(this)
        this.removeCategory = this.removeCategory.bind(this)
        this.updateCategory = this.updateCategory.bind(this)
        this.populateCategoryObj = this.populateCategoryObj.bind(this)
    }

    updateCategory(e) {
        // const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const val = e.target.value;
        this.setState({note: {...this.state.category,[e.target.name] : val}})
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

    populateCategoryObj(note) {
        // console.log('pop Id:', note.id)
        let category = note
        this.setState({
            category
        })
    }

    render() {
        return (
            <React.Fragment>
                <CategoryForm onComplete={this.props.categoryCreate} />
                <CategoryItem categoryUpdate={this.props.categoryUpdate} removeCategory={this.removeCategory} updateId={this.state.updateId} category={this.props.category} updateMode={this.updateMode}>
                    <CategoryForm onComplete={this.props.categoryUpdate} updateId={this.state.updateId}/>
                </CategoryItem>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    categoryCreate : (payload) => dispatch(categoryCreate(payload)),
    categoryDestroy : (payload) => dispatch(categoryDestroy(payload)),
    categoryUpdate : (payload) => dispatch(categoryUpdate(payload))
})
const mapStateToProps = state => ({
    category : state
})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)