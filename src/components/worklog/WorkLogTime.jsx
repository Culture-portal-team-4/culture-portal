import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ShareIcon from '@material-ui/icons/Share'
import { Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import LinearProgress from '@material-ui/core/LinearProgress'

// import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'
import ReactMinimalPieChart from 'react-minimal-pie-chart'

import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import CloseIcon from '@material-ui/icons/Close'

import worklog from '../../data/worklog.json'

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 100 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 }
]
const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#00C49F',
  '#0088FE'
]

const style = makeStyles(theme => ({
  paper: {
    height: '100%'
  },
  content: {
    padding: theme.spacing(0, 2, 2, 2)
  },
  headerTable: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  tableRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px',
    paddingLeft: '0px'
  },
  tableRowColor: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    display: 'block',
    marginRight: '8px'
  }
}))

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const bandA = a.time
  const bandB = b.time

  let comparison = 0
  if (bandA > bandB) {
    comparison = 1
  } else if (bandA < bandB) {
    comparison = -1
  }
  return comparison
}

export default function WorkLogTime({ id, name, userPic }) {
  const classes = style()
  console.log(worklog)
  console.log(worklog[name], name)

  const renderTimeLine = name => {
    const works = worklog[name].sort(compare)
    return (
      <Box display="flex">
        {works.map(({ time }, index) => {
          const fullTime = works.reduce((acc, { time }) => acc + time, 0)
          console.log(fullTime)
          return (
            <div
              style={{
                width: `${(time / fullTime) * 100}%`,
                height: '8px',
                background: COLORS[index]
              }}
            ></div>
          )
        })}
      </Box>
    )
  }

  return (
    <Grid item md={4} sm={6} xs={12}>
      <Paper className={classes.paper}>
        <Box mb={1}>
          {renderTimeLine(name)}
          <CardHeader
            avatar={<Avatar src={userPic} />}
            title={name}
            action={
              <IconButton>
                <ShareIcon />
              </IconButton>
            }
          />
          <Grid container item sm={12} className={classes.content} spacing={0}>
            <Grid item sm={12} className={classes.headerTable}>
              <Typography variant="body1">Worklog</Typography>
              <Typography variant="body1">Time</Typography>
            </Grid>
            <Grid item sm={12}>
              <ul>
                {worklog[name].sort(compare).map(({ title, time }, index) => (
                  <li className={classes.tableRow}>
                    <Box display="flex" alignItems="center">
                      <span
                        className={classes.tableRowColor}
                        style={{
                          background: COLORS[index]
                        }}
                      ></span>
                      <Typography variant="body2">{title}</Typography>
                    </Box>
                    <Typography variant="body2">{time}</Typography>
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  )
}
