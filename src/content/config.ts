import { z, defineCollection } from 'astro:content';

const supportedLanguages = ['en', 'jp'] as const;

const seriesCollection = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        name: z.string(),
        lang: z.enum(supportedLanguages),
        tcgBrand: z.string(),
        sets: z.array(z.object({
            set: z.any(),
            cardCount: z.number(),
            cardsObtained: z.number(),
            cardsInBinder: z.number(),
            cardsNotObtained: z.number(),
        })),
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
            obtained: z.boolean(),
            binder: z.boolean(),
        })),
    }),
});

export const collections = {
    'series': seriesCollection,
    'sets': setsCollection,
};
