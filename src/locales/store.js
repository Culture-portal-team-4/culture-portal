import RuData from '../data/dataRU-test'
import EnData from '../data/data'

const CHANGE_LOCALE = 'CHANGE_LOCALE'
export const LANGUAGES = ['En', 'Ru']

export const changedLocale = (locale) => ({
  type: CHANGE_LOCALE,
  locale,
});

const initialState = {
  locale: 'En',
  data: EnData
}

function defineData(locale) {
  switch (locale) {
    case 'Ru':
      return RuData;
    case 'En':
      return EnData;
    default:
      return EnData;
  }
}

export const localeReducer = (state = initialState, { locale, type }) => {
  const newData = defineData(locale);
  switch (type) {
    case CHANGE_LOCALE:
      return {
        ...state,
        data: newData,
        locale: locale
      };
    default:
      return state;
  }
}
