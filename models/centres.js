const db = require('../helpers/database')

/**
 * 
 * @returns {String} centres information
 */

//list all the centres in the database
exports.getAll = async function getAll () {
    let query = "select * from centres;"
    let data = await db.run_query(query)  
    return data
  }