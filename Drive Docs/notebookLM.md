Sobre el por qué / la propuesta de valor


¿Cuáles son los "Three Ms of AI" y cómo se relacionan entre sí?
¿Cuáles son los "Four Cs of an AIOS" y por qué esos cuatro específicamente?
¿Cuáles son las "5 layers of AIOS" explicadas en el video de "What Is an AI Operating System" — y en qué capa caen los OS que estoy construyendo (Body/Mind/Finance) versus la capa de automatización?
¿Por qué dicen que un AIOS "is a methodology, not a business model"? ¿Qué significa eso en términos prácticos de cómo se vende?
¿Qué es "the bandwidth trap: working IN vs ON your business" y cómo se usa ese concepto para venderle esto a un dueño de negocio?
¿Cuáles son los "3 KPIs of an AI Operating System" que se mencionan?

Aquí tienes la respuesta a tus preguntas sobre la propuesta de valor y los fundamentos de un AIOS, basada en los materiales proporcionados:
The Three Ms of AI
Los "Three Ms of AI" son Mindset (Mentalidad), Method (Método) y Machine (Máquina)
. Se relacionan de forma jerárquica y continua:
Mindset: Es la lente a través de la cual miras cada tarea para identificar qué porcentaje puede ser apalancado por la IA (no es binario; se busca automatizar desde un 30% hasta un 70% de una tarea)
.
Method: Es el proceso estratégico para decidir qué tareas valen la pena automatizar y cómo descomponer los roles en funciones granulares
.
Machine: Es la capa técnica y las herramientas (como Claude Code) que ejecutan las automatizaciones diseñadas
.
The Four Cs of an AIOS
Los "Four Cs" definen los pilares de un sistema operativo de IA
:
Context (Contexto): Lo que la IA sabe sobre ti, tu equipo, tu voz y tu negocio
.
Connections (Conexiones): Los datos a los que la IA puede llegar (bases de datos, CRMs, herramientas internas)
.
Capabilities (Capacidades): Lo que la IA puede producir o hacer con esos datos (habilidades y procesos)
.
Cadence (Cadencia): Cuando el sistema actúa por sí solo de forma recurrente, incluso mientras duermes
. ¿Por qué estos cuatro específicamente? Porque construyen uno sobre otro en un orden estricto (1-4): no puedes tener cadencia sin conexiones, ni capacidades útiles sin un contexto profundo que las dirija
.
The 5 Layers of AIOS
Según Liam Ottley, un AIOS se construye en capas, no en saltos
:
Context Layer: La base que define quién eres, qué vendes y cuáles son tus valores
.
Data Layer: Conexión a fuentes de datos cuantitativos (Stripe, Google Sheets) para saber dónde estás respecto a tus metas
.
Intelligence Layer: Procesamiento de reuniones (Fireflies) y comunicaciones (Slack) para generar resúmenes diarios y reportes precisos
.
Automate Layer: Auditoría de tareas para eliminar el trabajo repetitivo y manual
.
Build Layer: El uso del ancho de banda recuperado para crear nuevas iniciativas que escalen el negocio
. Mapeo de tus OS: Los sistemas que estás construyendo (Body/Mind/Finance) caen principalmente en las capas de Context y Data, ya que establecen el conocimiento base y el estado actual de esas áreas
. La capa de automatización se sitúa por encima de estas, encargándose de las tareas recurrentes y el mantenimiento de esos dominios
.
Methodology vs. Business Model
Se dice que un AIOS "is a methodology, not a business model" porque no reemplaza la forma en que tu empresa genera valor (el producto o servicio que vendes), sino que es una capa o "envoltorio" (wrapper) de IA que optimiza cómo opera ese modelo
. Implicaciones prácticas para la venta:
No vendes una herramienta aislada, sino una transformación en la forma de hacer negocios
.
Te posicionas como un socio estratégico o consultor (el "doctor" que diagnostica), no como un simple vendedor de plantillas o "farmacéutico"
.
Vendes la capacidad de moverte más rápido que la competencia al tener una infraestructura "AI-ready"
.
The Bandwidth Trap
Es un concepto donde el dueño de negocio pasa el 80% de su tiempo trabajando "DENTRO" (IN) del negocio (operaciones, admin, fuegos diarios) y solo un 20% trabajando "SOBRE" (ON) el negocio (estrategia, nuevos productos, crecimiento)
. Cómo se usa para vender: Se le presenta al cliente como la solución para invertir esa balanza, automatizando el 60-70% de las tareas operativas para que el dueño recupere su libertad y pueda dedicar el 80% de su tiempo a iniciativas que realmente generen millones
.
The 3 KPIs of an AI Operating System
Para medir si un AIOS está funcionando, se mencionan estos tres indicadores clave
:
Away from desk autonomy: Cuánta capacidad tiene el sistema para que el dueño pueda operar el negocio desde su teléfono sin estar físicamente en su escritorio
.
Task automation percentage: Qué porcentaje de las tareas diarias del dueño han sido automatizadas o aumentadas significativamente por la IA
.
Revenue per employee: Qué tan eficiente es la organización al usar IA para generar más ingresos con el mismo o menor número de personas (considerado el "nuevo flex" en la era de la IA)
.
Sobre la arquitectura técnica correcta


¿Cómo describen la estructura de carpetas ideal de un proyecto AIOS en Claude Code — específicamente qué va en skills/, qué va en context/, y qué va en cualquier carpeta de "decisions" o "reference"?
¿Qué es exactamente la "Onboarding Skill" y cómo se construye?
¿Cómo se hace un "task audit" en la capa de automatización — qué preguntas se le hacen al cliente para identificar qué automatizar primero?
¿Qué dicen sobre "Cadence & Cloud Routines" y "Loop & Reminders" — cómo se programa que el sistema actúe de forma proactiva sin que el usuario tenga que pedirlo cada vez?
¿Cómo construyen dashboards usando Artifacts en vez de un frontend completo — y cuándo recomiendan uno sobre el otro?
¿Qué dicen sobre tokens y context windows en relación a mantener el CLAUDE.md eficiente a largo plazo?
¿Cómo conectan Google Workspace, ClickUp, y otras herramientas vía CLI o MCP — cuál es el patrón que siguen?
¿Qué son específicamente las "Capabilities" en contraste con las "Skills"?
¿Cuándo usan sub-agents versus agent teams, y cómo deciden cuál usar para una tarea específica?

Basado en los materiales proporcionados, aquí tienes el desglose de la arquitectura técnica para construir un AI Operating System (AIOS):
1. Estructura de carpetas ideal
Un proyecto AIOS bien organizado permite que Claude Code gestione el contexto eficientemente sin desperdiciar tokens
. La estructura recomendada incluye:
.claude/skills/: Contiene archivos Markdown (skill.md) que actúan como "recetas" o SOPs para tareas específicas (ej. crear un post o un reporte)
.
context/: Guarda archivos Markdown con información persistente sobre el negocio, el usuario (me.md), el equipo y las prioridades actuales
.
decisions/: Mantiene un registro histórico de las decisiones estratégicas tomadas entre el usuario y la IA
.
references/: Almacena guías, documentación externa (ej. API docs) y marcos de trabajo como los "3 Ms" para que la IA los consulte solo cuando sea necesario
.
archives/: Donde la IA mueve documentos antiguos o innecesarios para mantener el área de trabajo limpia
.
2. El "Onboarding Skill"
Es un proceso de entrevista de 7 preguntas diseñado para "escafoldear" (crear la base) del conjunto de archivos inicial del AIOS
.
Cómo se construye: Se define como una habilidad que pide al usuario información crítica: quién es, qué vende, ejemplos de su voz (posts de LinkedIn o emails) y sus prioridades para los próximos 90 días
. Al finalizar, el sistema genera automáticamente archivos como about_me.md y priorities.md en la carpeta context/
.
3. Task Audit: Qué automatizar primero
En la capa de automatización, se utiliza una habilidad llamada "Level Up" que realiza una auditoría de tareas mediante estas 5 preguntas clave para el cliente:
Recorrido semanal: ¿Qué hiciste 3 o más veces esta semana?
.
Pesadez (Drudgery): ¿Qué te resultó manual, aburrido o puramente de "copiar y pegar"?
.
Prueba del pasante inteligente: ¿Qué tarea podría hacer un pasante, pero terminaste haciendo tú porque explicarla tomaba más tiempo?
.
Restricción (Constraint): Si llegaran 500 clientes nuevos mañana, ¿qué proceso se rompería primero?
.
Palanca de crecimiento: ¿Qué proceso te daría 500 clientes más si estuviera en piloto automático?
.
4. Cadencia: Proactividad y Rutinas
Para que el sistema actúe sin intervención manual constante, se utilizan tres mecanismos:
Cloud Routines: Se configuran en la infraestructura web de Anthropic. Permiten ejecutar prompts o habilidades en horarios específicos (ej. lunes a las 6:00 AM) incluso con la laptop apagada
.
Local Routines: Similares a las de nube, pero requieren que la aplicación de escritorio esté abierta y la computadora encendida
.
Loop & Reminders: El comando /loop permite programar tareas recurrentes en intervalos cortos (ej. "revisa mi ClickUp cada 10 minutos") durante un máximo de 3 días
. Los recordatorios (remind me at X:XX) crean una notificación proactiva en la sesión actual
.
5. Dashboards con Artifacts vs. Frontend
Artifacts: Se usan para crear visualizaciones rápidas de datos en vivo (ej. un panel de Quickbooks o compromisos semanales en ClickUp) dentro de la interfaz de Claude
. Se recomiendan como Prueba de Concepto (PoC): si después de una semana notas que usas el artefacto varias veces al día, vale la pena escalar
.
Frontend completo: Se recomienda cuando se necesita una solución personalizada, con persistencia de datos compleja o cuando el dueño de negocio quiere operar sin entrar a Claude Code
.
6. Tokens y Eficiencia del CLAUDE.md
Para evitar que el CLAUDE.md consuma demasiada "memoria de trabajo" (context window), se debe seguir la regla de los 200 líneas máximo
.
Patrón de ruteo: En lugar de poner toda la información en el CLAUDE.md, este debe actuar como una tabla de contenidos que apunte a otros archivos (ej. "Para saber quién es Nate, lee context/me.md")
.
Carga progresiva: El sistema está diseñado para leer solo los nombres y descripciones de las habilidades al inicio, y solo cargar el contenido completo de una habilidad o referencia si la tarea actual lo exige
.
7. Conexiones (CLI y MCP)
El patrón ideal varía según la herramienta:
GWS CLI: Para Google Workspace se prefiere el CLI oficial de Google, que permite a Claude ejecutar comandos de terminal (Bash) para crear Docs, Sheets o Slides de forma estructurada y barata
.
MCP vs. API: Los servidores MCP (como el de ClickUp o Firecrawl) son geniales para explorar herramientas, pero cargan todas sus definiciones en el contexto
. Por ello, para tareas específicas y repetitivas, se recomienda hardcodear endpoints de API directos en los scripts, lo que ahorra miles de tokens
.
8. "Capabilities" vs. "Skills"
Skills: Son los archivos de instrucción reutilizables (recetas). Es el "cómo" se hace algo
.
Capabilities: Es el resultado práctico de lo que el AIOS es capaz de hacer gracias a la unión de contexto, conexiones y habilidades
. Por ejemplo, "Generar un reporte financiero" es una capacidad lograda mediante una habilidad (skill) que conecta con la API de Stripe
.
9. Sub-agents vs. Agent Teams
Sub-agents: Son trabajadores enfocados y stateless (sin memoria previa). Se usan para tareas paralelas que requieren mucho procesamiento de datos (ej. investigar 5 competidores a la vez) para mantener limpia la memoria de la sesión principal
. No pueden hablar entre ellos
.
Agent Teams: Son un ecosistema donde los agentes comparten una lista de tareas y se comunican entre sí
. Se eligen para proyectos complejos donde hay dependencias (ej. un desarrollador backend que debe avisar al frontend cuando la API esté lista para que el QA la pruebe)
.
Sobre cómo se entrega esto al cliente final (la pregunta más importante)


