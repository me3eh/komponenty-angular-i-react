import React from 'react';

const Note = props =>{
    return (
        <tr>
            <td>{props.some}</td>
            <td>{props.title}</td>
            <td>{props.category}</td>
            <td>{props.content}</td>
            <td>
                {props.date.getDate()}.{props.date.getMonth()+1}.
                {props.date.getFullYear()}
            </td>
        </tr>
    );
};
export default Note;