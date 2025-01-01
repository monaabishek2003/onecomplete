import { createApi, FetchArgs,  } from "@reduxjs/toolkit/query/react";
import { BaseQueryApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//custom base query 
const customBaseQuery =  async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: any
) => {
  const baseQuery = fetchBaseQuery({ 
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL
  })

  try {
    
    const result: any = await baseQuery(args,api,extraOptions);
    if(result.data) result.data = result.data.data;
    return result;

  }catch(error: unknown){
    const errorMessage = error instanceof Error 
                        ? error.message 
                        : "Unknown Error";
    return {error: {status: "Fetch_Error",error: errorMessage}}
  }
}

//BaseQuery, Definitions, ReducerPath, TagTypes, Modules
export const api = createApi({
  baseQuery: customBaseQuery,
  reducerPath: "api",
  tagTypes: ["Courses"],
  endpoints: (build) => ({
    getCourses: build.query<Course[], { category?: string }>({
      query: ({ category }) => ({
        url: "courses",
        params: { category },
      }),
      providesTags: ["Courses"],
    }),
    getCourse: build.query<Course, string>({
      query: (id) => ({
        url: `courses/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: "Courses", id }],
    }),
  }),
});

export const { 
    useGetCoursesQuery,
    useGetCourseQuery,
  } = api;
