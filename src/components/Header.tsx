import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, FlaskConical, LogOut } from "lucide-react";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// Styled Components (mantenemos solo los necesarios)
const HeaderContainer = styled.header`
  background-color: ${({ theme }) => `${theme.colors.background}95`};
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  position: sticky;
  top: 0;
  z-index: 50;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 ${({ theme }) => theme.spacing.xl};
  }
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary[500]}, ${({ theme }) => theme.colors.primary[700]});
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const LogoText = styled.div``;

const LogoTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0;
`;

const DesktopNav = styled.nav`
  display: none;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  color: ${({ $isActive, theme }) => $isActive ? theme.colors.primary[500] : theme.colors.gray[600]};
  border-bottom: ${({ $isActive, theme }) => $isActive ? `2px solid ${theme.colors.primary[500]}` : 'none'};
  padding-bottom: 2px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

const MobileMenuButton = styled.div`
  display: block;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => $isOpen ? 'block' : 'none'};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuContent = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const MobileNavLink = styled(Link)<{ $isActive: boolean }>`
  display: block;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  background-color: ${({ $isActive, theme }) => $isActive ? theme.colors.primary[500] : 'transparent'};
  color: ${({ $isActive, theme }) => $isActive ? 'white' : theme.colors.gray[600]};
  
  &:hover {
    color: ${({ $isActive, theme }) => $isActive ? 'white' : theme.colors.gray[900]};
    background-color: ${({ $isActive, theme }) => $isActive ? theme.colors.primary[500] : theme.colors.gray[100]};
  }
`;

const MobileDivider = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  margin: ${({ theme }) => theme.spacing.sm} 0;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  // Solo mostramos la opción de Cursos
  const navigation = [
    { name: "Cursos", href: "/cursos" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          logout();
          resolve(true);
        }, 500);
      }),
      {
        loading: 'Cerrando sesión...',
        success: () => {
          navigate('/login');
          return 'Sesión cerrada correctamente';
        },
        error: 'Error al cerrar sesión',
      }
    );
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderInner>
          {/* Logo */}
          <LogoSection>
            <LogoIcon>
              <FlaskConical size={24} color="white" />
            </LogoIcon>
            <LogoText>
              <LogoTitle>Aventura Lab</LogoTitle>
            </LogoText>
          </LogoSection>

          {/* Desktop Navigation */}
          <DesktopNav>
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                $isActive={isActive(item.href)}
              >
                {item.name}
              </NavLink>
            ))}
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleLogout}
            >
              <LogOut size={16} style={{ marginRight: '0.5rem' }} />
              Cerrar sesión
            </Button>
          </DesktopNav>

          {/* Mobile menu button */}
          <MobileMenuButton>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </MobileMenuButton>
        </HeaderInner>

        {/* Mobile Navigation */}
        <MobileMenu $isOpen={isMenuOpen}>
          <MobileMenuContent>
            {navigation.map((item) => (
              <MobileNavLink
                key={item.name}
                to={item.href}
                $isActive={isActive(item.href)}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </MobileNavLink>
            ))}
            <MobileDivider />
            <Button 
              variant="outline" 
              size="sm" 
              style={{ width: '100%', justifyContent: 'flex-start' }}
              onClick={handleLogout}
            >
              <LogOut size={16} style={{ marginRight: '0.5rem' }} />
              Cerrar sesión
            </Button>
          </MobileMenuContent>
        </MobileMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;