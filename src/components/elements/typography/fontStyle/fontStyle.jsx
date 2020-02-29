import React from 'react'
import Typography from '@material-ui/core/Typography'
import signatureStyle from './signatureStyle'
import paragraphStyle from './paragraphStyle'

export default function CPFontStyle() {
  const signature = signatureStyle()
  const paragraph = paragraphStyle()

  return (
    <>
      <Typography variant="h4">Logo</Typography>
      <Typography className={signature.root}>
        Font: apercu, sans-serif / Color: #061207
      </Typography>
      <Typography variant="h5">Header</Typography>
      <Typography className={signature.root}>
        Font: apercu, sans-serif / Color: #061207
      </Typography>
      <Typography variant="body1">Title</Typography>
      <Typography className={signature.root}>
        Font: apercu, sans-serif / Color: #061207
      </Typography>
      <Typography variant="body2">Body</Typography>
      <Typography className={signature.root}>
        Font: apercu, sans-serif / Color: #061207
      </Typography>
    </>
  )
}
