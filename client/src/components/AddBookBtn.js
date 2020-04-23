import React from "react";
import Button from "./Button";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

class AddBookBtn extends React.Component{
 
    postToDB = (book) => {
        var dbBook = {
          title: book.title,
          authors: book.authors,
          synopsis: book.synopsis,
          thumbnail: book.thumbnail,
          link: book.link
        }
    
        axios.post("/api/books", dbBook)
       
        .catch(err => console.log(err))
      }

    render() {
        return (
          <div>
          <Button type="btn btn-outline-dark" onClick={() => 
            {this.postToDB(this.props)}
            }>
            Add Book to Reading List
        </Button>
        </div>
        );
    }
  }

  export default AddBookBtn;