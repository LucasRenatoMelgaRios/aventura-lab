import type { ReactNode } from "react";

// Interfaces para TypeScript
export interface ImagenSeccion {
  texto: string;
  imagen: string;
  alt: string;
}

export interface Material {
  nombre: string;
  imagen?: string;
  descripcion?: string;
}

export interface Procedimiento {
  texto: string[];
  imagenes: string[];
}

export interface Informe {
  titulo: string;
  descripcion: string;
  fecha: string;
  estudiante: string;
  estado: string;
  tipo: string;
  introduccion?: ImagenSeccion | string;
  objetivoGeneral?: ImagenSeccion | string;
  objetivosEspecificos?: string[];
  fundamentoTeorico?: ImagenSeccion | string;
  materiales?: Material[] | string[];
  procedimiento?: Procedimiento | string[];
  interpretacion?: ImagenSeccion;
  erroresComunes?: ImagenSeccion;
}

export interface CursoInfo {
  titulo: string;
  color: string;
  icon: ReactNode;
}

export const informesData: Record<string, Record<number, Informe>> = {
  bacteriologia: {
    1: {
      titulo: "Tinción de Gram - Identificación Bacteriana",
      descripcion:
        "Técnica de tinción diferencial para clasificación bacteriana basada en características de la pared celular",
      fecha: "2024-01-15",
      estudiante: "María González",
      estado: "Completado",
      tipo: "Tinción Microbiológica",
      introduccion: {
        texto:
          "La tinción de Gram es una técnica de laboratorio fundamental en microbiología para la identificación y clasificación de bacterias en función de sus características estructurales y tintoriales. Desarrollada por el bacteriólogo danés Hans Christian Gram en 1884, esta prueba permite diferenciar las bacterias en dos grandes grupos: Gram positivas y Gram negativas, basándose en la composición de su pared celular. La tinción de Gram no solo es esencial para el diagnóstico de infecciones bacterianas, sino que también es una herramienta crucial en la orientación del tratamiento antibiótico adecuado. Esta prueba se realiza comúnmente en muestras clínicas como esputo, orina, sangre y líquidos corporales, proporcionando información rápida y valiosa sobre la presencia y tipo de bacterias.",
        imagen: "/tincion-gram/gram-intro.jpg",
        alt: "Comparación visual de bacterias grampositivas y gramnegativas",
      },
      objetivoGeneral: {
        texto:
          "Dominar la técnica de tinción de Gram para identificación preliminar de bacterias en muestras clínicas, con énfasis en el control de calidad.",
        imagen: "/tincion-gram/gram-objetivo.webp",
        alt: "Microscopio y materiales de tinción",
      },
      objetivosEspecificos: [
        "Realizar el protocolo con precisión técnica",
        "Identificar correctamente bacterias al microscopio",
        "Reconocer morfologías bacterianas (cocos, bacilos)",
        "Diferenciar artefactos de microorganismos verdaderos",
      ],
      fundamentoTeorico: {
        texto: `La tinción de Gram se basa en las diferencias estructurales y químicas de las paredes celulares bacterianas. Las bacterias Gram-positivas poseen una pared gruesa (20-80 nm) compuesta principalmente por peptidoglicano (90%), que forma una malla densa y entrecruzada con ácidos teicoicos. Esta estructura retiene el complejo cristal violeta-yodo durante la decoloración, manteniendo el color púrpura. Por el contrario, las bacterias Gram-negativas tienen una pared más delgada (10-15 nm) con una capa mínima de peptidoglicano (10%) y una membrana externa lipídica que contiene lipopolisacáridos; esta estructura permite que el complejo de tinción se lave durante la decoloración con alcohol-acetona, haciendo que las células tomen el color rosado de la safranina.

El proceso de tinción implica cuatro pasos críticos: primero, el cristal violeta (colorante primario) penetra todas las células bacterianas; segundo, el yodo actúa como mordiente, formando un complejo insoluble con el cristal violeta dentro de las células; tercero, el alcohol-acetona decolora las células según la composición de su pared celular; y finalmente, la safranina (colorante de contraste) tiñe las células decoloradas. La diferencia clave radica en que el complejo cristal violeta-yodo queda atrapado en la gruesa capa de peptidoglicano de las Gram-positivas, mientras que se elimina fácilmente de las Gram-negativas debido a su membrana externa lipídica y menor contenido de peptidoglicano.

Esta técnica no solo diferencia bacterias por su reacción a la tinción, sino que también revela su morfología (cocos, bacilos, espirilos) y disposición (en racimos, cadenas, etc.). Factores como la edad del cultivo, la concentración de reactivos y los tiempos exactos de cada paso son cruciales para resultados precisos. Algunas bacterias como Mycobacterium son ácido-alcohol resistentes, mientras que otras como Acinetobacter pueden mostrar variabilidad en la tinción (Gram-variables), lo que requiere interpretación experta de los resultados.`,
        imagen: "/tincion-gram/gram-fundamento.jpg",
        alt: "Diagrama comparativo de paredes celulares bacterianas",
      },
      materiales: [
        {
          nombre: "Portaobjetos",
          imagen: "/tincion-gram/materiales/portaobjetos.jpg",
          descripcion: "Vidrio rectangular para preparar muestras",
        },
        {
          nombre: "Asa bacteriológica",
          imagen: "/tincion-gram/materiales/asa-bacteriologica.webp",
          descripcion: "Instrumento para tomar muestras",
        },
        {
          nombre: "Cristal violeta",
          imagen: "/tincion-gram/materiales/cristal-violeta.webp",
          descripcion: "Tinción primaria color púrpura",
        },
        {
          nombre: "Solución de yodo",
          imagen: "/tincion-gram/materiales/yodo-gram.jpg",
          descripcion: "Mordiente que fija el colorante",
        },
        {
          nombre: "Alcohol-acetona",
          imagen: "/tincion-gram/materiales/decolorador.jpg",
          descripcion: "Mezcla decolorante 1:1",
        },
        {
          nombre: "Safranina",
          imagen: "/tincion-gram/materiales/safranina.jpg",
          descripcion: "Contraste color rojo",
        },
        {
          nombre: "Microscopio óptico",
          imagen: "/tincion-gram/materiales/microscopio.jpg",
          descripcion: "Con objetivo de inmersión 100x",
        },
      ],
      procedimiento: {
        texto: [
          "Preparación del frotis: Emulsionar muestra en portaobjetos y fijar con calor",
          "Aplicar cristal violeta (60 segundos) y lavar",
          "Aplicar yodo (60 segundos) y lavar",
          "Decolorar con alcohol-acetona (5-15 segundos)",
          "Contrastar con safranina (30 segundos)",
          "Lavar, secar y observar al microscopio",
        ],
        imagenes: [
          "/tincion-gram/procedimiento/frotis-preparacion.webp",
          "/tincion-gram/procedimiento/aplicacion-cristal.webp",
          "/tincion-gram/procedimiento/aplicacion-yodo.webp",
          "/tincion-gram/procedimiento/decoloracion.webp",
          "/tincion-gram/procedimiento/contraste-safranina.webp",
          "/tincion-gram/procedimiento/observacion-microscopio.webp",
        ],
      },
      interpretacion: {
        texto: `INTERPRETACIÓN DE RESULTADOS - TINCIÓN DE GRAM

MORFOLOGÍAS BACTERIANAS:

Cocos:
• Streptococos (en cadenas)
• Estafilococos (en racimos)
• Tétradas (grupos de 4)
• Sarcinas (paquetes cúbicos)

Bacilos:
• Formas individuales
• Diplobacilos (pares)
• Streptobacilos (en cadenas)
• Empalizadas
• Formas filamentosas


CONTROLES DE CALIDAD:

Cepas referencia:
- Staphylococcus aureus (ATCC 25923): 
  Gram-positivo - Cocos en racimos
- Escherichia coli (ATCC 25922): 
  Gram-negativo - Bacilos individuales

Criterios de aceptación:
• Fondo de la preparación: limpio y claro
• Ausencia de artefactos o precipitados
• Controles deben teñirse adecuadamente


ERRORES COMUNES Y SOLUCIONES:

1. Todas bacterias aparecen Gram-positivas
   Causa: Decoloración insuficiente
   Solución: Aumentar tiempo de alcohol-acetona

2. Todas bacterias aparecen Gram-negativas
   Causa: Sobredescoloración
   Solución: Reducir tiempo de decoloración

3. Tinción irregular
   Causa: Frotis demasiado grueso
   Solución: Hacer extensiones más delgadas

4. Fondo manchado
   Causa: Lavado insuficiente
   Solución: Aumentar tiempo de lavado entre pasos`,
        imagen: "/tincion-gram/gram-resultados.jpg",
        alt: "Ejemplo de resultados correctos de tinción",
      },
      erroresComunes: {
        texto: `Problemas frecuentes:
          1. Sobredescoloración: Gram-positivas aparecen como negativas
          2. Subdescoloración: Gram-negativas aparecen como positivas
          3. Frotis muy gruesos: Dificultan la observación
          4. Contaminación cruzada`,
        imagen: "/tincion-gram/gram-errores.avif",
        alt: "Comparación de tinciones correctas e incorrectas",
      },
    },
    2: {
      titulo:
        "Tinción de Ziehl-Neelsen - Bacilos Ácido-Alcohol Resistentes (BAAR)",
      descripcion:
        "Técnica de tinción para identificación de micobacterias y otros microorganismos ácido-alcohol resistentes",
      fecha: "2024-01-22",
      estudiante: "Carlos Rodríguez",
      estado: "Completado",
      tipo: "Tinción Especial",
      introduccion: {
        texto:
          "La tinción de Ziehl-Neelsen es un método microbiológico fundamental para la detección de bacterias ácido-alcohol resistentes, principalmente Mycobacterium tuberculosis, agente causal de la tuberculosis. Desarrollada por Franz Ziehl y Friedrich Neelsen en la década de 1880, esta técnica es crucial para el diagnóstico de tuberculosis pulmonar y otras micobacteriosis. La tinción se realiza comúnmente en muestras de esputo, líquidos corporales y tejidos, siendo particularmente valiosa en países con alta prevalencia de tuberculosis. Su importancia clínica radica en la capacidad de proporcionar resultados rápidos (24-48 horas) que guían el tratamiento inmediato, a diferencia de los cultivos que pueden tardar semanas.",
        imagen: "/tincion-ziehl-neelsen/ziehl-intro.jpg",
        alt: "Microfotografía de bacilos ácido-alcohol resistentes teñidos",
      },
      objetivoGeneral: {
        texto:
          "Dominar la técnica de Ziehl-Neelsen para la identificación confiable de bacilos ácido-alcohol resistentes en muestras clínicas, con énfasis en el control de calidad y bioseguridad.",
        imagen: "/tincion-ziehl-neelsen/ziehl-objetivo.jpg",
        alt: "Materiales para tinción Ziehl-Neelsen",
      },
      objetivosEspecificos: [
        "Realizar correctamente el protocolo de tinción con calor",
        "Identificar BAAR al microscopio con objetivo 100x",
        "Diferenciar BAAR de otros microorganismos",
        "Aplicar medidas de bioseguridad nivel III",
        "Interpretar resultados según criterios de la OMS",
      ],
      fundamentoTeorico: {
        texto: `La tinción de Ziehl-Neelsen aprovecha la propiedad única de las micobacterias de resistir la decoloración ácido-alcohol, debido a la composición de su pared celular:

PARED CELULAR DE MICOBACTERIAS:
• Alto contenido de ácidos micólicos (60-90%)
• Lípidos complejos (40% del peso seco)
• Peptidoglicano arabinogalactano
• Cubierta cerosa impermeable

MECANISMO DE TINCIÓN:
1. La fucsina básica penetra la pared celular con ayuda del calor
2. El complejo colorante-pared resiste la decoloración ácido-alcohol
3. El azul de metileno proporciona contraste al fondo

DIFERENCIAS CLAVE CON GRAM:
• Requiere calor para la tinción primaria
• Usa decoloración ácida en lugar de alcohólica
• Las micobacterias no se tiñen adecuadamente con Gram
• Mayor tiempo de procesamiento (30-40 minutos)

VARIACIONES DEL MÉTODO:
• Ziehl-Neelsen clásico (fucsina caliente)
• Kinyoun (modificación en frío)
• Auramina-rodamina (tinción fluorescente)`,
        imagen: "/tincion-ziehl-neelsen/ziehl-fundamento.jpeg",
        alt: "Estructura de la pared celular micobacteriana",
      },
      materiales: [
        {
          nombre: "Portaobjetos",
          imagen: "/tincion-ziehl-neelsen/materiales/portaobjetos.jpg",
          descripcion: "Previamente desengrasados con alcohol-éter",
        },
        {
          nombre: "Fucsina básica",
          imagen: "/tincion-ziehl-neelsen/materiales/fucsina-ziehl.png",
          descripcion: "Solución al 0.3% en etanol al 5% fenicado",
        },
        {
          nombre: "Solución ácido-alcohol",
          imagen: "/tincion-ziehl-neelsen/materiales/acido-alcohol.webp",
          descripcion: "HCl 3% en etanol al 95%",
        },
        {
          nombre: "Azul de metileno",
          imagen: "/tincion-ziehl-neelsen/materiales/azul-metileno.jpg",
          descripcion: "Solución al 0.1% para contraste",
        },
        {
          nombre: "Microscopio con luz halógena",
          imagen: "/tincion-ziehl-neelsen/materiales/microscopio-ziehl.jpg",
          descripcion: "Con objetivo 100x y ajuste de condensador",
        },
        {
          nombre: "Pinzas para tinción",
          imagen: "/tincion-ziehl-neelsen/materiales/pinzas-ziehl.jpg",
          descripcion: "Resistentes a calor y ácidos",
        },
        {
          nombre: "Cabina de bioseguridad",
          imagen: "/tincion-ziehl-neelsen/materiales/cabina-bsl3.jpeg",
          descripcion: "Nivel III para patógenos respiratorios",
        },
      ],
      procedimiento: {
        texto: [
          "Homogeneizar esputo con solución digestiva (NALC-NaOH)",
          "Centrifugar a 3000 rpm por 15 minutos, luego preparar frotis con sedimento en área de 2x1 cm y Fijar con calor suave (65 °C por 2 h)",

          "Cubrir con fucsina fenicada y calentar hasta vapores (5 min)",
          "Mantener caliente añadiendo más colorante (evitar hervir), y luego lavar con agua destilada",

          "Decolorar con ácido-alcohol hasta líquido claro (15-30 segundos)",
          "Lavar nuevamente con agua, luego aplicar azul de metileno (3-5 min)",
          "Lavar y secar al aire",

          "Lectura microscópica: Examinar al menos 100 campos con objetivo 100x",
          "Registrar número de BAAR por campo según escala de la OMS",
        ],
        imagenes: [
          "/tincion-ziehl-neelsen/procedimiento/ziehl-preparacion.webp",
          "/tincion-ziehl-neelsen/procedimiento/ziehl-fucsina-caliente.webp",
          "/tincion-ziehl-neelsen/procedimiento/ziehl-decoloracion-acida.webp",
          "/tincion-ziehl-neelsen/procedimiento/ziehl-lavar.webp",
          "/tincion-ziehl-neelsen/procedimiento/decolorar.PNG",
          "/tincion-ziehl-neelsen/procedimiento/azul-metileno.PNG",
          "/tincion-ziehl-neelsen/procedimiento/secar.PNG",
          "/tincion-ziehl-neelsen/procedimiento/examinar.PNG",
          "/tincion-ziehl-neelsen/procedimiento/contar.PNG",
        ],
      },
      interpretacion: {
        texto: `INTERPRETACIÓN DE RESULTADOS - ZIEHL-NEELSEN

CRITERIOS DIAGNÓSTICOS (OMS):

Cuantificación de BAAR:
• 1-9 BAAR/100 campos: Reportar número exacto
• 10-99 BAAR/100 campos: Positivo (+)
• 1-10 BAAR/campo: Positivo (++)
• >10 BAAR/campo: Positivo (+++)

MORFOLOGÍA TÍPICA:
• Bacilos delgados, rectos o ligeramente curvados
• Color rojo brillante contra fondo azul
• Disposición individual o en pequeños grupos
• Pueden presentar granulaciones (cuentas de rosario)

CONTROLES DE CALIDAD:
• Mycobacterium tuberculosis H37Rv (control positivo)
• Mycobacterium smegmatis (control débilmente positivo)
• Muestra negativa de esputo (control negativo)

ERRORES FRECUENTES:
1. Falsos positivos:
   - Artefactos que retienen fucsina
   - Contaminación cruzada
   
2. Falsos negativos:
   - Decoloración excesiva
   - Muestra insuficiente
   - Fijación inadecuada

CONSIDERACIONES CLÍNICAS:
• Resultado positivo requiere confirmación por cultivo/PCR
• La sensibilidad es de 60-70% en muestras pulmonares
• Esputos seriados aumentan sensibilidad (3 muestras)`,
        imagen: "/tincion-ziehl-neelsen/ziehl-resultados.png",
        alt: "Ejemplos de BAAR teñidos con Ziehl-Neelsen",
      },
      erroresComunes: {
        texto: `PROBLEMAS TÉCNICOS Y SOLUCIONES:

1. Tinción débil o ausente:
   • Causa: Fucsina agotada o calor insuficiente
   • Solución: Preparar colorante fresco y verificar temperatura

2. Fondo muy coloreado:
   • Causa: Decoloración insuficiente
   • Solución: Aumentar tiempo de ácido-alcohol

3. Precipitados de colorante:
   • Causa: Filtrado inadecuado de reactivos
   • Solución: Filtrar fucsina antes de usar

4. Lisis bacteriana:
   • Causa: Digestión excesiva de la muestra
   • Solución: Ajustar tiempo de digestión (15-20 min)

MEDIDAS DE BIOSEGURIDAD:
• Realizar en cabina BSL-3 certificada
• Usar protección respiratoria (N95)
• Descontaminar superficies con fenol al 5%
• Autoclavar residuos a 121°C por 30 min`,
        imagen: "/tincion-ziehl-neelsen/error.jpg",
        alt: "Ejemplos de tinciones incorrectas en Ziehl-Neelsen",
      },
    },
    3: {
      titulo:
        "Coprocultivo y Antibiograma - Diagnóstico de Patógenos Entéricos",
      descripcion:
        "Aislamiento e identificación de microorganismos patógenos en muestras fecales con prueba de sensibilidad antimicrobiana",
      fecha: "2024-01-28",
      estudiante: "Ana Martínez",
      estado: "Completado",
      tipo: "Cultivo y Sensibilidad",
      introduccion: {
        texto:
          "El coprocultivo es un procedimiento microbiológico esencial para el diagnóstico de infecciones gastrointestinales causadas por bacterias patógenas. Esta técnica permite detectar microorganismos como Salmonella, Shigella, Campylobacter y Escherichia coli enterohemorrágica, responsables de cuadros de diarrea infecciosa, colitis y síndromes disentéricos. Combinado con el antibiograma, proporciona información crucial para el manejo terapéutico adecuado, especialmente en casos de diarrea persistente, fiebre tifoidea o brotes epidemiológicos. El procesamiento de muestras fecales requiere medios de cultivo selectivos y condiciones especiales de incubación para optimizar el aislamiento de patógenos entéricos.",
        imagen: "/coprocultivo-antibiograma/coprocultivo-intro.webp",
        alt: "Medios de cultivo para aislamiento de patógenos entéricos",
      },
      objetivoGeneral: {
        texto:
          "Aislar, identificar y determinar el perfil de sensibilidad antimicrobiana de microorganismos patógenos en muestras fecales mediante técnicas microbiológicas estandarizadas.",
        imagen: "/coprocultivo-antibiograma/coprocultivo-objetivo.jpg",
        alt: "Proceso de siembra de muestra fecal en medios de cultivo",
      },
      objetivosEspecificos: [
        "Realizar procesamiento adecuado de muestras fecales",
        "Aislar patógenos entéricos en medios selectivos diferenciales",
        "Identificar microorganismos mediante pruebas bioquímicas",
        "Ejecutar antibiograma por método de difusión en disco",
        "Interpretar resultados según estándares CLSI",
      ],
      fundamentoTeorico: {
        texto: `El coprocultivo se fundamenta en la capacidad de los medios de cultivo selectivos para favorecer el crecimiento de patógenos entéricos mientras inhiben la microbiota fecal normal. Medios como el agar MacConkey (selectivo para enterobacterias), XLD (para Salmonella y Shigella) y Campy-BAP (para Campylobacter) contienen sustancias inhibitorias (sales biliares, colorantes, antibióticos) y sustratos diferenciales que permiten distinguir colonias sospechosas por sus características macroscópicas. La incubación en condiciones específicas (aerobiosis, microaerofilia o anaerobiosis) y a diferentes temperaturas (37°C o 42°C) optimiza el aislamiento de los diversos patógenos entéricos.

El antibiograma se basa en el principio de difusión en agar, donde los discos impregnados con antimicrobianos liberan el fármaco que se difunde radialmente creando un gradiente de concentración. La sensibilidad se determina midiendo los halos de inhibición alrededor de cada disco, los cuales son comparados con los puntos de corte establecidos por el CLSI (Clinical and Laboratory Standards Institute). Este método, conocido como Kirby-Bauer, evalúa la respuesta bacteriana a múltiples antibióticos simultáneamente, considerando factores como el tamaño del inóculo, profundidad del agar y condiciones de incubación que afectan los resultados.

La interpretación integrada de coprocultivo y antibiograma requiere conocimiento de los patrones de resistencia locales, especialmente ante la emergencia de cepas multirresistentes como Salmonella resistente a fluoroquinolonas o E. coli productora de betalactamasas de espectro extendido (BLEE). La selección de antibióticos para el panel de prueba debe considerar los esquemas terapéuticos locales, mecanismos de resistencia conocidos y la relevancia clínica de cada fármaco para infecciones gastrointestinales.`,
        imagen: "/coprocultivo-antibiograma/coprocultivo-fundamento.avif",
        alt: "Fundamento científico de coprocultivo y antibiograma",
      },
      materiales: [
        {
          nombre: "Medios de cultivo",
          imagen:
            "/coprocultivo-antibiograma/materiales/medios-coprocultivo.jpg",
          descripcion: "Agar MacConkey, XLD, Campy-BAP, Hektoen, SS agar",
        },
        {
          nombre: "Discos antibióticos",
          imagen:
            "/coprocultivo-antibiograma/materiales/discos-antibiograma.webp",
          descripcion: "Panel para enterobacterias (AMP, CIP, SXT, CRO, etc)",
        },
        {
          nombre: "Sistema de siembra",
          imagen:
            "/coprocultivo-antibiograma/materiales/sembradora-coprocultivo.png",
          descripcion: "Asas estériles, espátulas y torundas",
        },
        {
          nombre: "Reactivos bioquímicos",
          imagen:
            "/coprocultivo-antibiograma/materiales/reactivos-bioquimicos.jpg",
          descripcion: "TSI, LIA, SIM, Citrato, Urea, Oxidasa",
        },
        {
          nombre: "Incubadoras",
          imagen:
            "/coprocultivo-antibiograma/materiales/incubadora-microaerofilica.jpeg",
          descripcion: "Para 37°C (aerobiosis) y 42°C (microaerofilia)",
        },
        {
          nombre: "Calibrador digital",
          imagen: "/coprocultivo-antibiograma/materiales/calibrador-halos.jpg",
          descripcion: "Para medir diámetros de inhibición",
        },
        {
          nombre: "Sistema de identificación",
          imagen:
            "/coprocultivo-antibiograma/materiales/identificador-automatizado.jpeg",
          descripcion: "API 20E o sistemas automatizados",
        },
      ],
      procedimiento: {
        texto: [
          " Homogeneizar 1g de heces en caldo de enriquecimiento (Selenita o GN)",
          " Inocular en agar MacConkey, XLD, Campy-BAP y agar sangre",
          " Incubar 18-24 h (48 h para Campylobacter en microaerofilia)",
          " Observar colonias sospechosas, realizar tinción de Gram y pruebas TSI, LIA, SIM",
          " Confirmar especie con sistemas de identificación como API o MALDI-TOF",
          " Realizar antibiograma: sembrar en Mueller-Hinton, colocar discos, incubar e interpretar halos según CLSI",
        ],
        imagenes: [
          "/coprocultivo-antibiograma/procedimiento/1-preparacion-muestra.jpeg",
          "/coprocultivo-antibiograma/procedimiento/2-siembra-selectivos.jpg",
          "/coprocultivo-antibiograma/procedimiento/3-incubacion.jpg",
          "/coprocultivo-antibiograma/procedimiento/4-identificacion-preliminar.webp",
          "/coprocultivo-antibiograma/procedimiento/5-identificacion-definitiva.jpg",
          "/coprocultivo-antibiograma/procedimiento/6-antibiograma.jpg",
        ],
      },

      interpretacion: {
        texto: `INTERPRETACIÓN DE RESULTADOS - COPROCULTIVO Y ANTIBIOGRAMA

CRITERIOS DIAGNÓSTICOS:

Significancia clínica:
• Patógenos primarios: Siempre reportar (Salmonella, Shigella, Campylobacter)
• Patógenos oportunistas: Reportar según contexto (E. coli enteroinvasiva)
• Flora normal: No reportar (excepto en inmunodeprimidos)

Criterios de positividad:
• Aislamiento en medio selectivo + identificación confirmatoria
• Recuento >10^5 UFC/g en muestras diarreicas
• Correlación con cuadro clínico

PERFILES DE RESISTENCIA COMUNES:

Enterobacterias:
• Resistencia a ampicilina (AMP-R) frecuente
• Cepas BLEE (resistentes a cefalosporinas 3a gen)
• Fluoroquinolonas (CIP-R) en Salmonella

Campylobacter:
• Resistencia a ciprofloxacino (CIP-R) creciente
• Sensibilidad mantenida a azitromicina

CONTROLES DE CALIDAD:
• E. coli ATCC 25922 (control sensible)
• Pseudomonas aeruginosa ATCC 27853
• Staphylococcus aureus ATCC 25923
• Medios con controles de crecimiento/inhibición`,
        imagen: "/coprocultivo-antibiograma/coprocultivo-resultados.gif",
        alt: "Ejemplo de resultados de coprocultivo y antibiograma",
      },
      erroresComunes: {
        texto: `PROBLEMAS TÉCNICOS Y SOLUCIONES:

1. Sobrecrecimiento de flora normal:
   • Causa: Muestra no procesada rápidamente
   • Solución: Usar medios más selectivos/enriquecimiento

2. Falsos negativos en antibiograma:
   • Causa: Inóculo incorrecto (≠0.5 McFarland)
   • Solución: Estandarizar suspensión bacteriana

3. Halos de inhibición irregulares:
   • Causa: Agar no nivelado o disco mal adherido
   • Solución: Verificar espesor del agar (4mm)

4. Identificación errónea:
   • Causa: Pruebas bioquímicas insuficientes
   • Solución: Usar sistemas automatizados confirmatorios

RECOMENDACIONES:
• Procesar muestras dentro de las 2h post-recolección
• Mantener cadena de frío para Campylobacter
• Revisar actualizaciones CLSI anuales
• Correlacionar siempre con cuadro clínico`,
        imagen: "/coprocultivo-antibiograma/coprocultivo-errores.jpeg",
        alt: "Ejemplos de problemas técnicos en coprocultivo",
      },
    },
  },
  "anatomia-patologica": {
    1: {
      titulo: "Examen Microscópico de Células - Orina y Esputo",
      descripcion:
        "Análisis citológico de muestras de orina y esputo para detección de anomalías celulares",
      fecha: "2024-03-15",
      estudiante: "Ana Lucía Fernández",
      estado: "Completado",
      tipo: "Citología",
      introduccion: {
        texto:
          "El examen microscópico de células en muestras de orina y esputo constituye una herramienta diagnóstica fundamental en el laboratorio de citopatología. Estas muestras, obtenidas de forma no invasiva, permiten evaluar cambios morfológicos en células exfoliadas del tracto urinario y respiratorio. La citología urinaria es especialmente valiosa en el seguimiento de pacientes con antecedentes de carcinoma urotelial, mientras que la citología de esputo mantiene su relevancia en el screening de neoplasias pulmonares.\n\nLa recolección adecuada de las muestras es crítica para la calidad del diagnóstico. En orina se prefieren muestras de primera micción matutina o recolecciones seriadas, mientras que el esputo debe obtenerse por expectoración profunda tras lavado bronquial. Ambas muestras requieren procesamiento rápido para evitar lisis celular y preservar la morfología, siendo la fijación en alcohol de 50-70% el método más utilizado para preparaciones en líquido.\n\nEl análisis combinado de estas muestras aumenta la sensibilidad diagnóstica, particularmente en casos de neoplasias metastásicas o enfermedades sistémicas que afectan múltiples sistemas. La correlación clínico-citológica es esencial para una interpretación precisa, considerando factores como infecciones, tratamientos previos y condiciones no neoplásicas que pueden simular malignidad.",
        imagen: "/examen-celulas/citologia-intro.avif",
        alt: "Preparación de muestras de orina y esputo para análisis citológico",
      },
      objetivoGeneral: {
        texto:
          "Realizar el análisis citomorfológico comparativo de células en muestras de orina y esputo para identificar alteraciones sugestivas de patología.",
        imagen: "/examen-celulas/objetivo-citologia.jpg",
        alt: "Microscopio y preparaciones celulares para análisis comparativo",
      },
      objetivosEspecificos: [
        "Preparar adecuadamente extensiones celulares de ambas muestras",
        "Aplicar técnicas de tinción de Papanicolaou y Wright-Giemsa",
        "Identificar características citológicas normales y patológicas",
        "Diferenciar artefactos de cambios patológicos genuinos",
        "Clasificar hallazgos según el sistema Bethesda (orina) y sistema de París (esputo)",
      ],
      fundamentoTeorico: {
        texto:
          "La citología de orina evalúa principalmente células uroteliales, escamosas y de transición, cuyo aspecto varía según el método de recolección (espontánea, lavado o cepillado). Las células uroteliales normales presentan relación núcleo-citoplasma baja (<0.5), cromatina fina y bordes celulares definidos. En contraste, las células malignas muestran aumento de tamaño nuclear, hipercromasia, membrana nuclear irregular y pérdida de polaridad. El esputo contiene principalmente macrófagos alveolares (células espumosas con pigmento antracótico), células ciliadas bronquiales y ocasionalmente células escamosas orofaríngeas.\n\nLos criterios diagnósticos se basan en la atipia celular cuantificada mediante sistemas estandarizados. En orina, el sistema Bethesda diferencia entre atipia de significado incierto (AUC), neoplasia urotelial de bajo potencial maligno (LGUN) y carcinoma de alto grado (HGUC). Para esputo, el sistema de París clasifica las muestras como negativas, atípicas, sospechosas o positivas para malignidad, considerando la presencia de cuerpos de cromatina intranucleares y agrupaciones tridimensionales como marcadores de adenocarcinoma.",
        imagen: "/examen-celulas/fundamento-citologia.jpeg",
        alt: "Comparación de células normales y patológicas en orina y esputo",
      },
      materiales: [
        {
          nombre: "Portaobjetos con cubreobjetos",
          imagen: "/examen-celulas/materiales/portaobjetos.webp",
          descripcion: "Vidrio óptico de 1 mm de grosor para preparaciones",
        },
        {
          nombre: "Citocentrífuga",
          imagen: "/examen-celulas/materiales/citocentrifuga.jpeg",
          descripcion: "Equipo para concentrar células en monocapa",
        },
        {
          nombre: "Kit de tinción Papanicolaou",
          imagen: "/examen-celulas/materiales/tincion-pap.jpg",
          descripcion: "Incluye hematoxilina, OG-6 y EA-50",
        },
        {
          nombre: "Filtros de membrana",
          imagen: "/examen-celulas/materiales/filtros-membrana.avif",
          descripcion: "Para procesamiento de muestras líquidas (0.45 μm)",
        },
        {
          nombre: "Reactivo mucolítico (DTT)",
          imagen: "/examen-celulas/materiales/dtt-reactivo.jpg",
          descripcion: "Dithiothreitol 0.1% para digestión de moco",
        },
        {
          nombre: "Microscopio con cámara digital",
          imagen: "/examen-celulas/materiales/microscopio-digital.jpg",
          descripcion: "Con objetivos de 10x, 40x y 100x (inmersión)",
        },
      ],
      procedimiento: {
        texto: [
          "Homogeneizar la muestra de esputo con solución salina y DTT al 0.1%",
          "Centrifugar orina a 1500 rpm por 10 minutos",
          "Preparar extensiones en capa fina usando citocentrífuga",
          "Fijar inmediatamente con alcohol-éter (1:1) por 15 minutos",
          "Teñir con Papanicolaou (núcleos) y contracolorar con Wright-Giemsa (citoplasma)",
          "Montar con resina sintética y cubreobjetos",
          "Examinar sistemáticamente a 10x y 40x",
          "Identificar mínimo 50 células epiteliales por muestra para evaluación estadística",
          "Documentar hallazgos con fotomicrografías a 100x (inmersión)",
          "Emitir informe citopatológico estandarizado",
        ],
        imagenes: [
          "/examen-celulas/procedimiento/homogeneizacion-esputo.jpg",
          "/examen-celulas/procedimiento/centrifugacion-orina.jpg",
          "/examen-celulas/procedimiento/preparacion-extensiones.png",
          "/examen-celulas/procedimiento/fijacion-alcohol-eter.gif",
          "/examen-celulas/procedimiento/tincion-papanicolaou.png",
          "/examen-celulas/procedimiento/montaje-muestras.jpg",
          "/examen-celulas/procedimiento/analisis-microscopico.png",
          "/examen-celulas/procedimiento/recuento-celulas.avif",
          "/examen-celulas/procedimiento/fotomicrografia.jpeg",
          "/examen-celulas/procedimiento/informe-citologico.png",
        ],
      },
      interpretacion: {
        texto: `INTERPRETACIÓN CITOLÓGICA - ORINA Y ESPUTO

CRITERIOS DIAGNÓSTICOS (ORINA):
• Normal: Células uroteliales uniformes (20-30 μm), relación N:C <0.5
• AUC: Aumento nuclear leve (2-3x), cromatina ligeramente gruesa
• LGUN: Proliferación papilar, núcleos agrandados (4-5x), membrana intacta
• HGUC: Pleomorfismo marcado, cromatina gruesa, relación N:C >0.8

CRITERIOS DIAGNÓSTICOS (ESPUTO):
• Negativo: Macrófagos alveolares predominantes, células ciliadas intactas
• Atípico: Pérdida de cilios, aumento nuclear sin otros criterios de malignidad
• Sospechoso: Agrupaciones tridimensionales, nucléolos prominentes
• Positivo: Células con mitosis atípicas, relación N:C invertida

HALLAZGOS RELEVANTES:
• Células en "anillo de sello" (adenocarcinoma gástrico metastásico)
• Inclusiones virales (CMV, HSV) en pacientes inmunocomprometidos
• Cristales de Charcot-Leyden (enfermedades alérgicas/asmáticas)
• Células decoy (Carcinoma de células escamosas)`,
        imagen: "/examen-celulas/interpretacion-citologia.gif",
        alt: "Tabla comparativa de criterios diagnósticos para diversas muestras",
      },
      erroresComunes: {
        texto: `ERRORES FRECUENTES Y CONTROL DE CALIDAD

PROBLEMAS PREANALÍTICOS:
1. Muestra de orina:
   • Error: Retraso >1h en procesamiento
   • Solución: Usar medio de transporte con fijador

2. Muestra de esputo:
   • Error: Saliva en lugar de esputo verdadero
   • Solución: Verificar presencia de macrófagos alveolares

ARTEFACTOS TÉCNICOS:
• Sobretinción nuclear: Reducir tiempo en hematoxilina
• Pérdida celular: Optimizar velocidad de centrifugación
• Secado al aire: Fijar inmediatamente post-extensión

CONTROLES RECOMENDADOS:
• Incluir muestra control positiva (paciente conocido)
• Participar en programas de intercomparación
• Revisión por segundo citólogo en casos dudosos
• Documentar según guías ASC (American Society of Cytopathology)`,
        imagen: "/examen-celulas/errores-citologia.jpeg",
        alt: "Ejemplos de artefactos técnicos en citología",
      },
    },
    2: {
      titulo: "Prueba de Papanicolaou - Citología Cervicovaginal",
      descripcion:
        "Estudio citológico para detección temprana de lesiones precancerosas y cáncer cervicouterino",
      fecha: "2024-04-10",
      estudiante: "Valeria Mendoza",
      estado: "Completado",
      tipo: "Citología",
      introduccion: {
        texto:
          "La prueba de Papanicolaou es un método de screening esencial en ginecología preventiva, desarrollado por el Dr. George Papanicolaou en 1943. Esta técnica permite la identificación temprana de alteraciones celulares en el epitelio cervical, proporcionando una herramienta clave para la prevención del cáncer cervicouterino. Su implementación rutinaria ha reducido la mortalidad por este cáncer en más del 70% en las últimas décadas.\n\nLa muestra se obtiene mediante cepillado exocervical (espátula de Ayre) y endocervical (cepillo cytobrush), recolectando células de la zona de transformación. El procesamiento adecuado incluye fijación inmediata con alcohol etílico al 96% para preservar la morfología celular. Las muestras pueden procesarse mediante técnica convencional (extensión directa en lámina) o en medio líquido (ThinPrep o SurePath), este último con ventajas en reducción de artefactos.\n\nLa interpretación sigue los criterios del Sistema Bethesda 2014, que clasifica los hallazgos en negativos para lesión intraepitelial o malignidad (NILM), anomalías de células escamosas (ASC-US, ASC-H, LSIL, HSIL) y anomalías de células glandulares (AGC). La correlación con pruebas de VPH de alto riesgo es fundamental para el manejo clínico de los resultados anormales.",
        imagen: "/papanicolaou/pap-intro.jpg",
        alt: "Obtención de muestra cervicovaginal para prueba de Papanicolaou",
      },
      objetivoGeneral: {
        texto:
          "Detectar alteraciones citomorfológicas en células cervicovaginales mediante tinción de Papanicolaou para diagnóstico precoz de neoplasias intraepiteliales.",
        imagen: "/papanicolaou/pap-objetivo.avif",
        alt: "Microscopio mostrando células cervicales teñidas con Pap",
      },
      objetivosEspecificos: [
        "Recolectar adecuadamente muestra de zona de transformación",
        "Preparar láminas con técnica convencional o en medio líquido",
        "Aplicar protocolo de tinción de Papanicolaou estandarizado",
        "Identificar cambios celulares según criterios Bethesda",
        "Clasificar hallazgos para guiar conducta clínica",
      ],
      fundamentoTeorico: {
        texto:
          "La tinción de Papanicolaou es una técnica policromática que utiliza hematoxilina (núcleos), Orange G (queratina) y EA (citoplasma). La hematoxilina tiñe los ácidos nucleicos (azul), el Orange G las células queratinizadas (naranja) y el EA50 los componentes citoplasmáticos (verde/rosa). Esta combinación permite diferenciar células escamosas superficiales, intermedias, parabásales y endocervicales, así como identificar atipias nucleares características de infección por VPH o displasia.\n\nEl fundamento biológico se basa en que las lesiones precancerosas muestran alteraciones nucleares progresivas: aumento de relación núcleo-citoplasma, hipercromasia, irregularidad de membrana nuclear y pérdida de polaridad. Las células escamosas atípicas de significado indeterminado (ASC-US) representan el hallazgo más frecuente (3-5% de los casos), mientras que las lesiones intraepiteliales escamosas de alto grado (HSIL) son las más relevantes por su potencial evolutivo a carcinoma invasor.",
        imagen: "/papanicolaou/pap-fundamento.webp",
        alt: "Esquema comparativo de células normales y patológicas en Papanicolaou",
      },
      materiales: [
        {
          nombre: "Espátula de Ayre",
          imagen: "/papanicolaou/materiales/espátula-ayre.jpeg",
          descripcion: "Para recolección de células exocervicales",
        },
        {
          nombre: "Cepillo endocervical",
          imagen: "/papanicolaou/materiales/cytobrush.jpeg",
          descripcion: "Recoge células del canal cervical",
        },
        {
          nombre: "Kit de tinción Pap",
          imagen: "/examen-celulas/materiales/tincion-pap.jpg",
          descripcion: "Incluye hematoxilina, OG-6 y EA-50",
        },
        {
          nombre: "Fijador en spray",
          imagen: "/papanicolaou/materiales/fijador-spray.jpeg",
          descripcion: "Alcohol polivinílico para fijación inmediata",
        },
        {
          nombre: "Medio líquido ThinPrep",
          imagen: "/papanicolaou/materiales/thinprep.jpeg",
          descripcion: "Para procesamiento automatizado",
        },
        {
          nombre: "Microscopio con contraste",
          imagen: "/examen-celulas/materiales/microscopio-digital.jpg",
          descripcion: "Con objetivos 10x, 40x y 100x aceite",
        },
      ],
      procedimiento: {
        texto: [
          "Realizar toma con espátula de Ayre (rotación 360°) y cytobrush",
          "Extender muestra inmediatamente en lámina portaobjetos",
          "Fijar con spray alcohol-polivinílico dentro de los 5 segundos",
          "Teñir con hematoxilina de Harris (5 minutos)",
          "Diferenciar en alcohol-ácido (2-3 inmersiones)",
          "Contratinción con Orange G (1 minuto) y EA50 (3 minutos)",
          "Deshidratar en alcoholes crecientes y xilol",
          "Montar con resina sintética y cubreobjetos",
          "Leer sistemáticamente (método de zigzag)",
          "Reportar según sistema Bethesda 2014",
        ],
        imagenes: [
          "/papanicolaou/procedimiento/toma-muestra.jpg",
          "/papanicolaou/procedimiento/extension-lamina.png",
          "/papanicolaou/procedimiento/fijacion-spray.gif",
          "/papanicolaou/procedimiento/tincion-hematoxilina.webp",
          "/papanicolaou/procedimiento/diferenciacion-alcohol-acido.png",
          "/papanicolaou/procedimiento/tincion-pap.avif",
          "/papanicolaou/procedimiento/deshidratacion.jpg",
          "/papanicolaou/procedimiento/montaje-lamina.jpg",
          "/papanicolaou/procedimiento/lectura-microscopio.png",
          "/papanicolaou/procedimiento/reporte-bethesda.webp",
        ],
      },
      interpretacion: {
        texto: `CRITERIOS DIAGNÓSTICOS (SISTEMA BETHESDA 2014)

CATEGORÍAS PRINCIPALES:
1. Negativo para lesión intraepitelial o malignidad (NILM):
   - Flora vaginal normal
   - Cambios reactivos por inflamación
   - Atrofia en postmenopáusicas

2. Anomalías células escamosas:
   - ASC-US: Atipia en células escamosas de significado indeterminado
   - ASC-H: Atipia sugestiva de HSIL
   - LSIL: Lesión intraepitelial de bajo grado (VPH/leve displasia)
   - HSIL: Lesión intraepitelial de alto grado (displasia moderada/severa)
   - Carcinoma escamoso invasor

3. Anomalías células glandulares:
   - AGC: Células glandulares atípicas
   - AIS: Adenocarcinoma in situ

HALLAZGOS ASOCIADOS:
• Coilocitos (VPH de alto riesgo)
• Cambios por herpes simplex
• Actinomyces en DIU
• Trichomonas vaginalis`,
        imagen: "/papanicolaou/pap-interpretacion.jpg",
        alt: "Tabla de criterios Bethesda con ejemplos celulares",
      },
      erroresComunes: {
        texto: `CONTROL DE CALIDAD EN PAPANICOLAOU

ERRORES PREANALÍTICOS:
• Muestra insuficiente (<5.000 células escamosas)
• Secado al aire (artefactos por retraso en fijación)
• Contaminación con lubricante vaginal

PROBLEMAS DE TINCIÓN:
• Sobretinción nuclear (exceso hematoxilina)
• Subtinción citoplasmática (EA insuficiente)
• Precipitados de tinción (filtrado inadecuado)

CRITERIOS DE REJECTACIÓN:
• Lámina rota no reparable
• Identificación incorrecta
• Muestra sin fijar (>24 horas)

RECOMENDACIONES:
• Certificación CAP (College of American Pathologists)
• Doble lectura en casos ASC-US/HSIL
• Correlación con colposcopia e histología`,
        imagen: "/papanicolaou/pap-errores.jpg",
        alt: "Ejemplos de errores técnicos en láminas de Pap",
      },
    },
    3: {
      titulo:
        "Tinción de Hematoxilina y Eosina (H&E) - Procesamiento Histológico",
      descripcion:
        "Técnica de tinción estándar para evaluación morfológica de tejidos en diagnóstico histopatológico",
      fecha: "2024-05-15",
      estudiante: "Carlos Andrés Ramírez",
      estado: "Completado",
      tipo: "Histología",
      introduccion: {
        texto:
          "La tinción de Hematoxilina y Eosina (H&E) es el método fundamental en histopatología, utilizado rutinariamente en el diagnóstico de biopsias y piezas quirúrgicas. Desarrollada en el siglo XIX, esta técnica permite la visualización de la estructura tisular general mediante la diferenciación de núcleos (hematoxilina) y citoplasmas (eosina). Su estandarización ha sido clave para el avance del diagnóstico anatomopatológico moderno.\n\nLa hematoxilina, un colorante natural extraído del árbol Haematoxylum campechianum, tiene afinidad por los componentes ácidos de las células (principalmente ADN nuclear), mientras que la eosina, un colorante sintético, tiñe componentes básicos como proteínas citoplasmáticas y fibras colágenas. Esta combinación proporciona un contraste óptimo para evaluar arquitectura tisular, relación núcleo-citoplasma y características nucleares.\n\nEn la práctica diagnóstica, la H&E sirve como punto de partida para el análisis histológico, permitiendo identificar patrones de enfermedad que pueden requerir posteriormente técnicas especiales (inmunohistoquímica, tinciones histoquímicas). Su calidad depende críticamente del procesamiento previo del tejido (fijación, inclusión en parafina, corte) y del protocolo de tinción empleado.",
        imagen: "/h-e/histologia-intro.jpg",
        alt: "Tinción H&E mostrando contraste nuclear-citoplasmático",
      },
      objetivoGeneral: {
        texto:
          "Realizar tinción H&E de calidad diagnóstica para evaluación morfológica de tejidos en cortes histológicos.",
        imagen: "/h-e/objetivo-h-e.avif",
        alt: "Blocos de parafina y láminas teñidas con H&E",
      },
      objetivosEspecificos: [
        "Preparar soluciones de hematoxilina y eosina según protocolo",
        "Optimizar tiempos de tinción para diferentes tipos tisulares",
        "Diferenciar adecuadamente la hematoxilina",
        "Lograr contraste óptimo núcleo-citoplasma",
        "Identificar y corregir artefactos de tinción",
      ],
      fundamentoTeorico: {
        texto:
          "La hematoxilina oxidada (hemateína) forma complejos con iones metálicos (generalmente aluminio en la hematoxilina de Harris) que se unen a grupos fosfato del ADN nuclear, tiñendo los núcleos de azul-púrpura. La eosina Y, un colorante xanténico, interactúa con grupos amino básicos de proteínas citoplasmáticas mediante enlaces iónicos, produciendo una coloración rosa-anaranjada. La selectividad se logra mediante pasos de diferenciación (eliminación de exceso de colorante) y azulización (ajuste del pH para estabilizar la tinción nuclear).\n\nExisten múltiples variantes de hematoxilina (Harris, Mayer, Gill) que difieren en su composición química y propiedades tintoriales. La hematoxilina de Harris, que contiene iones de aluminio como mordiente, es la más utilizada en laboratorios de diagnóstico por su intensidad y rapidez de tinción. La eosina puede usarse en concentraciones del 0.5-1% en solución acuosa o alcohólica, siendo esta última más estable pero con menor penetración en el tejido.",
        imagen: "/h-e/fundamento-h-e.png",
        alt: "Esquema molecular de la interacción colorante-tejido en H&E",
      },
      materiales: [
        {
          nombre: "Hematoxilina de Harris",
          imagen: "/h-e/materiales/hematoxilina-harris.jpeg",
          descripcion: "Solución lista para usar con alumbre como mordiente",
        },
        {
          nombre: "Eosina Y alcohólica",
          imagen: "/h-e/materiales/eosina.jpg",
          descripcion: "Solución al 0.5% en alcohol etílico 70°",
        },
        {
          nombre: "Ácido clorhídrico/alcohol",
          imagen: "/h-e/materiales/diferenciador.jpeg",
          descripcion: "Solución al 1% para diferenciación nuclear",
        },
        {
          nombre: "Baño de azulización",
          imagen: "/h-e/materiales/azulizador.jpeg",
          descripcion: "Agua corriente o solución de Scott",
        },
        {
          nombre: "Estación de tinción automatizada",
          imagen: "/h-e/materiales/estacion-tincion.png",
          descripcion: "Para procesamiento de alto volumen",
        },
        {
          nombre: "Microscopio binocular",
          imagen: "/h-e/materiales/microscopio-h-e.jpg",
          descripcion: "Con objetivos planacromáticos 4x-100x",
        },
      ],
      procedimiento: {
        texto: [
          "Desparafinar cortes en horno a 60°C por 15 minutos",
          "Hidratar progresivamente en xilol y alcoholes decrecientes",
          "Teñir con hematoxilina de Harris por 5-8 minutos",
          "Lavar en agua corriente por 1 minuto",
          "Diferenciar en HCl/alcohol 1% por 5-10 segundos",
          "Azular en agua corriente o solución de Scott (5 min)",
          "Contratinción con eosina Y por 1-2 minutos",
          "Deshidratar en alcoholes crecientes (70°, 96°, absoluto)",
          "Aclarar en xilol (2 cambios de 3 minutos)",
          "Montar con resina sintética y cubreobjetos",
        ],
        imagenes: [
          "/h-e/procedimiento/hematoxilina-harris.jpeg",
          "/h-e/procedimiento/hidratacion.jpg",
          "/h-e/procedimiento/tincion-hematoxilina.jpg",
          "/h-e/procedimiento/lavado-agua.png",
          "/h-e/procedimiento/diferenciacion.jpeg",
          "/h-e/procedimiento/azulizacion.jpg",
          "/h-e/procedimiento/tincion-eosina.webp",
          "/h-e/procedimiento/deshidratacion.jpg",
          "/h-e/procedimiento/aclarado-xilol.jpeg",
          "/h-e/procedimiento/montaje-laminas.jpg",
        ],
      },
      interpretacion: {
        texto: `CRITERIOS DE CALIDAD EN TINCIÓN H&E

PARÁMETROS ÓPTIMOS:
1. Núcleos:
   - Coloración: Azul violáceo intenso
   - Cromatina: Patrón bien definido
   - Membrana nuclear: Nítidamente delimitada

2. Citoplasmas:
   - Coloración: Rosa pálido a intenso según tipo celular
   - Estructuras intracelulares: Diferenciables (gránulos, vacuolas)

3. Matriz extracelular:
   - Colágeno: Rosa homogéneo
   - Fibras elásticas: Levemente eosinófilas
   - Músculo: Eosinofilia intermedia

INDICADORES DE MALA CALIDAD:
• Núcleos pálidos (subteñidos)
• Citoplasmas azulados (sobreteñidos)
• Precipitados de colorante
• Falta de diferenciación nuclear

AJUSTES RECOMENDADOS:
- Núcleos pálidos: Aumentar tiempo hematoxilina
- Fondo eosinófilo excesivo: Reducir tiempo eosina
- Precipitados: Filtrar soluciones regularmente`,
        imagen: "/h-e/interpretacion-h-e.jpeg",
        alt: "Comparación de tinción H&E óptima vs subóptima",
      },
      erroresComunes: {
        texto: `SOLUCIÓN DE PROBLEMAS EN TINCIÓN H&E

PROBLEMAS FRECUENTES:
1. Núcleos demasiado pálidos:
   - Causa: Hematoxilina agotada o sobre-diferenciación
   - Solución: Reemplazar reactivo o reducir tiempo HCl

2. Fondo eosinófilo excesivo:
   - Causa: Eosina muy concentrada o tiempo prolongado
   - Solución: Diluir eosina o reducir a 45 segundos

3. Precipitados en láminas:
   - Causa: Soluciones contaminadas o mal filtradas
   - Solución: Filtrar diariamente y limpiar baños

4. Tejido desprendido:
   - Causa: Adhesión insuficiente al portaobjetos
   - Solución: Usar portaobjetos cargados positivamente

CONTROLES DE CALIDAD:
• Tejido control incluido en cada lote
• Monitoreo diario de pH de soluciones
• Registro de cambios de reactivos
• Evaluación microscópica sistemática`,
        imagen: "/h-e/errores-h-e.jpg",
        alt: "Ejemplos de artefactos comunes en tinción H&E",
      },
    },
  },
  "perfiles-bioquimicos": {
    1: {
      titulo: "Dosaje Sanguíneo de Glucosa - Método Enzimático (GOD-POD)",
      descripcion:
        "Determinación cuantitativa de glucosa en suero sanguíneo para diagnóstico y monitorización de diabetes mellitus",
      fecha: "2024-02-05",
      estudiante: "Laura Méndez",
      estado: "Completado",
      tipo: "Bioquímica Clínica",
      introduccion: {
        texto:
          "La cuantificación de glucosa en sangre es una de las pruebas más solicitadas en el laboratorio clínico, fundamental para el diagnóstico y seguimiento de pacientes con diabetes mellitus y otros trastornos del metabolismo de carbohidratos. Este análisis se realiza mediante métodos enzimáticos altamente específicos que proporcionan resultados confiables en minutos. La medición precisa de glucosa es crucial para tomar decisiones terapéuticas, ajustar dosis de insulina y evaluar el control glucémico a largo plazo mediante correlación con la hemoglobina glicosilada (HbA1c). Las muestras deben procesarse rápidamente para evitar la glucólisis in vitro que puede alterar los resultados.",
        imagen: "/dosaje-glucosa/glucosa-intro.webp",
        alt: "Procesamiento de muestras para dosaje de glucosa en laboratorio",
      },
      objetivoGeneral: {
        texto:
          "Determinar con precisión los niveles de glucosa en muestras de suero sanguíneo mediante el método enzimático GOD-POD, siguiendo protocolos estandarizados de control de calidad.",
        imagen: "/dosaje-glucosa/glucosa-objetivo.jpeg",
        alt: "Reactivos y equipos para dosaje de glucosa",
      },
      objetivosEspecificos: [
        "Realizar correctamente la técnica GOD-POD",
        "Calibrar el equipo con estándares certificados",
        "Aplicar controles de calidad en cada corrida",
        "Interpretar resultados según valores de referencia",
        "Identificar posibles interferencias analíticas",
      ],
      fundamentoTeorico: {
        texto: `El método GOD-POD (Glucose Oxidase-Peroxidase) se basa en reacciones enzimáticas secuenciales que generan un producto coloreado proporcional a la concentración de glucosa. En la primera etapa, la enzima glucosa oxidasa cataliza la oxidación de glucosa a ácido glucónico y peróxido de hidrógeno. Posteriormente, la peroxidasa utiliza este peróxido para oxidar un cromógeno (generalmente 4-aminoantipirina con fenol o derivados), generando un compuesto quinoneimina de color rosa cuya absorbancia se mide a 505 nm.

La especificidad del método radica en la alta selectividad de la glucosa oxidasa por la β-D-glucosa, que representa la forma predominante en solución. La relación lineal entre la absorbancia y la concentración de glucosa permite calcular los valores en la muestra mediante comparación con un calibrador de concentración conocida. Este método tiene una sensibilidad analítica de 2 mg/dL y es preciso en el rango de 20-600 mg/dL, cubriendo las necesidades clínicas para hipo e hiperglucemias.

Las principales ventajas de GOD-POD incluyen su excelente especificidad, mínima interferencia por otras sustancias reductoras (a diferencia de métodos antiguos como Folin-Wu) y adaptabilidad a analizadores automáticos. Sin embargo, puede verse afectado por altas concentraciones de ácido ascórbico, bilirrubina o hemólisis, requiriendo evaluación de interferencias cuando los resultados no concuerdan con el cuadro clínico.`,
        imagen: "/dosaje-glucosa/glucosa-fundamento.webp",
        alt: "Esquema de las reacciones enzimáticas del método GOD-POD",
      },
      materiales: [
        {
          nombre: "Reactivo GOD-POD",
          imagen: "/dosaje-glucosa/materiales/reactivo-godpod.webp",
          descripcion:
            "Kit comercial liofilizado (glucosa oxidasa, peroxidasa, cromógeno)",
        },
        {
          nombre: "Estándares de glucosa",
          imagen: "/dosaje-glucosa/materiales/estandares-glucosa.png",
          descripcion: "Soluciones certificadas de 100 mg/dL y 300 mg/dL",
        },
        {
          nombre: "Micropipetas automáticas",
          imagen: "/dosaje-glucosa/materiales/micropipetas-bioquimica.jpeg",
          descripcion: "Precisión ±1% (10 μL y 1000 μL)",
        },
        {
          nombre: "Espectrofotómetro/Analizador",
          imagen: "/dosaje-glucosa/materiales/analizador-bioquimico.jpg",
          descripcion: "Calibrado a 505 nm con paso de 1 nm",
        },
        {
          nombre: "Baño termostatizado",
          imagen: "/dosaje-glucosa/materiales/bano-maria-37.gif",
          descripcion: "Mantenimiento a 37±0.5°C",
        },
        {
          nombre: "Cubetas ópticas",
          imagen: "/dosaje-glucosa/materiales/cubetas-espectro.jpg",
          descripcion: "De vidrio o cuarzo (1 cm de paso óptico)",
        },
      ],
      procedimiento: {
        texto: [
          "Confirmar ayuno de 8-12 horas y recolectar muestra en tubo con fluoruro-oxalato",
          "Reconstituir el reactivo liofilizado con agua destilada y dejar reposar 10 minutos",
          "Pipetear 10 μL de muestra, estándar y blanco en cubetas con 1000 μL de reactivo",
          "Mezclar suavemente e incubar 10 minutos a 37°C",
          "Leer la absorbancia a 505 nm contra el blanco",
          "Calcular resultados, validar con controles y aplicar criterios de aceptación (±2 SD, CV <3%)",
        ],
        imagenes: [
          "/dosaje-glucosa/procedimiento/preparacion-reactivos.webp",
          "/dosaje-glucosa/procedimiento/reactivos-glucosa.jpeg",
          "/dosaje-glucosa/procedimiento/pipeteo-muestras.jpg",
          "/dosaje-glucosa/procedimiento/incubacion-reactivos.jpg",
          "/dosaje-glucosa/procedimiento/lectura-espectro.gif",
          "/dosaje-glucosa/procedimiento/control-calidad.jpeg", // Puedes agregar esta o reutilizar otra si no tienes imagen extra
        ],
      },
      interpretacion: {
        texto: `INTERPRETACIÓN CLÍNICA - GLUCOSA SÉRICA

VALORES DE REFERENCIA (AYUNAS):
• Normal: 70-99 mg/dL (3.9-5.5 mmol/L)
• Prediabetes: 100-125 mg/dL (5.6-6.9 mmol/L)
• Diabetes: ≥126 mg/dL (7.0 mmol/L) en dos determinaciones
• Hipoglucemia: <70 mg/dL (<3.9 mmol/L) con síntomas

CONDICIONES ASOCIADAS:
Hiperglucemia:
• Diabetes mellitus tipos 1 y 2
• Síndrome metabólico
• Pancreatitis aguda
• Hiperadrenocorticismo
• Tratamiento con glucocorticoides

Hipoglucemia:
• Insulinoma
• Sobredosis de insulina/hipoglucemiantes
• Enfermedad de Addison
• Hipopituitarismo
• Ayuno prolongado

FACTORES PREANALÍTICOS:
• Aumentan glucosa: Estrés agudo, TAC endovenosa
• Disminuyen glucosa: Retraso en procesamiento (>1h sin inhibidor)
• Interferencias: Hemólisis (>500 mg/dL Hb), lipemia (>1000 mg/dL TG)`,
        imagen: "/dosaje-glucosa/glucosa-resultados.jpg",
        alt: "Tabla de valores de referencia e interpretación clínica",
      },
      erroresComunes: {
        texto: `CONTROL DE CALIDAD Y TROUBLESHOOTING

ERRORES FRECUENTES:
1. Resultados inconsistentes:
   • Causa: Reactivos contaminados o caducados
   • Solución: Verificar fechas y almacenamiento (2-8°C)

2. Curva de calibración no lineal:
   • Causa: Estándar mal reconstituido
   • Solución: Preparar nuevo estándar con agua grado reactivo

3. Controles fuera de rango:
   • Causa: Deriva instrumental
   • Solución: Recalibrar equipo y repetir controles

4. Diferencias método-glucómetro:
   • Causa: Muestra capilar vs venosa
   • Solución: Explicar variabilidad biológica al clínico

RECOMENDACIONES:
• Centrifugar muestras dentro de los 30 minutos
• Usar siempre inhibidor de glucólisis (fluoruro)
• Participar en programas de evaluación externa
• Documentar desviaciones según norma ISO 15189`,
        imagen: "/dosaje-glucosa/glucosa-errores.png",
        alt: "Ejemplo de errores comunes en dosaje de glucosa",
      },
    },
    2: {
      titulo: "Prueba de Tolerancia Oral a la Glucosa (PTOG)",
      descripcion:
        "Evaluación diagnóstica de la capacidad metabólica para procesar una carga glucosada",
      fecha: "2024-02-12",
      estudiante: "Javier López",
      estado: "Completado",
      tipo: "Prueba Funcional",
      introduccion: {
        texto:
          "La Prueba de Tolerancia Oral a la Glucosa (PTOG) es el estándar de oro para diagnosticar diabetes mellitus gestacional y alteraciones tempranas del metabolismo glucídico. Esta prueba evalúa la capacidad del organismo para metabolizar una carga controlada de glucosa, simulando la respuesta posprandial. Requiere una preparación estricta del paciente (dieta previa de 3 días con ≥150g de carbohidratos y ayuno de 8-12 horas) y sigue protocolos estandarizados por la ADA y la OMS. La PTOG es especialmente útil para detectar resistencia a la insulina en etapas subclínicas, cuando la glucemia en ayunas aún es normal pero existen alteraciones en la curva de tolerancia.",
        imagen: "/oral-glucosa/glucosa-intro.png",
        alt: "Paciente realizando prueba de tolerancia a glucosa",
      },
      objetivoGeneral: {
        texto:
          "Evaluar la respuesta metabólica a una sobrecarga oral de glucosa mediante determinaciones seriadas de glucemia, siguiendo protocolos internacionales estandarizados.",
        imagen: "/oral-glucosa/glucosa-objetivo.jpg",
        alt: "Materiales para prueba de tolerancia a glucosa",
      },
      objetivosEspecificos: [
        "Realizar correctamente la preparación del paciente",
        "Administrar la solución glucosada según protocolo",
        "Obtener muestras en tiempos establecidos",
        "Construir e interpretar la curva glucémica",
        "Clasificar resultados según criterios diagnósticos",
      ],
      fundamentoTeorico: {
        texto: `La PTOG evalúa la capacidad integrada del organismo para mantener la homeostasis glucémica tras una carga oral de carbohidratos. En individuos normales, la ingesta de glucosa estimula la secreción de insulina pancreática, que suprime la producción hepática de glucosa y promueve su captación por tejidos periféricos, resultando en un pico glucémico a los 30-60 minutos y retorno a valores basales a las 2 horas. En pacientes con resistencia insulínica o deficiencia de insulina, se observa un retraso en este mecanismo regulatorio, con hiperglucemia prolongada.

El protocolo estándar de 75g de glucosa (equivalente a una comida rica en carbohidratos) permite valorar: 1) La fase temprana de secreción insulínica (respuesta a los 30-60 min), 2) La eficiencia de clearance glucémico (diferencia entre pico y valor a 2h), y 3) La recuperación a niveles basales. La prueba mide no solo la función de las células β pancreáticas, sino también la sensibilidad hepática y periférica a la insulina, así como la función incretina (GLP-1, GIP).

La interpretación debe considerar factores como la actividad física previa, medicamentos que afectan el metabolismo glucídico (corticoides, β-bloqueadores), y condiciones que alteran la absorción intestinal (gastroparesia, cirugías bariátricas). La variabilidad intraindividual es de aproximadamente 15%, por lo que resultados limítrofes deben confirmarse con repetición de la prueba o evaluación de HbA1c.`,
        imagen: "oral-glucosa/glucosa-fundamento.png",
        alt: "Curvas comparativas de tolerancia a glucosa en estados normales y patológicos",
      },
      materiales: [
        {
          nombre: "Solución de glucosa",
          imagen: "/oral-glucosa/materiales/solucion-glucosa-comercial.png",
          descripcion:
            "75g de glucosa anhidra en 250-300ml de agua (comercial o preparada)",
        },
        {
          nombre: "Tubos con inhibidor",
          imagen: "/oral-glucosa/materiales/tubos-fluoruro-inhibidor.webp",
          descripcion:
            "Conteniendo fluoruro de sodio (inhibidor de glucólisis)",
        },
        {
          nombre: "Glucómetro/analizador",
          imagen: "/oral-glucosa/materiales/analizador-glucemia.webp",
          descripcion: "Precisión certificada (±5% CV)",
        },
        {
          nombre: "Cronómetro",
          imagen: "/oral-glucosa/materiales/cronometro-medico.webp",
          descripcion: "Para tiempos exactos de toma de muestras",
        },
        {
          nombre: "Balanza digital",
          imagen: "/oral-glucosa/materiales/balanza-digital.jpg",
          descripcion: "Para ajustar dosis en pacientes pediátricos (1.75g/kg)",
        },
        {
          nombre: "Material de venopunción",
          imagen: "/oral-glucosa/materiales/kit-flebotomia.webp",
          descripcion: "Jeringas, agujas, torniquete, algodón",
        },
      ],
      procedimiento: {
texto: [
  "Preparación previa: dieta rica en carbohidratos, ayuno de 8-12 h y suspensión de fármacos si es necesario",
  "Confirmar ayuno, obtener muestra basal y administrar 75g de glucosa en ≤5 minutos",
  "Tomar muestras a los 60, 120 (y opcionalmente 180) minutos; paciente en reposo sin ingerir alimentos",
  "Procesar muestras rápidamente y determinar glucemia con método enzimático",
  "Interpretar resultados y construir la curva glucémica; suspender si hay criterios de diabetes o hipoglucemia",
],
imagenes: [
  "/oral-glucosa/procedimiento/preparacion-previa.webp",              // Dieta, ayuno y suspensión de fármacos
  "/oral-glucosa/procedimiento/muestra-basal-glucosa.webp",           // Muestra basal y administración de glucosa
  "/oral-glucosa/procedimiento/muestras-seriadas-reposo.webp",        // Toma de muestras a tiempo controlado
  "/oral-glucosa/procedimiento/centrifugacion-determinacion.jpg",    // Centrifugación y determinación de glucemia
  "/oral-glucosa/procedimiento/interpretacion-curva.png",            // Interpretación y construcción de curva glucémica
],
      },
      interpretacion: {
        texto: `INTERPRETACIÓN DE RESULTADOS - PTOG (CRITERIOS ADA 2023)

VALORES DE REFERENCIA (75g glucosa):

• Normal:
  - Ayunas: <100 mg/dL (5.6 mmol/L)
  - 1h: <180 mg/dL (10.0 mmol/L)
  - 2h: <140 mg/dL (7.8 mmol/L)

• Prediabetes:
  - Ayunas: 100-125 mg/dL (5.6-6.9 mmol/L)
  - 2h: 140-199 mg/dL (7.8-11.0 mmol/L)

• Diabetes Mellitus:
  - Ayunas: ≥126 mg/dL (7.0 mmol/L)
  - 2h: ≥200 mg/dL (11.1 mmol/L)

• Diabetes Gestacional (IADPSG):
  - 1 valor alterado:
    Ayunas ≥92 mg/dL (5.1 mmol/L)
    1h ≥180 mg/dL (10.0 mmol/L)
    2h ≥153 mg/dL (8.5 mmol/L)

PATRONES ANORMALES:
1. Curva aplanada:
   - Pico <20 mg/dL sobre basal
   - Causas: Hipoglucemia reactiva, dumping syndrome

2. Curva prolongada:
   - 2h >140 pero <200 mg/dL
   - Indica resistencia insulínica temprana

3. Curva diabética:
   - No retorno a basal a las 2h
   - Diagnóstico de diabetes mellitus`,
        imagen: "/oral-glucosa/ptog-resultados.jpg",
        alt: "Tabla comparativa de criterios diagnósticos ADA/OMS",
      },
      erroresComunes: {
        texto: `CONTROL DE CALIDAD Y PROBLEMAS FRECUENTES

ERRORES PREANALÍTICOS:
1. Preparación inadecuada:
   - Dieta baja en carbohidratos → Falsos positivos
   - Solución: Verificar dieta previa de 3 días

2. Ejercicio durante la prueba:
   - Aumenta captación muscular de glucosa
   - Solución: Reposo absoluto durante la prueba

3. Vómitos post-ingesta:
   - Invalida la carga glucosada
   - Solución: Repetir prueba otro día

VARIABILIDAD:
• Diferencia >10% entre muestras duplicadas:
  - Revisar técnica de venopunción
  - Verificar inhibidor de glucólisis

CONTROLES RECOMENDADOS:
• Solución glucosada: pH 4-7, osmolaridad 300-500 mOsm/L
• Monitorear síntomas durante la prueba
• Documentar hora exacta de cada toma`,
        imagen: "/oral-glucosa/ptog-errores.png",
        alt: "Ejemplos de curvas glucémicas anómalas",
      },
    },
    3: {
      titulo: "Dosaje Sanguíneo de Triglicéridos",
      descripcion:
        "Determinación cuantitativa de triglicéridos séricos por método enzimático colorimétrico",
      fecha: "2024-01-30",
      estudiante: "Luis Herrera",
      estado: "Completado",
      tipo: "Prueba Bioquímica",
      introduccion: {
        texto:
          "Los triglicéridos (TG) constituyen la principal forma de almacenamiento de lípidos en el organismo y son transportados en plasma principalmente en las lipoproteínas de muy baja densidad (VLDL). Su cuantificación es fundamental en el perfil lipídico para evaluar el riesgo cardiovascular, diagnosticar dislipidemias primarias o secundarias, y monitorizar la respuesta al tratamiento. La determinación requiere ayuno de 9-12 horas para evitar la interferencia por quilomicrones posprandiales. Niveles elevados se asocian con síndrome metabólico, pancreatitis aguda y enfermedad cardiovascular aterosclerótica. El método enzimático actual ha reemplazado a las técnicas químicas antiguas por su mayor especificidad y seguridad.",
        imagen: "/dosaje-trigliceridos/trigliceridos-intro.jpg",
        alt: "Estructura molecular de los triglicéridos",
      },
      objetivoGeneral: {
        texto:
          "Determinar la concentración sérica de triglicéridos mediante método enzimático estandarizado, siguiendo protocolos internacionales de calidad analítica.",
        imagen: "/dosaje-trigliceridos/trigliceridos-objetivo.jpg",
        alt: "Kit reactivo para determinación de triglicéridos",
      },
      objetivosEspecificos: [
        "Preparar correctamente al paciente (ayuno adecuado)",
        "Aplicar la metodología enzimática GPO-PAP",
        "Validar resultados con controles de calidad",
        "Interpretar valores según estratificación de riesgo",
        "Identificar posibles interferencias analíticas",
      ],
      fundamentoTeorico: {
        texto: `El método enzimático GPO-PAP (Glicerol-3-Fosfato Oxidasa-Peroxidasa) es el estándar actual para la determinación de triglicéridos. El principio se basa en:
1. Hidrólisis de triglicéridos por lipasa a glicerol y ácidos grasos
2. Fosforilación del glicerol por glicerol kinasa (GK) produciendo L-glicerol-3-fosfato
3. Oxidación por glicerol-3-fosfato oxidasa (GPO) generando dihidroxiacetona fosfato y peróxido de hidrógeno
4. Reacción del peróxido con 4-aminofenazona y 4-clorofenol bajo la acción de peroxidasa (POD), formando un cromógeno rojo (quinoneimina) cuya absorbancia es proporcional a la concentración de TG.

Ventajas del método:
- Alta especificidad (no mide glicerol libre endógeno)
- Amplio rango lineal (hasta 1000 mg/dL)
- Requiere pequeñas muestras (5-10 μL)
- Adaptable a autoanalizadores

Factores preanalíticos críticos:
- Ayuno estricto de 12 horas (quilomicrones interfieren)
- Postura del paciente (aumento 5-10% en posición erecta)
- Estasis venosa prolongada (aumenta concentración)
- Medicamentos (β-bloqueadores, diuréticos, estrógenos)`,
        imagen: "/dosaje-trigliceridos/trigliceridos-fundamento.jpg",
        alt: "Esquema de reacciones enzimáticas del método GPO-PAP",
      },
      materiales: [
        {
          nombre: "Kit reactivo GPO-PAP",
          imagen: "/dosaje-trigliceridos/materiales/kit-gpo-pap.png",
          descripcion: "Contiene lipasa, GK, GPO, POD, buffer y cromógeno",
        },
        {
          nombre: "Estándar de triglicéridos",
          imagen: "/dosaje-trigliceridos/materiales/estandar-trigliceridos.jpg",
          descripcion: "Solución certificada de trioleína (150 mg/dL)",
        },
        {
          nombre: "Controles de calidad",
          imagen: "/dosaje-trigliceridos/materiales/controles-lipidos.jpg",
          descripcion: "Niveles bajo, normal y alto para validación",
        },
        {
          nombre: "Espectrofotómetro",
          imagen: "/dosaje-trigliceridos/materiales/espectrofotometro.jpg",
          descripcion: "Precisión ±1nm en rango 490-520nm",
        },
        {
          nombre: "Micropipetas automáticas",
          imagen: "/dosaje-glucosa/materiales/micropipetas-bioquimica.jpeg",
          descripcion: "Precisión ±1% (10μL y 1000μL)",
        },
        {
          nombre: "Cubetas para espectro",
          imagen: "/dosaje-glucosa/materiales/cubetas-espectro.jpg",
          descripcion: "Vidrio óptico o plástico de calidad",
        },
        {
          nombre: "Centrífuga para suero",
          imagen: "/dosaje-trigliceridos/materiales/centrifuga-sangre.jpg",
          descripcion: "1500-2000g por 10 minutos",
        },
      ],
      procedimiento: {
        texto: [
          "Ayuno de 9-12 horas, evitar ejercicio 24h antes y extraer sangre en tubo seco o con gel separador",
          "Reconstituir reactivos, preparar estándar y controles, y equilibrar a temperatura ambiente",
          "Centrifugar muestra a 2000g por 10 minutos, pipetear 1000μL reactivo y 10μL de suero/estándar/control en cubeta",
          "Mezclar suavemente e incubar 10 minutos a 37°C",
          "Leer la absorbancia a 500-510 nm contra blanco",
          "Aplicar fórmula, validar con controles (CV <3%) y considerar diluciones para muestras lipémicas o valores >1000 mg/dL",
        ],
        imagenes: [
          "/dosaje-trigliceridos/procedimiento/preparacion-muestra.jpeg", // Preparación y extracción
          "/dosaje-trigliceridos/procedimiento/pipeteo-reactivos.jpg", // Pipeteo y reactivo
          "/dosaje-trigliceridos/procedimiento/usando-centrifuga.avif", // Incubación
          "/dosaje-trigliceridos/procedimiento/incubando.jpg", // Lectura absorbancia
          "/dosaje-trigliceridos/procedimiento/leer-absorvence.avif", // Cálculo y validación
          "/dosaje-glucosa/procedimiento/control-calidad.jpeg", // Imagen adicional opcional para consideraciones especiales
        ],
      },
      interpretacion: {
        texto: `INTERPRETACIÓN DE RESULTADOS - TRIGLICÉRIDOS (NCEP-ATP III)

VALORES DE REFERENCIA (mg/dL):

• Deseable: <150
• Limítrofe alto: 150-199
• Alto: 200-499
• Muy alto: ≥500

CLASIFICACIÓN CLÍNICA:

1. Normotrigliceridemia: <150 mg/dL
   - Riesgo cardiovascular bajo

2. Hipertrigliceridemia leve-moderada (150-499):
   - Asociada a:
     • Resistencia a insulina
     • Obesidad visceral
     • Consumo excesivo de alcohol/carbohidratos
     • Fármacos (diuréticos, retinoides, β-bloqueadores)

3. Hipertrigliceridemia severa (≥500):
   - Riesgo de pancreatitis aguda
   - Requiere tratamiento urgente

4. Hipertrigliceridemia familiar:
   - Tipo I (quilomicronemia): TG >1000
   - Tipo IV (VLDL elevada): TG 200-1000

RECOMENDACIONES SEGÚN NIVELES:
• >150: Modificar estilo de vida
• >200: Considerar tratamiento farmacológico
• >500: Terapia combinada urgente`,
        imagen: "/dosaje-trigliceridos/trigliceridos-resultados.jpg",
        alt: "Tabla de estratificación de riesgo según niveles de TG",
      },
      erroresComunes: {
        texto: `FUENTES DE ERROR Y CONTROL DE CALIDAD

ERRORES PREANALÍTICOS:
1. Ayuno inadecuado:
   - Aumento de quilomicrones → sobreestimación
   - Solución: Verificar tiempo de ayuno

2. Hemólisis o ictericia:
   - Interfiere con lectura espectrofotométrica
   - Solución: Usar muestras claras o corregir con blanco

ERRORES ANALÍTICOS:
1. Reactivos desactivados:
   - Vida útil corta después de reconstitución
   - Solución: Verificar fechas y controles

2. Temperatura incorrecta:
   - Afecta actividad enzimática
   - Solución: Monitorizar baño María/incubadora

INTERFERENCIAS CONOCIDAS:
• Falsos aumentos: Glicerol libre, bilirrubina >20mg/dL
• Falsas disminuciones: Ácido ascórbico >50mg/dL

CRITERIOS DE ACEPTACIÓN:
• Linealidad: r² >0.995 en curva de calibración
• Precisión: CV <3% en controles
• Exactitud: ±5% del valor asignado del control`,
        imagen: "/dosaje-trigliceridos/trigliceridos-errores.jpeg",
        alt: "Ejemplos de interferencias en muestras lipémicas",
      },
    },
  },
};