¿Cómo interactúa el cliente final con el sistema una vez construido — usan Claude Code directamente, un bot en WhatsApp/Telegram conectado por API, o algo más? ¿Cómo describen específicamente la interfaz de cara al usuario no técnico?
¿Construyen el chat de IA usando la API de Anthropic directamente (como una app separada) o hacen que el cliente use Claude Code como interfaz?
¿Qué significa "Context OS (history + integrations)" en el video de cómo vender esto a $5,000 — cómo se construye ese Context OS específicamente para un cliente nuevo?
¿Cómo trackean "ROI, observability, attribution" — qué métricas exactas le muestran al cliente para justificar el precio?
¿Qué dicen sobre "Offers that work" — cuáles son los paquetes o estructuras de oferta específicas que recomiendan?
¿Cómo describen el proceso de conseguir el primer cliente en 7 días?
¿Qué dicen sobre pricing de AI workflows — hay rangos específicos o metodología para llegar al precio?

La entrega de un AI Operating System (AIOS) al cliente final se enfoca en la transformación de sus operaciones mediante una arquitectura de capas, priorizando la facilidad de uso para perfiles no técnicos y la demostración clara del valor económico.
Interfaz e interacción del cliente final
La forma en que el cliente interactúa con el sistema varía según su perfil técnico y la complejidad de la solución:
Usuarios No Técnicos: Se recomienda el uso de un bot en Telegram conectado a través de un VPS (Servidor Privado Virtual) que actúe como un "Claude en tu bolsillo", permitiendo operar el negocio desde el teléfono mientras se está lejos del escritorio
.
Apps Web Personalizadas: Para fundadores que no quieren aprender Claude Code, se construyen interfaces web básicas (Custom Web Apps) que permiten chatear con el espacio de trabajo de Claude Code sin entrar al código
.
Claude Code Directo: Usuarios más avanzados o aquellos que buscan máxima productividad pueden usar la App de Escritorio de Claude o VS Code, donde operan directamente dentro del entorno de archivos y herramientas
.
Construcción del Chat de IA
En lugar de construir una aplicación desde cero usando solo la API, el enfoque predominante es usar Claude Code como el motor de desarrollo y ejecución
. Se crea un sistema donde Claude tiene acceso a una estructura de archivos y carpetas específica del negocio, y la interfaz (ya sea Telegram o una web app) funciona como un "wrapper" o envoltorio que permite al cliente enviar comandos a ese motor
.
Context OS (Historial + Integraciones)
El "Context OS" es la primera capa fundamental para un cliente nuevo y se construye de la siguiente manera:
Exportación de Historial: Se extrae el historial previo del cliente en ChatGPT o Claude y se "hornea" en archivos Markdown para que el sistema ya conozca su voz y decisiones previas
.
Estructura Base: Se instalan plantillas de carpetas (context/, decisions/, skills/) que definen quién es el cliente, qué vende, sus valores y su equipo
.
Conexión de Datos: Se vinculan fuentes cuantitativas (Stripe, CRMs, Google Sheets) para que la IA sepa en qué estado está el negocio respecto a su estrategia
.
Tracking de ROI, Observabilidad y Atribución
Para justificar el precio (ej. $5,000), se presentan métricas exactas que demuestran el impacto en el negocio:
ROI Cuantificable: Se calcula el costo de la labor manual actual (ej. horas semanales x valor hora del empleado) y se compara con la capacidad de la IA para automatizar ese porcentaje del proceso
.
Métricas de Operación: Se rastrea qué automatizaciones se están disparando, qué agentes se usan y cuánto tiempo promedio toma cada tarea automatizada frente a la manual
.
KPIs del AIOS: Los tres indicadores principales son la autonomía fuera del escritorio (capacidad de operar desde el móvil), el porcentaje de automatización de tareas y el ingreso por empleado (eficiencia de la organización)
.
Offers That Work (Estructuras de oferta)
Se recomiendan tres modelos principales de paquetes:
Entrenamiento y Soporte: Un cargo por configuración inicial (~5,000)m 
a
ˊ
 sunretenedormensual( 1,000 - $2,000) por llamadas semanales y mantenimiento técnico
.
Retenedor de Agencia (Modelo "DesignJoy"): Una tarifa mensual fija (ej. $2,500 - $5,000) a cambio de construir una o dos automatizaciones importantes al mes, actuando como un "socio de IA" constante
.
Producto Nicho (AIOS Productizado): Un sistema ya optimizado para un sector específico (ej. E-commerce) con una configuración de alto valor (~$10,000) y un modelo de suscripción posterior
.
Proceso de conseguir el primer cliente en 7 días
Este proceso se basa en "pescar en aguas conocidas" en lugar de hacer outreach masivo en frío:
Día 1: Construir un "mapa de confianza" con 20 contactos conocidos (amigos, familia, ex-colegas)
.
Días 2-3: Tener 5-10 conversaciones de baja presión para entender dónde pierden tiempo (diagnóstico)
.
Días 4-5: Proponer un piloto gratuito o de muy bajo riesgo para resolver un punto de dolor específico y doloroso
.
Día 7: Entregar el piloto, medir el resultado y ofrecer la expansión o mantenimiento como servicio pagado
.
Pricing de AI Workflows
La metodología recomendada es el Value-Based Pricing (VBP), donde no se cobra por tiempo, sino por resultados
:
Regla de Oro: El cliente debe percibir un retorno de 10 veces (10x) lo que invierte en el primer año
.
Cálculo Práctico: Si una solución ahorra $38,000 anuales en labor, se puede cobrar el 15% de ese ahorro como tarifa del proyecto (aprox. $5,500)
.
Retenedores de Mantenimiento: Suelen oscilar entre el 10% y el 25% del costo original del proyecto para cubrir actualizaciones de modelos y arreglos de APIs
.
martes, 16 de junio d
Where is the AI Chat used? The AI Chat meaning the place I talk to this system, tell it to do some tasks for me, gives me the reports, etc etc. Where? is it claude code, claude cowork? or do i use another chat interface and pay api tokens?

El chat de IA o la interfaz de interacción para un AI Operating System (AIOS) depende de quién lo use y de la etapa de desarrollo, pero principalmente se centra en el ecosistema de Claude.
Aquí tienes los lugares específicos donde interactúas con el sistema según las fuentes:
1. Claude Code (La Interfaz de Desarrollo y "Motor")
Para el creador del sistema y usuarios avanzados, Claude Code es el lugar principal para "hablar" con el sistema.
VS Code: Es la forma recomendada por Nate Herk. Usas una extensión dentro del editor de código para chatear con el agente, pedirle que ejecute "skills" (habilidades), genere reportes o realice auditorías
.
App de Escritorio de Claude: Permite usar Claude Code en una interfaz visual tipo chat más tradicional, donde puedes gestionar sesiones, ver tareas programadas y acceder a tus herramientas
.
Terminal: Para quienes prefieren una interfaz de línea de comandos, Claude Code se puede ejecutar directamente en la terminal de tu computadora
.
2. Claude Co-work (Interacción Visual y Dashboards)
Claude Co-work es una sección específica dentro de la App de Escritorio de Claude diseñada para la colaboración y visualización:
Artifacts en vivo: Aquí es donde el sistema te entrega dashboards interactivos (como uno de Quickbooks o ClickUp) que muestran datos en tiempo real en lugar de solo texto
.
Automatización programada: Aunque Claude Code ejecuta las tareas, la interfaz de Co-work se utiliza para ver y gestionar las automatizaciones que ocurren en segundo plano
.
3. Interfaces Externas (Para el cliente final o uso móvil)
Si estás construyendo esto para un dueño de negocio que no quiere abrir código, existen dos caminos principales:
Telegram vía VPS: Puedes conectar tu motor de Claude Code alojado en un servidor (VPS) a un bot de Telegram. Esto permite al usuario dar órdenes, recibir reportes y operar el negocio desde el teléfono mientras está lejos del escritorio
.
Custom Web Apps: Los expertos recomiendan construir aplicaciones web personalizadas y sencillas que funcionen como un "envoltorio" (wrapper). El cliente chatea en esa web, y por detrás, la app se comunica con el espacio de trabajo de Claude Code para ejecutar las tareas
.
4. Sobre el Pago: ¿Suscripción o Tokens de API?
El modelo propuesto se basa principalmente en suscripciones pagadas de Claude y no solo en tokens de API directos:
Suscripción Claude (Pro/Max): Para usar Claude Code de forma ilimitada y con las mejores capacidades (Opus 4.5/4.7), el usuario debe estar en un plan pagado (Pro de $20 o Max de más valor)
.
API Tokens: Se usan principalmente para las conexiones externas (como Perplexity para investigación o Firecrawl para scraping) que el sistema utiliza para obtener datos, pero la interfaz de chat en sí suele correr bajo la suscripción de Claude Code
.
En resumen: Tú "hablas" con el sistema mayormente en Claude Code (dentro de VS Code) durante la construcción, pero lo operas en el día a día desde Claude Co-work para ver dashboards o desde un bot de Telegram si estás fuera de la oficina
.
Tengo un problema concreto: en mi proyecto de Claude Code, le pedí algo hiper simple — "Comí 2 huevos fritos, añádelos al log de hoy" — y consumió aproximadamente 1000 tokens y tardó cerca de un minuto, cuando hacerlo manualmente habría sido más rápido. Probé lo mismo en Cowork y el consumo fue similar.


