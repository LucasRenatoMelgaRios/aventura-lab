import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { Microscope, Dna, FlaskConical, Calendar, Users, Clock } from "lucide-react";
import styled from "styled-components";

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  animation: fadeIn 0.6s ease-out;
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: ${({ theme }) => theme.spacing.lg};
    padding-right: ${({ theme }) => theme.spacing.lg};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: ${({ theme }) => theme.spacing.xl};
    padding-right: ${({ theme }) => theme.spacing.xl};
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  animation: fadeIn 0.6s ease-out;
  animation-delay: 0.3s;
  animation-fill-mode: both;
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.gray[600]};
  max-width: 32rem;
  margin: 0 auto;
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CourseCard = styled(Card)<{ $color: string; $index: number }>`
  border: 2px solid ${({ $color, theme }) => $color === 'primary' ? `${theme.colors.primary[500]}20` : 
    $color === 'secondary' ? `${theme.colors.secondary[500]}20` : `${theme.colors.tertiary[500]}20`};
  transition: all ${({ theme }) => theme.transitions.normal};
  animation: fadeIn 0.6s ease-out;
  animation-delay: ${({ $index }) => `${0.6 + $index * 0.2}s`};
  animation-fill-mode: both;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
    transform: scale(1.02);
    border-color: ${({ $color, theme }) => $color === 'primary' ? `${theme.colors.primary[500]}40` : 
      $color === 'secondary' ? `${theme.colors.secondary[500]}40` : `${theme.colors.tertiary[500]}40`};
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const IconWrapper = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: ${({ $color, theme }) => $color === 'primary' ? theme.colors.primary[500] : 
    $color === 'secondary' ? theme.colors.secondary[500] : theme.colors.tertiary[500]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  color: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const StatValue = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: 0;
`;

const StatLabel = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.gray[500]};
  margin: 0;
`;

const TopicsSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const TopicsTitle = styled.h4`
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ActionSection = styled.div`
  padding-top: ${({ theme }) => theme.spacing.md};
`;

const ActionButton = styled(Button)<{ $color: string }>`
  width: 100%;
  background-color: ${({ $color, theme }) => $color === 'primary' ? theme.colors.primary[500] : 
    $color === 'secondary' ? theme.colors.secondary[500] : theme.colors.tertiary[500]};
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
`;

const StatsSection = styled.div`
  background-color: ${({ theme }) => `${theme.colors.gray[100]}30`};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  animation: fadeIn 0.6s ease-out;
  animation-delay: 1.2s;
  animation-fill-mode: both;
`;

const StatsSectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const StatsSectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StatsSectionDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const GlobalStatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GlobalStatItem = styled.div`
  text-align: center;
`;

const GlobalStatValue = styled.div<{ $color: string }>`
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ $color, theme }) => $color === 'primary' ? theme.colors.primary[500] : 
    $color === 'secondary' ? theme.colors.secondary[500] : theme.colors.tertiary[500]};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const GlobalStatLabel = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[500]};
  margin: 0;
`;

