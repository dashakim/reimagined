// styles/NavbarStyles.ts
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background: #f5f5f5;
  color: #aba9a9;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 6rem;
  height: 80px;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 2rem;
`;

export const NavLink = styled.li`
  cursor: pointer;

  &:hover {
    //font-weight: bold;
    color: #565555;
  }
`;
