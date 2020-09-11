import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter, Switch, Route } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';

class App extends React.Component {
   render() {
      const { location } = this.props;
      const background = location.state ? location.state.background : false;

      return (
         <>
            <Helmet>
               <title>Image search App | Unsplash API</title>
               <meta
               name="description"
               content="React app for image search using Unsplash API"
               />
            </Helmet>

            <div className="App">
               <SearchBar />
               <Switch location={ background || location }>
                  <Route
                     exact path='/search/:searchTerm'
                     component={ImageGallery} />
               </Switch>

               { background && 
                  <Route path='/photo/:imageId'>
                     <Modal {...this.props} />
                  </Route>
               }
            </div>
         </>
      )
   }
}

export default withRouter(App);
