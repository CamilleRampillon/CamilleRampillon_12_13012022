// Functions used to format the labels on the different graphs

// /**
//  * Format date on X axis from yyyy-mm-dd to dd/mm
//  * on the Daily activities Line graph
//  * @function TranformDate
//  * @param {string} tickItem
//  * @returns {string} formatted Date
//  */
//  const TranformDate = (tickItem) => {
//   let formattedDate = '';

//   if (tickItem) {
//     let parts = tickItem.split('-')
//     formattedDate = `${parts[2]}/${parts[1]}`
//   }
//   return formattedDate
// }

/**
 * Format date on X axis from yyyy-mm-dd to dd
 * on the Daily activities Line graph
 * @function TranformDate
 * @param {string} tickItem
 * @returns {string} formatted Date
 */
 const TranformDate = (tickItem) => {
  let formattedDate = '';
  
  if (tickItem) {
    let parts = tickItem.split('-')
    formattedDate = `${parts[2].replace(/^0+/, '')}`
  }
  return formattedDate
}

/**
 * Format day on X axis from number to letter
 * on the Average sessions Line graph
 * @function TranformDay
 * @param {number} tickItem
 * @returns {string} A Day letter
 */
 const TranformDay = (tickItem) => {
  
  const Day = [ 'L', 'M', 'M', 'J', 'V', 'S', 'D']
  if (tickItem) return Day[tickItem-1]
}

/**
 * Format the labels on the radar axis from number to words
 * on the Performance Radar chart
 * @function TranformKind
 * @param {number} tickItem
 * @returns {string} Kind: one of the categories.
 */
 const TranformKind = (tickItem) => {

  const Kind = [ 'Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']
  if (tickItem) return Kind[tickItem-1]
}

export { TranformDate, TranformDay, TranformKind }