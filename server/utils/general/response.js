function sendRequest (res, data) {
    res.status(200).json(data)
  }
  function sendErrorRequest (res, data, code) {
    return res.status(code || 500).json(data)
  }
  
  module.exports = {
    sendRequest,
    sendErrorRequest
  }
  