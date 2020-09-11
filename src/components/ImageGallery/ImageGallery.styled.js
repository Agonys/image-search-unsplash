import styled from 'styled-components';

export const H1 = styled.h1`
   margin: 20px 0;

   &.loading {
      text-align: center;
   }
`;

export const GalleryCotainer = styled.div`
   @media screen and (min-width: 768px) {
      padding: 0 15px;
   }
`;

export const Gallery = styled.section`
   width: 100%;
   column-count: 1;
   column-gap: 20px;
   max-width: 1200px;
   margin: 0 auto;

   @media screen and (min-width: 768px) {
      column-count: 2;
   }

   @media screen and (min-width: 992px) {
      column-count: 3;
   }
`;

export const ImageContainer = styled.div`
   -webkit-column-break-inside: avoid;
   width: 100%;
   padding-bottom: 40px;
   cursor: zoom-in;

   figure {
      margin: 0;
      display: flex;
      justify-content: center;
      position: relative;
      transition: all .2s ease-in-out;

      > img {
         width: 100%;
         height: auto;
      }

      &:hover {
         transform: scale(1.02);

         > div {
            opacity: 1;
         }
      }
   }
`;

export const DarkOverlay = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   background-color: rgba(0 0 0 / 0.3);
   opacity: 0;
   transition: all .2s ease-in-out;
   display: flex;
   justify-content: center;
   align-items: center;

   img {
      width: 48px;
      height: 48px;
   }
`;
