import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: center;

  overflow: hidden;
  background: var(--white);

  div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1080px) {
    flex-wrap: wrap;

    overflow: auto;
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: row;

  flex-grow: 2;

  padding: 32px 20px;

  background: var(--whitesmoke);
  border-radius: 24px 0px 0px 0px;
`;

export const DashboardHeader = styled.div`
  display: flex;
  align-items: center;

  flex-direction: row !important;

  h5 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.0075em;

    color: var(--greydark);

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 8px;
  }

  img {
    width: 24px;
    height: 28px;

    flex: none;
  }
`;

export const DashboardInput = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: flex-start;

  margin-top: 32px;

  input {
    padding: 8px 16px;

    width: 364px;
    height: 40px;
    left: 116px;
    top: 92px;

    background: var(--white);
    border: 1px solid #E1E0E7;
    border-radius: 8px;
  }

  input:focus {
    border: 1px solid var(--orange);
    outline: none;
}

  button {
    height: 40px;
    padding: 8px;
    margin-left: -40px;

    background: var(--blue);
    border-radius: 8px;
    border: none;
    outline: none;
    cursor: initial;
  }
`;

export const DashboardGraphics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 24px 0 40px 0;
  padding: 25px 20px;

  background: var(--white);
  box-shadow: 0px 4px 12px rgba(222, 222, 231, 0.4);
  border-radius: 8px;

  @media (max-width: 1080px) {
    width: 100% !important;
  }
`;

export const DashboardGraphicsHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 25px;

  div {
    flex-direction: row;

    span {
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 28px;

          letter-spacing: -0.0075em;

          color: var(--greydark);
        }

        p {
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 19,6px;
        }

    img {
      width: 24px;
    }

    div {
      flex-direction: column;
      align-items: flex-start;
      padding-left: 10px;



      img {
        width: 20px;
        padding-right: 3px;
      }
    }

    div:first-child  {
      align-items: flex-end;
    }
  }
`;

export const RecentCompanies = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  overflow: auto;
  overflow-y: hidden;
  overflow-x: scroll;

  div::-webkit-scrollbar {
    width: 12px;               /* width of the entire scrollbar */
  }

  > div {
    flex-direction: row;

    img {
      width: 24px;
    }

    h5 {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 150%;

      padding-left: 8px;

      color: var(--greydark);
    }
  }
`;

export const RecentCompaniesHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    flex-direction: row;
  }
`;



export const RecentCompaniesCard = styled.div.attrs((props: {width: string}) => props)`
  width: ${(props) => props.width};
  min-width: 300px !important;

  display: flex;
  flex-direction: row-reverse !important;
  justify-content: flex-end;

  padding-top: 20px;

  img:nth-child(2) {
    width: 32px;
    height: 32px !important;
  }
`;

export const RecentCompaniesCardContent = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center;

  padding: 16px;
  margin-right: 20px;

  background: var(--white);
  box-shadow: 0px 8px 20px -2px rgba(43, 37, 63, 0.1);
  border-radius: 8px;

  img:nth-child(2) {
      border-radius: 50%;
      object-fit: cover;
      margin: 0 10px;
    }

  div {
    padding-right: 30px;

    img {
      width: 24px;
    }

    img:nth-child(2) {
      padding: 50px;
    }

    span {
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 28px;

          letter-spacing: -0.0075em;

          color: var(--greydark);
        }

        p {
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 19,6px;

          white-space: nowrap;
        }
  }
`;

export const Menu = styled.div`
  flex-grow: 0;
  display: flex;
  align-items: center;

  padding: 20px 25px;

  img {
    max-width: 32px;
  }

  img:nth-child(1n) {
    max-width: 46px;

    padding-bottom: 50px;
  }

  a:hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: row !important;
    justify-content: space-between;

    img:first-child {
      padding-bottom: 0px;
    }

  }
`;

export const RightTab = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-between;

  margin: 32px 20px;
  padding: 4px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.005em;

  color: var(--blue);

  border: 1px solid rgba(0, 71, 187, 0.2);
  box-sizing: border-box;
  border-radius: 120px;

  img {
    width: 32px;
  }

  img:nth-child(3) {
    width: 16px;
  }

`;
export const FavoriteCompanies = styled.div`
  height: 100vh;
  display: flex;

  margin: 0px 20px;
  padding: 4px;

  overflow: auto;
  overflow-x: scroll;

  div {
    flex-direction: row;
    align-items: center;
  }
`;

export const FavoriteCompaniesHeader = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;

  color: var(--greydark);

  img {
    padding-right: 8px;
  }


`;

export const FavoriteCompaniesBody = styled.div`
  display: flex;
  margin: 16px 0px;
  padding: 4px;

  > img {
    padding-left: 10px;
  }

  > div {
    width: 100%;
    justify-content: space-between;

    background: var(--white);
    box-shadow: 0px 8px 20px -2px rgba(43, 37, 63, 0.1);
    border-radius: 8px;
    padding: 12px 16px;

    div {

      span {
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 125%;

        padding-right: 4px;
      }

      img {
        border-radius: 50%;
        object-fit: cover;
      }

      div {
        flex-direction: column;
        align-items: flex-start;
        padding-left: 12px;
        padding-right: 30px;
        span {
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 28px;

          letter-spacing: -0.0075em;

          color: var(--greydark);
        }

        p {
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 19,6px;
        }
      }
    }
  }
`;
