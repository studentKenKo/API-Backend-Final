const db = require('../helpers/database')



/**
 * JSdoc
 * @param {*} param0 
 * @returns 
 */

//list all the centres in the database
exports.getAll = async function getAll () {
    let query = "select * from centres;"
    let data = await db.run_query(query)  
    return data
  }