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
import WorkLogTime from './WorkLogTime'

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 100 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 }
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#00C49F']

export default function Worklog({ developers }) {
  return (
    <Grid item container sm={12} spacing={2}>
      <Grid item sm={12}>
        <Box color="text.title">
          <Typography variant="h4" component="h1">
            Worklog
          </Typography>
        </Box>
      </Grid>

      {developers.map(developer => (
        <WorkLogTime {...developer} />
      ))}
      <Grid item sm={12}>
        <Paper>
          <Box p={2}>
            <Typography variant="h5" color="textSecondary" component="p">
              Difficulties for the team during implementation
            </Typography>
          </Box>
          <Box px={1} pb={1}>
            <ul>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}
              >
                <CloseIcon style={{ color: 'red', marginRight: '8px' }} />
                <Typography variant="body2" color="textSecondary" component="p">
                  Difficulties for the team during implementation
                </Typography>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}
              >
                <CloseIcon style={{ color: 'red', marginRight: '8px' }} />
                <Typography variant="body2" color="textSecondary" component="p">
                  Difficulties for the team during implementation
                </Typography>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}
              >
                <CloseIcon style={{ color: 'red', marginRight: '8px' }} />
                <Typography variant="body2" color="textSecondary" component="p">
                  Difficulties for the team during implementation
                </Typography>
              </li>
            </ul>
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={12}>
        <Paper>
          <Box p={2}>
            <Typography variant="h5" color="textSecondary" component="p">
              Self-evaluation with checkboxes and list of all requirements
            </Typography>
          </Box>
          <Box px={2} pb={1}>
            {/* <Typography variant="h5" color="textSecondary" component="p">
              Score: 210 / 240
            </Typography> */}
            {/* <hr /> */}
            {/* <LinearProgress variant="determinate" value={(230 / 240) * 100} /> */}
          </Box>
          <Box px={2} pb={1}>
            <Typography variant="h6" color="textSecondary" component="p">
              Score: 210 / 240
            </Typography>
            <ul>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Checkbox checked={true} value="checkedB" color="primary" />
                <Typography variant="body2" color="textSecondary" component="p">
                  Difficulties for the team during implementation
                </Typography>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Checkbox checked={true} value="checkedB" color="primary" />
                <Typography variant="body2" color="textSecondary" component="p">
                  Difficulties for the team during implementation
                </Typography>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Checkbox checked={true} value="checkedB" color="primary" />
                <Typography variant="body2" color="textSecondary" component="p">
                  Difficulties for the team during implementation
                </Typography>
              </li>
            </ul>
          </Box>
          <Box px={2} pb={1}>
            <Typography variant="h6" color="textSecondary" component="p">
              Score: 210 / 240
            </Typography>
            <ul>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Checkbox checked={true} value="checkedB" color="primary" />
                <Typography variant="body2" color="textSecondary" component="p">
                  Difficulties for the team during implementation
                </Typography>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Checkbox checked={true} value="checkedB" color="primary" />
                <Typography variant="body2" color="textSecondary" component="p">
                  Difficulties for the team during implementation
                </Typography>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Checkbox checked={true} value="checkedB" color="primary" />
                <Typography variant="body2" color="textSecondary" component="p">
                  Difficulties for the team during implementation
                </Typography>
              </li>
            </ul>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  )
}
