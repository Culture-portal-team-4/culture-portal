import { CHANGE_LOCALE } from '../constants'

export const changedLocale = (locale) => ({
  type: CHANGE_LOCALE,
  locale,
});

