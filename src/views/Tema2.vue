<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión de satisfacción del cliente


    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-9.mb-4
        .bloque-texto-b.color-azul.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 La gestión de la satisfacción del cliente comprende un conjunto estructurado de estrategias, herramientas y acciones orientadas a conocer y mejorar de manera continua la experiencia del consumidor. Este enfoque se basa en recopilar y analizar opiniones, emociones y percepciones que los usuarios tienen sobre los productos o servicios recibidos, con el propósito de implementar mejoras que fortalezcan la fidelización, reduzcan el nivel de quejas y generen una ventaja competitiva sostenible (ICONTEC, 2018).
            i.fas.fa-quote-right
        .cajon.color-primario.p-4
          p.mb-0 Esta gestión implica más que solo atender reclamos; se trata de anticiparse a las necesidades del cliente, ofrecer soluciones personalizadas y establecer una relación proactiva que demuestre compromiso y responsabilidad por parte de la empresa (SENA, 2023). Herramientas como encuestas de satisfacción, monitoreo de redes sociales, atención postventa y programas de fidelización son clave para este proceso.
      .col-lg-3.col-md-6.mb-4.col-8
        figure
          img(src='@/assets/curso/temas/tema2/img_01.png', alt='Imagen decorativa')

    
    .row.justify-content-center.mb-5
      .col-lg-8.position-relative
        .crd.crd--avatarHorizontal.py-3.py-lg-0
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema2/img_02.svg', alt='Imagen decorativa')
            .col
              p.mb-0 Colocar al cliente en el centro de la estrategia permite no solo mejorar la calidad del servicio, sino también consolidar la reputación de la marca y garantizar su sostenibilidad en el tiempo (ICONTEC, 2018; SENA, 2023). 

    separador
    
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Medidas
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-md-6.col-lg-3.col-8.mb-3.mb.lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img_03.svg', alt='Imagen decorativa').mx-auto
      .col-lg-9
        p Gestionar la satisfacción del cliente implica implementar sistemas que permitan identificar cómo se sienten los consumidores respecto a los productos o servicios que reciben. Esta información no solo revela la calidad percibida, sino que orienta a las organizaciones hacia la mejora continua, al identificar fortalezas y debilidades en su propuesta de valor. La medición de la satisfacción es clave para anticiparse a la pérdida de clientes, optimizar procesos internos y fomentar relaciones duraderas basadas en la confianza. 
        p Existen diversas métricas ampliamente utilizadas por las empresas para evaluar este aspecto:

    .row
      .col-md-12.mx-auto
        .tarjeta.bg_grad_slider.mb-5.p-3
          .tarjeta.p-2
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-8.mb-4
                  p
                    b 
                      i Net Promoter Score (NPS)
                  p El 
                    i Net Promoter Score (NPS) 
                    | es un indicador utilizado para medir la lealtad del cliente, evaluando qué tan probable es que recomienden una marca, servicio o producto. Los encuestados se agrupan en tres niveles: promotores (puntajes de 9 a 10), pasivos (7 u 8) y detractores (0 a 6). Esta clasificación permite a las empresas conocer el grado de satisfacción de sus usuarios. 
                  p.mb-0 Por ejemplo, una compañía de transporte interdepartamental puede aplicar esta métrica mediante encuestas posteriores al viaje, identificando así tanto a los clientes fieles como a aquellos en riesgo de abandonar el servicio.

                .col-md-12.col-lg-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema2/img_04.png', alt='Imagen Decorativa')
                
              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-8.mb-4
                  p
                    b 
                      i Customer Satisfaction Score (CSAT)
                  p El CSAT es una métrica que evalúa la satisfacción del cliente en relación con una experiencia puntual, como una compra o interacción específica. Generalmente, se utiliza una escala del 1 al 5 para calificar. 
                  p.mb-0 Por ejemplo, una tienda en línea puede consultar al cliente, al finalizar la compra, qué tan satisfecho quedó con el proceso. Esta información resulta útil para medir aspectos como la funcionalidad del sitio, la calidad del servicio y la puntualidad en la entrega.

                .col-md-12.col-lg-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema2/img_05.png', alt='Imagen Decorativa')
                
              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-8.mb-4
                  p
                  b 
                    i Customer Effort Score (CES)
                  p El CES es una métrica que evalúa el nivel de esfuerzo que requiere un cliente para solucionar un problema o lograr un objetivo con una empresa. Se aplica normalmente después de una interacción de soporte, mediante una pregunta sobre la facilidad del proceso. Una puntuación baja sugiere una experiencia sencilla y satisfactoria, mientras que una alta puede evidenciar obstáculos. 
                  p.mb-0 Por ejemplo, una plataforma digital puede solicitar a sus usuarios calificar qué tan fácil fue resolver un inconveniente técnico, lo cual ayuda a detectar oportunidades de mejora en la atención.

                .col-md-12.col-lg-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema2/img_06.png', alt='Imagen Decorativa')
            
    .row
      .col-12.col-lg-10.bgblue.p-5.mx-auto.mb-5.position-relative
        .row
          .col-12.col-lg-10.text-white
            p.mb-0 Estas métricas pueden combinarse con herramientas digitales como CRM, análisis de datos y sistemas de retroalimentación automatizada para brindar una visión más completa del comportamiento del consumidor. Con estas herramientas se diseñan acciones enfocadas en las necesidades del cliente, lo que permite optimizar su experiencia y consolidar su vínculo con la marca.
          .col-2.d-none.d-lg-block
            figure.position-absolute.iconoutside
              img(src="@/assets/curso/temas/tema2/img_28.png", alt="alt").w-auto
             
    separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Herramientas de evaluación

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-3.col-md-6.mb-4.col-8
        figure
          img(src='@/assets/curso/temas/tema2/img_07.png', alt='Imagen decorativa')
      .col-lg-9.mb-4
        p Mejorar la experiencia del cliente requiere comprender en detalle cómo vive y valora cada punto de contacto con la marca. Por ello, las herramientas de gestión de la satisfacción cumplen un rol fundamental en el diagnóstico del nivel de conformidad del consumidor. Estas herramientas permiten capturar datos clave sobre la experiencia, expectativas y emociones de los clientes frente a los productos o servicios que reciben. A partir de esta información, las empresas pueden diseñar acciones correctivas, anticipar necesidades, personalizar sus ofertas y fortalecer la fidelización. 
        .row
          .col-12.col-lg-9.mb-4.mb-lg-0
            .cajon.color-acento-contenido.p-4
              p.mb-0 Actualmente, existe una amplia variedad de instrumentos para recoger esta información. Algunos se centran en métodos cuantitativos, como encuestas automatizadas, mientras que otros apelan a enfoques cualitativos, como entrevistas y grupos focales, que permiten una comprensión más profunda de la voz del cliente. También hay tecnologías avanzadas como los sistemas CRM, que integran múltiples fuentes de datos y facilitan el análisis en tiempo real. Algunas herramientas son:
          .col-6.col-lg-3.mx-auto
            figure
              img(src='@/assets/curso/temas/tema2/img_08.svg', alt='Imagen decorativa').mx-auto.w-auto
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Encuestas digitales")
              p Son formularios estructurados que se distribuyen mediante canales digitales como el correo electrónico, aplicaciones o redes sociales. Su propósito es recopilar información sobre aspectos clave de la experiencia del cliente, como la satisfacción con el servicio, la calidad percibida o la eficiencia en los tiempos de atención. Por ejemplo, una tienda en línea puede enviar una encuesta tras una compra para conocer la opinión del cliente sobre el empaque, la entrega y el acompañamiento recibido, utilizando esos datos para optimizar sus procesos logísticos.
          .row(titulo="Entrevistas")
              p Son conversaciones individuales que se realizan presencialmente o por videollamada, con el objetivo de profundizar en las percepciones y emociones del cliente. Este método permite captar detalles subjetivos de su experiencia. Por ejemplo, una entidad de salud puede entrevistar a sus pacientes tras la consulta para conocer su opinión sobre la atención y aplicar mejoras en el servicio y la gestión del tiempo.
          .row(titulo="<em>Focus group</em> (grupos focales)")
              p Son encuentros organizados con grupos reducidos de clientes, guiados por un moderador, en los que se discuten experiencias, necesidades y propuestas de mejora. Este formato permite obtener una visión colectiva y diversa sobre un producto o servicio. Por ejemplo, una cadena de restaurantes puede reunir distintos perfiles de consumidores para evaluar un nuevo menú y ajustar detalles antes de su lanzamiento oficial.
          .row(titulo="Análisis de quejas y sugerencias")
              p Consiste en examinar de forma estructurada los reportes y reclamos de los clientes para identificar problemas recurrentes, causas de insatisfacción y áreas de mejora. Por ejemplo, una empresa de telecomunicaciones puede detectar, a través de sus registros, fallas frecuentes en ciertas zonas y tomar decisiones para optimizar el servicio en esos lugares.
          .row(titulo="<em>Software</em> de CRM")
              p Son sistemas tecnológicos que integran y organizan la información del cliente, como compras, comunicaciones y reclamos, facilitando una atención personalizada y proactiva. Por ejemplo, una empresa puede usar un CRM para identificar a un cliente con incidencias repetidas y tomar medidas anticipadas que mejoren su experiencia y eviten su deserción.

      .col-lg-3.col-5
        figure
          img(src='@/assets/curso/temas/tema2/img_09.png', alt='Imagen decorativa')
   

    .row.mb-3
      .col-12.col-lg-8.mx-auto
        .row.mx-auto.justify-content-center.align-items-center(data-aos="zoom-in").color-terciario.p-4
          .col-6.col-lg-2.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema2/img_10.svg', alt='Imagen decorativa').w-auto.mx-auto
          .col-10
            p.mb-0 Estas herramientas deben implementarse como parte de una estrategia continua de escucha activa, donde el cliente no solo opina, sino que siente que su voz tiene consecuencias reales dentro de la empresa. La correcta interpretación y gestión de los datos obtenidos permite diseñar experiencias más empáticas, consistentes y alineadas con las expectativas cambiantes del consumidor.
    
    separador

        
    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3 Formatos, análisis y ejemplos de herramientas

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g.p-3.p-sm-4.p-md-5.color-primario
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img_11.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Estos formatos permiten medir de manera clara y cuantificable el nivel de lealtad del cliente, identificar oportunidades de mejora y reconocer fortalezas en la oferta de productos o servicios. Al integrar este tipo de instrumentos en la gestión comercial, las organizaciones no solo mejoran su capacidad de respuesta, sino que también impulsan relaciones duraderas con sus clientes.
            <br>Cada una de estas herramientas es esencial para mejorar la experiencia del cliente y para abordar problemas de manera proactiva. Implementadas correctamente, pueden aumentar la lealtad del cliente, mejorar la satisfacción y, en última instancia, favorecer el crecimiento del negocio.

    TabsB.color-acento-contenido
      .py-4.py-md-5(titulo="Encuesta de <em>Net Promoter Score</em> (NPS)" :icono="require('@/assets/curso/temas/tema2/img_29.svg')")
        .row.px-4.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Este instrumento tiene como propósito evaluar la experiencia general de los usuarios frente a un producto, servicio o marca, con el fin de medir el nivel de recomendación que estarían dispuestos a ofrecer a terceros.
            p La información recolectada permitirá identificar fortalezas, oportunidades de mejora y ajustar procesos organizacionales.
            p Cada participante deberá responder con base en su experiencia más reciente. Se solicita marcar la calificación correspondiente y complementar, si lo desea, con observaciones cualitativas en los campos abiertos.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/img_12.png', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="Encuesta de satisfacción del producto" :icono="require('@/assets/curso/temas/tema2/img_30.svg')")
        .row.px-4.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Esta encuesta tiene como finalidad recopilar información sobre la percepción de los usuarios en relación con la calidad del producto adquirido, el cumplimiento en los tiempos de entrega, la protección durante el transporte y la intención de recompra. La información obtenida permitirá identificar oportunidades de mejora en los procesos logísticos, de calidad y atención al cliente. Se solicita responder cada pregunta según la experiencia vivida con el producto recibido.
            p Las respuestas deberán ser objetivas, reflejando la percepción real del usuario. En las preguntas abiertas, se invita a expresar comentarios que contribuyan a mejorar la calidad del servicio.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/img_13.png', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="Encuesta de satisfacción del producto" :icono="require('@/assets/curso/temas/tema2/img_31.svg')")
        .row.px-4.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Este instrumento tiene como propósito recopilar información sobre el nivel de satisfacción del usuario respecto al servicio recibido, la atención brindada por el personal y la percepción del equilibrio entre el costo y la calidad del servicio. 
            p Los resultados permitirán identificar fortalezas y oportunidades de mejora en la atención al cliente y la prestación de servicios.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/img_14.png', alt='Imagen decorativa')

  
    .row.mx-auto.justify-content-center.align-items-stretch(data-aos="zoom-in")
      .col-1.d-none.d-lg-block
      .col-2.d-flex.align-items-center.color-terciario.d-none.d-lg-flex
        figure.mx-auto
          img(src='@/assets/curso/temas/tema2/img_15.svg', alt='Imagen decorativa').w-auto.mx-auto
      .col-12.col-lg-8.d-flex.align-items-center
        p.mb-0 A continuación, se presentan los formatos estructurados de los instrumentos de recolección de información utilizados para evaluar la percepción y nivel de satisfacción de los usuarios frente a diversos aspectos del producto y/o servicio ofrecido. Cada plantilla ha sido diseñada bajo criterios técnicos de calidad, claridad y usabilidad, e incluye tanto preguntas cerradas con opciones de respuesta tipo escala, como espacios para observaciones cualitativas que permiten ampliar la comprensión de la experiencia del usuario. Estas herramientas facilitarán el análisis sistemático de los datos recolectados y servirán como insumo para la toma de decisiones orientadas a la mejora continua.
      .col-1.d-none.d-lg-block

    .row.justify-content-center.align-items-center.my-3.mb-5(data-aos="zoom-in").ordenar_div
      .col-12.col-lg-10
        .row.justify-content-center.align-items-center.my-3.mb-5(data-aos="zoom-in").ordenar_div
          .col-12.col-lg-9
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1. 
              span Ciclo del servicio al cliente
            .tabla-a.color-primario
              table
                caption 
                  b Fuente: 
                  | Kotler, P., & Keller, K. L. (2016)
                thead
                  tr
                    th Pregunta
                    th Opciones de respuesta
                tbody
                  tr
                    td 1. ¿Qué tan probable es que recomiende nuestra marca/servicio/producto a un amigo o familiar?
                    td - 0 (Nada probable)- 1- 2- 3- 4- 5- 6- 7- 8- 9- 10 (Extremadamente probable)
                  tr
                    td 2. ¿Qué fue lo que más te gustó de nuestra marca/servicio/producto?
                    td (Espacio para comentarios adicionales)
                  tr
                    td 3. ¿Qué aspectos de nuestra marca/servicio/producto crees que necesitan mejorar?
                    td (Espacio para comentarios adicionales)
                  tr
                    td 4. ¿Por qué razón calificaste tu respuesta de esta manera?
                    td (Espacio para comentarios adicionales)
          .col-md-4.col-lg-3.mt-auto.mb-3.arriba.col-10
            figure
              img(src='@/assets/curso/temas/tema2/img_16.png', alt='Imagen decorativa').mx-auto


    .row.justify-content-center.align-items-center.my-3.mb-5(data-aos="zoom-in")
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2. 
          span Encuesta satisfacción del producto
        .tabla-a.mb-5.color-acento-contenido
          table
            caption 
              b Fuente: 
              | Kotler, P., & Keller, K. L. (2016)
            thead
              tr
                th Pregunta
                th Opciones de respuesta
            tbody
              tr
                td 1. ¿Qué tan satisfecho estás con la calidad del producto que adquiriste?
                td - Muy insatisfecho- Insatisfecho- Neutral- Satisfecho- Muy satisfecho
              tr
                td 2. ¿El producto cumplió con tus expectativas según lo descrito en la página web?
                td - No cumplió para nada- Cumplió parcialmente- Cumplió completamente
              tr
                td 3. ¿El producto llegó en el tiempo estimado?
                td - Sí, llegó a tiempo- Llegó un poco tarde- Llegó mucho más tarde de lo esperado
              tr
                td 4. ¿La calidad del empaque fue adecuada para proteger el producto?
                td - Muy insatisfactorio- Insatisfactorio- Neutral- Adecuado- Muy adecuado
              tr
                td 5. ¿Volverías a comprar este producto o recomendarlo a otros?
                td - No- Probablemente no- No estoy seguro- Probablemente sí- Sí
              tr
                td 6. ¿Qué aspectos del producto te gustaron más?
                td (Espacio para comentarios adicionales)
              tr
                td 7. ¿Qué sugerencias tienes para mejorar el producto?
                td (Espacio para comentarios adicionales)

        
    .row.justify-content-center.align-items-center.my-3.mb-5(data-aos="zoom-in")
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3. 
          span Encuesta satisfacción del producto
        .tabla-a.mb-5.color-acento-botones
          table
            caption 
              b Fuente: 
              | Kotler, P., & Keller, K. L. (2016)
            thead
              tr
                th Pregunta
                th Opciones de respuesta
            tbody
              tr
                td 1. ¿Qué tan satisfecho estás con la rapidez de nuestro servicio?
                td - Muy insatisfecho- Insatisfecho- Neutral- Satisfecho- Muy satisfecho
              tr
                td 2. ¿El personal que te atendió fue amable y profesional?
                td - Muy insatisfecho- Insatisfecho- Neutral- Satisfecho- Muy satisfecho
              tr
                td 3. ¿El servicio cumplió con tus expectativas?
                td - No cumplió para nada- Cumplió parcialmente - Cumplió completamente
              tr
                td 4. ¿El servicio fue claro y fácil de entender?
                td - Muy confuso- Confuso- Neutral- Claro- Muy claro
              tr
                td 5. ¿El precio del servicio fue razonable en relación con la calidad?
                td - Muy caro- Caro- Justo- Barato- Muy barato
              tr
                td 6. ¿Recomendarías nuestro servicio a otros?
                td - No- Probablemente no- No estoy seguro- Probablemente sí- Sí
              tr
                td 7. ¿Qué aspectos de nuestro servicio te gustaron más?
                td (Espacio para comentarios adicionales)
              tr
                td 8. ¿Qué sugerencias tienes para mejorar nuestro servicio?
                td (Espacio para comentarios adicionales)

    .row.justify-content-center.align-items-center.my-3.mb-5(data-aos="zoom-in")
      .col-12.col-lg-10
        .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
          .col-md-6.col-lg-3.col-8.mb-3.mb.lg-0
            figure
              img(src='@/assets/curso/temas/tema2/img_17.png', alt='Imagen decorativa').mx-auto
          .col-lg-9
            p Además de los formatos estructurados aplicados mediante encuestas, es importante considerar otras fuentes de información relevantes para la medición de la percepción del cliente, como el análisis de redes sociales. Esta herramienta complementaria permite a las organizaciones monitorear en tiempo real las menciones y comentarios que los usuarios realizan sobre la marca, el producto o el servicio en plataformas digitales como X (anteriormente Twitter), Facebook e Instagram. 

    .row.justify-content-center.align-items-center.my-3.mb-5(data-aos="zoom-in")
      .col-12.col-lg-10
        .cajon.color-terciario.p-4
          p.mb-0 El análisis de estas interacciones no solo facilita la detección oportuna de posibles inconformidades, sino que también permite identificar oportunidades de mejora, ajustar estrategias comunicacionales y responder de forma inmediata ante eventuales situaciones que puedan afectar la reputación. Por ejemplo, si un cliente publica una queja sobre un producto defectuoso, la empresa puede intervenir rápidamente con una respuesta pública adecuada y una solución efectiva, demostrando compromiso con la calidad y la satisfacción del cliente. Esta retroalimentación espontánea y directa se convierte así en un insumo valioso para fortalecer la relación con los usuarios y consolidar una imagen positiva de la organización.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-12.col-lg-10
        .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in").ordenar_div
          .col-lg-10
            p Un ejemplo de esta estrategia puede observarse en el caso de una marca de ropa que monitorea activamente sus menciones en redes sociales. Al detectar una publicación de un cliente insatisfecho que recibió una prenda con defecto, el equipo de atención al cliente responde de manera inmediata, ofreciendo una disculpa pública y gestionando el reemplazo del producto. Esta acción no solo soluciona el inconveniente puntual, sino que también envía un mensaje claro al resto de la comunidad digital sobre el compromiso de la empresa con la calidad y la atención al cliente. Este tipo de intervención refleja los principios del modelo SERVQUAL (Parasuraman, Zeithaml & Berry, 1988), en tanto reconoce que la percepción del servicio puede gestionarse de forma efectiva mediante respuestas ágiles y empáticas en los canales donde los consumidores se expresan con mayor frecuencia.
            .row.align-items-center 
              .col-2.d-none.d-md-block
                figure
                  img(src='@/assets/curso/temas/tema2/img_32.svg', alt='Imagen decorativa').mx-auto.w-auto
              .col-10
                p Este tipo de práctica se ilustra claramente en el siguiente caso, que muestra cómo una empresa puede convertir una situación crítica en una oportunidad para fortalecer su reputación y fidelizar a sus clientes a través de la gestión estratégica de redes sociales.
          .col-md-6.col-lg-2.col-8.mb-3.mb.lg-0.arriba
            figure
              img(src='@/assets/curso/temas/tema2/img_18.svg', alt='Imagen decorativa').mx-auto.w-auto


    .tarjeta.bg_grad_slider.mb-5.p-3
      .row.justify-content-center.align-items-center.my-3.mb-0(data-aos="zoom-in")
        .col-md-5.col-lg-3.col-10
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img_19.png", alt="alt").mx-auto.mb-4.mb-lg-0
        .col-lg-9
          SlyderF.mb-5(columnas="col-md-6 col-lg-6 col-xl-6")
            
            .tarjeta.tarjeta--slyder.p-4.d-flex.flex-column.justify-content-center
              h5.text-center.bg-primario Contexto
              p.text-center.mb-0 Una marca de ropa de moda activa en redes sociales se dedica a monitorear constantemente las menciones de su nombre y productos en plataformas como Instagram. Los consumidores no solo publican sus experiencias, sino que también etiquetan a la marca en sus publicaciones, mencionando sus compras y la calidad de los productos. Esto genera un flujo constante de información útil para la empresa.

            .tarjeta.tarjeta--slyder.p-4.d-flex.flex-column.justify-content-center
              h5.text-center.bg-primario Situación
              p.text-center.mb-0 Un cliente postea en su historia de Instagram que ha recibido una prenda de la marca dañada. La publicación es negativa, pero al mismo tiempo, es una oportunidad para la marca de mostrar su compromiso con el servicio al cliente.

            .tarjeta.tarjeta--slyder.p-4.d-flex.flex-column.justify-content-center
              h5.text-center.bg-primario  Respuesta
              p.text-center.mb-0 El equipo de atención al cliente de la marca, al detectar la mención de inmediato, responde públicamente en la misma plataforma con una disculpa por el inconveniente, ofreciendo un reemplazo gratuito de la prenda dañada. Además, el equipo proporciona un código de descuento para la próxima compra del cliente afectado. Esta respuesta no solo resuelve el problema directamente, sino que también demuestra públicamente el compromiso de la marca con la satisfacción del cliente.

            .tarjeta.tarjeta--slyder.p-4.d-flex.flex-column.justify-content-center
              h5.text-center.bg-primario Impacto
              p.text-center.mb-0 Esta respuesta inmediata y abierta no solo mejora la percepción de ese cliente en particular, sino que también envía un mensaje claro a otros seguidores de la marca: que la empresa está dispuesta a tomar medidas rápidas y efectivas para resolver los problemas. Esta acción puede transformar una experiencia negativa en una oportunidad de fidelización, mostrando transparencia y proactividad ante las quejas.
      

    .row.justify-content-center.align-items-center.my-3.mb-5(data-aos="zoom-in")
      .col-12.col-lg-10
        .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
          .col-md-6.col-lg-3.col-8.mb-3.mb.lg-0
            figure
              img(src='@/assets/curso/temas/tema2/img_21.png', alt='Imagen decorativa').mx-auto
          .col-lg-9
            p A partir del ejemplo expuesto, es posible identificar diversas ventajas que ofrece el análisis de redes sociales como herramienta para la gestión de la percepción del cliente. Más allá de ser un canal reactivo ante quejas o comentarios negativos, esta estrategia permite a las organizaciones anticiparse a posibles crisis, fortalecer la comunicación con sus audiencias y construir relaciones más sólidas y transparentes. A continuación, se presentan algunos de los principales beneficios asociados al uso del análisis de redes sociales en la gestión de la experiencia del cliente.




    SlyderF.mb-5(columnas="col-12 col-md-6 col-lg-4")    
      
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema2/img_22.svg' alt='AvatarTop')
        .tarjeta.color-primario-10
          .p-4
            .row.justify-content-center.mb-3
              .col-auto
                .py-2.px-3
                  h4.mb-0.text-center
                    b Detección temprana de problemas
              p.text-center.mb-0 El monitoreo constante permite identificar comentarios negativos antes de que se conviertan en tendencias virales o crisis mayores. Esto da tiempo a la empresa para gestionar la situación antes de que afecte a un gran número de clientes.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema2/img_23.svg' alt='AvatarTop')
        .tarjeta.color-primario-10
          .p-4
            .row.justify-content-center.mb-3
              .col-auto
                .py-2.px-3
                  h4.mb-0.text-center
                    b Mejora de la comunicación
              p.text-center.mb-0 Las empresas pueden responder a las quejas en tiempo real, lo que mejora la interacción con los clientes y muestra un compromiso con la resolución de problemas.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema2/img_24.svg' alt='AvatarTop')
        .tarjeta.color-primario-10
          .p-4
            .row.justify-content-center.mb-3
              .col-auto
                .py-2.px-3
                  h4.mb-0.text-center
                    b Monitoreo de sentimiento
              p.text-center.mb-0 El análisis de menciones permite comprender cómo se percibe una marca en general. Si las menciones son en su mayoría positivas, la empresa puede aprovechar esa buena reputación; si son negativas, puede actuar rápidamente para cambiar esa percepción.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema2/img_25.svg' alt='AvatarTop')
        .tarjeta.color-primario-10
          .p-4
            .row.justify-content-center.mb-3
              .col-auto
                .py-2.px-3
                  h4.mb-0.text-center
                    b Aumento de la confianza y lealtad del cliente
              p.text-center.mb-0 Mostrar que una empresa está dispuesta a corregir errores y tomar acción directa aumenta la confianza del consumidor, lo que puede convertir a un cliente insatisfecho en un defensor de la marca.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
