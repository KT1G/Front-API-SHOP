
const apiUrl = process.env.REACT_APP_BACKEND

const requestMethods = { post: 'POST', get: 'GET', put: 'PUT' }

const endpoints = {
  accuntsEnpoint: 'accounts',
}


export const registerUserService = async (body) => {
  const response = await fetch(`${apiUrl}/${endpoints.accuntsEnpoint}/`, {
    method: requestMethods.post,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await response.json()

  if (data.status) {
    throw new Error(data.message)
  }

  return data.message
}


