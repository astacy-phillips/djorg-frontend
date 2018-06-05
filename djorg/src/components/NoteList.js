import React, { Component } from 'react'
import Note from './Note'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class NoteList extends Component {
//   render() {
//     const notesToRender = [
//       {
//         id: '1',
//         title: 'title one',
//         content: 'this is not a test',
//       },
//       {
//         id: '2',
//         title: 'title 2',
//         content: 'this is a test',
//       },
//     ]

//     return (
//       <div>{notesToRender.map(note => <Note key={note.id} note={note} />)}</div>
//     )
//   }
    render() {
        if (this.props.noteQuery && this.props.noteQuery.loading) {
        return <div>Loading</div>
        }
    
        if (this.props.noteQuery && this.props.noteQuery.error) {
        return <div>Error</div>
        }
    
        const notesToRender = this.props.noteQuery.allNotes
    
        return (
        <div>{notesToRender.map(note => <Note key={note.id} note={note} />)}</div>
        )
    }
}

// export default NoteList

const NOTE_QUERY = gql`
  # 2
  query NoteQuery {
      notes {
        id
        title
        content
      }
    }
`

// 3
export default graphql(NOTE_QUERY, { name: 'noteQuery' }) (NoteList)