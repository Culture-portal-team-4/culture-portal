import React from 'react'
import Typography from '@material-ui/core/Typography'
import signatureStyle from './signatureStyle'
import paragraphStyle from './paragraphStyle'

export default function CPFontStyle() {
  const signature = signatureStyle()
  const paragraph = paragraphStyle()

  return (
    <>
      <Typography variant="h1">Header 1</Typography>
      <Typography className={signature.root}>Font: apercu, sans-serif / Color: #49c5b6</Typography>
      <Typography variant="h2">Header 2</Typography>
      <Typography className={signature.root}>Font: apercu, sans-serif / Color: #41A69A</Typography>
      <Typography variant="h3">Header 3</Typography>
      <Typography className={signature.root}>Font: apercu, sans-serif / Color: #3B8F85</Typography>
      <Typography variant="h4">Header 4</Typography>
      <Typography className={signature.root}>Font: apercu, sans-serif / Color: #367D75</Typography>
      <Typography variant="h5">Header 5</Typography>
      <Typography className={signature.root}>Font: apercu, sans-serif / Color: #307069</Typography>
      <Typography variant="h6">Header 6</Typography>
      <Typography className={signature.root}>Font: apercu, sans-serif / Color: #224F4A</Typography>
      <Typography className={paragraph.root}>Paragraph</Typography>
      <Typography className={signature.root}>Font: apercu, sans-serif / Color: #4b4b4b;</Typography>
    </>
  )
}