import styled from "styled-components"

const StyledDecorativeBorder = styled.div`
  background-color: var(--color-primary);
  height: 12vh;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 3;

  @media only screen and (max-width: 1199px) {
    height: 6vh;
  }

  &.top {
    clip-path: polygon(0 0, 100% 0, 100% 0%, 0 100%);
    top: 0;
  }

  &.bottom {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 100%);
    transform: rotate(-180deg);
    bottom: 0;
  }
`

const DecorativeBorder = ({ location }) => {
  return <StyledDecorativeBorder className={location}></StyledDecorativeBorder>
}

export default DecorativeBorder
