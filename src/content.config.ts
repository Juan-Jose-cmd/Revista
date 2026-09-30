// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const coyuntura = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/coyuntura' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    categoria: z.enum(['economia', 'industria', 'tierra', 'trabajo', 'geopolitica']),
    resumen: z.string(),
  }),
});

const teoria = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/teoria' }),
  schema: z.object({
    titulo: z.string(),
    numero: z.string(),
    nivel: z.enum(['inicial', 'medio', 'avanzado']),
    resumen: z.string(),
  }),
});

const actividades = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/actividades' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    hora: z.string(),
    lugar: z.string(),
    etiqueta: z.enum(['plenario', 'taller', 'territorio']),
  }),
});

export const collections = { coyuntura, teoria, actividades };