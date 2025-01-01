"use client";

import Loading from "@/components/Loading";
import { useGetCoursesQuery } from "@/state/api";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CourseCardSearch from "@/components/CourseCardSearch";
import SelectedCourse from "./SelectedCourse";

const Search = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [selectedCourse,setSelectedCourse] = useState<Course|undefined>(undefined)
  
  const {data: courses, isLoading, isError} = useGetCoursesQuery({});

  const handleCourseSelect = (course : Course) => {
    router.push(`/search/?id=${course.courseId}`, {scroll : false})
  }
  useEffect(()=>{
    if(courses){
      if(id){
        const course = courses.find(course=>id===course.courseId);
        console.log(course)
        setSelectedCourse(course);
      }else{
        setSelectedCourse(courses[0]);
      }
    }
  },[courses,id]);

  const handleEnrollNow = (courseId: string) => {
    router.push(`/checkout?step=1&id=${courseId}&showSignUp=false`, {
      scroll: false,
    });
  };
  if(isLoading) return <Loading/>;
  if(isError) return <h3>Error while Fetching Data</h3>
  return (
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="search"
    >
      <h1 className="search__title">List of available courses</h1>
      <h2 className="search__subtitle">{courses ? courses.length: 0} courses avaiable</h2>
      <div className="search__content">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="search__courses-grid"
        >
          {courses && courses.map((course) => (
            <CourseCardSearch
              key={course.courseId}
              course={course}
              isSelected={selectedCourse?.courseId === course.courseId}
              onClick={() => handleCourseSelect(course)}
            />
          ))}
        </motion.div>

        {selectedCourse && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="search__selected-course"
          >
            <SelectedCourse
              course={selectedCourse}
              handleEnrollNow={handleEnrollNow}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default Search;
