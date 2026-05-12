"use client";
import { useState, useEffect, useMemo } from "react";
import Project from "@/components/Project"
const Page = () => {

   const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    async function fetchData(){

      try {
        setLoading(true);
      const res = await fetch("/api/projects/");
      const json = await res.json();
      console.log(json)
      if (!json.success) throw new Error(json.error);
      setProjects(json.data);
    } catch {
      setError("Failed to load projects. Is MongoDB running?");
    } finally {
      setLoading(false);
    }
  }
  fetchData()
  }, []);

  return (
    <div className="align-center justify-center items-center w-full h-fit lg:h-full">
      {projects.map((item) => <Project project={item} key={item._id}/>)}
    </div>
  )
}

export default Page
