import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid lightslategray;
  border-radius: .4rem;
  background-color: whitesmoke;
  & div {
    display: flex;
    padding: 10px;
    justify-content: space-around;
  }
  & h2 {
    text-align: center;
    font-family: Verdana, sans-serif;
    font-size: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
`

const Note = styled.div`
  border: 1px;
  display: flex;
  flex-direction: column;
  flex-basis: 250px;
  margin: 0 5px 20px 5px;
  border-radius: .1rem;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .6);
  background-color: lightcyan;

  & h4 {
  margin-top: 5px;
  text-align: center;
  border-bottom: 3px solid black;
  border-top: 3px solid black;
  font-family: Verdana, sans-serif;
  font-size: 1.2rem;
  padding-bottom: 5px;
  padding-top: 5px;
  margin-bottom: 5px;
} 
& p {
  padding-left: 10px;
  padding-right: 10px;
  font-family: Arial, sans-serif;
  line-height: 1.3rem;
}
`

const Note2 = ({data: {loading, error, allNotes}}) => {
    if (error) return <p>error</p>
    if (!loading) {
      return (
        <Wrapper>
          <h2>Djorgenstein Notes</h2>
          <div>
          {allNotes.map((note, index) => (
            <Note key={index}>
              <h4>{note.title}</h4>
              <p>{note.content}</p>
            </Note>
          ))}
          </div>
        </Wrapper>
      )
    }
    return <div>Loading...</div>
  }
  
  export const query = gql`
    query allNotes {
      allNotes {
      title
      content
      }
    }
    `
  
  export default graphql(query)(Note2)