import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import ActivitydDetails from '../details/ActivityDetails'
import ActivityList from './ActivityList'

// type safety
interface Props {
    activities: Activity[];
    
}

export default function ActivityDashboard({activities}: Props) {

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities}/>
            </Grid.Column>

            <Grid.Column width='6'>
                {activities[0] && <ActivitydDetails activity={activities[0]}/>}                
            </Grid.Column>
        </Grid>
    )
}