export default {
  global: {
    Name: 'Fidelización y postventa de productos y servicios',
    Description:
      'Este componente formativo brinda herramientas clave para fortalecer la fidelización de clientes y la gestión de la postventa, a través de estrategias que mejoran la experiencia del usuario, el manejo de quejas y reclamos, y la evaluación de la satisfacción del cliente, aportando a la consolidación de relaciones sostenibles con los consumidores.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fidelización de clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Herramientas',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de satisfacción del cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Medidas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas de evaluación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Formatos, análisis y ejemplos de herramientas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Quejas, reclamos, sugerencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Resolución de problemas en la postventa',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Manejo de quejas y reclamos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Soluciones eficaces',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fidelización de clientes',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Retener clientes: Fidelizar clientes [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=64IsYDBncao',
    },
  ],
  glosario: [
    {
      termino: 'Análisis',
      significado:
        'Estudio detallado de la información para tomar decisiones o mejorar procesos.',
    },
    {
      termino: 'Cliente',
      significado:
        'Persona o empresa que adquiere productos o servicios de otra empresa.',
    },
    {
      termino: 'Concepto',
      significado: 'Definición o idea general de un término o fenómeno.',
    },
    {
      termino: 'Encuesta',
      significado:
        'Instrumento utilizado para recolectar información directamente del cliente.',
    },
    {
      termino: 'Evaluación',
      significado:
        'Proceso de análisis para determinar la calidad, eficiencia o satisfacción de un servicio.',
    },
    {
      termino: 'Fidelización',
      significado:
        'Estrategia para lograr que los clientes se mantengan fieles a una marca o empresa.',
    },
    {
      termino: 'Formato',
      significado:
        'Documento estructurado que permite registrar información de manera organizada.',
    },
    {
      termino: 'Herramienta',
      significado:
        'Recurso, físico o digital, utilizado para facilitar una tarea o proceso.',
    },
    {
      termino: 'Indicador',
      significado:
        'Medida cuantitativa que permite evaluar el desempeño o satisfacción.',
    },
    {
      termino: 'Manejo',
      significado:
        'Conjunto de acciones para tratar adecuadamente una situación o proceso.',
    },
    {
      termino: 'Medidas',
      significado:
        'Parámetros que permiten cuantificar la satisfacción o desempeño del servicio.',
    },
    {
      termino: 'Postventa',
      significado:
        'Conjunto de acciones que se realizan después de una venta para asegurar la satisfacción.',
    },
    {
      termino: 'Queja',
      significado:
        'Manifestación de insatisfacción hecha por un cliente respecto a un producto o servicio.',
    },
    {
      termino: 'Reclamo',
      significado:
        'Solicitud formal de corrección o compensación por parte del cliente debido a una falla.',
    },
    {
      termino: 'Resolución',
      significado:
        'Acción o proceso de solucionar un problema o situación conflictiva.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'Información que se da al proveedor del servicio para mejorar su desempeño.',
    },
    {
      termino: 'Satisfacción',
      significado:
        'Grado en que un cliente considera que sus expectativas han sido cumplidas.',
    },
    {
      termino: 'Soluciones eficaces',
      significado:
        'Respuestas rápidas y adecuadas que resuelven de forma efectiva los problemas del cliente.',
    },
    {
      termino: 'Sugerencia',
      significado:
        'Propuesta hecha por un cliente para mejorar un producto, servicio o proceso.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chaffey, D., & Ellis-Chadwick, F. (2019). Marketing digital: estrategia, implementación y práctica (7.ª ed.). Pearson Educación.',
      link:
        'https://digilib.stiestekom.ac.id/assets/dokumen/ebook/feb_27aff686c21a3ec16bdc9e2e8d785bf6b8d8e4e8_1655821975.pdf',
    },
    {
      referencia:
        'Grönroos, C. (2007). Marketing y gestión de servicios: la gestión de los momentos de la verdad y la competencia en los servicios. Díaz de Santos.',
      link:
        ' https://books.google.com.co/books?hl=es&id=rKAGC6DkiVAC&printsec=frontcover',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). Dirección de marketing (15.ª ed.). Pearson Educación.',
      link:
        'https://www.leo.edu.pe/wp-content/uploads/2019/12/direccion-de-marketing-philip-kotler-1.pdf',
    },
    {
      referencia:
        'Parasuraman, A., Zeithaml, V. A., & Berry, L. L. (1988). SERVQUAL: A multiple-item scale for measuring consumer perceptions of service quality. Journal of Retailing, 64(1), 12–40. ',
      link:
        'https://www.researchgate.net/publication/200827786_SERVQUAL_A_Multiple-item_Scale_for_Measuring_Consumer_Perceptions_of_Service_Quality',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje – SENA. (s.f.). Peticiones, quejas, reclamos, sugerencias y denuncias – PQRS.',
      link: 'https://www.sena.edu.co/es-co/ciudadano/paginas/pqrs.aspx',
    },
    {
      referencia:
        'Zeithaml, V. A., Bitner, M. J., & Gremler, D. D. (2018). Marketing de servicios: integración del enfoque en el cliente a través de la empresa (7.ª ed.). McGraw-Hill Education.',
      link:
        ' https://books.google.com/books/about/MARKETING_DE_SERVICIOS.html?hl=es&id=GHHXQwAACAAJ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
