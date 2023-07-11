// Импорт зависимостей
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import db from "../../firebase";

// Создание экземпляра api
export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Recipe"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://recipe-app-841f4-default-rtdb.firebaseio.com/",
  }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: (queryTerm) => `/`,
      providesTags: (result, error, queryTerm) => [
        {
          type: "Recipe",
          id: queryTerm,
        },
      ],
    }),
    createRecipes: builder.mutation({
      async queryFn(recipe) {
        const docRef = await db.collection("recipes").add(recipe);
        const docSnapshot = await docRef.get();
        return docSnapshot.data();
      },
      invalidatesTags: [{ type: "Recipe" }],
    }),
    removeRecipe: builder.mutation({
      async queryFn(recipeId) {
        await db.collection("recipes").doc(recipeId).delete();
        return recipeId;
      },
      invalidatesTags: [{ type: "Recipe" }],
    }),
    updateRecipe: builder.mutation({
      async queryFn({ id, ...recipe }) {
        await db.collection("recipes").doc(id).update(recipe);
        const docSnapshot = await db.collection("recipes").doc(id).get();
        return docSnapshot.data();
      },
      invalidatesTags: [{ type: "Recipe" }],
    }),
  }),
});

// Экспорт хуков для использования в компонентах
export const {
  useGetRecipesQuery,
  useCreateRecipesMutation,
  useRemoveRecipeMutation,
  useUpdateRecipeMutation,
} = api;
