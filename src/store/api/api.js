// Импорт зависимостей
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  collection,
  addDoc,
  getDoc,
  deleteDoc,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import db from "../../firebase";
// Создание экземпляра api
export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Recipe"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://recipe-app-841f4-default-rtdb.firebaseio.com", // Update the URL to the correct Firebase Realtime Database URL
    auth: "DoX7uavrHuhZSnKNpBqiDId9UnOgDXUA7HWjl5mq",
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
        const docRef = await addDoc(collection(db, "recipes"), recipe);
        const docSnapshot = await getDoc(doc(db, "recipes", docRef.id));
        return docSnapshot.data();
      },
      invalidatesTags: [{ type: "Recipe" }],
    }),
    removeRecipe: builder.mutation({
      async queryFn(recipeId) {
        await deleteDoc(doc(db, "recipes", recipeId));
        return recipeId;
      },
      invalidatesTags: [{ type: "Recipe" }],
    }),
    updateRecipe: builder.mutation({
      async queryFn({ id, ...recipe }) {
        await updateDoc(doc(db, "recipes", id), recipe);
        const docSnapshot = await getDoc(doc(db, "recipes", id));
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
