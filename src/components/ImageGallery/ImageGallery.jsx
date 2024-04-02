import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos }) => {
  return (
    <ul>
      {Array.isArray(photos) &&
      photos.map((photo) => {
        return (
          <li key={photo.id} >
            <ImageCard src={photo.urls.small} alt={photo.alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;


