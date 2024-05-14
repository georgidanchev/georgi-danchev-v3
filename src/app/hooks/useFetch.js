import { useEffect, useState } from "react"

export default function useFetch(fetchFn, initialValue) {
  // The state updates the component
  // where the custom hook is being used
  const [fetchedData, setFetchedData] = useState(initialValue)
  const [isFetching, setIsFetching] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true)
      try {
        const data = await fetchFn()
        setFetchedData(data)
      } catch (_error) {
        setError({ message: _error.message || "Failed to fetch data." })
      }
      setIsFetching(false)
    }
    fetchData()
  }, [fetchFn])

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error,
  }
}

export async function getAllProjects() {
  const response = await fetch("/api/myProjects")
  const resData = await response.json()

  if (!response.ok) {
    throw new Error("Failed to fetch places")
  }

  return resData
}

export async function getSingleProject(id) {
  const response = await fetch(`/api/myProject/${id}`)
  const resData = await response.json()

  if (!response.ok) {
    throw new Error("Failed to fetch user places")
  }

  return resData
}

export async function getAllBlogPosts() {
  const response = await fetch("/api/blogPosts")
  const resData = await response.json()

  if (!response.ok) {
    throw new Error("Failed to fetch places")
  }

  return resData
}

export async function getSingleBlogPost(id) {
  const response = await fetch(`/api/blogPost/${id}`)
  const resData = await response.json()

  if (!response.ok) {
    throw new Error("Failed to fetch user places")
  }

  return resData
}


