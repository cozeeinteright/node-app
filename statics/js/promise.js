function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`)
    if (location === 'Google') {
      resolve('Google says Hi')
    } else {
      reject('We can only talk Google')
    }
  })
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response')
    resolve(`Extra Information + ${response}`)
  })
}


async function dowork() {

  try {
    const response = await makeRequest('Google');
    console.log('Response Received')
    const request = await processRequest(response)
    console.log(request)
  } catch (err) {
    console.log(err)
  }

}

dowork()
