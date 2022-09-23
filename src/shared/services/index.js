const apiUrl = process.env.REACT_APP_BACKEND


const requestMethods = { post: 'POST', get: 'GET', put: 'PUT' }

const endpoints = {
  accuntsEnpoint: 'accounts',
  authEnpoint: 'auth',
  userEnpoint: 'users',
}
const selectHeaders = (value, token) => {
  const contentHeaders = {
    json: {
      'Content-Type': 'application/json',
    },
    auth: {
      Authorization: `Bearer ${token}`,
    },
  }
  switch (value) {
    case 'json':
      return contentHeaders.json
    case 'auth':
      return contentHeaders.auth
    default:
  }
  return contentHeaders
}


export const registerUserService = async (body) => {
  const response = await fetch(`${apiUrl}${endpoints.accuntsEnpoint}`, {
    method: requestMethods.post,
    headers: selectHeaders('json'),
    body: JSON.stringify(body),
  })

  const data = await response.json()

  if (data.status) {
    throw new Error(data.message)
  }

  return data.message
}

export const loginUserService = async (body) => {
  const response = await fetch(`${apiUrl}${endpoints.authEnpoint}`, {
    method: requestMethods.post,
    headers: selectHeaders('json'),
    body: JSON.stringify(body),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message)
  }

  return data
}

export const getUserMyDataService = async (token) => {
  const response = await fetch(`${apiUrl}${endpoints.userEnpoint}`, {
    headers: selectHeaders('auth', token),
  })

  const data = await response.json()
  

  if (!response.ok) {
    throw new Error(data.message)
  }

  return data.data
}

export const getProductsService = async (path) => {
  const response = await fetch(`${apiUrl}${path}`, {
    method: requestMethods.get,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()

  if (data.status) {
    throw new Error(data.message)
  }

  return data
}