import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (args) => {
        const { page, species, name } = args;
        return `/character/?page=${page}&species=${species}&name=${name}`;
      },
    }),
    getSingleCharacter: builder.query({
      query: (id) => {
        return `/character/${id}`;
      },
    }),
    getEpisode: builder.query({
      query: (id) => {
        return `/episode/${id}`;
      },
    }),
  }),
});

export const { useGetCharactersQuery, useGetSingleCharacterQuery, useGetEpisodeQuery } =
  rickAndMortyApi;
