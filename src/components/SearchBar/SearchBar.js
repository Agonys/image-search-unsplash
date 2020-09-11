import React, { Component, createRef } from 'react';
import { withRouter } from 'react-router-dom';
import { Nav, Form, Input, Button, HintsList } from './SearchBar.styled';
import searchIcon from 'assets/images/search.svg';

class SearchBar extends Component {
   constructor() {
      super();

      this.state = {
         hintsLoading: true,
         hints: [],
      }

      this.formRef = createRef(null);
      this.inputRef = createRef(null);
      this.hintsListRef = createRef(null);
      this.typingTimer = null;
      this.searchAPI = 'https://api.datamuse.com/sug?s=';
   }

   componentDidMount() {
      document.addEventListener("mousedown", e => this.handleCloseHintList(e));
   }

   handleCloseHintList = e => {
      if(this.hintsListRef.current && !this.hintsListRef.current.contains(e.target)) {
         this.setState({
            hintsLoading: true,
            hints: [],
         })
      }
   }

   //handling user typing.
   handleOnChange = e => {
      const newTerm = e.target.value;
      clearTimeout(this.typingTimer);

      if(newTerm.length >= 3)
         this.typingTimer = setTimeout(() => this.fetchHints(newTerm), 500);
      else
         this.setState({
            hintsLoading: true,
            hints: [],
         })
   }

   handleFormSubmit = e => {
      e.preventDefault();
      const searchTerm = this.inputRef.current.value;
      this.props.history.push(`/search/${searchTerm}`);
      this.formReset();
   }

   //form reset used within form submittion.
   formReset = () => {
      clearTimeout(this.typingTimer);
      this.formRef.current.reset();
      this.setState({
         hintsLoading: true,
         hints: [],
      })
   }

   handleHintClick = word => {
      this.props.history.push(`/search/${word}`);
      this.formReset();
   }

   fetchHints = async (searchTerm) => {
      await fetch(`${this.searchAPI}${searchTerm}`)
         .then(data => data.json())
         .then(response => {
            this.setState({
               hintsLoading: false,
               hints: response.slice(0,5),
            });
         });
   }


   render() {
      const { hintsLoading, hints } = this.state;

      return (
         <Nav>
            <h1>Search from many beautiful images.</h1>
            <Form ref={this.formRef} onSubmit={e => this.handleFormSubmit(e)}>
               <Button type='submit'>
                  <img width='16' height='16' src={searchIcon} alt='' />
               </Button>
               <Input
                  type='text'
                  ref={this.inputRef}
                  placeholder="Search photos..."
                  onChange={this.handleOnChange}
                  required />

               {!hintsLoading &&
                  <HintsList ref={this.hintsListRef}>
                     {
                        hints.length
                           ? hints.map(hint => {
                              return <li
                                 key={hint.word}
                                 className="option"
                                 onClick={() => this.handleHintClick(hint.word)}>{hint.word}</li>
                           })
                           : <li>No matches found...</li>
                     }
                  </HintsList>
               }
            </Form>
         </Nav>
      )
   }
}

export default withRouter(SearchBar);
