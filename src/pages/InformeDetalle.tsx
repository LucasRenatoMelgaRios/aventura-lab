import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import {
  FileText,
  Calendar,
  User,
  ArrowLeft,
  Download,
  Clock,
  Microscope,
  TestTube,
  Activity,
} from "lucide-react";
import type { ReactNode } from "react";

import { informesData } from "@/data/informes";
import type {  CursoInfo, Informe, ImagenSeccion, Material, Procedimiento } from "@/data/informes";


// Componentes estilizados
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 3rem 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 3rem 2rem;
  }
`;

const HeaderSection = styled.div`
  margin-bottom: 2rem;
`;

const BackButtonContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const IconContainer = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  color: white;

  ${({ $color, theme }) => {
    switch ($color) {
      case "primary":
        return `background-color: ${theme.colors.primary[500]};`;
      case "secondary":
        return `background-color: ${theme.colors.secondary[500]};`;
      case "tertiary":
        return `background-color: ${theme.colors.tertiary[500]};`;
      default:
        return `background-color: ${theme.colors.primary[500]};`;
    }
  }}
`;

const TitleText = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.fontSize["4xl"]};
  }
`;

const SubtitleText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0.25rem 0 0 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 2fr;
  }
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const InfoLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
`;

const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const InfoItemLabel = styled.span`
  color: ${({ theme }) => theme.colors.text.muted};
`;

const InfoItemValue = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const TextContent = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;
  text-align: justify;
  margin: 0 0 1.5rem 0; /* Añade margen inferior */
  white-space: pre-line; /* Respeta saltos de línea */
`;

const ObjectiveTitle = styled.h4`
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 0.5rem 0;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  list-style: none;
  padding-left: 0;
`;

const OrderedList = styled.ol`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const OrderedListItem = styled.li`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  list-style: none;
  padding-left: 0;
`;

const StepNumber = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 3rem 1rem;
`;

const ErrorTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 1rem;
`;

