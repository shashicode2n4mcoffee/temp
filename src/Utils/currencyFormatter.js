export const currencyFormatter = (currencyCode) => {
  return currencyCode.slice(0, 3) + '-' + currencyCode.slice(3)
}
