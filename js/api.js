const axios = require('axios')

const getBreeds = async (string) => {
  try {
    return await axios.get('http://ec2-18-195-215-122.eu-central-1.compute.amazonaws.com/' + string)
  } catch (error) {
    console.error(error)
  }
}

const countBreeds = async (string) => {
  const breeds = await getBreeds(string)

  console.log(breeds)
}

countBreeds("movies")
