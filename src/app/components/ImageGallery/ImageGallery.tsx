import React, { FC } from 'react';
import styled from 'styled-components';

type ImageData = {
  title: string;
  description: string;
  smallImageUrl: string;
  fullImageUrl: string;
};

type GalleryProps = {
  imageList: ImageData[];
};

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 20px;
  margin-top: 20px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const ImageCard = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eee; // A subtle border between the image and text
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  color: #333;
  padding: 10px 15px 0;
  margin: 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  padding: 0 15px 15px;
  margin: 0;
`;

export const ImageGallery: FC<GalleryProps> = ({ imageList }) => (
  <ImageGrid>
    {imageList.map((image, index) => (
      <ImageCard key={index}>
        <Image src={image.smallImageUrl} alt={image.title} />
        <Title>{image.title}</Title>
        <Description>{image.description}</Description>
      </ImageCard>
    ))}
  </ImageGrid>
);
