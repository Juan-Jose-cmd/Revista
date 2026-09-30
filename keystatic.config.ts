// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local', // para desarrollo local
    // kind: 'github', // cuando quieras publicar desde el CMS en producción
  },
  collections: {
    coyuntura: collection({
      label: 'Coyuntura',
      slugField: 'titulo',
      path: 'src/content/coyuntura/*',
      format: { contentField: 'cuerpo' },
      schema: {
        titulo: fields.slug({ name: { label: 'Título' } }),
        fecha: fields.date({ label: 'Fecha' }),
        categoria: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Economía', value: 'economia' },
            { label: 'Industria', value: 'industria' },
            { label: 'Tierra', value: 'tierra' },
            { label: 'Trabajo', value: 'trabajo' },
            { label: 'Geopolítica', value: 'geopolitica' },
          ],
          defaultValue: 'economia',
        }),
        resumen: fields.text({ label: 'Resumen', multiline: true }),
        cuerpo: fields.markdoc({ label: 'Cuerpo del análisis' }),
      },
    }),

    teoria: collection({
      label: 'Teoría',
      slugField: 'titulo',
      path: 'src/content/teoria/*',
      format: { contentField: 'cuerpo' },
      schema: {
        titulo: fields.slug({ name: { label: 'Título' } }),
        numero: fields.text({ label: 'Número de cuaderno' }),
        nivel: fields.select({
          label: 'Nivel',
          options: [
            { label: 'Inicial', value: 'inicial' },
            { label: 'Medio', value: 'medio' },
            { label: 'Avanzado', value: 'avanzado' },
          ],
          defaultValue: 'inicial',
        }),
        resumen: fields.text({ label: 'Resumen', multiline: true }),
        cuerpo: fields.markdoc({ label: 'Contenido del cuaderno' }),
      },
    }),

    actividades: collection({
      label: 'Actividades',
      slugField: 'titulo',
      path: 'src/content/actividades/*',
      format: { contentField: 'descripcion' },
      schema: {
        titulo: fields.slug({ name: { label: 'Título' } }),
        fecha: fields.date({ label: 'Fecha' }),
        hora: fields.text({ label: 'Hora' }),
        lugar: fields.text({ label: 'Lugar' }),
        etiqueta: fields.select({
          label: 'Etiqueta',
          options: [
            { label: 'Plenario', value: 'plenario' },
            { label: 'Taller', value: 'taller' },
            { label: 'Territorio', value: 'territorio' },
          ],
          defaultValue: 'plenario',
        }),
        descripcion: fields.markdoc({ label: 'Descripción' }),
      },
    }),
  },
});