import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  padding: 0 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + '99'};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? '1' : '0')};
  z-index: ${({ open }) => (open ? '1' : '-1')};
`;

const MobileMenuLinks = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </NavLogo>
        <MobileIcon onClick={() => setOpen(!open)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton>GitHub Profile</GithubButton>
        </ButtonContainer>
      </NavContainer>
      {open && (
        <MobileMenu open={open}>
          <MobileMenuLinks href="#about" onClick={() => setOpen(false)}>About</MobileMenuLinks>
          <MobileMenuLinks href="#skills" onClick={() => setOpen(false)}>Skills</MobileMenuLinks>
          <MobileMenuLinks href="#experience" onClick={() => setOpen(false)}>Experience</MobileMenuLinks>
          <MobileMenuLinks href="#projects" onClick={() => setOpen(false)}>Projects</MobileMenuLinks>
          <GithubButton
            style={{
              padding: '10px 16px',
              background: theme.primary,
              color: 'white',
              width: 'max-content',
            }}
            href="/"
            target="_blank"
          >
            GitHub Profile
          </GithubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
