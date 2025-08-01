import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FlaskConical, Microscope, BookOpen, Users, TrendingUp, ChevronRight } from "lucide-react";
import styled from "styled-components";

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary[600]}, ${({ theme }) => theme.colors.secondary[600]});
  position: relative;
  overflow: hidden;
  animation: fadeIn 0.6s ease-out;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
`;

const BackgroundElement = styled.div<{ $top?: string; $bottom?: string; $left?: string; $right?: string; $size: string; $color: string; $delay?: string }>`
  position: absolute;
  ${({ $top }) => $top && `top: ${$top};`}
  ${({ $bottom }) => $bottom && `bottom: ${$bottom};`}
  ${({ $left }) => $left && `left: ${$left};`}
  ${({ $right }) => $right && `right: ${$right};`}
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background-color: ${({ $color }) => $color};
  border-radius: 50%;
  filter: blur(60px);
  animation: pulse 2s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || '0s'};
`;

const MainContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.lg};
  }
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  animation: fadeIn 0.6s ease-out;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  animation: scaleIn 0.6s ease-out;
  animation-delay: 0.3s;
  animation-fill-mode: both;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.2;
  animation: fadeIn 0.6s ease-out;
  animation-delay: 0.6s;
  animation-fill-mode: both;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 3.75rem;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 4.5rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(to right, white, ${({ theme }) => theme.colors.primary[200]});
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: fadeIn 0.6s ease-out;
  animation-delay: 0.9s;
  animation-fill-mode: both;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  animation: fadeIn 0.6s ease-out;
  animation-delay: 1.2s;
  animation-fill-mode: both;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
  }
`;

const Landing = () => {
  return (
    <PageContainer>
      <BackgroundOverlay>
        <BackgroundElement 
          $top="5rem" 
          $left="2.5rem" 
          $size="18rem" 
          $color="rgba(59, 130, 246, 0.2)" 
        />
        <BackgroundElement 
          $bottom="5rem" 
          $right="2.5rem" 
          $size="24rem" 
          $color="rgba(139, 69, 19, 0.2)"
          $delay="1s"
        />
        <BackgroundElement 
          $top="50%" 
          $left="50%" 
          $size="20rem" 
          $color="rgba(34, 197, 94, 0.2)"
          $delay="2s"
        />
      </BackgroundOverlay>
      
      <MainContent>
        <HeroSection>
          <IconContainer>
            <IconWrapper>
              <FlaskConical size={56} color="white" />
            </IconWrapper>
          </IconContainer>
          
          <MainTitle>
            <GradientText>Aventura sobre el</GradientText>
            <br />
            Laboratorio Clínico
          </MainTitle>
          
          <Description>
            Descubre el fascinante mundo del laboratorio clínico a través de una experiencia 
            interactiva única. 
          </Description>
          
          <ButtonGroup>
            <Link to="/login">
              <Button size="lg" style={{ backgroundColor: 'white', color: '#3B82F6', fontSize: '1.125rem', padding: '1rem 2rem' }}>
                Comenzar Aventura
                <ChevronRight style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
              </Button>
            </Link>
            <Link to="/cursos">
              <Button size="lg" variant="outline" style={{ border: '2px solid white', color: "#ffff", fontSize: '1.125rem', padding: '1rem 2rem' }}>
                Explorar Cursos
              </Button>
            </Link>
          </ButtonGroup>
        </HeroSection>

        {/* Feature Highlights */}
        <FeaturesGrid>
          {[
            {
              icon: <Microscope size={32} />,
              title: "Análisis Interactivos",
              description: "Casos reales con análisis detallados"
            },
            {
              icon: <BookOpen size={32} />,
              title: "3 Especialidades",
              description: "Bacteriología, Anatomía y Bioquímica"
            },
            {
              icon: <Users size={32} />,
              title: "Aprendizaje Social",
              description: "Aprende con amigos y comparte conocimientos"
            },
            {
              icon: <TrendingUp size={32} />,
              title: "Progreso Medible",
              description: "Seguimiento de competencias"
            }
          ].map((feature, index) => (
            <FeatureCard key={index} $delay={`${1.8 + index * 0.2}s`}>
              <FeatureIconContainer>
                <FeatureIcon>
                  {feature.icon}
                </FeatureIcon>
              </FeatureIconContainer>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </MainContent>
    </PageContainer>
  );
};

// Additional styled components for features section
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  animation: fadeIn 0.6s ease-out;
  animation-delay: 1.5s;
  animation-fill-mode: both;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FeatureCard = styled.div<{ $delay: string }>`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.normal};
  animation: fadeIn 0.6s ease-out;
  animation-delay: ${({ $delay }) => $delay};
  animation-fill-mode: both;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.05);
  }
`;

const FeatureIconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FeatureIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: white;
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FeatureDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export default Landing;