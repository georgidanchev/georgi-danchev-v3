import styled from "styled-components";

const StyledCopyright = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

const Copyright = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledCopyright className={`${className && className}`}>
      <p>©{currentYear}, All Rights Reserved</p>
    </StyledCopyright>
  );
};

export default Copyright;
