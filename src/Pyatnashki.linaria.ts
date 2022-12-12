import {css} from '@linaria/core';

export const PyatnashkiStyles = css`
  color: #ffffff;
  font-family: "Inter", -apple-system, "Nunito", BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 200;
  width: max-content;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.9px);
  -webkit-backdrop-filter: blur(7.9px);

  button {
    background: #ffffff;
    padding: 15px 45px;
    border-radius: 10px;
    border: none;
    font-size: 15px;
    cursor: pointer;
    transition: .4s;
    width: max-content;
    margin: 20px auto 0;

    &:hover {
      background: rgba(255, 255, 255, 0.75);
    }
  }

  .pyatnashki {
    &__header {
      font-size: 50px;
      font-weight: 200;
    }

    &__stats {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 15px;
    }

    &__content {
      position: relative;
      padding: 20px;

      &__overlay {
        background: rgba(255, 255, 255, 0);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(9.1px);
        -webkit-backdrop-filter: blur(9.1px);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 20px;
        row-gap: 20px;

        p {
          width: max-content;
          margin: 20px 0 0;
          font-weight: 300;
        }
      }
    }
    
    &__shame-zone {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      row-gap: 10px;
    }
  }
`;