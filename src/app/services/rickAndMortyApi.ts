import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (args) => {
        const { page, species } = args;
        return `/character/?page=${page}&species=${species}`;
      },
    }),
    getSingleCharacter: builder.query({
      query: (id) => {
        return `/character/${id}`;
      },
    }),
  }),
});

export const { useGetCharactersQuery } = rickAndMortyApi;
