import PropTypes from 'prop-types'

/**
 * USED TO COLLECT DATA FROM THE API
 * @function ManageEndpoints
 * @param {string} category: the type of information/data requested
 * @param {string} id of user
 * @returns {string} the real URL/endpoint for the relevant data requested from the API
 */
 const  ManageEndpoints = ( id, category ) => {
  switch (category) {
    case 'usersGeneralInfo':
      return `http://localhost:3000/user/${id}/`

    case 'activity':
      return `http://localhost:3000/user/${id}/activity/`

    case 'average':
      return `http://localhost:3000/user/${id}/average-sessions/`

    case 'performance':
      return `http://localhost:3000/user/${id}/performance/`

    default :
      return null
  }
}

/**
 * USED TO COLLECT 'MOCKED' DATA (in public folder)
 * @function ManageMockedEndpoints
 * @param {string} category: the type of information/data requested
 * @param {string} id of user
 * @returns {string} the path for the'mocked' data requested (held in the public folder)
 */
const ManageMockedEndpoints = (id, category) => {
  switch (category) {
    case 'usersGeneralInfo':
      return `../${id}.json`

    case 'activity':
      return `../${id}/activity.json`

    case 'average':
      return `../${id}/average-sessions.json`

    case 'performance':
      return `../${id}/performance.json`

    default :
      return null
  }
}

export { ManageEndpoints, ManageMockedEndpoints }

// Proptypes
ManageEndpoints.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}

ManageMockedEndpoints.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}