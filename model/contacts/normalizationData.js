const normalizationData = (data) => {
  const dataToSting = data.toString()
  return JSON.parse(dataToSting)
}

module.exports = normalizationData
