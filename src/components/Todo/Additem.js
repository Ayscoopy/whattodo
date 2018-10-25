import React, { Component } from 'react';
import uuid from 'uuid';
import { Container, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input} from 'reactstrap';
import { addItem } from '../../store/actions/itemActions';
import { connect } from 'react-redux';

class AddItem extends Component {
  constructor(props) {
    super(props);
    
   // console.log(auth.uid)
    this.state = {
      modal: false,
      uid: uuid(),
      mainId: null,
      item: '',
      date: Date()
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
      const { auth } = this.props
    this.setState({
      modal: !this.state.modal,
      mainId: auth.uid
    });
  }

  onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
      e.preventDefault();

      // passing state to props
  
      this.props.addItem(this.state);
     // console.log(this.state)

      // close modal
      this.toggle();
  }

  render() {
   const { profile } = this.props
  // const userName = profile.firstname
  if(profile.firstname){
    return (
      <div>
        <Container>
        <div className="row">
            <div className="col-md-6" style={{ textAlign: 'left', color: 'rgba(241, 238, 241, 1)'}}>
                <h2><b>Welcome, { profile.firstname }.</b></h2><br />
            </div>
           <div className="col-md-6" >
                <div  style={{ margin: 'auto', textAlign: 'center'}}>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem'}}
                    onClick={this.toggle}
                >
                    Add What Todo <i className="mdi mdi-feather"></i>
                </Button>
                </div>
            </div>
          
        </div>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>What You Need To Do Today?</ModalHeader>
          <ModalBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Input 
                        type="textarea"
                        name="item"
                        placeholder="Add What To Do..."
                        id="item"
                        style={{ marginBottom: '.8rem'}}
                        onChange={this.onChange}
                    />
                    <Button color="dark" style={{ margin: 'auto'}} block>
                        submit
                    </Button>
                </FormGroup>
              </Form>
          </ModalBody>
        </Modal>
      </div>
    )
    }
    else{
        return (
            <div>
              <Container>
              <div className="row">
                  <div className="col-md-6" style={{ textAlign: 'left', color: 'rgba(241, 238, 241, 1)'}}>
                      <h2><b></b></h2><br />
                  </div>
                
                
              </div>
              </Container>
            </div>
          )
    }
  }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addItem: (todoItem) => dispatch(addItem(todoItem))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddItem);