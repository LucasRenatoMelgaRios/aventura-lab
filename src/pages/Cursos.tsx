import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { Microscope, Dna, FlaskConical, Calendar, Users, Clock } from "lucide-react";
import styled from "styled-components";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import type { Theme } from "@/styles/theme";

// Interfaces
interface Curso {
  id: string;
  titulo: string;
  descripcion: string;
  icono: React.ReactNode;
  color: 'primary' | 'secondary' | 'tertiary';
  informes: number;
  duracion: string;
  estudiantes: number;
  temas: string[];
}

interface StyledProps {
  theme: Theme;
}

interface CourseCardProps extends StyledProps {
  $color: 'primary' | 'secondary' | 'tertiary';
}

interface IconWrapperProps extends StyledProps {
  $color: 'primary' | 'secondary' | 'tertiary';
}

interface ActionButtonProps extends StyledProps {
  $color: 'primary' | 'secondary' | 'tertiary';
}

interface GlobalStatValueProps extends StyledProps {
  $color: 'primary' | 'secondary' | 'tertiary';
}

// Styled Components (sin animaciones CSS)
const PageContainer = styled.div<StyledProps>`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const MainContent = styled.div<StyledProps>`
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

const HeaderSection = styled.div<StyledProps>`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  opacity: 0;
  transform: translateY(30px);
`;

const MainTitle = styled.h1<StyledProps>`
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 3rem;
  }
`;

const Description = styled.p<StyledProps>`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.gray[600]};
  max-width: 32rem;
  margin: 0 auto;
`;

const CoursesGrid = styled.div<StyledProps>`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CourseCard = styled(Card)<CourseCardProps>`
  border: 2px solid ${({ $color, theme }) => $color === 'primary' ? `${theme.colors.primary[500]}20` : 
    $color === 'secondary' ? `${theme.colors.secondary[500]}20` : `${theme.colors.tertiary[500]}20`};
  transition: all ${({ theme }) => theme.transitions.normal};
  opacity: 0;
  transform: translateY(50px) scale(0.9);
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
    transform: translateY(50px) scale(0.95);
    border-color: ${({ $color, theme }) => $color === 'primary' ? `${theme.colors.primary[500]}40` : 
      $color === 'secondary' ? `${theme.colors.secondary[500]}40` : `${theme.colors.tertiary[500]}40`};
  }
`;

const IconContainer = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: ${({ $color, theme }) => $color === 'primary' ? theme.colors.primary[500] : 
    $color === 'secondary' ? theme.colors.secondary[500] : theme.colors.tertiary[500]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  color: white;
  transform: scale(0);
`;

const StatsGrid = styled.div<StyledProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(20px);
`;

const StatIcon = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const StatValue = styled.p<StyledProps>`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: 0;
`;

const StatLabel = styled.p<StyledProps>`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.gray[500]};
  margin: 0;
`;

const TopicsSection = styled.div<StyledProps>`
  margin-top: ${({ theme }) => theme.spacing.lg};
  opacity: 0;
  transform: translateX(-20px);
`;

const TopicsTitle = styled.h4<StyledProps>`
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TopicsContainer = styled.div<StyledProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ActionSection = styled.div<StyledProps>`
  padding-top: ${({ theme }) => theme.spacing.md};
  opacity: 0;
  transform: scale(0.8);
`;

const ActionButton = styled(Button)<ActionButtonProps>`
  width: 100%;
  background-color: ${({ $color, theme }) => $color === 'primary' ? theme.colors.primary[500] : 
    $color === 'secondary' ? theme.colors.secondary[500] : theme.colors.tertiary[500]};
  color: white;
  border: none;
  padding: 12px 24px;
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
`;

const StatsSection = styled.div<StyledProps>`
  background: linear-gradient(135deg, ${({ theme }) => `${theme.colors.gray[100]}50`} 0%, ${({ theme }) => `${theme.colors.gray[100]}30`} 100%);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  opacity: 0;
  transform: translateY(40px);
`;

