import styled from 'styled-components';
import Image from 'next/image';
// Styled component for the container with a dashed border
const DashedBorderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  border: 5px dashed #cecece;
  border-radius: 5px;
`;

const SadFace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;
  font-size: 36px;

  & p {
    font-size: 15px;
    color: #989898;
    //margin-top: 10px;
    //font-family: 'Arial', sans-serif;
  }
`;

const SadImage = () => (
  <DashedBorderContainer>
    <SadFace>
      <Image src={'/sad_cat.png'} alt={'Sad face'} width="100" height={'100'} />
      <p>image not found</p>
    </SadFace>
  </DashedBorderContainer>
);

export default SadImage;
