// ============================================================
// BLOG DATA STORE — Transformando Sonrisas
// Agregar un artículo = agregar un objeto a este array.
// El primer elemento siempre es el "Destacado" principal.
// ============================================================

export const blogPosts = [

    // ──────────────────────────────────────────────
    // 1. BLANQUEAMIENTO DENTAL
    // ──────────────────────────────────────────────
    {
        slug: "mitos-blanqueamiento-dental-2024",
        title: "5 Mitos sobre el Blanqueamiento Dental que debes dejar de creer",
        excerpt: "Descubre la verdad científica detrás de los tratamientos de aclaramiento dental. ¿De verdad daña el esmalte? ¿Funcionan los remedios caseros? La Dra. Carmen Carrillo lo aclara.",
        date: "28 de Marzo, 2024",
        readTime: "5 min lectura",
        category: "Estética Dental",
        image: "/treatment_blanqueamiento.avif",
        content: [
            { type: "intro", text: "El deseo de tener unos dientes más blancos es uno de los más comunes que escucho en mi consultorio cada semana. Y junto a ese deseo, llega invariablemente una colección de ideas —algunas correctas, muchas equivocadas— sobre cómo funciona el blanqueamiento dental. Hoy quiero aclarar cinco de los mitos más persistentes, con criterio clínico y sin rodeos." },
            { type: "h2", text: "Mito #1: \"El blanqueamiento arruina el esmalte dental\"" },
            { type: "p", text: "Este es el mito más extendido y, comprendo, el más atemorizante. La realidad es más matizada. Los agentes activos del blanqueamiento profesional —el peróxido de hidrógeno o el peróxido de carbamida en concentraciones controladas— actúan a nivel molecular: penetran el esmalte y descomponen las moléculas cromógenas mediante una reacción de oxidación. No erosionan la superficie físicamente." },
            { type: "p", text: "El problema surge cuando los tratamientos se realizan con concentraciones inadecuadas o sin supervisión clínica. En nuestro consultorio en San Pedro Garza García, el procedimiento se adapta a las condiciones particulares de cada paciente: sensibilidad, grosor del esmalte, condición de las encías. Bajo esas condiciones, el riesgo es mínimo." },
            { type: "h2", text: "Mito #2: \"Los remedios caseros de redes sociales funcionan igual\"" },
            { type: "p", text: "El bicarbonato de sodio con limón, el carbón activado, la cúrcuma... los he visto pasar por cientos de videos. El problema es que estos hacks actúan como abrasivos físicos: pueden eliminar manchas superficiales, pero a un costo silencioso: desgastan el esmalte con cada aplicación. El blanqueamiento profesional actúa desde adentro, trabajando en la estructura interna del diente. Son mecanismos de acción completamente distintos." },
            { type: "h2", text: "Mito #3: \"Los resultados son permanentes\"" },
            { type: "p", text: "El blanqueamiento dental produce resultados sorprendentes —en muchos casos 8 o más tonos de mejora en una sola sesión con tecnología ZOOM—, pero el color puede ceder gradualmente según los hábitos de cada paciente: café, vino tinto, té o tabaco. Con un plan de mantenimiento personalizado, la inversión dura mucho más." },
            { type: "h2", text: "Mito #4: \"Todas las manchas responden igual al blanqueamiento\"" },
            { type: "p", text: "Existen manchas extrínsecas (en la superficie, por factores externos) e intrínsecas (dentro del diente, por tetraciclinas, fluorosis o traumatismos). Las primeras responden muy bien. Las segundas son más resistentes y en algunos casos requieren carillas de porcelana como complemento. Por eso, antes de cualquier procedimiento, hago una valoración completa." },
            { type: "h2", text: "Mito #5: \"Si tengo sensibilidad dental, no puedo blanquearme\"" },
            { type: "p", text: "No del todo. En protocolos modernos, utilizamos agentes desensibilizantes de flúor y nitrato de potasio antes y después del procedimiento. Además, ajustamos la concentración del peróxido y los tiempos de la sesión según el perfil de sensibilidad del paciente. El secreto está en la personalización." },
        ]
    },

    // ──────────────────────────────────────────────
    // 2. ODONTOPEDIATRÍA
    // ──────────────────────────────────────────────
    {
        slug: "primera-visita-dentista-ninos",
        title: "¿A qué edad debe ser la primera visita de tu hijo al dentista?",
        excerpt: "La prevención empieza antes de que salgan los dientes permanentes. Conoce por qué la Academia Americana de Odontopediatría recomienda la primera visita al cumplir el primer año de edad.",
        date: "15 de Marzo, 2024",
        readTime: "4 min lectura",
        category: "Odontopediatría",
        image: "/treatment_odontopediatria.avif",
        content: [
            { type: "intro", text: "Una de las preguntas que más recibo de papás y mamás primerizos en San Pedro es: ¿cuándo debería llevar a mi hijo al dentista por primera vez? La respuesta sorprende a casi todos: mucho antes de lo que imaginan." },
            { type: "h2", text: "La primera visita: antes del primer cumpleaños" },
            { type: "p", text: "La Academia Americana de Odontopediatría (AAPD) recomienda que el primer chequeo odontológico ocurra alrededor del primer diente de leche —o antes del primer aniversario. Sé que suena temprano, pero hay razones clínicas muy concretas para ello." },
            { type: "p", text: "Desde los primeros meses de vida, los hábitos que establece una familia —cómo se limpia la boca del bebé, si se usan biberones durante la noche, qué alimentos se introducen primero— tienen un impacto directo en la salud bucal futura. La primera visita no es solo 'revisar dientes'; es una consulta de orientación preventiva para los padres." },
            { type: "h2", text: "¿Qué revisamos en esa primera visita?" },
            { type: "p", text: "Durante el primer chequeo evalúo el desarrollo de la mandíbula y el maxilar, el estado de los dientes de leche ya presentes, posibles hábitos como succión digital o uso prolongado de chupón, y el riesgo de caries temprana. También hablo con los papás sobre técnicas de higiene oral apropiadas para cada edad." },
            { type: "h2", text: "La caries en niños pequeños: un problema subestimado" },
            { type: "p", text: "La caries de infancia temprana es la enfermedad crónica más común en niños menores de 5 años, y es completamente prevenible. El mito de 'son dientes de leche, igual los van a perder' es uno de los más perjudiciales que existen. Los dientes de leche no son prescindibles: le permiten al niño masticar, hablar correctamente y, crucialmente, sirven de guía para la erupción de los dientes permanentes. Perderlos prematuramente crea problemas de espacio que después requieren ortodoncia." },
            { type: "h2", text: "¿Cada cuánto debo llevar a mi hijo?" },
            { type: "p", text: "Una vez establecida la primera visita, la frecuencia ideal es cada 6 meses para revisión preventiva, o antes si hay alguna preocupación específica. Lo más importante es que la visita al dentista sea una experiencia positiva desde el inicio: sin drama, sin urgencias, sin miedo. Cuando el niño crece conociendo el consultorio como un lugar seguro y amable, la salud bucal para toda la vida se vuelve mucho más sencilla." },
        ]
    },

    // ──────────────────────────────────────────────
    // 3. CÉLULAS MADRE CON DIENTES
    // ──────────────────────────────────────────────
    {
        slug: "celulas-madre-dentales-futuro",
        title: "Células Madre Dentales: El seguro biológico que pocos conocen",
        excerpt: "Cómo la extracción programada de dientes infantiles puede preservar células madre invaluables mediante el sistema BioEDEN para el tratamiento de futuras enfermedades.",
        date: "02 de Marzo, 2024",
        readTime: "5 min lectura",
        category: "Innovación Médica",
        image: "/treatment_celulas_madre_v4.avif",
        content: [
            { type: "intro", text: "Cuando a un niño se le cae un diente de leche, lo más común es esperar al Ratón de los Dientes, guardarlo como recuerdo o simplemente tirarlo. Pero dentro de ese pequeño diente hay algo científicamente invaluable: células madre mesenquimales con un potencial regenerativo que la medicina moderna apenas está comenzando a comprender." },
            { type: "h2", text: "¿Qué son exactamente las células madre dentales?" },
            { type: "p", text: "Las células madre son células indiferenciadas con la capacidad de convertirse en distintos tipos de tejido: muscular, óseo, nervioso, cartilaginoso. Las que se encuentran en la pulpa dental de los dientes de leche —llamadas DPSCs, por sus siglas en inglés— son particularmente ricas y accesibles. A diferencia de las células madre de cordón umbilical (que deben recolectarse en el momento del nacimiento), los dientes infantiles ofrecen una segunda oportunidad." },
            { type: "h2", text: "¿Cómo funciona el proceso de recolección?" },
            { type: "p", text: "Working con BioEDEN, el laboratorio certificado líder en América Latina en esta especialidad, el proceso es el siguiente: el diente de leche es extraído en el momento de mayor vitalidad pulpar (justo antes de la exfoliación natural o con extracción programada), es transportado en un medio de cultivo especial en menos de 48 horas al laboratorio de criopreservación, donde las células son aisladas, caracterizadas y almacenadas indefinidamente a −196°C en nitrógeno líquido." },
            { type: "p", text: "Las células quedan disponibles exclusivamente para el propio niño a lo largo de toda su vida." },
            { type: "h2", text: "¿Para qué sirven estas células en el futuro?" },
            { type: "p", text: "La investigación actual muestra aplicaciones concretas en regeneración ósea dental (implantes sin injerto), tratamiento de diabetes tipo 1, lesiones de médula espinal, enfermedades neurodegenerativas como el Parkinson y el Alzheimer, regeneración de cartílago y tejido muscular cardíaco. La lista sigue creciendo conforme avanza la investigación." },
            { type: "h2", text: "¿Cuándo es el momento correcto?" },
            { type: "p", text: "La ventana de oportunidad es específica: los dientes de leche más ricos en células madre son los incisivos centrales y laterales inferiores, que generalmente comienzan a aflojarse entre los 5 y 8 años. Una vez que el diente pierde vitalidad pulpar, las células dejan de ser viables. Si te interesa explorar esta opción para tu hijo, agenda una consulta para evaluar el momento óptimo de recolección." },
        ]
    },

    // ──────────────────────────────────────────────
    // 4. ORTODONCIA
    // ──────────────────────────────────────────────
    {
        slug: "ortodoncia-adultos-nunca-es-tarde",
        title: "Ortodoncia en adultos: por qué nunca es demasiado tarde para corregir tu sonrisa",
        excerpt: "La ortodoncia no es solo para adolescentes. Descubre las razones clínicas por las que alinear tu dentición en la edad adulta puede ser una de las mejores inversiones en tu salud bucal.",
        date: "20 de Febrero, 2024",
        readTime: "4 min lectura",
        category: "Ortodoncia",
        image: "/treatment_ortodoncia_new.png",
        content: [
            { type: "intro", text: "Todavía recibo pacientes adultos que entran con cierta timidez al consultorio y me dicen: 'Sé que ya estoy grande para esto, pero...' Y yo los interrumpo: no existe la edad equivocada para corregir la postura de tus dientes. La biología del movimiento dental funciona exactamente igual a los 35 años que a los 15." },
            { type: "h2", text: "¿Por qué alguien debería considerar ortodoncia de adulto?" },
            { type: "p", text: "Las razones son tanto estéticas como funcionales. Un apiñamiento dental severo dificulta la higiene correcta, lo que aumenta el riesgo de caries interproximales y enfermedad periodontal. Una mordida incorrecta puede generar desgaste dental asimétrico, cefaleas crónicas de origen mandibular y problemas en la articulación temporomandibular (ATM). Estéticamente, una sonrisa alineada tiene un impacto demostrado en la autoconfianza y la percepción profesional." },
            { type: "h2", text: "Brackets tradicionales vs. alineadores invisibles" },
            { type: "p", text: "Los brackets metálicos de siempre siguen siendo la opción más versátil y económica, especialmente para casos complejos. Los aparatos estéticos (brackets de cerámica o zafiro) ofrecen una alternativa menos visible con resultados equivalentes. Los alineadores removibles, como los sistemas de ortodoncia invisible, son ideales para correcciones leves o moderadas y tienen la enorme ventaja de ser prácticamente imperceptibles y totalmente removibles: comes, limpias y te presentas a reuniones sin aparatos." },
            { type: "h2", text: "¿Cuánto dura el tratamiento?" },
            { type: "p", text: "Depende de la complejidad del caso. Correcciones menores con alineadores pueden resolverse en 4 a 6 meses. Tratamientos completos con brackets suelen durar entre 18 y 30 meses. Lo que muchos no saben es que después del tratamiento activo viene una etapa de retención —con retenedores nocturnos— que es igual de importante: los dientes tienen memoria y tenderán a regresar a su posición original si no se consolida el resultado." },
            { type: "h2", text: "La edad adulta tiene una ventaja" },
            { type: "p", text: "Los adultos son, en general, pacientes más disciplinados. Cumplen las citas, usan los retenedores y siguen las instrucciones. En mi experiencia, los tratamientos de ortodoncia en adultos tienen tasas de éxito y adherencia muy altas. Si llevas años postergando esta decisión, te invito a que venga a consulta: sin presiones, exploramos las opciones que mejor se adapten a tu vida y tu presupuesto." },
        ]
    },

    // ──────────────────────────────────────────────
    // 5. DISEÑO DE SONRISA / ODONTOLOGÍA ESTÉTICA
    // ──────────────────────────────────────────────
    {
        slug: "diseno-sonrisa-que-esperar",
        title: "Diseño de Sonrisa: qué es, cómo funciona y qué resultados debes esperar",
        excerpt: "El diseño de sonrisa no es solo una cuestión estética. Descubre cómo se planifica científicamente un tratamiento que transforma la apariencia y la funcionalidad dental de forma integral.",
        date: "10 de Febrero, 2024",
        readTime: "5 min lectura",
        category: "Estética Dental",
        image: "/treatment_estetica.avif",
        content: [
            { type: "intro", text: "El término 'diseño de sonrisa' se ha convertido en una especie de paraguas que lo engloba todo, desde una limpieza con pulido hasta una rehabilitación oral completa. En mi consultorio en San Pedro, me tomo el tiempo de explicarle a cada paciente qué significa realmente este proceso y qué pueden esperar, porque las expectativas bien calibradas son la mitad del éxito." },
            { type: "h2", text: "¿Qué analiza un diseño de sonrisa profesional?" },
            { type: "p", text: "El diseño de sonrisa parte de un análisis que va mucho más allá de los dientes: considera la proporción del rostro, la simetría de los labios, la línea de la sonrisa (la curva que forman los bordes incisales), la exposición de encía al sonreír (la llamada 'sonrisa gingival') y el color base del esmalte. Solo cuando se tiene ese mapa completo se puede planificar un resultado verdaderamente armónico y natural." },
            { type: "h2", text: "Los tratamientos que componen un diseño de sonrisa" },
            { type: "p", text: "Dependiendo de la diagnosis, el plan puede incluir uno o varios de los siguientes: blanqueamiento dental previo como base de color, carillas de porcelana o composite para cambiar forma y tamaño, contorneo del esmalte (stripping) para ajustar proporciones, cirugía gingival menor para corregir encías asimétricas o la sonrisa gingival, y rehabilitación o coronas en casos de desgaste severo." },
            { type: "h2", text: "Las carillas: la herramienta estrella" },
            { type: "p", text: "Las carillas de porcelana son láminas ultrafinas —de entre 0.3 y 0.7mm de grosor— que se adhieren a la superficie frontal del diente. Son la herramienta más poderosa del diseño de sonrisa porque permiten cambiar simultáneamente el color, la forma, el tamaño y la textura de los dientes con una preparación mínimamente invasiva. Su resistencia y duración es sorprendente: bien colocadas y mantenidas, pueden durar 15 a 20 años." },
            { type: "h2", text: "La diferencia entre estética natural y estética artificial" },
            { type: "p", text: "Uno de mis principios fundamentales es que el mejor trabajo de estética dental es aquel que nadie nota que se hizo. Una sonrisa exitosa es aquella que luce impecable pero completamente auténtica, proporcional al rostro y coherente con la edad del paciente. Las sonrisas demasiado blancas, perfectamente simétricas y con proporciones idénticas suelen verse artificiales. La naturaleza tiene irregularidades sutiles que hacen que una sonrisa sea creíble y hermosa." },
        ]
    },

    // ──────────────────────────────────────────────
    // 6. REHABILITACIÓN ORAL
    // ──────────────────────────────────────────────
    {
        slug: "rehabilitacion-oral-cuando-necesitarla",
        title: "Rehabilitación Oral: cuándo la necesitas y qué implica realmente",
        excerpt: "Si tienes dientes desgastados, fracturados, o has perdido varias piezas, la rehabilitación oral puede devolverte la función masticatoria completa y una sonrisa natural. Aquí te explico cómo.",
        date: "05 de Febrero, 2024",
        readTime: "5 min lectura",
        category: "Rehabilitación",
        image: "/treatment_rehabilitacion.avif",
        content: [
            { type: "intro", text: "La rehabilitación oral es uno de los tratamientos más complejos y, a la vez, más transformadores que se realizan en odontología. Es también uno de los menos comprendidos. Muchos pacientes llegan pensando que 'rehabilitar' significa solo poner coronas, pero la realidad es mucho más profunda y científica." },
            { type: "h2", text: "¿Cuándo se indica una rehabilitación oral?" },
            { type: "p", text: "La indicación más común es el desgaste dental severo. Esto puede ocurrir por bruxismo (el hábito de apretar o rechinar los dientes, a menudo durante el sueño), por erosión ácida causada por reflujo gastroesofágico o dieta altamente ácida, por abrasión crónica, o simplemente por el paso del tiempo sin mantenimiento adecuado. Cuando el desgaste es tal que los dientes han perdido altura clínica, la mordida cambia, la función masticatoria se deteriora y la estética se ve comprometida." },
            { type: "p", text: "También se indica en pacientes con múltiples caries profundas no tratadas que han llegado a comprometer la estructura dental, en quienes han perdido varias piezas, o en casos de mal posición severa combinada con daño estructural." },
            { type: "h2", text: "¿Qué implica el proceso?" },
            { type: "p", text: "Una rehabilitación oral completa comienza con una etapa de diagnóstico exhaustivo: modelos de estudio, registros de mordida, fotografías intrabucales y extraorales, radiografías panorámicas y periapicales, y en muchos casos un análisis de la articulación temporomandibular. Con esa información, se diseña un plan de tratamiento multifase que puede incluir procedimientos periodontales previos, endodoncias, extracciones selectivas y la fase protésica definitiva con coronas, carillas, puentes o implantes." },
            { type: "h2", text: "Materiales: cerámica vs. zirconia" },
            { type: "p", text: "Para las restauraciones definitivas, los materiales más utilizados hoy son la cerámica pura (de alta translucidez y extraordinario parecido con el esmalte natural) y la zirconia de alta resistencia (ideal para zonas de alta carga masticatoria como los molares). En muchos casos uso combinaciones de ambos para optimizar tanto estética como resistencia. La elección del material siempre es una decisión técnica y personalizada." },
            { type: "h2", text: "¿Cuánto dura y qué mantenimiento requiere?" },
            { type: "p", text: "Una rehabilitación oral bien ejecutada puede durar décadas. Lo que la pone en riesgo no es el material —que es extraordinariamente durable— sino los hábitos: el bruxismo no tratado, la higiene deficiente o la falta de revisiones periódicas. Por eso, en cada caso de rehabilitación compleja, incluyo la confección de una férula de descarga nocturna para proteger el trabajo realizado. El mantenimiento semestral es tan importante como el tratamiento mismo." },
        ]
    },

    // ──────────────────────────────────────────────
    // 7. ENDODONCIA
    // ──────────────────────────────────────────────
    {
        slug: "endodoncia-tratamiento-conducto-sin-dolor",
        title: "Endodoncia: lo que nadie te cuenta sobre el tratamiento de conducto",
        excerpt: "El tratamiento de conducto tiene una fama injusta. La realidad clínica moderna es que es un procedimiento indoloro que salva dientes que de otra forma se perderían para siempre.",
        date: "25 de Enero, 2024",
        readTime: "4 min lectura",
        category: "Restauración Dental",
        image: "/treatment_endodoncia.avif",
        content: [
            { type: "intro", text: "Si hay un tratamiento odontológico que más miedo genera —muchas veces de forma completamente injustificada— es la endodoncia. Cuando le digo a un paciente que necesita un tratamiento de conducto, el color literalmente le cambia. Pero me ha tocado ver la expresión contraria también: la de alguien que llega convencido de que será algo terrible, y termina diciéndome 'no sentí nada'." },
            { type: "h2", text: "¿Qué es la endodoncia y cuándo se necesita?" },
            { type: "p", text: "La endodoncia es el tratamiento que permite conservar un diente cuya pulpa (el tejido vivo interno que contiene nervios y vasos sanguíneos) ha sido infectada o está severamente dañada. Las causas más comunes son: caries muy profunda que alcanza la pulpa, traumatismo dental, fractura coronaria, o una infección que ha progresado desde la encía hacia el interior del diente." },
            { type: "p", text: "Cuando la pulpa se infecta, el diente puede generar abscesos, dolor espontáneo intenso (especialmente nocturno), sensibilidad extrema al frío o calor, y en casos avanzados inflamación facial. Sin tratamiento, la infección puede extenderse al hueso y estructuras vecinas." },
            { type: "h2", text: "¿La endodoncia duele?" },
            { type: "p", text: "La endodoncia en sí misma no duele. Lo que duele es la infección previa. El procedimiento se realiza bajo anestesia local, y en la gran mayoría de los casos el paciente no siente ninguna molestia durante la sesión. Es posible que haya sensibilidad leve en los días posteriores, que se maneja perfectamente con analgésicos habituales. La tecnología actual —limas rotatorias de níquel titanio, localizadores electrónicos de ápice, magnificación con lupa o microscopio— ha reducido drásticamente los tiempos del procedimiento y mejorado enormemente los resultados." },
            { type: "h2", text: "¿Qué pasa después del tratamiento?" },
            { type: "p", text: "Un diente tratado endodónticamente pierde su irrigación natural, lo que lo hace más susceptible a fracturas. Por eso, después de la endodoncia casi siempre se indica una corona de cerámica o zirconia para proteger el diente a largo plazo. Un diente endodonciado correctamente y protegido con corona puede durar toda la vida. La alternativa —la extracción— siempre implica consecuencias en cadena: espacio vacío, desplazamiento de piezas vecinas, pérdida de hueso y eventualmente la necesidad de implantes o puentes, que son opciones significativamente más costosas." },
        ]
    },

    // ──────────────────────────────────────────────
    // 8. RONQUIDOS / TRASTORNOS DEL SUEÑO
    // ──────────────────────────────────────────────
    {
        slug: "ronquidos-solucion-dental",
        title: "Ronquidos y apnea del sueño: la solución dental que probablemente no conocías",
        excerpt: "Los ronquidos no son solo un problema de volumen. Pueden ser señal de apnea obstructiva del sueño, una condición con serias consecuencias para la salud cardiovascular. Y el dentista puede ayudarte.",
        date: "18 de Enero, 2024",
        readTime: "5 min lectura",
        category: "Salud Integral",
        image: "/treatment_ronquidos.avif",
        content: [
            { type: "intro", text: "Más de una pareja ha llegado a mi consultorio no porque tengan un problema dental evidente, sino porque uno de los dos ya no puede dormir. Los ronquidos severos —y la apnea del sueño que los acompaña— son un problema de salud real y serio, y la odontología tiene herramientas específicas para tratar su causa mecánica." },
            { type: "h2", text: "¿Cuál es la relación entre los ronquidos y la boca?" },
            { type: "p", text: "Los ronquidos se producen cuando el flujo de aire durante el sueño encuentra obstrucción en la vía aérea superior: la base de la lengua, el velo del paladar y la úvula vibran al paso del aire reducido. En la apnea obstructiva del sueño (SAOS), esta obstrucción es tan severa que interrumpe completamente la respiración por varios segundos repetidamente durante la noche, lo cual provoca microdespertares, caída en la oxigenación sanguínea y estrés cardiovascular significativo." },
            { type: "h2", text: "Los dispositivos intraorales: cómo funcionan" },
            { type: "p", text: "Los dispositivos de avance mandibular (DAM) son aparatos similares a un protector bucal, fabricados a medida con impresiones precisas de la boca del paciente. Funcionan posicionando la mandíbula ligeramente hacia adelante durante el sueño, lo que automáticamente tensiona los músculos y tejidos blandos de la faringe y amplía el espacio de la vía aérea. El resultado es una reducción significativa —o eliminación— de los ronquidos y los episodios de apnea." },
            { type: "h2", text: "¿En qué casos funciona mejor?" },
            { type: "p", text: "Los DAM son especialmente efectivos en ronquido simple y en apnea leve a moderada. En casos severos, el estándar de oro sigue siendo el CPAP (máquina de presión positiva continua), pero muchos pacientes los toleran mal. En esos casos, el dispositivo intraoral puede ser una alternativa viable o un complemento. Siempre trabajamos en coordinación con el médico especialista del sueño (neumólogo o neurólogo) para asegurar el enfoque correcto." },
            { type: "h2", text: "Las consecuencias de no tratar la apnea del sueño" },
            { type: "p", text: "La apnea no tratada está directamente vinculada con hipertensión arterial, mayor riesgo de infarto y ACV, diabetes tipo 2, problemas de concentración y memoria, y accidentes de tráfico por somnolencia diurna. No es solo un problema que 'molesta al que duerme al lado': es una condición con consecuencias médicas severas que merece atención profesional." },
        ]
    },

    // ──────────────────────────────────────────────
    // 9. LÁSER EN ODONTOLOGÍA
    // ──────────────────────────────────────────────
    {
        slug: "laser-dental-que-puede-tratar",
        title: "Láser en odontología: qué puede tratar y por qué cambia todo",
        excerpt: "El láser de diodo es una de las incorporaciones más relevantes a la odontología moderna. Menos sangrado, menos dolor postoperatorio y cicatrización más rápida. Aquí te explico para qué sirve.",
        date: "10 de Enero, 2024",
        readTime: "4 min lectura",
        category: "Innovación Médica",
        image: "/treatment_laser.avif",
        content: [
            { type: "intro", text: "Cuando le digo a un paciente que vamos a usar láser en el procedimiento, la reacción suele ser de curiosidad o ligero escepticismo. '¿Láser? ¿Como en las películas de ciencia ficción?' Sí, y no. El láser de diodo que usamos en odontología está muy lejos de la ciencia ficción, pero sus resultados a veces se sienten igual de sorprendentes." },
            { type: "h2", text: "¿Cómo funciona el láser en odontología?" },
            { type: "p", text: "El láser de diodo emite un haz de luz de alta energía con una longitud de onda específica que es absorbida selectivamente por los tejidos blandos. Esto significa que actúa con una precisión extraordinaria: corta, coagula y esteriliza simultáneamente, sin dañar las estructuras vecinas. No hay bisturí, no hay suturas en la mayoría de los casos, y el sangrado es mínimo." },
            { type: "h2", text: "¿Para qué se usa en el consultorio?" },
            { type: "p", text: "Las aplicaciones más frecuentes en nuestra práctica incluyen: tratamiento de encías inflamadas o con bolsas periodontales (esteriliza la bacteria directamente en el surco gingival), cirugía de frenillo labial o lingual en niños y adultos (procedimiento de minutos, sin sutura, cicatrización en días), remoción de tejido hipertrófico gingival (para mejorar la estética del margen de la encía), tratamiento de aftas o úlceras orales dolorosas (el láser sella las terminaciones nerviosas y acelera la curación dramáticamente), y desensibilización de dentina hipersensible." },
            { type: "h2", text: "Las ventajas reales para el paciente" },
            { type: "p", text: "La diferencia que el paciente experimenta es concreta: menos dolor postoperatorio (o ninguno, en procedimientos menores), cicatrización mucho más rápida, menor riesgo de infección porque el láser esteriliza al mismo tiempo que opera, y en muchos casos se elimina la necesidad de anestesia en procedimientos superficiales. Para pacientes con fobia dental o alta sensibilidad, el láser representa una mejora sustancial en la experiencia clínica." },
            { type: "h2", text: "¿El láser reemplaza al bisturí?" },
            { type: "p", text: "No completamente. Hay procedimientos que siguen requiriendo cirugía convencional —extracciones complejas, implantes, ciertas cirugías óseas—. Pero para todo lo que involucra tejido blando, el láser se ha convertido en la herramienta preferente. La pregunta no es si vale la pena: la pregunta es si tu dentista ya lo está usando." },
        ]
    },

    // ──────────────────────────────────────────────
    // 10. SALUD DENTAL EN EL EMBARAZO
    // ──────────────────────────────────────────────
    {
        slug: "salud-dental-embarazo-guia-completa",
        title: "Salud dental en el embarazo: la guía que tu ginecólogo probablemente olvidó darte",
        excerpt: "El embarazo transforma completamente el entorno hormonal de la boca. Descubre qué cambios esperar, qué tratamientos son seguros y por qué visitar al dentista durante la gestación es fundamental.",
        date: "02 de Enero, 2024",
        readTime: "5 min lectura",
        category: "Salud Integral",
        image: "/treatment_embarazo.webp",
        content: [
            { type: "intro", text: "En la lista de revisiones médicas del embarazo, la visita al dentista rara vez aparece. Y sin embargo, los cambios hormonales del embarazo tienen un efecto directo, medible y clínicamente significativo en la salud bucal. He tenido pacientes que llegaron al tercer trimestre con una infección periodontal severa que no existía al inicio de la gestación, simplemente porque nadie les dijo que vigilaran sus encías." },
            { type: "h2", text: "¿Por qué el embarazo afecta la salud bucal?" },
            { type: "p", text: "Los estrógenos y la progesterona, que aumentan dramáticamente durante el embarazo, alteran la respuesta inflamatoria del tejido gingival. Las encías se vuelven más sensibles a la presencia de placa bacteriana: incluso con una higiene razonable, pueden inflamarse, sangrar y desarrollar lo que se conoce como 'gingivitis del embarazo'. Esta condición afecta aproximadamente al 60-75% de las mujeres embarazadas." },
            { type: "p", text: "Además, los vómitos del primer trimestre exponen el esmalte dental al ácido gástrico de forma repetida, lo que puede iniciar un proceso de erosión. La salivación también cambia: algunos estudios reportan menor flujo salival, lo que reduce la capacidad neutralizante natural de la boca frente a los ácidos." },
            { type: "h2", text: "¿Qué tratamientos son seguros durante el embarazo?" },
            { type: "p", text: "Esta es la pregunta que más me hacen. La respuesta: más de lo que se piensa. Las limpiezas profesionales y el raspado periodontal son no solo seguros sino recomendables, especialmente en el segundo trimestre. Las radiografías, cuando son necesarias, pueden tomarse con protección abdominal; la exposición es mínima. Las anestesias locales a base de lidocaína son seguras. Lo que se pospone para después del parto son los procedimientos electivos (blanqueamientos, tratamientos estéticos) y las cirugías mayores." },
            { type: "h2", text: "La gingivitis del embarazo: qué hacer" },
            { type: "p", text: "Si notas que tus encías sangran más de lo normal, se ven más rojas o hinchadas, o que ciertos productos de higiene te irritan, no lo dejes pasar. La gingivitis no tratada puede progresar a periodontitis, y hay evidencia que asocia la enfermedad periodontal severa en el embarazo con partes pretérmino y bajo peso al nacer. No es alarmismo: es biología. El control profesional periódico durante el embarazo tiene implicaciones que van más allá de tus dientes." },
            { type: "h2", text: "Consejos prácticos para los nueve meses" },
            { type: "p", text: "Primero: avisa a tu dentista que estás embarazada nada más confirmarlo; esto cambia el protocolo de atención. Segundo: si tienes vómitos, no te laves los dientes inmediatamente después; enjuágate con agua con bicarbonato y espera 30 minutos para no arrastrar el ácido por el esmalte. Tercero: un chequeo en el primer trimestre y otro en el segundo son el mínimo ideal. Y si tienes alguna infección o dolor, no lo aguantes: una infección activa es más riesgosa para el bebé que el tratamiento para resolverla." },
        ]
    },

    // ──────────────────────────────────────────────
    // 11. ODONTOGERIATRÍA
    // ──────────────────────────────────────────────
    {
        slug: "salud-dental-adulto-mayor",
        title: "Salud dental en el adulto mayor: lo que cambia y cómo adaptamos el cuidado",
        excerpt: "La boca envejece al mismo ritmo que el cuerpo. El adulto mayor enfrenta desafíos bucales únicos —desde la boca seca hasta la fragilidad del esmalte— que requieren un enfoque clínico especializado.",
        date: "20 de Diciembre, 2023",
        readTime: "4 min lectura",
        category: "Odontogeriatría",
        image: "/treatment_odontogeriatria_v2.jpg",
        content: [
            { type: "intro", text: "La odontogeriatría es la rama que más ha crecido en mi práctica clínica en la última década, y es lógico: la población de adultos mayores en San Pedro Garza García es cada vez mayor, y sus necesidades dentales son bastante específicas. No se trata de 'odontología más suave', sino de una adaptación real del diagnóstico y el tratamiento." },
            { type: "h2", text: "¿Qué cambia en la boca con la edad?" },
            { type: "p", text: "Con el paso de los años, el esmalte se vuelve más delgado y propenso a microfracturas. La dentina se esclerosa, lo que reducer la sensibilidad dental (a veces los pacientes mayores no sienten dolor en caries profundas, lo que hace que lleguen tarde al diagnóstico). Los tejidos periodontales se vuelven menos resilientes. El flujo salival disminuye, en parte por el envejecimiento natural y en parte por los múltiples medicamentos que toman muchos pacientes adultos mayores." },
            { type: "h2", text: "La xerostomía: el gran problema invisible" },
            { type: "p", text: "La boca seca (xerostomía) es uno de los desafíos más serios en odontogeriatría. La saliva no es solo un lubricante: es la primera línea de defensa contra las bacterias cariogénicas. Cuando falta, el riesgo de caries cervicales (en el cuello del diente, cerca de la encía) se dispara. Muchos medicamentos de uso crónico —antihipertensivos, antidepresivos, diuréticos, antihistamínicos— tienen xerostomía como efecto secundario. Conocer la lista de medicamentos del paciente es parte fundamental de la evaluación geriatrica." },
            { type: "h2", text: "Prótesis: ¿cuándo renovarlas?" },
            { type: "p", text: "Las prótesis removibles bien construidas tienen una vida útil de aproximadamente 5 a 7 años. Después de ese tiempo, aunque visualmente se vean bien, pueden haber perdido su ajuste debido a la reabsorción ósea continua que ocurre bajo la encía. Una prótesis mal ajustada no solo dificulta la masticación: genera úlceras crónicas, puede afectar la pronunciación y tiene un impacto nutricional serio en personas mayores. Los implantes, cuando hay suficiente hueso, son la alternativa más estable y cómoda incluso después de los 70 u 80 años." },
            { type: "h2", text: "La conexión entre salud bucal y salud sistémica" },
            { type: "p", text: "En el adulto mayor, esta conexión es especialmente crítica. La enfermedad periodontal severa se ha asociado a mayor riesgo de neumonía aspirativa, descompensación de diabetes, inflamación cardiovascular y deterioro cognitivo. Mantener la boca limpia, libre de infección y con una masticación eficiente no es solo una cuestión de comodidad: forma parte del bienestar integral del paciente geriátrico." },
        ]
    },
];
