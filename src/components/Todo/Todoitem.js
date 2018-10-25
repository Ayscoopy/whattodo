import React, { Component } from 'react';
import './Todoitem.css'
import moment from 'moment';
import { Container, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input} from 'reactstrap';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { deleteItem } from '../../store/actions/itemActions';
import { editItem } from '../../store/actions/itemActions';


class Todoitem extends Component {
    constructor(props){
        super(props);

        this.state = {
            modal: false,
            newItem: ''
           // date: Date()
        }


        this.toggle = this.toggle.bind(this);
  }

    toggle() {
    this.setState({
        modal: !this.state.modal,
    });

    //this.props.editItem(id)

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (id) => {
        //e.preventDefault();
  
        // passing state to props
    
       this.props.editItem(id, this.state);
  
        // close modal
        this.toggle();
    }

    handleDeleteItem = (id) => {
        this.props.deleteItem(id)
    }

  
    render(){
    const { item, auth } = this.props
    //console.log(item)
    
    if(item.mainId === auth.uid && item) {
        return(
            <div>
            <Container>
            <div style={{
                width: '90%',
                height: 'auto',
                borderRadius: '5px',
                background: 'whitesmoke'
            }}>
             <ol className="list-unstyled p-3">
                 <li>
                     <div className="row">
                        <div className="col-md-12 me-wd">
                        <b>{item.item}</b><br />
                        </div>

                        <div className="col-lg-9 col-md-6 col-sm-12" style={{ paddingBottom: '.3em' }}>
                            <time style={{ 
                             margin: 'auto',
                             top: '20%', 
                             position: 'relative', 
                             paddingBottom: '.3em',
                             opacity: '.7'
                             }}>
                                <i>{moment(item.date).calendar()}</i>
                            </time>
                        </div>       
                          
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <button
                                className="btn btn-primary btn-xs ml-auto"
                                style={{ textAlign: 'center', height: '1em', }}
                                onClick={this.toggle}
                                >
                                   <span style={{ margin: 'auto', top: '20%', position: 'absolute'}}>
                                        <i className="mdi mdi-pencil center" style={{  left: '-50%', position: 'relative' }}></i>
                                   </span>
                            </button>
                            &nbsp;
                            <button
                                className="btn btn-danger btn-xs ml-auto"
                                style={{ textAlign: 'center', height: '1em'}}
                                onClick={this.handleDeleteItem.bind(this, item.uid)}
                                >
                                   <span style={{ margin: 'auto', top: '20%', position: 'absolute'}}>
                                        <i className="mdi mdi-delete center" style={{  left: '-50%', position: 'relative' }}></i>
                                   </span>
                            </button>
                        </div>
                                
                    </div>
                 </li>
             </ol>
             </div>
            <br />

        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit This Todo</ModalHeader>
          <ModalBody>
              <Form>
                <FormGroup>
                    <Input 
                        type="textarea"
                        name="newItem"
                        placeholder="Edit What To Do..."
                        id="item"
                        style={{ marginBottom: '.8rem'}}
                        onChange={this.onChange}
                    />
                    <Button color="dark" style={{ margin: 'auto'}} onClick={this.onSubmit.bind(this, item.uid)} block>
                        submit
                    </Button>
                </FormGroup>
              </Form>
          </ModalBody>
        </Modal>
        </div>
        )
    } else if(item === "") {
       return(
            <div  style={{margin: 'auto', textAlign: 'center', color: 'white' }}>
                <p>No TodoList Yet.</p>
            </div>
        )
    }
    else{
        return(
            <div  style={{margin: 'auto', textAlign: 'center', color: 'white' }}>
               
            </div>
        )
    }
  }   
}

    const mapStateToProps = (state) => {
       // console.log(state)
        return{
            todoItems: state.firestore.ordered.todoItem,
            auth: state.firebase.auth
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return{
            deleteItem: (id) => dispatch(deleteItem(id)),
            editItem: (id, newItem) => dispatch(editItem(id, newItem))
        }
    }

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'todoItem' }
    ])
)(Todoitem);