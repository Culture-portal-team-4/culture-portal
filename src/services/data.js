const developersData = require.context(
  '../content/developers',
  false,
  /\.json$/
)
const photographersData = require.context(
  '../content/photographers',
  false,
  /\.json$/
)

const getDevelopers = language => {
  return developersData.keys().map((item, index) => {
    const { title, github, image, tasks, fullName } = developersData(item)
    return {
      id: index,
      title,
      github,
      image,
      tasks,
      fullName: fullName[language]
    }
  })
}

const getPhotographers = language => {
  return photographersData.keys().map((item, index) => {
    const {
      title,
      image,
      yearsOfLife,
      locationsCoords,
      video
    } = photographersData(item)
    const {
      fullName,
      description,
      gallery,
      biography,
      masterpiece,
      placeOfLiving
    } = photographersData(item)[language]
    return {
      id: index,
      title,
      image,
      yearsOfLife,
      fullName,
      description,
      gallery,
      biography,
      masterpiece,
      locationsCoords,
      video,
      placeOfLiving
    }
  })
}

export { getDevelopers, getPhotographers }
