import styled from 'styled-components';

export const Nav = styled.nav`
   width: 100%;
   padding: 20px 0 0;
`;

export const Form = styled.form`
   margin: 0 auto;
   height: 40px;
   display: grid;
   grid-template-columns: auto 1fr;
   grid-auto-rows: 40px auto;
   background-color: white;
   width: 80%;
   position: relative;
   border-radius: 20px;
   box-shadow: 1px 1px 3px rgb(0 0 0 / 0.3);
   max-width: 1200px;
`;

export const Input = styled.input`
   flex-grow: 1;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
     sans-serif;
   border: 0;
   height: 100%;
   width: 100%;
   background-color: initial;
   padding: 0 10px 0 0;

   &:focus {
      outline: 0;
   }
`;

export const Button = styled.button`
   cursor: pointer;
   background-color: initial;
   margin: 0;
   padding: 0;
   border: 0;
   padding: 0 10px 0 15px;
   display: flex;
   align-items: center;

   &:focus { outline: 0 }
`;

export const HintsList = styled.ul`
   position: relative;
   top: 3px;
   width: 100%;
   grid-column-start: 1;
   grid-column-end: 3;
   margin: 0;
   padding: 0;
   background-color: white;
   border: 1px solid #d6d6d6;
   border-radius: 3px;
   list-style: none;
   z-index: 1;

   li {
      padding: 5px 10px;

      &.option {
         cursor: pointer;
         
         &:hover { background-color: #f5f5f5 }
      }

   }
`;
