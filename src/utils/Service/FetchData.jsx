import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
//import { ManageMockedEndpoints } from './ManageEndpoints'
 import { ManageEndpoints } from './ManageEndpoints'

/**
 * Service to fetch data 
 * @function useFetch (custom Hook)
 * @param {string} id of the user
 * @param {string} category: (userGeneralInfo, activity, average or performance)
 * @returns {object} data
 * @returns {boolean} isLoading
 * @returns {boolean} error
 */
export function useFetch(id, category) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // mocked data urls
  //const url =  ManageMockedEndpoints(id, category)

  // data from api url/endpoints
   const url =  ManageEndpoints(id, category)

  useEffect(() => {
    if (!url) return
    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    
  }, [url])
  return { isLoading, data, error }
}

// Proptypes
useFetch.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}