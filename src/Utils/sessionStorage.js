export const setSessionStorage = (itemName, itemValue) => {
  sessionStorage.setItem(itemName, JSON.stringify(itemValue))
}

export const getSessionStorage = (itemName) => {
  const data = sessionStorage.getItem(itemName)
  if (data) return JSON.parse(data)
  return {}
}
