// components/Navbar.tsx
import React from 'react';
import { NavbarContainer, Logo, NavLinks, NavLink } from './StyledNavbar';
import MemorifyLogo from '@/app/components/Navbar/StyledNavLogo';
import styled from 'styled-components';

interface AvatarProps {
  src: string;
}
const StyledAvatar = styled.div<{ src: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;
const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <MemorifyLogo>Memorify</MemorifyLogo>
      <NavLinks>
        <NavLink>Your words</NavLink>
        <NavLink>Memory board</NavLink>
        <NavLink>Descriptions</NavLink>
        <NavLink>Statistic</NavLink>
        <NavLink>About</NavLink>
        <StyledAvatar src="/avatar.png" />
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
