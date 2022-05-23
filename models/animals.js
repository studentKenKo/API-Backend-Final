const db = require('../helpers/database')
const rwClient = require("../twitterClient");


/**
 * 
 * @param {integer} id 
 * @returns {object} animals list
 */

//get by id
exports.getById = async function getById (id) {
  let query = "select animals.*, breeds.name as breed_name, centres.name as centre_name from animals inner join breeds on animals.breed_id = breeds.id inner join centres on animals.centre_id = centres.id where animals.id = ?;"
  let values = [id]
  let data =  await db.run_query(query, values)
  if (data.length > 0) {
    return data[0]
  } 
  // return "Animal not found."
}
// get by breed_id
exports.getByBreedId = async function getByBreedId (breed_id) {
  let query = "select animals.*, breeds.name as breed_name, centres.name as centre_name from animals inner join breeds on animals.breed_id = breeds.id inner join centres on animals.centre_id = centres.id where animals.breed_id = ?;"
  let values = [breed_id]
  return await db.run_query(query, values)
}
// get by name
exports.getByName = async function getByBreedId (name) {
  let query = "select animals.*, breeds.name as breed_name, centres.name as centre_name from animals inner join breeds on animals.breed_id = breeds.id inner join centres on animals.centre_id = centres.id where animals.name LIKE '%" + name + "%';"
  // let values = [name]
  return await db.run_query(query)
}

//list all the animals in the database
exports.getAll = async function getAll () {
  let query = "select animals.*, breeds.name as breed_name, centres.name as centre_name from animals inner join breeds on animals.breed_id = breeds.id inner join centres on animals.centre_id = centres.id;"
  let data = await db.run_query(query)  
  return data
}

//create a new animal into database
exports.add = async function add (animal) {  
  let keys = Object.keys(animal)
  let values = Object.values(animal)  
  keys = keys.join(',')   
  let parm = ''
  for(i=0; i<values.length; i++){ parm +='?,'}
  parm=parm.slice(0,-1)
  let query = `INSERT INTO animals (${keys}) VALUES (${parm})`
  try{
    await db.run_query(query, values) 
    const tweet = async () => {
      try {
        console.log(animal.name)
        let petName = Object.values(animal.name)
          await rwClient.v1.tweet("Welcome our new cute dog --" + animal.name + "--!!!!" + " \n Please go to our website to visit.")
      } catch (err) {
          console.error(err)
      }
    }
  tweet()
  console.log("twitter success")
  //console.log(values)
    return {"status": 201}
  } catch(error) {
    return error
  }
}

//update animals in the database
exports.update = async function update(id, animals) {
  let keys = Object.keys(animals)
  let values = Object.values(animals)
  let parm = ''
  for(i=0; i<values.length; i++){ 
    parm += keys[i]+'=?,'
  }

  parm=parm.slice(0,-1)
  let query = `UPDATE animals SET ${parm} WHERE id = ${id}`
  
  try{
    await db.run_query(query, values)
  } catch(error) {
    console.log("error: ", error)
    return error
  }
  return { "status": 200}
}

//delete animals in the database
exports.remove = async function remove(id) {
  let query = 'DELETE FROM animals WHERE id = ?'
  let values = [id]
  let data = await db.run_query(query, values)
  return data
}
