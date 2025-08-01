import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, Eye, EyeOff, Lock, Mail } from "lucide-react";
import styled from "styled-components";
import { useAuth } from '../context/AuthContext';
import toast from "react-hot-toast";

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary[600]}, ${({ theme }) => theme.colors.secondary[600]});
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  animation: fadeIn 0.6s ease-out;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
`;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 28rem;
  animation: scaleIn 0.6s ease-out;
  animation-delay: 0.3s;
  animation-fill-mode: both;
`;

const StyledCard = styled(Card)`
  box-shadow: ${({ theme }) => theme.shadows.xl};
  border: none;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  animation: scaleIn 0.6s ease-out;
  animation-delay: 0.6s;
  animation-fill-mode: both;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary[500]}, ${({ theme }) => theme.colors.primary[700]});
  border-radius: ${({ theme }) => theme.borderRadius.xl};
`;

const FormTitle = styled(CardTitle)`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  animation: fadeIn 0.6s ease-out;
  animation-delay: 0.9s;
  animation-fill-mode: both;
`;

const FormDescription = styled(CardDescription)`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  animation: fadeIn 0.6s ease-out;
  animation-delay: 1.2s;
  animation-fill-mode: both;
`;

const FormContainer = styled.div`
  animation: fadeIn 0.6s ease-out;
  animation-delay: 1.5s;
  animation-fill-mode: both;
`;

const FormField = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const InputGroup = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const InputIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const StyledInput = styled(Input)`
  padding-left: 2.5rem;
`;

const PasswordInput = styled(Input)`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`;

const PasswordToggle = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 0 0.75rem;
  
  &:hover {
    background: transparent;
  }
`;


const SubmitButton = styled(Button)`
  width: 100%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary[500]}, ${({ theme }) => theme.colors.primary[700]});
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
  
  &:disabled {
    opacity: 0.6;
    transform: none;
  }
`;

const LinkSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const LinkText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`;


const Login = () => {
  const [email, setEmail] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();


  useEffect(() => {
  // Redirigir a cursos si ya está autenticado
  const session = localStorage.getItem('session');
  if (session) {
    navigate('/cursos');
  }
}, [navigate]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    toast.promise(
      (async () => {
        const success = await login(email, password);
        if (!success) {
          throw new Error("Credenciales incorrectas");
        }
        
        // Guardar información adicional en localStorage si es necesario
        localStorage.setItem('session', JSON.stringify({
          user: email,
          timestamp: new Date().getTime()
        }));
        
        return success;
      })(),
      {
        loading: 'Verificando credenciales...',
        success: () => {
          setTimeout(() => navigate("/cursos"), 500);
          return '¡Bienvenido! Redirigiendo...';
        },
        error: (err) => err.message || 'Error al iniciar sesión',
      },
      {
        position: 'top-center',
        style: {
          minWidth: '250px',
          border: '1px solid hsl(var(--border))',
        },
      }
    ).finally(() => setIsLoading(false));
  };

  return (
    <PageContainer>
      <BackgroundOverlay />
      
      <CardContainer>
        <StyledCard>
          <CardHeader style={{ textAlign: 'center', paddingBottom: '2rem' }}>
            <IconContainer>
              <IconWrapper>
                <FlaskConical size={40} color="white" />
              </IconWrapper>
            </IconContainer>
            <FormTitle>
              Iniciar Sesión
            </FormTitle>
            <FormDescription>
              Accede a tu cuenta de Aventura Lab
            </FormDescription>
          </CardHeader>
          
          <CardContent>
            <FormContainer>
              <form onSubmit={handleSubmit}>
                <FormField>
                  <Label htmlFor="email">Usuario</Label>
                  <InputGroup>
                    <InputIcon>
                      <Mail size={16} />
                    </InputIcon>
                    <StyledInput
                      id="email"
                      type="text"
                      placeholder="admin"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>
                </FormField>
                
                <FormField>
                  <Label htmlFor="password">Contraseña</Label>
                  <InputGroup>
                    <InputIcon>
                      <Lock size={16} />
                    </InputIcon>
                    <PasswordInput
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="admin"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <PasswordToggle
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </PasswordToggle>
                  </InputGroup>
                </FormField>

                <SubmitButton
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
                </SubmitButton>
              </form>

              <LinkSection>
                <LinkText>
                  Usuario: admin | Contraseña: admin
                </LinkText>
              </LinkSection>
            </FormContainer>
          </CardContent>
        </StyledCard>
      </CardContainer>
    </PageContainer>
  );
};

export default Login;