Preguntas:



¿Qué dicen los videos sobre por qué una tarea atómica y trivial (un solo INSERT de datos, sin razonamiento complejo) puede consumir tantos tokens dentro de Claude Code o Cowork? ¿Hablan de esto como un anti-patrón?

¿Hacen alguna distinción entre "operaciones de datos atómicas" (logging simple, un registro, una fila) versus "tareas de razonamiento" (buscar, sintetizar, generar contenido) en términos de qué herramienta/interfaz debería manejar cada una?

¿Qué dicen específicamente sobre cuándo NO usar Claude Code/Cowork para una tarea, y en su lugar usar un endpoint directo, una función simple, o una skill ultra-específica que evite cargar todo el contexto del proyecto?

¿Mencionan algo sobre cómo estructurar "skills" o "shortcuts" específicamente para que tareas de logging diario (comida, peso, hábitos, tareas) sean baratas en tokens y rápidas, en lugar de pasar por el razonamiento completo del agente?

¿Qué dicen sobre el costo real en tokens de tener el CLAUDE.md, los archivos de context/, y las skills cargándose en cada interacción, incluso para pedidos simples? ¿Cómo evitan ese "impuesto" de contexto en tareas pequeñas?

¿Dan algún ejemplo numérico o estimado de cuántos tokens debería costar una tarea simple bien optimizada versus una mal optimizada?

Tu problema es un ejemplo clásico de lo que las fuentes llaman el "impuesto de contexto" o la ineficiencia de usar un agente de razonamiento pesado para una tarea puramente determinística.
Aquí tienes las respuestas basadas en los materiales:
1. ¿Por qué una tarea trivial consume tantos tokens?
El consumo de 1000 tokens para una entrada simple no se debe al procesamiento de tu frase ("Comí 2 huevos..."), sino a la infraestructura que Claude carga en cada mensaje.
Lectura obligatoria: Cada vez que envías un mensaje, Claude Code lee primero el archivo CLAUDE.md completo, las definiciones de todas tus herramientas (MCP) y los metadatos de tus habilidades (skills)
.
El "Modo Agente": Claude no solo hace un "INSERT"; primero razona, busca el archivo de log, decide qué herramienta usar y verifica si necesita más información, lo cual consume tokens de "pensamiento" antes de actuar
.
Anti-patrón: Se describe como un error común cargar proyectos masivos para tareas pequeñas, ya que esto drena tus límites de sesión rápidamente
.
2. Distinción entre operaciones atómicas vs. tareas de razonamiento
Las fuentes hacen una distinción clara:
Tareas de Razonamiento: Son para procesos "no determinísticos" que requieren juicio, búsqueda web o síntesis de información (ej. investigar competidores)
.
Operaciones Atómicas: Para tareas predecibles y repetitivas (como el logging), "lo aburrido es hermoso"
. Se recomienda usar flujos de trabajo determinísticos (scripts puros) en lugar de agentes autónomos, ya que son más rápidos y baratos
.
3. Cuándo NO usar Claude Code/Cowork (y usar endpoints directos)
Debes evitar usar la interfaz general de Claude Code para tareas atómicas cuando:
Tienes tokens limitados: Los servidores MCP cargan todas sus definiciones de herramientas en la ventana de contexto, lo cual es ineficiente si solo necesitas una función específica
.
Recomendación: En lugar de un servidor MCP completo para una base de datos, las fuentes sugieren "hardcodear" endpoints de API directos o scripts de Python específicos que realicen solo esa tarea
. Esto evita cargar definiciones de herramientas que no vas a usar.
4. Estructuración de "Skills" para logging eficiente
Para que tu skill de "Food Log" sea barata y rápida, debes:
Hardcodear IDs y rutas: No dejes que el agente busque el archivo de log. Pon la ruta exacta del archivo o el ID de la base de datos directamente en el código de la skill o en su archivo Markdown
.
Carga Progresiva: Asegúrate de que tu skill use YAML front matter (nombre y descripción cortos). Claude solo leerá esas ~100 tokens para decidir si usa la skill, y solo cargará el resto si es estrictamente necesario
.
Sub-agentes especializados: Podrías delegar el logging a un sub-agente (usando un modelo más barato como Haiku) que solo tenga acceso a la herramienta de escritura de archivos, manteniendo limpia la memoria de tu sesión principal
.
5. El costo real de CLAUDE.md y context/
Carga recurrente: El CLAUDE.md se inyecta al inicio de cada interacción
.
Estrategia de ruteo: Para evitar el "impuesto", no pongas datos en el CLAUDE.md. Úsalo solo como una "tabla de contenidos" que apunte a archivos en context/
.
Regla de oro: Mantén el CLAUDE.md por debajo de las 200 líneas
. Si es más largo, estás pagando tokens innecesarios en cada "Hola".
6. Ejemplos numéricos de optimización
Las fuentes ofrecen algunos contrastes interesantes:
Búsqueda eficiente: Pasar de una búsqueda manual (grep) a una búsqueda semántica local puede reducir el uso de tokens en un 97% en proyectos grandes
.
Búsqueda de Skills: El nivel 1 de búsqueda de una skill (solo YAML) consume unas 100 tokens, mientras que cargar la skill completa puede costar miles
.
Base de sesión: En un proyecto mal gestionado, una sesión nueva puede empezar costándote 24,000 tokens (un 12% de tu ventana de 200k) antes de que escribas tu primera palabra, solo por la carga de herramientas y prompts del sistema
.
En resumen: Para registrar tus huevos fritos, lo más eficiente según esta metodología es tener una Skill de acción única con la ruta del archivo predefinida, o ejecutar un script de Python directo desde la terminal que no requiera que Claude "razone" sobre dónde guardarlo.
Bloque 2 — Qué van TODOS LOS DÍAS dentro del AIOS (el 90% de las tareas)

Analyzing Daily AIOS Tasks


I'm currently focused on dissecting the daily operations within the AIOS, specifically Block 2, which encompasses roughly 90% of the tasks. My goal is to pinpoint the core daily activities, inspired by the insights from Nate Herk and Liam Ott's video excerpts. I'm aiming for a clear understanding of the AIOS's operational heartbeat.

Según uno de los videos, la idea es que el usuario pueda hacer el 90% de sus tareas diarias dentro del AIOS sin salir de ahí — por ejemplo: definir tasks y subtasks del día, registrar comida, anotar aprendizajes, hacer journaling, escribir en Notion, trabajar en estrategia de marketing y appointment setting, todo dentro del sistema y sin que el costo en tokens se dispare.


Preguntas:



¿Cómo describen específicamente el flujo de un día típico usando el AIOS? ¿Qué porcentaje de esas tareas pasan por Claude Code/Cowork versus una interfaz/dashboard propio versus comandos directos?

¿Qué patrones usan para que pedidos como "organiza todo esto que tengo en la cabeza en tasks y subtasks y ponlo en mi dashboard de tareas del día" sean eficientes en tokens, en lugar de cargar todo el contexto del proyecto para una sola petición?

¿Mencionan algún sistema de comandos cortos, atajos, o "macros" dentro de Claude Code para acciones repetitivas diarias (logging de comida, peso, tareas, hábitos) que minimicen el consumo de tokens?

¿Qué tan realista es, según ellos, mantener el costo diario de tokens bajo usando este enfoque a largo plazo? ¿Dan números o rangos de costo mensual real para alguien usando esto a diario?

¿Recomiendan separar explícitamente qué va por una app/dashboard propio (con su propia base de datos y lógica) y qué va por el agente de IA (Claude Code/Cowork) para razonamiento y tareas más complejas?

Basado en los materiales proporcionados, el flujo de trabajo de un AI Operating System (AIOS) está diseñado para maximizar la productividad y minimizar la fricción de cambiar entre aplicaciones, utilizando patrones específicos para gestionar los costos de tokens.
1. Flujo de un día típico y uso de interfaces
El flujo diario se centra en la eliminación de la "fatiga de decisión" mediante el uso de habilidades proactivas
.
Mañana ("Morning Coffee"): El usuario inicia con una habilidad (ej. /morning-coffee) que lee el calendario, ClickUp y prioridades del trimestre para planificar el día y bloquear bloques de tiempo automáticamente
.
Durante el día: Se busca realizar el 90% de las tareas dentro del entorno (VS Code o la App de Claude) para evitar abrir nuevas pestañas del navegador o aplicaciones de escritorio
.
Movilidad (Away from Desk): Cuando el usuario no está en su escritorio, utiliza un bot de Telegram conectado vía VPS que actúa como un "Claude en el bolsillo", permitiendo operar el negocio desde el teléfono con acceso a los mismos archivos y herramientas
.
Porcentaje de uso: Aunque no dan un porcentaje exacto, el objetivo es que el agente de IA sea el punto de entrada principal para el razonamiento, mientras que las interfaces gráficas (Dashboards o Artifacts) se usan solo para visualización rápida de datos en vivo (Stripe, QuickBooks, ClickUp)
.
2. Eficiencia en tareas de "Brain Dump" (Tokens)
Para evitar cargar todo el contexto en pedidos como organizar tareas, se utilizan dos patrones principales:
Progressive Context Loading (Carga Progresiva): Claude primero busca en las "Skills" leyendo solo el YAML front matter (nombre y descripción), lo que consume apenas ~100 tokens
. Solo carga el contenido completo si la tarea lo requiere
.
Routing (Ruteo): El archivo CLAUDE.md actúa como una tabla de contenidos. En lugar de contener toda la información, apunta a archivos específicos (ej. "Para prioridades lee context/priorities.md")
.
Sub-agentes: Para procesar un "brain dump" pesado, se delega la tarea a un sub-agente "stateless" (sin memoria previa) que procesa los datos y solo devuelve un resumen conciso a la sesión principal, manteniendo limpia la ventana de contexto de esta última
.
3. Comandos cortos y "Macros"
El sistema utiliza un esquema de Skills que funcionan como recetas u SOPs ejecutables
.
Slash Commands: Se pueden crear comandos directos (ej. /log-food o /stretch) para disparar habilidades específicas sin necesidad de largas explicaciones
.
Hardcoding de IDs: Para que el logging sea barato, se recomienda poner las rutas exactas de los archivos o IDs de bases de datos directamente en el código de la skill, evitando que la IA gaste tokens "buscando" dónde guardar la información
.
Dictado por voz: Se recomienda el uso de herramientas como Glido para realizar estos "dumps" de forma natural y rápida
.
4. Realismo de costos a largo plazo
Las fuentes consideran que mantener el costo bajo es totalmente realista si se gestiona activamente el contexto.
Modelo de suscripción: Se recomienda el plan Claude Max (100−200/mes) en lugar de pagar por tokens de API individuales para el chat, ya que ofrece un retorno de inversión transformacional comparado con el costo de un ingeniero de software ($11,000/mes)
.
Costos por ejecución: Un flujo complejo (como una investigación de competencia con PDF e imágenes) puede costar entre $1.43 y $1.50 por ejecución de API
.
Reducción masiva: El uso de wikis de conocimiento (estilo Karpathy) puede reducir el consumo de tokens en un 95-97% en comparación con búsquedas semánticas tradicionales o carga de archivos masivos
.
5. Separación entre App/Dashboard y Agente de IA
Se recomienda una separación estratégica basada en la naturaleza de la tarea:
Boring is Beautiful (Determinístico): Las tareas repetitivas y predecibles (como el logging de datos o registros simples) deben manejarse mediante scripts de Python o TypeScript directos (o automatizaciones en herramientas como Trigger.dev), ya que son más rápidos y baratos que un agente de razonamiento
.
Razonamiento (No determinístico): Claude Code se reserva para tareas que requieren juicio, síntesis o planificación compleja
.
Artifacts como PoC: Se recomienda empezar construyendo un Artifact dentro de Claude Co-work para visualizar datos. Si después de una semana el usuario nota que lo consulta varias veces al día, entonces se justifica escalar a una web app o dashboard propio fuera del sistema
.
Tengo mi contexto, decisiones, y datos del negocio ya viviendo dentro de Supabase (base de datos), no en archivos Markdown en carpetas como context/, decisions/, skills/. Mi pregunta es si vale la pena migrar esa información a una estructura de carpetas tipo las que describen los videos, o si está bien que viva en Supabase y simplemente se consulte desde ahí.


