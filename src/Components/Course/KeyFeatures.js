import { Grid } from '@mui/material'
import React from 'react'

const KeyFeatures = ({keyFeaturesData}) => {
  return (
    <Grid container>
        <Grid item xs={12}>Key Features</Grid>
        <Grid container>
            <Grid item sm={12} xs={12} md={7}>
                {keyFeaturesData?.map((val)=>(
                    <dl>
                        <dt>{val?.title}</dt>
                        <dd>{val?.desc}</dd>
                    </dl>
                ))}
            </Grid>
            <Grid item sm={12} xs={12} md={5}>
                
            </Grid>
        </Grid>
    </Grid>
    )
}

export default KeyFeatures