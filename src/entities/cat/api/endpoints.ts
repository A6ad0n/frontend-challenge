export const API_ENDPOINTS = {
  CATS: {
    SEARCH: '/images/search',
    IMAGES: {
      base: '/images/',
      byId: (id: string) => `/images/${id}` as const,
    },
  },
} as const;
