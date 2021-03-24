const emailValidator = (email) => {
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,7})+$/
  return re.test(email)
}

export { emailValidator }