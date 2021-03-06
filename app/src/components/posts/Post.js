import React from 'react'
import PostFormContainer from '../../containers/posts/PostFormContainer'
import {Row,Modal, Col, Jumbotron, Button} from 'react-bootstrap'


export default class Post extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Jumbotron className="blog-jumbotron">
            <Col xs={12} className="text-center">
              <h1>{this.props.post.title}</h1>
            </Col>
            <Row>
              <Col xs={12} className="text-right">
                <Button className="blog-jumbotron-button" bsSize="lg" onClick={this.props.onEditClick}>
                  Edit
                </Button>
              </Col>
            </Row>
          </Jumbotron>
        </Row>
        <Row>
          <Col xs={12} >
            <div dangerouslySetInnerHTML={{__html: this.props.post.body}} />
          </Col>
        </Row>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>New Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PostFormContainer />
          </Modal.Body>
        </Modal>

      </div>
    )
  }
}
