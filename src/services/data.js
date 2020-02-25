const developersData = require.context('../content/developers', false, /\.json$/);
const photographersData = require.context('../content/photographers', false, /\.json$/);

const getDevelopers = language => {
  return developersData.keys().map(item => {
    const { title, github, image, tasks, fullName } = developersData(item);
    return {
      title,
      github,
      image,
      tasks,
      fullName: fullName[language],
    }
  })
}

const getPhotographers = language => {
  return photographersData.keys().map(item => {
    const { title, image, yearsOfLife } = photographersData(item);
    const { fullName, gallery, biography, masterprice, video, placeOfLiving } = photographersData(item)[language]
    return {
      title,
      image,
      yearsOfLife,
      fullName,
      gallery,
      biography,
      masterprice,
      video,
      placeOfLiving,
    }
  })
}

export { getDevelopers, getPhotographers }
