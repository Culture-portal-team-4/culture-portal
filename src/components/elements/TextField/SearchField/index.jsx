import React from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import styles from './style'

export default function CPSearchField(props) {
  const { value, onChange, placeholder } = props
  const classes = styles()

  return (
    <TextField
      className={classes.textField}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{<SearchIcon />}</InputAdornment>
        ),
        classes: classes
      }}
      variant="outlined"
      margin="dense"
      fullWidth
    />
  )
}
