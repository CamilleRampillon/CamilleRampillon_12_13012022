import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * Used to fetch data 
 * @function useFetch (Hook)
 * @param {string} url
 * @returns {object} data
 * @returns {boolean} isLoading
 * @returns {boolean} error
 */
export function useFetch(url) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

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

  // Prototypes

  useFetch.propTypes = {
    url: PropTypes.string.isRequired,
  }