import type { NextPage } from 'next'
import Head from 'next/head'

import AppBar from "Components/AppBar"
import Drawer from "Components/Drawer"
import Grid from '@mui/material/Grid'

const Dashboard: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AppBar />
        </Grid>
        <Grid item xs={4}>
          <Drawer />
        </Grid>
        <Grid item xs={8}>
          <div>Hello Dashboard</div>
        </Grid>
      </Grid>

    </div>
  )
}

export default Dashboard
