import React, { PureComponent } from 'react';
import unsplash from 'api/api';
import { Link } from 'react-router-dom';

import { H1, GalleryCotainer, Gallery, ImageContainer, DarkOverlay } from './ImageGallery.styled';
import NoImagesFound from 'components/NoImagesFound/NoImagesFound';
import zoomInIcon from 'assets/images/zoom-in.svg';

class ImageGallery extends PureComponent {
   constructor() {
      super();

      this.state = {
         areImagesLoading: true,
         photos: [],
      }
   }

   fetchData = async (searchTerm) => {
      return await unsplash.search.photos(searchTerm, 1, 25)
         .then(data => data.json())
         .then(({ results }) => {
            this.setState({
               photos: results,
               areImagesLoading: false,
            });
         });
   }

   componentDidMount() {
      this.fetchData(this.props.match.params.searchTerm);
   }

   componentDidUpdate(prevProps) {
      const prevTerm = prevProps.match.params.searchTerm;
      const nextTerm = this.props.match.params.searchTerm;
      if(prevTerm !== nextTerm) {
         this.setState({ areImagesLoading: true });
         this.fetchData(nextTerm);
      }
   }

   render() {

      const { photos, areImagesLoading } = this.state;
      let photosList, searchHeader;
      const searchTerm = this.props.match.params.searchTerm;

      if(photos.length) {
         photosList = photos.map(photo => {
            const photoID = photo.id;
            const photoURL = `${photo.urls.raw}&auto=format&fit=crop&w=400&q=60`;
            const photoAlt = photo.alt_description;

            return (
               <Link
                  key={photoID}
                  to={{
                     pathname: `/photo/${photoID}`,
                     state: {
                        background: this.props.location,
                        image: {
                           src: `${photo.urls.raw}&auto=format&fit=crop&w=1100&q=60`,
                           id: photoID,
                           alt: photoAlt,
                           paddingBottom: (photo.height / photo.width * 100).toPrecision(4),
                           maxWidth: (photo.width / photo.height).toPrecision(4),
                        }
                     }
                  }}>
                  <ImageContainer key={photoID}>
                     <figure data-photo-id={photoID}>

                        <img src={photoURL} alt={photoAlt} />
                        <DarkOverlay>
                           <img src={zoomInIcon} alt='zoom in' />
                        </DarkOverlay>

                     </figure>
                  </ImageContainer>
               </Link>
            )
         });
         searchHeader = <H1>{searchTerm}</H1>;

      } else {
         searchHeader = <NoImagesFound searchTerm={searchTerm} />;
      }

      return (
         <GalleryCotainer>
            {areImagesLoading
               ? <H1 className="loading">Loading...</H1>
               : <>
                  {searchHeader}
                  {photosList ? <Gallery>{photosList}</Gallery> : null}
               </>
            }
         </GalleryCotainer>
      )
   }
}

export default ImageGallery;