Preguntas:



¿Los videos mencionan específicamente si el "Context OS" o la información persistente del negocio DEBE vivir en archivos Markdown locales, o puede vivir en una base de datos como Supabase y ser consultada por la IA cuando lo necesite?

¿Qué ventajas o desventajas mencionan de tener el contexto en archivos Markdown (legibles, versionables en git) versus en una base de datos relacional?

Si el contexto ya vive en Supabase, ¿qué rol jugarían entonces las carpetas de skills/ y decisions/? ¿Son complementarias a la base de datos (skills = instrucciones de cómo hacer algo, decisions = log histórico) en lugar de redundantes?

¿Mencionan algún patrón híbrido donde los datos cuantitativos/transaccionales viven en base de datos pero el "contexto cualitativo" (quién eres, tu voz, tus prioridades, decisiones pasadas) vive en archivos que la IA lee directamente?

Esta es una excelente pregunta técnica sobre la optimización de un AI Operating System (AIOS). Según los materiales, la respuesta corta es que vale la pena migrar el contexto cualitativo a archivos Markdown, mientras que los datos cuantitativos deben permanecer en tu base de datos (Supabase).
Aquí tienes el desglose detallado basado en las fuentes:
1. ¿El "Context OS" DEBE vivir en archivos locales?
Los videos hacen una distinción crítica entre Contexto y Conexiones:
Contexto (Capa 1): Es lo que la IA sabe sobre ti, tu voz, tus valores y prioridades
. Las fuentes recomiendan que esto viva en archivos Markdown locales dentro de una carpeta context/
.
Conexiones (Capa 2): Son los datos estructurados a los que la IA puede llegar (como tu base de datos Supabase)
.
¿Por qué local? Porque Claude Code está diseñado para leer automáticamente archivos como CLAUDE.md y archivos de contexto locales al inicio de cada sesión
. Si esta información vive en Supabase, el agente tendría que ejecutar una herramienta (tool call) o búsqueda cada vez que necesite saber quién eres, lo cual es ineficiente
.
2. Ventajas y desventajas: Markdown vs. Base de Datos
Las fuentes destacan varias ventajas de usar Markdown para el contexto del negocio:
Eficiencia de Tokens y Costo: Leer archivos Markdown locales es mucho más rápido y barato que realizar llamadas a APIs o peticiones HTTP a una base de datos externa
.
Carga Progresiva: Claude Code usa un sistema de "Carga Progresiva de Contexto". Primero lee solo los metadatos (YAML) para decidir qué archivos cargar, ahorrando miles de tokens en cada interacción
.
Control de Versiones (Git): Al tener el contexto en archivos, puedes usar GitHub para ver el historial de cambios, hacer rollbacks y sincronizar tu "cerebro de negocio" entre diferentes dispositivos
.
Legibilidad para la IA: El formato Markdown es nativo para los LLMs; lo procesan con mayor precisión que las estructuras de tablas relacionales cuando se trata de información no estructurada
.
3. El rol de skills/ y decisions/ frente a una base de datos
Si tus datos viven en Supabase, estas carpetas no son redundantes, sino que actúan como la capa de inteligencia:
skills/ (Instrucciones): Funcionan como "recetas" o SOPs
. Aunque tus datos estén en Supabase, necesitas una skill que le diga a la IA: "Para generar el reporte semanal, consulta la tabla X de Supabase, aplica este filtro y formatea el resultado así"
.
decisions/ (Log histórico): Guarda el razonamiento estratégico
. Mientras que una base de datos guarda el "qué" (el dato), la carpeta de decisiones guarda el "por qué" de los giros del negocio, lo cual sirve de memoria a largo plazo para futuras consultas de la IA
.
4. El patrón híbrido (Recomendación final)
Los expertos sugieren exactamente el patrón híbrido que mencionas
:
Datos Cuantitativos/Transaccionales (Supabase): Mantén aquí tus leads, ventas, registros de usuarios y logs pesados. La IA accederá a ellos mediante una conexión (API/MCP) solo cuando se le pida una tarea específica (ej. "Analiza las ventas de mayo")
.
Contexto Cualitativo (Markdown): Migra a la carpeta context/ archivos como me.md, business_model.md, voice.md y priorities.md
.
Conclusión: No migres tus datos transaccionales, pero sí "hornea" (bake) tu identidad de negocio y prioridades en archivos Markdown
. Esto elimina el "impuesto" de tener que consultar la base de datos para preguntas básicas y permite que Claude actúe como un socio que "ya sabe" lo que es importante sin que se lo pidas
.
Quiero entender mejor las capacidades de más alto nivel que mencionan los videos sobre lo que un AIOS puede hacer una vez tiene conexión a las herramientas del negocio, más allá de responder preguntas.


Preguntas:



¿Mencionan ejemplos específicos donde la IA detecta una ineficiencia en un proceso (por ejemplo, en onboarding de clientes) y crea automáticamente una automatización o propuesta de solución, que luego el dueño del negocio simplemente aprueba o rechaza?

¿Hablan de casos donde la IA, conectada a una herramienta de ads (Facebook Ads, Google Ads) vía MCP, detecta que una campaña está underperformando y le avisa proactivamente al dueño, pidiendo permiso para pausarla o ajustarla?

¿Mencionan flujos donde, tras detectar un problema, la IA conecta automáticamente con otra herramienta o MCP (por ejemplo, un generador de creativos) para proponer una solución completa, no solo señalar el problema?

¿Qué nivel de autonomía recomiendan darle a la IA en estos casos — siempre requiere aprobación humana antes de ejecutar acciones que cuestan dinero o afectan operaciones, o hay casos donde actúa de forma autónoma?

¿Dan una lista o framework de qué tipos de "detección proactiva + propuesta de solución" son los de mayor impacto/más vendibles a un negocio?

Las capacidades de un AI Operating System (AIOS) van mucho más allá de ser un simple chatbot; se posiciona como un sistema proactivo capaz de analizar, proponer y ejecutar acciones complejas mediante el uso de herramientas como Claude Code, servidores MCP y Skills personalizadas.
Aquí tienes el detalle basado en los materiales:
1. Detección de ineficiencias y creación de soluciones
Sí, los materiales describen flujos donde la IA identifica cuellos de botella y propone automatizaciones.
Habilidad "Level Up": Este sistema realiza una auditoría mediante 5 preguntas clave (como el "test del pasante inteligente" o el "limitador de escala") para encontrar procesos manuales que están frenando el negocio
. Una vez detectado el problema (ej. el onboarding), Claude puede generar un plan técnico, escribir el código de las herramientas necesarias y crear el SOP (Standard Operating Procedure) como una nueva "Skill"
.
Comando /explore: Liam Ottley menciona este comando diseñado para que la IA investigue tu base de código y la web para figurar, paso a paso, una solución o automatización potencial para una tarea específica que el dueño ya no quiere hacer
.
2. Conexión a Ads y monitoreo proactivo
Aunque no se muestra un video ejecutando una pausa de anuncios en vivo, se establecen las bases para ello:
Capa de Datos y Ads: El AIOS se conecta a fuentes como Facebook Ads y Google Analytics vía API o MCP
.
Daily Brief e Inteligencia: El sistema procesa los datos cuantitativos y genera un "Daily Brief" (resumen diario) en PDF o Telegram que señala "señales clave" y momentos interesantes de ingresos o rendimiento
.
Pulse Check: Existe una habilidad llamada "Pulse Check" que revisa el estado de todos los proyectos y compromisos, notificando proactivamente si algo se ha quedado atrás o necesita atención manual
.
3. Flujos de solución completa (Detección -> Propuesta -> Acción)
Los videos muestran ejemplos de cómo la IA conecta múltiples herramientas para resolver un problema de principio a fin:
De Video a Documento: Nate Herk muestra cómo Claude detecta la necesidad de una guía de recursos, busca el video en YouTube, descarga la transcripción vía API y usa el GWS CLI (Google Workspace CLI) para crear, formatear y enviarle un Google Doc listo
.
Repurposing de Contenido: Se describe un flujo donde Claude toma un video, lo analiza y coordina a otros agentes para crear posts de LinkedIn, carruseles de Instagram y tweets, incluso redimensionando imágenes automáticamente si la API detecta que son demasiado grandes
.
4. Niveles de Autonomía y Aprobación Humana
El sistema ofrece flexibilidad total dependiendo de la sensibilidad de la tarea:
Modo Plan (Recomendado): La IA solo investiga y propone un enfoque detallado, pero no toca nada hasta que el usuario aprueba el plan
.
Bypass Permissions (Full Autonomy): Permite que Claude ejecute comandos de terminal (Bash) y tome acciones de forma totalmente autónoma
. Sin embargo, Nate recomienda permitir explícitamente comandos seguros y denegar otros destructivos (como borrar bases de datos)
.
Aprobación en Casos Sensibles: En tareas como publicar en redes sociales, los expertos prefieren configurar el sistema para guardar todo en una carpeta de "borradores" (drafts) para revisión manual antes de salir al aire
.
5. Framework de mayor impacto (Lo que más se vende)
Nate Herk y Liam Ottley sugieren que las intervenciones proactivas más vendibles a un negocio se centran en el ahorro de tiempo y dinero (ROI) bajo este framework de 5 preguntas
:
Drudgery (Pesadez): Tareas manuales y aburridas que se repiten 3 o más veces por semana (ej. reportes financieros).
Smart Intern Test (Test del Pasante): Tareas que podrías delegar a un pasante pero terminas haciendo tú porque explicarlo toma más tiempo que hacerlo.
Scale Constraint (Restricción de Escala): ¿Qué proceso se rompería primero si mañana llegan 500 clientes nuevos? (ej. onboarding o soporte).
Growth Lever (Palanca de Crecimiento): ¿Qué proceso te traería 500 clientes más si corriera en piloto automático? (ej. lead generation).
Daily Brief: La capacidad de dar al dueño un resumen ejecutivo de lo que pasó mientras dormía, eliminando horas de revisión de Slack y correos
.
Quiero aclarar el rol de Claude Code y Cowork como interfaz de USO diario para operar un negocio — no para construir o programar nada, sino para tareas operativas reales. Ejemplos: "tienes todos los clientes que entraron este mes, pásamelos en un PDF" o "necesitamos nuevos creativos para esta campaña que está en Notion, búscala y hazlos".


