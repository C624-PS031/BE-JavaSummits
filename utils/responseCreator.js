const responseCreator = ({ data = null, message = null }) => {
  return {
    success: data ? true : false,
    message,
    data,
  }
}

export default responseCreator
