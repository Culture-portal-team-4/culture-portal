import { CHANGE_LOCALE } from '../constants'
import RuData from '../data/dataRU-test'
import EnData from '../data/data'

const initialState = EnData;

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

const localeReducer = (state = initialState, { locale, type }) => {
  const newData = defineData(locale);
  switch (type) {
    case CHANGE_LOCALE:
      return {
        ...newData,
      };
    default:
      return state;
  }
}

export default localeReducer;