const Cursos = () => {
  const cursos = [
    {
      id: "bacteriologia",
      titulo: "Bacteriología",
      descripcion: "Estudio de microorganismos patógenos y técnicas de identificación bacteriana en muestras clínicas.",
      icono: <Microscope size={32} />,
      color: "primary",
      informes: 5,
      duracion: "16 semanas",
      estudiantes: 45,
      temas: ["Cultivos bacterianos", "Antibiogramas", "Identificación morfológica", "Técnicas de tinción", "Microorganismos patógenos"]
    },
    {
      id: "anatomia-patologica",
      titulo: "Técnicas de Anatomía Patológica",
      descripcion: "Procesamiento y análisis de tejidos para diagnóstico histopatológico y citológico.",
      icono: <Dna size={32} />,
      color: "secondary",
      informes: 5,
      duracion: "14 semanas",
      estudiantes: 38,
      temas: ["Procesamiento de tejidos", "Técnicas de tinción", "Histopatología", "Citología", "Inmunohistoquímica"]
    },
    {
      id: "perfiles-bioquimicos",
      titulo: "Perfiles Bioquímicos",
      descripcion: "Análisis de biomarcadores y parámetros bioquímicos para evaluación clínica integral.",
      icono: <FlaskConical size={32} />,
      color: "tertiary",
      informes: 5,
      duracion: "12 semanas",
      estudiantes: 52,
      temas: ["Química sanguínea", "Enzimología", "Metabolismo lipídico", "Función renal", "Marcadores cardíacos"]
    }
  ];

  return (
    <PageContainer>
      <Header />
      
      <MainContent>
        {/* Header Section */}
        <HeaderSection>
          <MainTitle>
            Cursos de Laboratorio
          </MainTitle>
          <Description>
            Explora nuestros tres cursos especializados en laboratorio clínico. 
            Cada curso incluye informes de práctica detallados y material de estudio completo.
          </Description>
        </HeaderSection>

        {/* Courses Grid */}
        <CoursesGrid>
          {cursos.map((curso, index) => (
            <CourseCard
              key={curso.id}
              $color={curso.color}
              $index={index}
            >
              <CardHeader style={{ textAlign: 'center', paddingBottom: '1rem' }}>
                <IconContainer>
                  <IconWrapper $color={curso.color}>
                    {curso.icono}
                  </IconWrapper>
                </IconContainer>
                <CardTitle style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                  {curso.titulo}
                </CardTitle>
                <CardDescription style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
                  {curso.descripcion}
                </CardDescription>
              </CardHeader>
              
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Estadísticas */}
                <StatsGrid>
                  <StatItem>
                    <StatIcon>
                      <Calendar size={16} />
                    </StatIcon>
                    <StatValue>{curso.duracion}</StatValue>
                    <StatLabel>Duración</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatIcon>
                      <Users size={16} />
                    </StatIcon>
                    <StatValue>{curso.estudiantes}</StatValue>
                    <StatLabel>Estudiantes</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatIcon>
                      <Clock size={16} />
                    </StatIcon>
                    <StatValue>{curso.informes}</StatValue>
                    <StatLabel>Informes</StatLabel>
                  </StatItem>
                </StatsGrid>

                {/* Temas principales */}
                <TopicsSection>
                  <TopicsTitle>Temas principales:</TopicsTitle>
                  <TopicsContainer>
                    {curso.temas.slice(0, 3).map((tema, index) => (
                      <Badge key={index} variant="secondary" style={{ fontSize: '0.75rem' }}>
                        {tema}
                      </Badge>
                    ))}
                    {curso.temas.length > 3 && (
                      <Badge variant="outline" style={{ fontSize: '0.75rem' }}>
                        +{curso.temas.length - 3} más
                      </Badge>
                    )}
                  </TopicsContainer>
                </TopicsSection>

                {/* Botón de acción */}
                <ActionSection>
                  <Link to={`/informes/${curso.id}`} style={{ width: '100%' }}>
                    <ActionButton $color={curso.color}>
                      Ver Informes
                    </ActionButton>
                  </Link>
                </ActionSection>
              </CardContent>
            </CourseCard>
          ))}
        </CoursesGrid>

        {/* Stats Section */}
        <StatsSection>
          <StatsSectionHeader>
            <StatsSectionTitle>
              Estadísticas del Programa
            </StatsSectionTitle>
            <StatsSectionDescription>
              Datos generales de nuestros cursos de laboratorio clínico
            </StatsSectionDescription>
          </StatsSectionHeader>
          
          <GlobalStatsGrid>
            <GlobalStatItem>
              <GlobalStatValue $color="primary">135</GlobalStatValue>
              <GlobalStatLabel>Estudiantes Activos</GlobalStatLabel>
            </GlobalStatItem>
            <GlobalStatItem>
              <GlobalStatValue $color="secondary">15</GlobalStatValue>
              <GlobalStatLabel>Informes Totales</GlobalStatLabel>
            </GlobalStatItem>
            <GlobalStatItem>
              <GlobalStatValue $color="tertiary">42</GlobalStatValue>
              <GlobalStatLabel>Semanas de Curso</GlobalStatLabel>
            </GlobalStatItem>
            <GlobalStatItem>
              <GlobalStatValue $color="primary">98%</GlobalStatValue>
              <GlobalStatLabel>Satisfacción</GlobalStatLabel>
            </GlobalStatItem>
          </GlobalStatsGrid>
        </StatsSection>
      </MainContent>
    </PageContainer>
  );
};

export default Cursos;