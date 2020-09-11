import React from 'react';
import { Warning } from './NoImagesFound.styled';

const NoImagesFound = ({ searchTerm }) => {
   return <Warning>No Images found with '{searchTerm}'...</Warning>
}

export default NoImagesFound;
