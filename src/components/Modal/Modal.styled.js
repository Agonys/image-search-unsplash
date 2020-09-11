import styled from 'styled-components';

export const StyledModal = styled.div`
   overflow-x: hidden;
   position: fixed;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   background-color: rgba(0 0 0 / 0.7);
   cursor: zoom-out;
   padding: 48px 0 0;

   @media screen and (min-width: 768px) {
      padding: 50px 100px;
   }
`;

export const ModalContainer = styled.div`
   cursor: initial;
   width: 100%;
   height: fit-content;
   background-color: white;
   padding: 20px 0;
   max-width: 1200px;
   margin: 0 auto;
   display: flex;
   flex-direction: column;

   @media screen and (min-width: 768px) {
      padding: 30px;
   }
`;

export const ExitButton = styled.div`
   position: absolute;
   left: 0;
   top: 0;
   cursor: pointer;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 48px;
   width: 48px;

   div {
      width: 32px;
      height: 3px;
      background-color: white;
      transform: rotate(-45deg);
      transform-origin: 18px;
      border-radius: 30px;
      position: relative;
      left: -1px;
   }

   div:last-of-type {
      transform: rotate(45deg);
   }

`;

export const A = styled.a`
   font-weight: 500;
   padding: 0 15px;
   display: flex;
   align-items: center;

   @media screen and (min-width: 768px) { padding: 0 }
`;

export const AuthorAvatar = styled.img`
   width: 32px;
   height: 32px;
   border-radius: 50%;
   margin-right: 10px;
`;

export const Location = styled.div`
   padding: 0 15px;
   font-weight: 500;
   font-size: 14px;
   text-align: right;

   @media screen and (min-width: 768px) { padding: 0 }
`;

export const Photo = styled.img`
   width: 100%;
   height: 100%;
`;

export const PhotoContainer = styled.div`
   padding: 15px 0;

   .photoContainer {
      position: relative;
      img { position: absolute };
   }
`;

export const PhotoDesktop = styled.div`
   display: none;
   margin: 0 auto;
   @media screen and (min-width: 768px) { display: block }
`;

export const PhotoMobile = styled.div`
   display: none;
   @media screen and (max-width: 767px) { display: block }
`;
