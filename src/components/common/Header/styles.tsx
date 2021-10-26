import styled from 'styled-components';
import { device } from '../../../constants/Size';

export const CustomHeader = styled.header`
  background-color: #fff;

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    height: 8rem;
    width: 100%;
    padding: 0px 1rem;
    max-width: calc(1480px + 2rem);

    svg {
      @media ${device.mobileL} {
        width: 9.933rem;
      }
    }

    .buttonContainer {
      display: flex;
      flex-direction: row;
      gap: 1.043rem;

      & > button {
        height: 4rem;
        @media ${device.mobileL} {
          &:first-child > img {
            margin-right: 0;
          }
          &:first-child > p {
            display: none;
          }
        }
      }
    }
  }
`;