Preguntas:



¿Describen específicamente el uso de Claude Code o Cowork como la interfaz diaria de OPERACIÓN de negocio (no de desarrollo) para el dueño o su equipo? ¿Qué tipo de tareas operativas mencionan como ejemplos?

¿Hacen una distinción entre tareas que SÍ deberían pasar por Claude Code/Cowork (búsqueda, síntesis, generación de documentos, creativos) versus tareas que NO deberían (logging atómico, datos simples) y por qué?

¿Mencionan a Nate Herk u otros "pioneros" usando Claude Code o algún plugin de Claude Code como su interfaz principal de operación diaria de negocio, no solo para pruebas? ¿Es una recomendación permanente o algo temporal mientras no existía otra opción?

¿Qué dicen sobre la eficiencia de token y velocidad de Claude Code/Cowork para este tipo de tareas operativas de negocio versus construir una interfaz/dashboard propio para las mismas tareas?

Para operar un negocio diariamente, Claude Code y Cowork se posicionan no solo como herramientas de desarrollo, sino como la interfaz de control centralizada (el "vidrio") entre el dueño y su empresa. El objetivo es que puedas pasar todo el día con Claude Code abierto y ser más productivo que alguien saltando entre 15 pestañas del navegador
.
Aquí tienes las respuestas específicas según los materiales:
1. Interfaz de Operación Diaria y Tareas Reales
Sí, los videos describen este uso operativo extensamente. Nate Herk afirma que utiliza Claude Code como su capa de sistema operativo personal para gestionar su comunidad y canal de YouTube de forma consistente
.
Ejemplos de tareas operativas mencionadas:
Planificación ("Morning Coffee"): Leer el calendario, ClickUp y correos para bloquear bloques de tiempo de trabajo basados en prioridades
.
Generación de Reportes: Pedirle un reporte del tercer trimestre (Q3) al final del día; la IA conoce el SOP (procedimiento), accede a los datos y genera el documento
.
Búsqueda y Recuperación: Localizar instantáneamente un archivo de Slack o un Google Sheet del mes pasado que no encuentras
.
Gestión de Comunicaciones: "Envía un mensaje a Nate en ClickUp" o calificar correos no leídos basándose en el contexto del negocio
.
Operación Móvil: Usar un bot de Telegram conectado a Claude Code para operar el negocio (ver reportes, dar instrucciones) desde el teléfono mientras estás en un concierto o en la playa
.
2. Tareas para Claude vs. Tareas Atómicas
Los materiales hacen una distinción fundamental basada en la naturaleza del proceso:
SÍ deben pasar por Claude (Razonamiento): Tareas no determinísticas que requieren juicio, búsqueda web, síntesis de datos o creatividad (investigar competidores, crear un slide deck, analizar comentarios de YouTube)
.
NO deben pasar por el razonamiento puro (Logging atómico): Nate enfatiza que "lo aburrido es hermoso" y que para procesos determinísticos (repetitivos y predecibles) es mejor usar scripts puros o automatizaciones tradicionales en vez de agentes autónomos
.
Por qué: El uso de agentes para tareas simples genera el "impuesto de contexto" (consumo excesivo de tokens y tiempo) que mencionaste con tu ejemplo de los huevos fritos. La recomendación es "hardcodear" rutas y usar scripts específicos llamados por una "Skill" para que la IA actúe como un ejecutor rápido y no como un pensador lento
.
3. Pioneros y Recomendación de Uso
Nate Herk: Declaró su pivote total de n8n a Claude Code porque se siente mucho más productivo operando desde una interfaz de texto que puede ver todos sus archivos y herramientas simultáneamente
.
Liam Ottley: Afirma que corre todo su negocio desde código (Cursor/Claude Code) y que ya no utiliza las interfaces web de las herramientas (como el dashboard de Stripe o ClickUp) de forma directa
.
¿Temporal o Permanente? Se presenta como una metodología duradera (AIOS), aunque Nate advierte que las herramientas específicas cambian cada 6 meses. La recomendación es construir de forma "tool agnostic" (independiente de la herramienta) para que tu sistema de archivos y contexto (Markdown) pueda mudarse a cualquier nuevo modelo o interfaz que surja
.
4. Eficiencia de Tokens: Interfaz Propia vs. Claude Code
Los expertos sugieren un camino híbrido basado en la validación:
Artifacts (PoC rápida): Recomiendan usar Artifacts en Claude Cowork para crear dashboards visuales rápidos (ej. QuickBooks o compromisos semanales)
.
Eficiencia de la "Skill": Una Skill bien optimizada usa carga progresiva de contexto (solo lee ~100 tokens de metadatos para decidir si activarse) y puede reducir el uso de tokens en un 95% comparado con una búsqueda manual pesada
.
Cuándo construir una interfaz propia: Nate aplica la regla del Proof of Concept (PoC): si construyes un Artifact y notas que lo revisas 4 veces al día, entonces vale la pena dedicar recursos a construir una web app o dashboard propio
.
Velocidad: Para reportes bajo demanda ("pásame los clientes en PDF"), chatear con el sistema es más rápido y barato que mantener un dashboard complejo, ya que obtienes la información solo cuando la necesitas
.
En resumen: Claude Code es tu centro de mando para tareas que requieren cerebro, pero para registrar datos simples (logging), debes usar Skills que disparen scripts directos para evitar pagar el "impuesto de razonamiento" en cada interacción.
A nivel personal (no para un negocio con varios empleados), quiero entender la comparación de valor entre pagar $20/mes del plan Pro de Claude versus gastar esos mismos $20 directamente en créditos de API, específicamente para uso dentro de Claude Code o Cowork en tareas operativas diarias (no para construir software).


Preguntas:



¿Los videos comparan específicamente cuántas "requests" o cuánto uso real se obtiene con $20 de plan Pro versus $20 en tokens de API, para alguien usando Claude Code/Cowork en operaciones diarias?

¿Mencionan algún punto de quiebre (breakeven) de uso diario/mensual donde conviene más quedarse en Pro versus moverse a API directa, a nivel de un solo usuario individual (no equipo)?

¿Qué recomiendan específicamente para alguien que planea usar Claude Code/Cowork de forma intensiva a diario para operar su propio negocio personal, en cuanto a qué plan maximiza el valor por dólar?

Basado en los materiales proporcionados, aquí tienes la comparación de valor entre el plan Pro y el uso de la API para operar un negocio personal con Claude Code:
1. Comparación de "requests" y uso real
Los videos no ofrecen un desglose matemático exacto de cuántas peticiones obtienes con $20 en tokens de API frente a $20 del plan Pro. Sin embargo, establecen comparaciones basadas en límites operativos según el plan de suscripción:
Límites de Sesión: El plan Pro tiene límites de mensajes y de "ventana de contexto" (context window) que se recargan cada pocas horas
.
Límites de Rutinas (Cadencia): Si usas Claude Code para automatizaciones proactivas (Cloud Routines), el plan Pro está limitado a unas 3 o 5 ejecuciones diarias, mientras que el plan Max permite hasta 15
.
Eficiencia de Tokens: Se menciona que un flujo complejo (como una investigación con PDFs) puede costar entre $1.43 y $1.50 por ejecución vía API
. Esto sugiere que con $20 en la API podrías realizar unas 13-14 tareas complejas, mientras que el plan Pro permite un uso mucho más voluminoso para chatear y razonar dentro de sus límites horarios
.
2. Punto de quiebre (Breakeven)
Aunque no dan un número exacto de mensajes, los videos mencionan que el "punto de quiebre" para abandonar el plan Pro o el uso medido de la API ocurre cuando la fricción operativa afecta tu productividad:
Frecuencia de Uso: Si planeas usar Claude Code/Cowork durante toda tu jornada laboral, "probablemente alcanzarás tus límites muy rápido en el plan Pro"
.
Previsibilidad de Costos: Los expertos recomiendan los planes de suscripción porque es mejor tener un costo fijo en lugar de "preocuparse por cuántos tokens estás acumulando" cada vez que pides una tarea operativa
.
Uso Intensivo: Si el sistema debe estar "siempre encendido" o ejecutando tareas en paralelo, el plan Pro se queda corto y el salto lógico es hacia el plan Max (100−200/mes)
.
3. Recomendación para uso intensivo diario
Para alguien que opera su propio negocio personal de forma intensiva, la recomendación de los videos es clara: Maximiza el valor por dólar optando por el plan de suscripción más alto que puedas permitirte (Max), en lugar de créditos de API directos para el chat.
Las razones específicas son:
ROI Transformacional: Aunque $100 o 200almesparececaro,esinsignificantecomparadoconelcostodeundesarrolladorhumano( 11,000/mes), ofreciendo un retorno de inversión mucho más alto que el ahorro marginal de usar API tokens
.
Enfoque en el Negocio: Al tener una suscripción, eliminas la fatiga mental de calcular el costo de cada interacción simple (como el registro de comida o tareas), permitiéndote usar el sistema como un socio de pensamiento constante
.
Escalabilidad: La metodología recomendada es: Empieza en Pro ($20). Si te bloqueas por límites, sube al plan de $100, y si es necesario, al de $200
.
En resumen: Para operaciones diarias, la suscripción fija (Pro o preferiblemente Max) es superior a los créditos de API porque permite un uso libre de razonamiento, dejando los créditos de API exclusivamente para herramientas externas específicas (como Perplexity o Firecrawl) que el sistema pueda necesitar llamar
.
Quiero entender cómo los videos describen la PRESENTACIÓN del value proposition de un AIOS a un dueño de negocio — no cuánto cobrar ni el modelo de pricing, sino el framing y la narrativa que lo hace sonar como la propuesta de valor más fuerte posible.


