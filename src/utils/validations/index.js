const emailValidator = (email) => {
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,7})+$/
  if (re.test(email) === true) {
    return true
  }
  return re.test(email) || false
}

export { emailValidator }