import React, { FC, useState, ChangeEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';
const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: #f8f8f8;
  transition:
    border-color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;

  &:focus {
    border-color: #8a8d91;
    background-color: #f5f8ff;
    outline: none;
  }
`;
interface ApiResponse {
  message: string;
}

interface WordInputProps {
  setApiResponse: React.Dispatch<
    React.SetStateAction<null | { title: string; description: string; smallImageUrl: string; fullImageUrl: string }[]>
  >;
}

const WordInput: FC<WordInputProps> = ({ setApiResponse }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const response = await fetch(`/api/key_word?word=${inputValue}`);
      const data: ApiResponse = await response.json();
      // @ts-ignore
      setApiResponse(data);
      console.log(data);
    }
  };

  return (
    <>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type something and press Enter"
      />
    </>
  );
};

export default WordInput;
