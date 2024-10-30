import { z, defineCollection } from 'astro:content';

const supportedLanguages = ['en', 'jp'] as const;

const seriesCollection = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        name: z.string(),
        lang: z.enum(supportedLanguages),
        tcgBrand: z.string(),
    }),
});

const setsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        seriesId: z.string(),
        setNumber: z.string(),
        type: z.string(),
        name: z.string(),
        releaseDate: z.string(),
        cards: z.array(z.object({
            name: z.string(),
            number: z.string(),
        })),
    }),
});

export const collections = {
    'series': seriesCollection,
    'sets': setsCollection,
};