Preguntas:



¿Qué frases, analogías, o framing específico usan para describir el value proposition de un AIOS de la forma más impactante posible (más allá de "ahorra tiempo")?

¿Cómo describen la transformación de "antes" (el dueño atrapado operando) a "después" (el dueño con un sistema que opera proactivamente) de la forma más persuasiva?

¿Usan alguna metáfora o comparación específica (ej. "tu propio J.A.R.V.I.S.", "un Chief of Staff que nunca duerme", "contratar sin contratar") que recomiendan repetir al presentar esto a un cliente potencial?

¿Qué objeciones anticipan que tendrá un dueño de negocio escéptico, y cómo recomiendan reformular el value proposition para superarlas en el pitch inicial?

¿Dan algún ejemplo de pitch o guión completo de cómo presentar esto en una primera conversación con un cliente potencial?

La presentación de la propuesta de valor de un AI Operating System (AIOS) se aleja de la venta técnica de "agentes" o "flujos" para centrarse en una narrativa de transformación operativa y libertad estratégica para el dueño de negocio.
Aquí tienes el desglose de cómo los materiales describen este framing y narrativa:
1. Frases y Framing de Alto Impacto
En lugar de simplemente decir "ahorrarás tiempo", las fuentes utilizan marcos que posicionan al constructor como un socio estratégico:
El "Doctor vs. Farmacéutico": No actúes como un farmacéutico que solo despacha lo que el cliente pide; actúa como el doctor que hace preguntas diagnósticas para encontrar dónde le "duele" realmente el negocio (tiempo, dinero o enfoque)
.
"Lo aburrido es hermoso": Presenta el sistema no como algo "mágico", sino como una infraestructura que hace que los procesos determinísticos y pesados (drudgery) sean predecibles y automáticos
.
"Vende el alivio, no la pastilla": Al dueño no le importa si usas Python, MCP o 15 nodos de automatización; solo le importa que su "dolor de cabeza" desaparezca
.
La analogía de las vías del tren: La automatización tradicional es como poner cada riel a mano; el AIOS es como dar instrucciones a un equipo de construcción inteligente que maneja los casos inesperados por ti
.
2. La Transformación: Del "Antes" al "Después"
La narrativa de transformación se centra en romper la "Bandwidth Trap" (trampa del ancho de banda):
Antes (El Dueño Atrapado): Se describe al dueño pasando el 80% de su tiempo trabajando "DENTRO" (IN) del negocio (admin, operaciones, apagar fuegos), dejando solo un 20% para el crecimiento
.
Después (El Dueño Estratégico): Con un AIOS, la balanza se invierte para que el dueño pase el 80% de su tiempo trabajando "SOBRE" (ON) el negocio (estrategia, nuevos productos), mientras la IA gestiona la capa operativa
.
Hacia la "Inteligencia Centralizada": La transformación final es pasar de una estructura jerárquica lenta a un negocio donde todo revolve alrededor de una inteligencia contextualizada que permite a cada empleado moverse 10 veces más rápido
.
3. Metáforas y Comparaciones Clave
Para que el concepto sea tangible, se recomiendan estas comparaciones:
"Un ingeniero de software en tu laptop por $100 al mes": En lugar de verlo como una suscripción cara, preséntalo como el output de un desarrollador senior a una fracción de su costo
.
"Un empleado 24/7 que nunca duerme y tiene memoria perfecta": A diferencia de un humano que olvida archivos o conversaciones en Slack, el AIOS lo recuerda todo y puede actuar mientras el dueño duerme
.
"Tu Segundo Cerebro Ejecutivo": Un sistema que conoce tu voz, tus valores y tus prioridades, permitiéndote delegar decisiones operativas en lugar de solo tareas
.
"Claude en tu bolsillo": La capacidad de operar el negocio desde Telegram mientras estás en un concierto o en la playa, logrando autonomía total fuera del escritorio
.
4. Objeciones y Reformulación (Reframing)
Los materiales anticipan objeciones comunes y ofrecen formas de superarlas:
Objeción: "Esto es solo hype/humo": Responde que la automatización ha existido siempre, pero ahora tiene un "letrero de neón" llamado IA que permite resolver problemas que antes eran demasiado variables para el software tradicional
.
Objeción: "Es muy caro ($5,000+)": Reformula el precio no como un costo, sino como una inversión con un ROI de 10x. Si el sistema ahorra $38,000 en labor anual, cobrar $5,500 es un "no-brainer"
.
Objeción: "No quiero perder el control": Explica que el sistema incluye "puntos de revisión humana" (Human review checkpoints), donde la IA prepara todo (ej. un post o un reporte), pero no lo envía sin tu aprobación final
.
Objeción: "¿Quién es dueño de la propiedad intelectual?": Asegura que toda la IP (prompts, flujos, datos) pertenece al cliente, ya que está construida sobre su contexto específico
.
5. Ejemplo de Pitch / Guión de Conversación
Se sugiere iniciar la conversación no con una demo, sino con una investigación de ineficiencias:
Apertura sugerida: "Estoy mapeando los mayores drenajes de tiempo en [nicho]. En 15 minutos intentaré cuantificar tu cuello de botella más grande y compartiré dónde la IA ayuda y dónde no. Sin ventas, solo quiero aprender"
.
El proceso de "Picar" (Poke): Durante la llamada, escucha el proceso del cliente y luego "pica" con preguntas como: "¿Si mañana llegaran 500 clientes nuevos, qué proceso se rompería primero?"
.
La propuesta del piloto: Una vez identificado el problema, propón: "Déjame construirte un pequeño piloto gratuito/bajo riesgo para resolver esta tarea específica. Solo te pido feedback honesto y permiso para usarte como caso de estudio si funciona"
.
Sobre el límite de Cloud Routines: el bloque 6 mencionó de pasada "3-5 ejecuciones diarias en Pro vs 15 en Max" para Cloud Routines — quiero que confirmes esto porque si es cierto, define directamente si puedes correr cosas como "Pulse Check" diario o "Morning Coffee" automático con tu plan actual o si necesitas subir de plan antes de construir esas skills.
Sobre el modelo Haiku para sub-agentes de logging: el bloque 1 mencionó delegar logging a un sub-agente con Haiku para abaratar costos. Vale la pena preguntar específicamente cómo se configura eso dentro de Claude Code (¿es un parámetro del sub-agente, requiere API separada, o es nativo de las skills?) antes de que yo te proponga una arquitectura que asuma algo que no existe así.
Sobre el "comando /explore" de Liam: mencionado en el bloque 4 como la forma en que la IA detecta procesos a automatizar — valdría preguntar si es un comando custom que él mismo creó (y cómo está armado) o es nativo de Claude Code, porque si es nativo nos ahorra construir esa skill desde cero.

Aquí tienes la información confirmada y detallada sobre tus dudas técnicas y de límites, basada en los materiales de Nate Herk y Liam Ottley:
1. Límites de Cloud Routines (Pro vs. Max)
Se confirma que los límites de ejecuciones diarias para las Cloud Routines (automatizaciones que corren en la infraestructura de Anthropic sin necesidad de tener tu laptop encendida) dependen estrictamente de tu plan:
Plan Pro ($20/mes): Tienes un límite de 5 ejecuciones diarias
.
Plan Max ($200/mes): El límite sube a 15 ejecuciones diarias
.
Implicación para tu OS: Si planeas automatizar un "Pulse Check" y un "Morning Coffee" diario, el plan Pro es suficiente para esas dos tareas atómicas. Sin embargo, si planeas escalar a más de 5 disparadores automáticos por día, necesitarás el plan Max
.
2. Configuración de Sub-agentes con Haiku para Logging
Delegar tareas como el logging a un sub-agente usando Claude Haiku es una estrategia nativa para ahorrar tokens y dinero, y se configura de la siguiente manera:
Es un parámetro nativo: No requiere una API separada; se define directamente en el YAML front matter (los metadatos al inicio del archivo) del agente o la skill
.
Forma de configurarlo: En el archivo Markdown del agente (ej. .claude/agents/logger.md), simplemente debes incluir la línea model: haiku en los metadatos iniciales
.
Uso vía comandos: Si creas el agente usando el comando nativo /agents, el sistema te preguntará qué modelo deseas asignar, permitiéndote elegir Haiku de forma visual
.
Beneficio: Este sub-agente "despierta" con su propio contexto fresco y un costo operativo mucho menor, devolviendo solo el resultado (el log exitoso) a tu sesión principal de Opus sin "ensuciar" tu ventana de tokens con el razonamiento del insert
.
3. El comando /explore de Liam Ottley
Existe una distinción importante entre la funcionalidad nativa y la de Liam:
Sub-agente Explore (Nativo): Claude Code tiene un sub-agente nativo llamado explore que se encarga de buscar y analizar el código base. Este corre en Haiku y tiene permisos de solo lectura
.
Comando /explore de Liam (Custom): Liam Ottley describe /explore como un comando custom que él mismo diseñó y "empaquetó" para su comunidad
.
Cómo está armado: Es una Skill o Comando que utiliza la lógica de investigación del modelo para guiar al usuario a través de varias fases: buscar en la web, revisar el código actual y proponer un plan de implementación paso a paso para una nueva automatización
.
Recomendación: Aunque el motor de búsqueda es nativo, la estructura de "test del pasante" o "cuello de botella de escala" que Liam usa para detectar qué automatizar es una capa de instrucciones (Skill) que deberías construir o replicar en tu skill.md para obtener esos resultados específicos
.
Resumen práctico: Puedes empezar con el plan Pro para tus tareas básicas de logging y rutinas diarias, configurando tu sub-agente de logging con model: haiku en su archivo de definición para maximizar tus 200k tokens
.


