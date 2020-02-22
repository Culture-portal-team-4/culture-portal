import { CHANGE_LOCALE } from '../constants'
import RuData from '../data/dataRU-test'
import EnData from '../data/data'

const initialState = EnData;

const localeReducer = (state = initialState, { locale, type }) => {
  const newData = locale === 'Ru' ? RuData : EnData;
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
