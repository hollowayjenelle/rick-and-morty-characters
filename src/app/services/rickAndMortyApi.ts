import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (page = 1, species = '') => `/character/?page=${page}&species=${species}`,
    }),
  }),
});

export const { useGetCharactersQuery } = rickAndMortyApi;
