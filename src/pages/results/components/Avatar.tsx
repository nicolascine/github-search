import React from "react";
import styled from "styled-components";

const AvatarWrapper = styled.div`
  img {
    width: 100%;
    max-width: 100%;
    border-radius: 2px;
    box-shadow: 0 0 4px NaNpx var(--black-40);
  }
`;

const Avatar: React.FC<{ imgURL: string; userName: string }> = props => {
  return (
    <AvatarWrapper>
      <img src={props.imgURL} alt={props.userName} />
    </AvatarWrapper>
  );
};

export default Avatar;
