export const baseURL = 'https://dummyjson.com'

export const getProducts = async (offset: number, limit: number) => {
  try {
    const res = await fetch(`${baseURL}/products?limit=${limit}&skip=${offset}`)
    return res.json()
  } catch (error) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}

export const getProductById = async (id: string) => {
  try {
    const res = await fetch(`${baseURL}/products/${id}`)
    return res.json()
  } catch (error) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}
