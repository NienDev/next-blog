import styled from "@emotion/styled";
import { FormEvent, useRef } from "react";

const StyledInput = styled.input`
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
`;

const Search = () => {
  const inputValueRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValueRef?.current?.value);
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <StyledInput type="text" ref={inputValueRef} />
      </form>
    </>
  );
};

export default Search;