const StatsSectionHeader = styled.div<StyledProps>`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const StatsSectionTitle = styled.h2<StyledProps>`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StatsSectionDescription = styled.p<StyledProps>`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const GlobalStatsGrid = styled.div<StyledProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GlobalStatItem = styled.div`
  text-align: center;
  opacity: 0;
  transform: scale(0.8);
`;

const GlobalStatValue = styled.div<GlobalStatValueProps>`
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ $color, theme }) => $color === 'primary' ? theme.colors.primary[500] : 
    $color === 'secondary' ? theme.colors.secondary[500] : theme.colors.tertiary[500]};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const GlobalStatLabel = styled.p<StyledProps>`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[500]};
  margin: 0;
`;

const Cursos: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const cursos: Curso[] = [
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

useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación inicial de la página (más rápida)
      gsap.fromTo(pageRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.2, ease: "power2.out" }
      );

      // Timeline con defaults más rápidos
      const tl = gsap.timeline({
        defaults: { 
          ease: "power3.out", 
          duration: 0.35 // Reducido de 0.5
        }
      });

      // Header (animación más rápida y con menos desplazamiento)
      tl.fromTo(headerRef.current,
        { opacity: 0, y: 20 }, // Reducido de y:30
        { 
          opacity: 1, 
          y: 0,
          duration: 0.4 // Reducido de 0.5
        }
        // Eliminado el delay "+=0.1"
      );

      // Tarjetas de cursos (comienzan inmediatamente después del header)
      const courseCards = coursesRef.current?.children;
      if (courseCards) {
        tl.fromTo(courseCards,
          { opacity: 0, y: 30 }, // Reducido de y:50
          { 
            opacity: 1, 
            y: 0,
            stagger: 0.1, // Reducido de 0.15
            duration: 0.3 // Reducido de 0.4
          }
          // Eliminado el delay "+=0.1"
        );

        // Iconos dentro de las tarjetas (comienzan antes)
        tl.fromTo(".course-icon",
          { scale: 0, rotation: -20 }, // Reducido de -30
          { 
            scale: 1, 
            rotation: 0,
            duration: 0.4, // Reducido de 0.5
            stagger: 0.08, // Reducido de 0.1
            ease: "back.out(1.5)" // Ajustado de 1.7
          },
          "-=0.2" // Adelantado (era -=0.3)
        );

        // Estadísticas de cada tarjeta
        tl.fromTo(".course-stat",
          { opacity: 0, y: 10 }, // Reducido de y:15
          { 
            opacity: 1, 
            y: 0,
            stagger: 0.04, // Reducido de 0.05
            duration: 0.25 // Reducido de 0.3
          },
          "-=0.3" // Adelantado (era -=0.4)
        );

        // Temas
        tl.fromTo(".course-topics",
          { opacity: 0, x: -8 }, // Reducido de x:-10
          { 
            opacity: 1, 
            x: 0,
            stagger: 0.08, // Reducido de 0.1
            duration: 0.25 // Reducido de 0.3
          },
          "-=0.25" // Adelantado (era -=0.3)
        );

        // Botones
        tl.fromTo(".course-button",
          { opacity: 0, scale: 0.95 }, // Ajustado de 0.9
          { 
            opacity: 1, 
            scale: 1,
            stagger: 0.08, // Reducido de 0.1
            duration: 0.25, // Reducido de 0.3
            ease: "back.out(1.5)" // Ajustado de 1.7
          },
          "-=0.15" // Adelantado (era -=0.2)
        );
      }

      // Sección de estadísticas (menos delay)
      tl.fromTo(statsRef.current,
        { opacity: 0, y: 20 }, // Reducido de y:30
        { 
          opacity: 1, 
          y: 0,
          duration: 0.35 // Reducido de 0.5
        },
        "+=0.1" // Reducido de +=0.2
      );

      // Estadísticas globales
      tl.fromTo(".global-stat",
        { opacity: 0, y: 15 }, // Reducido de y:20
        { 
          opacity: 1, 
          y: 0,
          stagger: 0.08, // Reducido de 0.1
          duration: 0.3 // Reducido de 0.4
        },
        "-=0.2" // Adelantado (era -=0.3)
      );

      // Hover animations (más rápidas)
      if (courseCards) {
        Array.from(courseCards).forEach(card => {
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -4, // Reducido de -5
              scale: 1.015, // Reducido de 1.02
              duration: 0.15, // Reducido de 0.2
              ease: "power2.out"
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.15, // Reducido de 0.2
              ease: "power2.out"
            });
          };

          (card as HTMLElement).addEventListener('mouseenter', handleMouseEnter);
          (card as HTMLElement).addEventListener('mouseleave', handleMouseLeave);
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
       <PageContainer ref={pageRef}>
      <Header />
      
      <MainContent>
        {/* Header Section */}
        <HeaderSection ref={headerRef}>
          <MainTitle>
            Cursos de Laboratorio
          </MainTitle>
          <Description>
            Explora nuestros tres cursos especializados en laboratorio clínico. 
            Cada curso incluye informes de práctica detallados y material de estudio completo.
          </Description>
        </HeaderSection>

        {/* Courses Grid */}
        <CoursesGrid ref={coursesRef}>
          {cursos.map((curso, index) => (
            <CourseCard
              key={curso.id}
              $color={curso.color}
            >
              <CardHeader style={{ textAlign: 'center', paddingBottom: '1rem' }}>
                <IconContainer>
                  <IconWrapper $color={curso.color} className="course-icon">
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
                  <StatItem className="course-stat">
                    <StatIcon>
                      <Calendar size={16} />
                    </StatIcon>
                    <StatValue>{curso.duracion}</StatValue>
                    <StatLabel>Duración</StatLabel>
                  </StatItem>
                  <StatItem className="course-stat">
                    <StatIcon>
                      <Users size={16} />
                    </StatIcon>
                    <StatValue>{curso.estudiantes}</StatValue>
                    <StatLabel>Estudiantes</StatLabel>
                  </StatItem>
                  <StatItem className="course-stat">
                    <StatIcon>
                      <Clock size={16} />
                    </StatIcon>
                    <StatValue>{curso.informes}</StatValue>
                    <StatLabel>Informes</StatLabel>
                  </StatItem>
                </StatsGrid>

                {/* Temas principales */}
                <TopicsSection className="course-topics">
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
                <ActionSection className="course-button">
                  <Link to={`/informes/${curso.id}`} style={{ width: '100%', textDecoration: 'none' }}>
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
        <StatsSection ref={statsRef}>
          <StatsSectionHeader>
            <StatsSectionTitle>
              Estadísticas del Programa
            </StatsSectionTitle>
            <StatsSectionDescription>
              Datos generales de nuestros cursos de laboratorio clínico
            </StatsSectionDescription>
          </StatsSectionHeader>
          
          <GlobalStatsGrid>
            <GlobalStatItem className="global-stat">
              <GlobalStatValue $color="primary">135</GlobalStatValue>
              <GlobalStatLabel>Estudiantes Activos</GlobalStatLabel>
            </GlobalStatItem>
            <GlobalStatItem className="global-stat">
              <GlobalStatValue $color="secondary">15</GlobalStatValue>
              <GlobalStatLabel>Informes Totales</GlobalStatLabel>
            </GlobalStatItem>
            <GlobalStatItem className="global-stat">
              <GlobalStatValue $color="tertiary">42</GlobalStatValue>
              <GlobalStatLabel>Semanas de Curso</GlobalStatLabel>
            </GlobalStatItem>
            <GlobalStatItem className="global-stat">
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