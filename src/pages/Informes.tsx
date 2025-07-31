import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import { FileText, Search, Download, Eye, Calendar, User, ArrowLeft } from "lucide-react";
import styled from "styled-components";

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
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
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 3rem;
  }
`;

const PageDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const SearchSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 28rem;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const SearchInput = styled(Input)`
  padding-left: 2.5rem;
`;

const InformesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const InformeCard = styled(Card)`
  transition: box-shadow ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const CardHeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const IconSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const IconWrapper = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: ${({ $color, theme }) => $color === 'primary' ? theme.colors.primary[500] : 
    $color === 'secondary' ? theme.colors.secondary[500] : theme.colors.tertiary[500]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const TitleSection = styled.div``;

const CardTitleStyled = styled(CardTitle)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const EmptyIcon = styled.div`
  color: ${({ theme }) => theme.colors.gray[500]};
  margin: 0 auto ${({ theme }) => theme.spacing.md};
`;

const EmptyTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const EmptyDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Informes = () => {
  const { cursoId } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  // Datos simulados de informes por curso
  const informesPorCurso = {
    bacteriologia: [
      {
        id: 1,
        titulo: "Tinción de Gram",
        descripcion: "Técnica de tinción diferencial para clasificación bacteriana",
        fecha: "2024-01-15",
        estudiante: "María González",
        estado: "Completado",
        tipo: "Tinción"
      },
      {
        id: 2,
        titulo: "Tinción de Ziehl-Neelsen",
        descripcion: "Técnica de tinción para identificación de bacilos ácido-alcohol resistentes",
        fecha: "2024-01-22",
        estudiante: "Carlos Rodríguez",
        estado: "Completado",
        tipo: "Tinción"
      },
      {
        id: 3,
        titulo: "Coprocultivo y Antibiograma",
        descripcion: "Aislamiento e identificación de patógenos entéricos con prueba de sensibilidad",
        fecha: "2024-01-28",
        estudiante: "Ana Martínez",
        estado: "Completado",
        tipo: "Cultivo"
      }
    ],
    "anatomia-patologica": [
      {
        id: 1,
        titulo: "Examen Microscopico de celulas",
        descripcion: "Análisis histopatológico de células (muestra: orina y esputo)",
        fecha: "2024-01-18",
        estudiante: "Roberto Silva",
        estado: "Completado",
        tipo: "Biopsia"
      },
      {
        id: 2,
        titulo: "Citología Cervical - Papanicolaou",
        descripcion: "Detección de células atípicas y displasia cervical",
        fecha: "2024-01-25",
        estudiante: "Patricia Ruiz",
        estado: "Completado",
        tipo: "Citología"
      },
{
  id: 3,
  titulo: "Hematoxilina y Eosina - Tinción Histológica Básica",
  descripcion: "Técnica de tinción estándar para visualización de estructuras celulares y tisulares en muestras histopatológicas",
  fecha: "2024-01-25",
  estudiante: "Patricia Ruiz",
  estado: "Completado",
  tipo: "Histología"
}
    ],
    "perfiles-bioquimicos": [
      {
        id: 1,
        titulo: "Dosaje Sanguíneo de Glucosa",
        descripcion: "Determinación cuantitativa de glucosa en sangre para diagnóstico de diabetes",
        fecha: "2024-01-20",
        estudiante: "Sandra Jiménez",
        estado: "Completado",
        tipo: "Glucosa"
      },
      {
        id: 2,
        titulo: "Prueba de Tolerancia Oral a la Glucosa",
        descripcion: "Evaluación de la respuesta glicémica postprandial para diagnóstico de diabetes",
        fecha: "2024-01-25",
        estudiante: "Roberto Silva",
        estado: "Completado",
        tipo: "Tolerancia"
      },
      {
        id: 3,
        titulo: "dosaje sanguineo de trigliceridos",
        descripcion: "Determinación de colesterol total, HDL, LDL y triglicéridos",
        fecha: "2024-01-30",
        estudiante: "Laura Torres",
        estado: "Pendiente",
        tipo: "Lípidos"
      }
    ]
  };

  const cursoInfo = {
    bacteriologia: { titulo: "Bacteriología", color: "primary" },
    "anatomia-patologica": { titulo: "Técnicas de Anatomía Patológica", color: "secondary" },
    "perfiles-bioquimicos": { titulo: "Perfiles Bioquímicos", color: "tertiary" }
  };

  const informes = cursoId ? informesPorCurso[cursoId as keyof typeof informesPorCurso] || [] : [];
  const curso = cursoId ? cursoInfo[cursoId as keyof typeof cursoInfo] : null;

  const filteredInformes = informes.filter(
    (informe) =>
      informe.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      informe.estudiante.toLowerCase().includes(searchTerm.toLowerCase()) ||
      informe.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case "Completado":
        return { backgroundColor: '#22C55E', color: 'white' };
      case "En revisión":
        return { backgroundColor: '#8B5A2B', color: 'white' };
      case "Pendiente":
        return { backgroundColor: '#6B7280', color: 'white' };
      default:
        return { backgroundColor: '#6B7280', color: 'white' };
    }
  };

  if (!curso) {
    return (
      <PageContainer>
        <Header />
        <MainContent>
          <EmptyState>
            <EmptyTitle>Curso no encontrado</EmptyTitle>
            <Link to="/cursos">
              <Button>Volver a Cursos</Button>
            </Link>
          </EmptyState>
        </MainContent>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header />
      
      <MainContent>
        {/* Header Section */}
        <HeaderSection>
          <BackButton>
            <Link to="/cursos">
              <Button variant="ghost" size="sm">
                <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
                Volver a Cursos
              </Button>
            </Link>
          </BackButton>
          
          <PageTitle>
            Informes - {curso.titulo}
          </PageTitle>
          <PageDescription>
            Explora todos los informes de práctica realizados en este curso.
          </PageDescription>
        </HeaderSection>

        {/* Search Bar */}
        <SearchSection>
          <SearchContainer>
            <SearchIcon>
              <Search size={16} />
            </SearchIcon>
            <SearchInput
              placeholder="Buscar informes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </SearchSection>

        {/* Informes Grid */}
        <InformesGrid>
          {filteredInformes.map((informe) => (
            <InformeCard key={informe.id}>
              <CardHeader>
                <CardHeaderContent>
                  <IconSection>
                    <IconWrapper $color={curso.color}>
                      <FileText size={24} color="white" />
                    </IconWrapper>
                    <TitleSection>
                      <CardTitleStyled>{informe.titulo}</CardTitleStyled>
                      <Badge style={getEstadoColor(informe.estado)}>
                        {informe.estado}
                      </Badge>
                    </TitleSection>
                  </IconSection>
                </CardHeaderContent>
              </CardHeader>
              
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <CardDescription style={{ fontSize: '1rem' }}>
                  {informe.descripcion}
                </CardDescription>
                
                <MetaInfo>
                  <MetaItem>
                    <User size={16} />
                    <span>{informe.estudiante}</span>
                  </MetaItem>
                  <MetaItem>
                    <Calendar size={16} />
                    <span>{new Date(informe.fecha).toLocaleDateString('es-ES')}</span>
                  </MetaItem>
                </MetaInfo>
                
                <ActionButtons>
                  <Badge variant="outline">{informe.tipo}</Badge>
                  <ButtonGroup>
                    <Link to={`/informe/${cursoId}/${informe.id}`}>
                      <Button size="sm" variant="outline">
                        <Eye size={16} style={{ marginRight: '0.5rem' }} />
                        Ver
                      </Button>
                    </Link>
                    <Button size="sm" variant="outline">
                      <Download size={16} style={{ marginRight: '0.5rem' }} />
                      Descargar
                    </Button>
                  </ButtonGroup>
                </ActionButtons>
              </CardContent>
            </InformeCard>
          ))}
        </InformesGrid>

        {filteredInformes.length === 0 && (
          <EmptyState>
            <EmptyIcon>
              <FileText size={48} />
            </EmptyIcon>
            <EmptyTitle>
              No se encontraron informes
            </EmptyTitle>
            <EmptyDescription>
              {searchTerm 
                ? "Intenta con otros términos de búsqueda"
                : "No hay informes disponibles para este curso"
              }
            </EmptyDescription>
          </EmptyState>
        )}
      </MainContent>
    </PageContainer>
  );
};

export default Informes;