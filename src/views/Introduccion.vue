<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-3.col-md-5.mb-4
        figure
          img(src='@/assets/curso/temas/intro/img_01.png', alt='Imagen decorativa')
      .col-lg-9.mb-4
        p.mb-2 Establecer relaciones sólidas y duraderas entre las organizaciones y sus clientes depende en gran medida de la fidelización y de una adecuada gestión postventa. Este componente formativo denominado “Fidelización y postventa de productos y servicios”, aborda las estrategias necesarias para mantener la satisfacción del cliente más allá del momento de la compra, fortaleciendo su confianza y preferencia hacia un producto o servicio. A lo largo del contenido se explorarán conceptos clave, herramientas prácticas y métodos de evaluación, con un enfoque aplicado que permite reconocer, analizar y resolver situaciones comunes en la atención postventa y el manejo de quejas y reclamos.
        .cajon.color-terciario.p-4
          p.mb-0 Asimismo, se enfatiza la importancia de crear vínculos emocionales con el cliente mediante una atención personalizada, comunicación efectiva y seguimiento continuo. El desarrollo de estas competencias contribuye a la construcción de relaciones comerciales sólidas, incrementa la lealtad del cliente y mejora la reputación de la empresa. Además, la gestión adecuada de reclamos y sugerencias se convierte en una valiosa oportunidad para innovar y optimizar los procesos de servicio, garantizando una experiencia satisfactoria que motive al cliente a volver y recomendar la marca.

   
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/32KQw66yGbY?si=9ufc5FlxjfV092T8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Nota: Sena (2024).  

</template>

<script>
export default {
  name: 'Introduccion',
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
