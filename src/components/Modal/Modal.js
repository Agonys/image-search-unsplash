import React, { Component, createRef } from 'react';
import {
   StyledModal,
   ModalContainer,
   ExitButton,
   A,
   AuthorAvatar,
   Location,
   Photo,
   PhotoContainer,
   PhotoMobile,
   PhotoDesktop } from './Modal.styled';
import unsplash from 'api/api';

class Modal extends Component {
   constructor(props) {
      super(props);

      this.state = {
         location: [],
         author: {
            name: '',
            link: '',
            avatar: '',
         }
      }

      this.modalContainer = createRef(null);
      this.photoRef = createRef(null);

      this.photoDesktopContainer = createRef(null);


      this.image = {
         id: this.props.location.state.image.id,
         src: this.props.location.state.image.src,
         alt: this.props.location.state.image.alt,
         paddingBottom: this.props.location.state.image.paddingBottom,
         maxWidth: this.props.location.state.image.maxWidth,
      }
   }

   componentDidMount() {
      this.fetchLocation(this.image.id);

      this.modifyImagesDimension();

      document.body.classList.add("lockedOverflow");
      document.addEventListener('mousedown', this.handleCloseModal);
   }

   componentWillUnmount() {
      document.body.classList.remove("lockedOverflow");
      document.removeEventListener('mousedown', this.handleCloseModal);
   }

   //fetch data about image to get location and author information.
   fetchLocation = async (imageID) => {
      await unsplash.photos.getPhoto(imageID)
         .then(data => data.json())
         .then(photo => {
            this.setState({
               location: photo.location.name,
               author: {
                  name: photo.user.name,
                  link: photo.user.links.html,
                  avatar: photo.user.profile_image.medium,
               }
            })
         });
   }

   //if user click outside of modal.
   handleCloseModal = e => {
      if(this.modalContainer.current && !this.modalContainer.current.contains(e.target)) {
         this.props.history.goBack();
      }
   }

   //modify images boundaries for multiple devices.
   modifyImagesDimension = () => {
      const photoDesktopContainer = this.photoDesktopContainer.current;
      const { paddingBottom, maxWidth } = this.image;


      //set padding-bottom for every photo container.
      const photoContainers = [...document.querySelectorAll(".photoContainer")];
      photoContainers.forEach(container => {
         container.style.paddingBottom = `${paddingBottom}%`;
      })

      //set max-width for images to prevent stretching outside monitor view.
      photoDesktopContainer.style.maxWidth = `calc((100vh - 250px) * ${maxWidth})`;
   }

   render() {
      const { location, author } = this.state;

      return (
         <StyledModal>
            <ExitButton>
               <div />
               <div />
            </ExitButton>

            <ModalContainer ref={this.modalContainer}>
               <A href={author.link} target="_blank" rel="noopener noreferrer">
                  <AuthorAvatar src={author.avatar} alt={author.name} />
                  {author.name}
               </A>

               <PhotoContainer>
                  <PhotoMobile className="photoContainer">
                     <Photo
                        ref={this.photoRef}
                        src={this.image.src}
                        alt={this.image.alt} />
                  </PhotoMobile>

                  <PhotoDesktop ref={this.photoDesktopContainer}>
                     <div className="photoContainer">
                        <Photo
                           ref={this.photoRef}
                           src={this.image.src}
                           alt={this.image.alt} />
                     </div>
                  </PhotoDesktop>
               </PhotoContainer>

               <Location>
                  {location ? location : "unknown location"}
               </Location>
            </ModalContainer>
         </StyledModal>
      );
   }
}

export default Modal;