¿Mencionan los videos específicamente cómo manejan equipos de varias personas (2+ cofounders o empleados) usando Claude Code/Cowork sobre el mismo proyecto/contexto compartido? ¿Recomiendan Team plan con varios asientos, o cada persona con su propio Pro/Max y sincronizando vía git el contexto compartido?




Cuando describen el bot de Telegram + VPS para clientes, ¿ese bot usa API de Anthropic directa, o de alguna forma reutiliza una sesión de Claude Code/Cowork corriendo en el VPS? ¿Mencionan algún costo aproximado mensual de mantener ese VPS + API para un negocio con varios empleados accediendo?




Para un equipo de 4 empleados usando el mismo AIOS, ¿recomiendan que cada empleado tenga su propia "identidad" dentro del contexto (ej. context/team/empleado1.md) o que todos compartan el mismo CLAUDE.md sin distinción de quién está preguntando?



Basado en los videos y materiales de Nate Herk y Liam Ottley, aquí tienes el desglose sobre el manejo de equipos, la infraestructura de bots y la gestión de identidades en un AIOS:
1. Manejo de equipos (2+ personas) y Sincronización
Los materiales no detallan profundamente las mecánicas del "Team Plan" de Anthropic, pero establecen una metodología clara para la colaboración técnica y operativa:
Sincronización vía Git/GitHub: Es la recomendación principal para que varias personas trabajen sobre el mismo contexto. Al subir el proyecto AIOS a un repositorio privado de GitHub, cada miembro del equipo puede clonar los archivos (contexto, habilidades y reglas) en su propia máquina
.
Gestión de conflictos: Se recomienda el uso de ramas (branches) y "worktrees". Esto permite que diferentes cofundadores o empleados trabajen en funciones distintas simultáneamente sin sobreescribir el trabajo de otros, fusionando los cambios al finalizar
.
Planes Pro/Max vs. Team: Nate Herk menciona que usa el plan Max ($200/mes) por su alto ROI
. Sobre el plan Team, señala que las rutinas (Cloud Routines) pertenecen a cuentas individuales, aunque sugiere que en un plan de equipo podrían compartirse (nota que aún no lo había testeado exhaustivamente en ese momento)
.
Estándares compartidos: Para mantener la coherencia, se utiliza el archivo .claude/settings.json para definir los "estándares de equipo", mientras que cada usuario usa settings.local.json para sus preferencias personales o claves de API individuales
.
2. Bot de Telegram + VPS: Arquitectura y Costos
La integración para clientes no técnicos se describe como un puente hacia el sistema existente:
Arquitectura: El bot de Telegram funciona como un "bridge" o puente que se conecta a una sesión de Claude Code activa en un VPS (Servidor Privado Virtual)
. No es simplemente una llamada a la API de Anthropic aislada; el bot permite al usuario interactuar con el entorno de archivos, ejecutar "skills" y acceder a la memoria del negocio desde el móvil
.
Costos del VPS: Nate menciona específicamente a Hostinger, indicando que se puede iniciar un VPS configurado para Claude Code por tan solo $6 USD al mes
.
Costos de API/Suscripción:
Para el chat y la operación diaria, se prefiere el modelo de suscripción (Pro/Max) para tener un costo fijo predecible en lugar de pagar por tokens de API cada vez que se chatea
.
Sin embargo, si el sistema realiza tareas automatizadas complejas (como investigación web profunda), Nate estima un costo de aproximadamente $1.43 a $1.50 por ejecución de flujo mediante créditos de API
.
3. Identidades dentro del Contexto
Para un equipo de varias personas, los materiales sugieren una estructura donde la IA reconoce a cada integrante pero mantiene un cerebro central:
Archivo de Equipo Central: La arquitectura estándar incluye un archivo context/team.md que contiene información sobre las personas clave de la organización y sus roles
.
Identidades individuales: Durante el proceso de onboarding, la IA pregunta específicamente por los miembros del equipo y sus responsabilidades para "aprender" quién es quién
. Liam Ottley va más allá y sugiere que el objetivo final es que "cada empleado tenga su propio espacio de trabajo AIOS" contextualizado, permitiéndoles operar 10 veces más rápido
.
El rol del CLAUDE.md: Este archivo debe permanecer como un "índice o tabla de contenidos"
. En lugar de poner la biografía de cada empleado ahí, el CLAUDE.md debe tener una regla de ruteo: "Para entender al equipo, lee context/team.md" o "Para saber quién es [Nombre], consulta su perfil en context/team/[nombre].md"
.
Interacción Proactiva: El sistema está diseñado para que el equipo pueda enviar mensajes directamente al AIOS (ej. vía Telegram o ClickUp) en lugar de preguntarle siempre al dueño de negocio, ya que el sistema tiene "memoria perfecta" de los archivos y decisiones
.
Quiero confirmar la estructura exacta de archivos antes de implementar skills atómicas en mi proyecto de Claude Code. Mi situación: tengo un CLAUDE.md de ~10KB que se carga completo en cada interacción, no tengo carpeta de skills, y cada tarea simple de logging (ej. registrar una comida) hace que Claude razone desde cero qué tabla de base de datos tocar en lugar de ejecutar una acción directa. Ya tengo una carpeta .claude/rules/ con 3 archivos (tech-defaults.md, workflow.md, design-rules.md).


Preguntas:




¿Cuál es la sintaxis EXACTA del YAML front-matter para una Skill en Claude Code? ¿Qué campos son obligatorios (name, description) y cuáles opcionales (model, allowed-tools, etc.)? ¿Dan un ejemplo completo de un archivo .md de skill de principio a fin?




Para configurar un sub-agente con modelo Haiku específicamente para una skill de logging, ¿el campo "model: haiku" va en el mismo archivo de la skill, o necesita un archivo separado en .claude/agents/? ¿Cómo se relacionan exactamente skills y agents — son la misma cosa con nombres distintos, o una skill puede invocar a un agente?




¿Qué diferencia hacen entre lo que va en .claude/rules/ (reglas de comportamiento/workflow) versus lo que va en context/ (información sobre el negocio/usuario) versus lo que va en .claude/skills/ (acciones ejecutables)? ¿Hay solapamiento intencional o son estrictamente separados?




Para una skill que necesita escribir directamente a una base de datos Supabase (ej. insertar una fila en una tabla específica), ¿recomiendan que la skill contenga el código SQL/TypeScript directamente en el archivo Markdown, que llame a un script externo (.ts o .py) ya existente en el proyecto, o que invoque al MCP de Supabase? ¿Cuál es más eficiente en tokens según ellos?




¿Dan algún ejemplo concreto, completo, de una skill simple de "logging" (registrar un dato atómico en una base de datos) de principio a fin, incluyendo el YAML front-matter y el cuerpo del archivo?




¿Mencionan cómo nombrar y organizar múltiples skills relacionadas (ej. log-comida.md, log-peso.md, crear-task.md) — todas sueltas en .claude/skills/, o agrupadas en subcarpetas por dominio (ej. .claude/skills/body-os/, .claude/skills/mind-os/)?




¿CLAUDE.md debe referenciar explícitamente la carpeta de skills (ej. "ver .claude/skills/ para acciones disponibles"), o Claude Code las descubre automáticamente sin necesidad de mencionarlas en el índice?



Basado en los materiales de Nate Herk y Liam Ottley, aquí tienes la guía técnica detallada para implementar tus skills atómicas y optimizar tu arquitectura en Claude Code:
1. Sintaxis EXACTA del YAML front-matter
La estructura de una Skill debe comenzar siempre con un bloque YAML entre líneas triples de guiones (---). Los campos obligatorios son el nombre y la descripción para que el sistema pueda realizar el "descubrimiento" de la skill sin cargar todo el archivo
.
Campos principales:
name (Obligatorio): El identificador único de la skill
.
description (Obligatorio): Una explicación concisa de qué hace y cuándo debe activarse. Debe mantenerse bajo los 100 tokens para eficiencia
.
model (Opcional): Define qué modelo usará la skill (ej. haiku, sonnet, opus)
.
allowed-tools (Opcional): Lista blanca de herramientas específicas que la skill puede tocar
.
argument-hint (Opcional): Ayuda a Claude a entender qué parámetros pasarle a la skill
.
Ejemplo completo de log-comida.md:
---
name: log-comida
description: Registra alimentos ingeridos en la base de datos de nutrición.
model: haiku
---

# Objetivo
Insertar una nueva entrada en el log de nutrición diario.

# Proceso
1. Validar si el usuario proporcionó descripción y cantidad.
2. Ejecutar el script `scripts/db_insert_nutrition.py` con los datos.
3. Confirmar al usuario que el registro fue exitoso.

# Reglas
- Hardcodear la ruta de la tabla 'nutrition_logs' para evitar búsquedas [5].
- No calcular calorías a menos que se pida explícitamente.
2. Configuración de Sub-agentes vs. Skills
Las skills y los agentes se relacionan pero cumplen roles distintos:
Skill: Es la receta u SOP (instrucciones paso a paso)
.
Agente: Es un trabajador especializado y autónomo. Vive en .claude/agents/ y tiene su propia configuración de memoria y modelo
.
Configuración Haiku: Si quieres que una tarea de logging sea barata, puedes poner model: haiku directamente en el YAML de la Skill
. Sin embargo, si la tarea es parte de un flujo mayor y quieres aislar el contexto totalmente, la Skill debe usar la instrucción: delegate to [nombre-del-agente]
.
3. Diferencias entre Rules, Context y Skills
Para evitar el "impuesto de contexto" (tokens innecesarios), la separación debe ser estricta
:
.claude/rules/ (Comportamiento): Reglas globales que Claude debe saber siempre (ej. "usa siempre TypeScript", "nunca uses m-dashes")
.
context/ (Identidad): Información cualitativa sobre quién eres y tus prioridades. Claude lo consulta solo cuando necesita "saber" sobre el negocio
.
.claude/skills/ (Acción): Recetas ejecutables. Solo se cargan por completo cuando Claude decide que la petición actual encaja con su descripción
.
4. Eficiencia en Supabase: ¿Código, Script o MCP?
Para tareas de logging atómico, las fuentes recomiendan hardcodear scripts externos o endpoints directos en lugar de usar un servidor MCP completo
.
Por qué: Un MCP de base de datos carga todas las definiciones de sus herramientas en cada interacción, lo cual es muy costoso en tokens
.
Patrón ideal: La skill debe llamar a un script de Python o TypeScript (ej. log.py) que contenga la lógica de inserción exacta. Esto es mucho más eficiente en tokens y más rápido porque es una acción determinística
.
5. Ejemplo completo de Skill de Logging (Atomic)
Archivo: .claude/skills/body-os/log-peso.md
---
name: log-peso
description: Registra el peso corporal diario del usuario.
model: haiku
---

