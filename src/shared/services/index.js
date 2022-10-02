

const apiUrl = process.env.REACT_APP_BACKEND

const requestMethods = { post: 'POST', get: 'GET', put: 'PUT' }

const endpoints = {
  accuntsEnpoint: '/accounts',
  authEnpoint: '/auth',
  userEnpoint: '/users',
  likeEndpoint: '/likes',
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
  

  if (data.status !== 'ok') {
    throw new Error(data.message)
  }
  
  return data.data
 
}

export const getUserMyDataService = async (token) => {
  const response = await fetch(`${apiUrl}${endpoints.userEnpoint}`, {
    method:requestMethods.get,
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
    headers: selectHeaders('json'),
  })

  const data = await response.json()

  if (data.status) {
    throw new Error(data.message)
  }

  return data
}

export const getLocationService = async (path) => {
  const response = await fetch(`${apiUrl}/products/filterBy/location`, {
    method: requestMethods.get,
    headers: selectHeaders('json'),
  })

  const data = await response.json()

  if (data.status) {
    throw new Error(data.message)
  }

  return data
}

export const getUserService = async (id) => {
  const response = await fetch(`${apiUrl}${endpoints.userEnpoint}/filterBy/id/${id}`, {
    method: requestMethods.get,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  
  const data = await response.json()
  

  return data
}

export const getLikeProductIdService = async (product_id, lover_id) => {
  const response = await fetch(`${apiUrl}${endpoints.likeEndpoint}/filterBy/productId/${product_id}?lover_id=${lover_id}`, {
    method: requestMethods.get,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()

  //Si no hay response isLiked = false y si hay response isLiked = true
  let isLiked
  data.object ? isLiked = true : isLiked = false

  return isLiked
}

export const postLikeService = async (productId, token) => {
  console.log(productId);
  const response = await fetch(`${apiUrl}${endpoints.likeEndpoint}/${productId}`, {
    method: requestMethods.post,
    headers: selectHeaders('auth', token),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message)
  }

  return data.data
}

export const deleteLikeService = async (productId, token) => {
  console.log(productId);
  const response = await fetch(`${apiUrl}${endpoints.likeEndpoint}/delete/byProductId/${productId}`, {
    method: requestMethods.delete,
    headers: selectHeaders('auth', token),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message)
  }

  return data.data
}

export const getCategoriesService = async () => {
  const response = await fetch(`${apiUrl}/products/filterBy/rankingCategories`, {
    method: requestMethods.get,
    headers: selectHeaders('json'),
  })

  const data = await response.json()

  if (data.status) {
    throw new Error(data.message)
  }

  return data
}

export const getValidateAccountService = (async (path) => {
  const response = await fetch(`${apiUrl}${path}`, {
    method: requestMethods.get,
  })

  const data = await response.json()
  console.log(data)

  if (data.status !== 'created') {
    throw new Error(data.message)
  }

  return data
})
