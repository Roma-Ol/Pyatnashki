import { css } from '@linaria/core';

export const PlayboardStyles = css`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 10px;
  column-gap: 10px;
  
  .unit {
    width: 90px;
    height: 90px;
    background: #646dc9;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    border-radius: 10px;
    
    &.empty {
      background: none;
    }
  }
`