const InformeDetalle = () => {
  const { cursoId, informeId } = useParams();

  // Datos simulados completos de informes


  const cursoInfo: Record<string, CursoInfo> = {
    bacteriologia: {
      titulo: "Bacteriología",
      color: "primary",
      icon: <Microscope className="h-6 w-6" />,
    },
    "anatomia-patologica": {
      titulo: "Técnicas de Anatomía Patológica",
      color: "secondary",
      icon: <TestTube className="h-6 w-6" />,
    },
    "perfiles-bioquimicos": {
      titulo: "Perfiles Bioquímicos",
      color: "tertiary",
      icon: <Activity className="h-6 w-6" />,
    },
  };

  const curso = cursoId ? cursoInfo[cursoId] : null;
  const informes = cursoId ? informesData[cursoId] : null;
  const informe = informes && informeId ? informes[parseInt(informeId)] : null;

  const getEstadoVariant = (estado: string) => {
    switch (estado) {
      case "Completado":
        return "tertiary";
      case "En revisión":
        return "secondary";
      case "Pendiente":
        return "outline";
      default:
        return "outline";
    }
  };

  const getTextContent = (
    content: string | ImagenSeccion | undefined
  ): string => {
    if (!content) return "";
    return typeof content === "string" ? content : content.texto;
  };

  const getImageContent = (
    content: string | ImagenSeccion | undefined
  ): { imagen?: string; alt?: string } => {
    if (!content || typeof content === "string") return {};
    return { imagen: content.imagen, alt: content.alt };
  };

  if (!curso || !informe) {
    return (
      <PageContainer>
        <Header />
        <ContentContainer>
          <ErrorContainer>
            <ErrorTitle>Informe no encontrado</ErrorTitle>
            <Link to="/cursos">
              <Button>Volver a Cursos</Button>
            </Link>
          </ErrorContainer>
        </ContentContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header />

      <ContentContainer>
        <HeaderSection>
          <BackButtonContainer>
            <Link to={`/informes/${cursoId}`}>
              <Button variant="ghost" size="sm">
                <ArrowLeft
                  className="h-4 w-4"
                  style={{ marginRight: "0.5rem" }}
                />
                Volver a Informes
              </Button>
            </Link>
          </BackButtonContainer>

          <TitleContainer>
            <IconContainer $color={curso.color}>{curso.icon}</IconContainer>
            <div>
              <TitleText>{informe.titulo}</TitleText>
              <SubtitleText>{curso.titulo}</SubtitleText>
            </div>
          </TitleContainer>
        </HeaderSection>

        <GridContainer>
          {/* Información General */}
          <SidebarContainer>
            <Card>
              <CardHeader>
                <CardTitle
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <FileText className="h-5 w-5" />
                  Información General
                </CardTitle>
              </CardHeader>
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <InfoRow>
                  <InfoLabel>Estado:</InfoLabel>
                  <Badge variant={getEstadoVariant(informe.estado)}>
                    {informe.estado}
                  </Badge>
                </InfoRow>

                <InfoRow>
                  <InfoLabel>Tipo:</InfoLabel>
                  <Badge variant="outline">{informe.tipo}</Badge>
                </InfoRow>

                <Separator />

                <InfoDetails>
                  <InfoItem>
                    <User className="h-4 w-4" style={{ color: "#6b7280" }} />
                    <InfoItemLabel>Estudiante:</InfoItemLabel>
                    <InfoItemValue>{informe.estudiante}</InfoItemValue>
                  </InfoItem>

                  <InfoItem>
                    <Calendar
                      className="h-4 w-4"
                      style={{ color: "#6b7280" }}
                    />
                    <InfoItemLabel>Fecha:</InfoItemLabel>
                    <InfoItemValue>
                      {new Date(informe.fecha).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </InfoItemValue>
                  </InfoItem>

                  <InfoItem>
                    <Clock className="h-4 w-4" style={{ color: "#6b7280" }} />
                    <InfoItemLabel>Hora:</InfoItemLabel>
                    <InfoItemValue>09:30 AM</InfoItemValue>
                  </InfoItem>
                </InfoDetails>

                <Separator />

                <Button style={{ width: "100%" }} size="sm" disabled>
                  <Download
                    className="h-4 w-4"
                    style={{ marginRight: "0.5rem" }}
                  />
                  Descargar PDF
                </Button>
              </CardContent>
            </Card>
          </SidebarContainer>

          {/* Contenido Principal */}
          <MainContainer>
            {/* Descripción */}
            <Card>
              <CardHeader>
                <CardTitle>Descripción</CardTitle>
              </CardHeader>
              <CardContent>
                <TextContent>{informe.descripcion}</TextContent>
              </CardContent>
            </Card>

            {/* Introducción */}
            {informe.introduccion && (
              <Card>
                <CardHeader>
                  <CardTitle>Introducción</CardTitle>
                </CardHeader>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <TextContent>
                    {getTextContent(informe.introduccion)}
                  </TextContent>
                  {typeof informe.introduccion === "object" &&
                    "imagen" in informe.introduccion && (
                      <div
                        style={{
                          margin: "1rem 0",
                          borderRadius: "0.5rem",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={`/images/microbiologia/${informe.introduccion.imagen}`}
                          alt={informe.introduccion.alt}
                          style={{
                            width: "100%",
                            maxHeight: "300px",
                            objectFit: "contain",
                          }}
                        />
                        <p
                          style={{
                            fontSize: "0.75rem",
                            color: "#6b7280",
                            textAlign: "center",
                            marginTop: "0.5rem",
                          }}
                        >
                          {informe.introduccion.alt}
                        </p>
                      </div>
                    )}
                </CardContent>
              </Card>
            )}

            {/* Objetivos */}
            {informe.objetivoGeneral && (
              <Card>
                <CardHeader>
                  <CardTitle>Objetivos</CardTitle>
                </CardHeader>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <ObjectiveTitle>Objetivo General:</ObjectiveTitle>
                    <TextContent>
                      {getTextContent(informe.objetivoGeneral)}
                    </TextContent>
                    {typeof informe.objetivoGeneral === "object" &&
                      "imagen" in informe.objetivoGeneral && (
                        <div
                          style={{
                            marginTop: "1rem",
                            borderRadius: "0.5rem",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={`/images/microbiologia/${informe.objetivoGeneral.imagen}`}
                            alt={informe.objetivoGeneral.alt}
                            style={{
                              width: "100%",
                              maxHeight: "250px",
                              objectFit: "contain",
                            }}
                          />
                          <p
                            style={{
                              fontSize: "0.75rem",
                              color: "#6b7280",
                              textAlign: "center",
                              marginTop: "0.5rem",
                            }}
                          >
                            {informe.objetivoGeneral.alt}
                          </p>
                        </div>
                      )}
                  </div>
                  {informe.objetivosEspecificos && (
                    <>
                      <Separator />
                      <div>
                        <ObjectiveTitle>Objetivos Específicos:</ObjectiveTitle>
                        <List>
                          {informe.objetivosEspecificos.map(
                            (objetivo, index) => (
                              <ListItem key={index}>• {objetivo}</ListItem>
                            )
                          )}
                        </List>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Fundamento Teórico */}
            {informe.fundamentoTeorico && (
              <Card>
                <CardHeader>
                  <CardTitle>Fundamento Teórico</CardTitle>
                </CardHeader>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <TextContent>
                    {getTextContent(informe.fundamentoTeorico)}
                  </TextContent>
                  {typeof informe.fundamentoTeorico === "object" &&
                    "imagen" in informe.fundamentoTeorico && (
                      <div
                        style={{
                          marginTop: "1rem",
                          borderRadius: "0.5rem",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={`/images/microbiologia/${informe.fundamentoTeorico.imagen}`}
                          alt={informe.fundamentoTeorico.alt}
                          style={{
                            width: "100%",
                            maxHeight: "300px",
                            objectFit: "contain",
                          }}
                        />
                        <p
                          style={{
                            fontSize: "0.75rem",
                            color: "#6b7280",
                            textAlign: "center",
                            marginTop: "0.5rem",
                          }}
                        >
                          {informe.fundamentoTeorico.alt}
                        </p>
                      </div>
                    )}
                </CardContent>
              </Card>
            )}

            {/* Materiales */}
            <Card>
              <CardHeader>
                <CardTitle>Materiales</CardTitle>
              </CardHeader>
              <CardContent>
                {informe.materiales &&
                informe.materiales.every((m) => typeof m === "object") ? (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(150px, 1fr))",
                      gap: "1.5rem",
                      padding: "1rem 0",
                    }}
                  >
                    {(informe.materiales as Material[]).map(
                      (material, index) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              width: "80px",
                              height: "80px",
                              borderRadius: "0.5rem",
                              overflow: "hidden",
                              marginBottom: "0.5rem",
                            }}
                          >
                            <img
                              src={`/images/microbiologia/${material.imagen}`}
                              alt={material.descripcion}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <span
                            style={{
                              fontSize: "0.875rem",
                              fontWeight: 500,
                              textAlign: "center",
                            }}
                          >
                            {material.nombre}
                          </span>
                          <span
                            style={{
                              fontSize: "0.75rem",
                              color: "#6b7280",
                              textAlign: "center",
                            }}
                          >
                            {material.descripcion}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <List>
                    {(informe.materiales as string[])?.map(
                      (material, index) => (
                        <ListItem key={index}>• {material}</ListItem>
                      )
                    )}
                  </List>
                )}
              </CardContent>
            </Card>

            {/* Procedimiento */}
            {informe.procedimiento && (
              <Card>
                <CardHeader>
                  <CardTitle>Procedimiento</CardTitle>
                </CardHeader>
                <CardContent>
                  {typeof informe.procedimiento === "object" &&
                  "texto" in informe.procedimiento &&
                  Array.isArray(informe.procedimiento.texto) ? (
                    <OrderedList
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                      }}
                    >
                      {informe.procedimiento.texto.map((paso, index) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                          }}
                        >
                          <OrderedListItem>
                            <StepNumber>{index + 1}.</StepNumber> {paso}
                          </OrderedListItem>
                          <div
                            style={{
                              marginLeft: "1.5rem",
                              borderRadius: "0.5rem",
                              overflow: "hidden",
                            }}
                          >
                            <img
                              src={`/images/microbiologia/${
                                (informe.procedimiento as Procedimiento)
                                  .imagenes[index]
                              }`}
                              alt={`Paso ${index + 1} del procedimiento`}
                              style={{
                                width: "100%",
                                maxHeight: "200px",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </OrderedList>
                  ) : (
                    <OrderedList>
                      {(informe.procedimiento as string[]).map(
                        (paso, index) => (
                          <OrderedListItem key={index}>
                            <StepNumber>{index + 1}.</StepNumber> {paso}
                          </OrderedListItem>
                        )
                      )}
                    </OrderedList>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Interpretación */}
            {informe.interpretacion && (
              <Card
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                }}
              >
                <CardHeader
                  style={{
                    background:
                      "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                    padding: "1.5rem",
                  }}
                >
                  <CardTitle
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <TestTube size={24} />
                    Interpretación de Resultados
                  </CardTitle>
                </CardHeader>

                <CardContent
                  style={{
                    padding: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "8px",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <pre
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        whiteSpace: "pre-wrap",
                        color: "#334155",
                        lineHeight: "1.6",
                        margin: 0,
                        fontSize: "0.95rem",
                      }}
                    >
                      {informe.interpretacion.texto}
                    </pre>
                  </div>

                  <div
                    style={{
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
                    }}
                  >
                    <img
                      src={`/images/microbiologia/${informe.interpretacion.imagen}`}
                      alt={informe.interpretacion.alt}
                      style={{
                        width: "100%",
                        maxHeight: "850px",
                        objectFit: "cover",
                        borderBottom: "1px solid #e2e8f0",
                      }}
                    />
                    <div
                      style={{
                        padding: "0.75rem",
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          color: "#64748b",
                          fontSize: "0.8rem",
                          fontWeight: 500,
                          margin: 0,
                          fontStyle: "italic",
                        }}
                      >
                        {informe.interpretacion.alt}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Errores Comunes */}
            {informe.erroresComunes && (
              <Card>
                <CardHeader>
                  <CardTitle>Errores Comunes</CardTitle>
                </CardHeader>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <TextContent>{informe.erroresComunes.texto}</TextContent>
                  <div
                    style={{
                      marginTop: "1rem",
                      borderRadius: "0.5rem",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={`/images/microbiologia/${informe.erroresComunes.imagen}`}
                      alt={informe.erroresComunes.alt}
                      style={{
                        width: "100%",
                        maxHeight: "300px",
                        objectFit: "contain",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#6b7280",
                        textAlign: "center",
                        marginTop: "0.5rem",
                      }}
                    >
                      {informe.erroresComunes.alt}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </MainContainer>
        </GridContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default InformeDetalle;