# Contexto
ID de base de datos Supabase: `users_health_metrics` [5].

# Flujo de ejecución
1. Extraer el valor numérico del peso y la unidad.
2. Llamar al script `scripts/db_insert.ts` pasando los parámetros `--table health --data weight`.
3. Informar éxito de forma directa.

# Reglas
- No preguntar por el estado de ánimo a menos que el usuario lo mencione.
- Usar siempre la fecha actual del sistema.
6. Organización de Múltiples Skills
Se recomienda la organización por carpetas de dominio dentro de .claude/skills/ para mantener el proyecto escalable
.
Estructura ideal:
.claude/skills/body-os/log-comida.md
.claude/skills/body-os/log-peso.md
.claude/skills/finance-os/log-gasto.md
Esto ayuda a que el agente localice los archivos por rutas lógicas si se mencionan en las reglas
.
7. Referencia en CLAUDE.md
Es vital que el CLAUDE.md actúe como una tabla de contenidos o guía de ruteo
.
No pongas la lógica de las skills en CLAUDE.md.
Añade una sección llamada ## Skills donde listes los nombres y las rutas (ej. "Para nutrición, usa .claude/skills/body-os/"). Esto asegura que Claude sepa dónde buscar proactivamente sin tener que "adivinar"
.
Regla de oro: Mantén el CLAUDE.md por debajo de 200 líneas para ahorrar miles de tokens al día
.
miércoles, 17 de junio d
Ok ya un cliente me esta preungtando por el AIOS, como se lo puedo describir de forma que comunique la mayor cantidad de valor percivido posible

Para describir un AI Operating System (AIOS) a un cliente de forma que perciba el máximo valor, debes alejarte de la explicación técnica ("es un bot", "es Python") y centrarte en una narrativa de transformación operativa y libertad estratégica
.
Aquí tienes la estructura recomendada para tu presentación, basada en los marcos de trabajo de Nate Herk y Liam Ottley:
1. El Framing: "No es un Chatbot, es una Capa de Inteligencia"
Empieza aclarando que esto no es ChatGPT ni una herramienta aislada. Es una metodología de negocio que actúa como un "envoltorio" (wrapper) de inteligencia alrededor de su empresa
.
La Analogía: Descríbelo como el "J.A.R.V.I.S. de su negocio" o un "Chief of Staff que nunca duerme"
.
El Valor: Es la capa que vive entre el dueño y su empresa, permitiéndole operar todo (archivos, apps, contactos) desde una sola interfaz
.
2. Ataca el Problema: "La Trampa del Ancho de Banda"
Usa este concepto para que el cliente se sienta identificado inmediatamente. Explica que la mayoría de los dueños de negocio están atrapados en la "Operator Trap"
:
El "Antes": Pasa el 80% de su tiempo trabajando "DENTRO" del negocio (administración, apagar fuegos, buscar archivos en Slack o emails) y solo un 20% trabajando "SOBRE" el negocio
.
El "Después" (La Promesa): El AIOS invierte esa balanza. Al automatizar o aumentar el 60-70% de las tareas operativas, el dueño recupera su ancho de banda para enfocarse en estrategia y nuevas iniciativas que realmente generan ingresos
.
3. Los Pilares del Valor (Las 4 Cs)
Explica por qué su sistema es superior a cualquier otra automatización tradicional usando las 4 Cs
:
Contexto (Context): El sistema lo sabe todo sobre la empresa: su voz, sus valores, su equipo y sus metas. No hay que explicarle nada dos veces
.
Conexiones (Connections): La IA tiene "manos" en todas sus herramientas (Stripe, ClickUp, Google Drive, CRM). Puede ver e interactuar con sus datos reales, no solo con información pública
.
Capacidades (Capabilities): Tiene SOPs (procedimientos) horneados. Puede generar reportes de ventas, analizar competencia o crear contenido siguiendo las reglas exactas del negocio
.
Cadencia (Cadence): Actúa de forma proactiva. Mientras el dueño duerme, el sistema revisa métricas y prepara el "Daily Brief" (resumen diario) para que al despertar sepa exactamente qué pasó y qué es urgente
.
4. Justifica el ROI: "Un Ingeniero por una Fracción del Costo"
Para que el precio (por ejemplo, $5,000 por el setup) parezca barato, usa esta comparación
:
El costo humano: Un ingeniero de software senior o un asistente ejecutivo de alto nivel cuesta miles de dólares al mes
.
El retorno: Este sistema ofrece el output de un desarrollador senior disponible 24/7 en su laptop o celular por el costo de una suscripción
.
Métrica de éxito: El "nuevo flex" en la era de la IA es el "Revenue per Employee" (ingreso por empleado). Con un AIOS, el negocio puede escalar sus ingresos sin aumentar su plantilla
.
5. La "Magia" de la Autonomía Móvil
Menciónale que podrá operar su negocio desde Telegram/WhatsApp mientras está fuera de la oficina ("Away from desk autonomy")
. Esto es un gran gancho de venta porque promete libertad geográfica total
.
Guion de cierre sugerido (El enfoque del "Doctor"):
"No estoy aquí para venderte una herramienta de IA más. Estoy aquí para hacer un diagnóstico: ¿Si mañana te llegaran 500 clientes nuevos, qué proceso se rompería primero?
. Mi objetivo es construirte una infraestructura que elimine el 'trabajo sobre el trabajo' (buscar archivos, reportes manuales) para que tú vuelvas a ser el estratega, no el operador
. Te entrego un sistema con memoria perfecta que ya sabe quién eres y qué necesitas antes de que lo pidas"
.
Hoy • 3:53 a.m.
Multi-user context sharing: Two founders, two AI tools (Claude + ChatGPT). Both connected to the same GitHub repo. How should context be structured so each person's AI gets full business context without one overwriting the other's memory? Should there be a context/shared/ + context/tiago/ + context/lucas/ split?


Skills without a server: Jarvis skills call localhost:3000 because there's a running Next.js app. Sonar doesn't have an app server yet. Should skills in the AIOS be structured differently — e.g., as prompts that call Supabase MCP directly, or as pure reasoning workflows with no HTTP calls, until the dashboard is built?


Client replication model: The same AIOS will eventually be deployed for each Sonar client. What's the cleanest folder architecture to support that — one repo per client, or a clients/ directory inside the main Sonar repo with a template that gets cloned per engagement?

Basado en las mejores prácticas de arquitectura técnica para un AI Operating System (AIOS) detalladas en los materiales, aquí tienes las recomendaciones para tu estructura de contexto, habilidades y escalabilidad:
1. Compartir Contexto Multi-Usuario (Tiago y Lucas)
Para que ambos fundadores tengan acceso al contexto total del negocio sin interferir con la "memoria" personalizada de cada uno, debes utilizar una arquitectura de contexto jerárquica y el sistema de archivos locales de Claude:
Estructura de carpetas recomendada:
context/shared/: Aquí van los archivos Markdown permanentes del negocio (business_model.md, priorities.md, team.md)
.
context/founders/tiago.md y context/founders/lucas.md: Archivos específicos donde la IA guarda las preferencias, el tono de voz y el historial de decisiones individuales de cada uno
.
Gestión vía Git: Al estar conectados al mismo repo de GitHub, ambos sincronizan el "Cerebro Central" del negocio
. Para evitar sobrescribir el trabajo activo, se recomienda el uso de ramas (branches) separadas para tareas específicas y el uso de Git Worktrees si necesitan correr múltiples sesiones paralelas sobre el mismo código sin interferencias
.
Aislamiento de preferencias: Utilicen el archivo settings.local.json para las configuraciones que son exclusivas de cada uno (como sus propias API keys o modelos preferidos), mientras que el archivo settings.json en la carpeta .claude/ define los estándares compartidos del equipo
.
2. Estructura de Skills sin Servidor de App (Sonar)
Dado que Sonar aún no tiene un servidor en localhost:3000, las fuentes sugieren un enfoque "Boring is Beautiful" (Lo aburrido es hermoso), priorizando la ejecución directa y determinística:
Skills como Scripts Directos: En lugar de esperar por un servidor Next.js, construye tus habilidades como scripts de Python o TypeScript (.py / .ts) que realicen llamadas directas a la API de Supabase
.
Uso de MCP vs. Hardcoding: Aunque puedes usar el MCP de Supabase para explorar, Nate Herk recomienda "hardcodear" endpoints de API directos o IDs de tablas dentro de las habilidades para tareas repetitivas. Esto es mucho más eficiente en tokens que cargar todas las definiciones de herramientas de un servidor MCP completo en cada interacción
.
Flujos de Razonamiento Puro: Para tareas que no requieren datos externos inmediatos, utiliza Skills de razonamiento (Markdown) que actúen como SOPs. Claude leerá el procedimiento y solo ejecutará una "Tool" (el script de Supabase) en el paso final del flujo
.
3. Modelo de Replicación de Clientes
Para escalar Sonar a múltiples clientes de forma limpia y segura, la arquitectura recomendada es un repositorio de GitHub por cliente:
¿Por qué un repo por cliente?:
Seguridad y Privacidad: Evitas el riesgo de que el contexto o las decisiones estratégicas de un cliente se filtren a otro (Context Leakage)
.
Sincronización Cloud: Las Cloud Routines (rutinas en la nube) y despliegues en plataformas como Modal o Trigger.dev se configuran apuntando a un repositorio específico. Es mucho más sencillo gestionar despliegues independientes si cada cliente tiene su propio repo
.
Patrón de Template: Mantén un repo central de "Sonar-Core" como Template. Para cada nuevo cliente, clona el template para crear un nuevo entorno con la estructura de carpetas (context/, .claude/skills/, decisions/) ya lista para el proceso de onboarding
.
Despliegue Independiente: Cada repo de cliente puede tener sus propias Environment Variables (en el archivo .env local o en los secretos de la plataforma de hosting) para conectar sus propias instancias de Supabase, Stripe o CRMs de forma aislada
.