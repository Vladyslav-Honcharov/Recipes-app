import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Recipe"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4200/recipes",
  }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: (queryTerm) => `/?_sort=id&_order=desc&q=${queryTerm}`,
      providesTags: (result, error, queryTerm) => [
        {
          type: "Recipe",
          id: queryTerm,
        },
      ],
    }),
    createRecipes: builder.mutation({
      query: (recipe) => ({
        body: recipe,
        url: "/",
        method: "POST",
      }),
      invalidatesTags: [{ type: "Recipe" }],
    }),
    removeRecipe: builder.mutation({
      query: (recipeId) => ({
        url: `/${recipeId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Recipe" }],
    }),
    updateRecipe: builder.mutation({
      query: ({ id, ...recipe }) => ({
        body: recipe,
        url: `/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: [{ type: "Recipe" }],
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useCreateRecipesMutation,
  useRemoveRecipeMutation,
  useUpdateRecipeMutation,
} = api;
