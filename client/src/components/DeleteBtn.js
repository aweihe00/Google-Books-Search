import React from "react";
import Button from "./Button";

function DeleteBtn(props) {
    return (
      <Button type="btn btn-outline-danger" className="delete-btn" {...props} role="button" tabIndex="0">
        Delete
      </Button>
    );
  }

  export default DeleteBtn;