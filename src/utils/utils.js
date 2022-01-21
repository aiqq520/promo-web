export const filterUndefined = params => {
  params && Object.keys(params).forEach(key => {
    if (params[key] === undefined || params[key] === '') {
      delete params[key]
    }
  })
  return params
}
