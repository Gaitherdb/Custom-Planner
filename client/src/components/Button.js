import React, { Component } from 'react';
import { Button, bsStyle } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";



class customButtonStyle extends Component {
    render() {
        return (

            <div>
            <span>Add Todo Item</span>
            <hr />
            <Button
              variant="default"
              style={{ color: "rgb(237, 224, 212)", background: "rgb(65, 72, 51)" }}
            >
              Add Todo Item
            </Button>
          </div>
);
}
}




export default customButtonStyle 