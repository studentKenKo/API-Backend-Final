const db = require('../helpers/database')

/**
 * 
 * @returns {object} list all breeds
 */


//list all the breeds in the database
exports.getAll = async function getAll () {
    let query = "select * from breeds;"
    let data = await db.run_query(query)  
    return data
  }