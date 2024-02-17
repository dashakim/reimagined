'use client';
import KeyWord from '@/app/components/KeyWord';
import {
  ImageNotFoundCard,
  StyledMain,
  ImageNotFound,
  StyledDesc,
  StyledCode,
} from '@/app/components/StyledComponents/StyledComponents';
import Navbar from '@/app/components/Navbar/Navbar';
import { ImageGallery } from '@/app/components/ImageGallery/ImageGallery';
import React, { useState } from 'react';
import Image from 'next/image';
import SadImage from '@/app/components/StyledComponents/NotFound/SadFaceComponent';
type ApiResponse = null | { title: string; description: string; smallImageUrl: string; fullImageUrl: string }[];

export default function Home() {
  const [apiResponse, setApiResponse] = useState<ApiResponse>(null);
  return (
    <>
      <Navbar />
      <StyledMain>
        <KeyWord setApiResponse={setApiResponse} />
        <ImageNotFoundCard>{Array.isArray(apiResponse) && apiResponse.length === 0 && <SadImage />}</ImageNotFoundCard>
        {Array.isArray(apiResponse) && apiResponse.length > 0 && <ImageGallery imageList={apiResponse} />}
      </StyledMain>
    </>
  );
}
