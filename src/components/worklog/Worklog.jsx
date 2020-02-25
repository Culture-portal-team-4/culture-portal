import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ShareIcon from '@material-ui/icons/Share'
import { Grid } from '@material-ui/core'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

// import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'
import ReactMinimalPieChart from 'react-minimal-pie-chart'

import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 100 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 }
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#00C49F']

export default function Worklog() {
  return (
    <Grid container sm={12}>
      <Grid item sm={6}>
        <Card>
          <CardHeader
            avatar={<Avatar />}
            title={'test'}
            action={
              <IconButton>
                <ShareIcon />
              </IconButton>
            }
          />
          <CardMedia
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
          />
          <CardContent>
            {/* <Typography variant="body1" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography> */}

            <Grid container sm={12}>
              <Grid item sm={12}>
                <Typography variant="h6" color="textSecondary" component="h3">
                  Worklog
                </Typography>
              </Grid>
              <Grid item sm={8}>
                <ul>
                  {COLORS.map(color => {
                    return (
                      <li
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          padding: '8px'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span
                            style={{
                              background: color,
                              width: '16px',
                              height: '16px',
                              borderRadius: '50%',
                              display: 'block',
                              marginRight: '8px'
                            }}
                          ></span>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Design and markup for main page
                          </Typography>
                        </div>

                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          2h
                        </Typography>
                      </li>
                    )
                  })}
                </ul>
              </Grid>
              <Grid item sm={4}>
                <ReactMinimalPieChart
                  style={{ height: '150px' }}
                  animate={true}
                  animationDuration={500}
                  animationEasing="ease-out"
                  cx={50}
                  cy={50}
                  data={COLORS.map((color, index) => {
                    return {
                      color: color,
                      title: 'One',
                      value: index + 2
                    }
                  })}
                  //   label
                  label={true}
                  labelPosition={75}
                  labelStyle={{
                    fill: '#121212',
                    fontFamily: 'sans-serif',
                    fontSize: '10px'
                  }}
                  lengthAngle={360}
                  lineWidth={50}
                  onClick={undefined}
                  onMouseOut={undefined}
                  onMouseOver={undefined}
                  paddingAngle={0}
                  radius={50}
                  rounded={false}
                  startAngle={0}
                  viewBoxSize={[100, 100]}
                />
              </Grid>
            </Grid>
            <div style={{ display: 'flex' }}></div>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox checked={true} value="checkedA" />}
                label="Secondary"
              />
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox checked={true} value="checkedA" />}
                label="Secondary"
              />
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox checked={true} value="checkedA" />}
                label="Secondary"
              />
            </FormGroup>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
