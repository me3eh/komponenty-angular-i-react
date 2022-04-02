import {React,Component} from 'react';
import { Table, Button } from 'react-bootstrap';
import Note from "./Note";
class Notes extends Component{
    constructor(props){
        super(props);
        this.state={
            noteList : [
                {
                    title: "Something",
                    category: "nothing",
                    content: "yeppers",
                    date: new Date("2021-06-06")
                },
                {
                    title: "Sometahing",
                    category: "nsothing",
                    content: "yaeppers",
                    date: new Date("2021-06-06")
                }
            ],
        }
    };
    onChange(this){

    }
    render() {
        return (
            <div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Content</th>
                            <th>Date</th>
                        </tr>
                        {this.state.noteList.map( (note,key) => {
                            return (
                                <Note
                                    some={key+1}
                                    title={note.title}
                                    category={note.category}
                                    content={note.content}
                                    date={note.date}/>
                                    
                            );
                            }
                            )
                        }
                        </thead>
                </Table>
                <tbody>
                    <tr>
                        <td> 
                            <input colSpan="5" placeholder="Title of note" id="title"
                            onChange={(e)=> this.onChange(e)}/>
                        </td>
                        <td>
                            <input type="text" list="categoryList" id="category" placeholder="Category of note" onChange={(e) => onChange(e)}/>
                            <datalist id="categoryList">
                                <option>To do</option>
                                <option>Hobby</option>
                                <option>Work</option>
                                <option>Study</option>
                                <option>Gym</option>
                                <option>Favourites</option>
                            </datalist>
                        </td>
                        <td>
                            {
                                this.state.content !== "" ?
                                <Button variant="primary" onClick={() =>this.onClick()}>Edit content</Button> :
                                <Button variant="success" onClick={() =>this.onClick()}>Add content</Button>
                            }
                        </td>
                        <td>
                            <input type="date" id="date" onChange={ (e) => this.onChange(e)} />
                            <input type="time" id="time" onChange={ (e) => this.onChange(e)} />
                        </td>
                        <td><Button variant="secondary" onClick={ () => this.addNote() }>Add note</Button></td>
                    </tr>
                </tbody>
            </div>
        );
                        };
}
export default Notes;