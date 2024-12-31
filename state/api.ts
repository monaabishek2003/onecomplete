import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


//BaseQuery, Definitions, ReducerPath, TagTypes, Modules
export const api = createApi({
  baseQuery : fetchBaseQuery({baseUrl : "http://localhost:5000"}),
  reducerPath : "api",
  tagTypes : ["Courses"],
  endpoints : (build) =>  ({
    getCourses : build.query<Course[],{category? : string}>({
      query : ({category}) => (
        {
          url : "courses",
          params : {category},
        }
      ),
      providesTags : ["Courses"]
    }),
    getCourse : build.query<Course,string>({
      query : (id) => (
        {
        url : `courses/${id}`
        }
      ),
      providesTags : (result,error,id) => [{type : "Courses",id }]
    })  
  })
})