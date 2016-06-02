import Typography from 'typography'

const options = {
  baseFontSize: '18px',
  baseLineHeight: '27px',
  headerFontFamily: '"Avenir Next", "Helvetica Neue", "Segoe UI", "Helvetica", "Arial", sans-serif',
  bodyFontFamily: '"Avenir Next", "Helvetica Neue", "Segoe UI", "Helvetica", "Arial", sans-serif',
  bodyWeight: 400,
  headerWeight: 600,
  boldWeight: 600,
  modularScales: [
    {
      scale: 'minor third'
    }
  ]
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
