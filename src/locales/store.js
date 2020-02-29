import { getDevelopers, getPhotographers } from "../services/data";

const CHANGE_LOCALE = 'CHANGE_LOCALE'
export const LANGUAGES = ['en', 'by', 'ru']

const getData = locale => ({developers: getDevelopers(locale), photographers: getPhotographers(locale)});

export const changedLocale = (locale) => ({
  type: CHANGE_LOCALE,
  locale,
  data: getData(locale),
});

const initialState = {
  locale: LANGUAGES[0],
  data: getData(LANGUAGES[0]),
}

export const localeReducer = (state = initialState, { type, locale, data }) => {
  switch (type) {
    case CHANGE_LOCALE:
      return {
        data,
        locale,
      };
    default:
      return state;
  }
}
