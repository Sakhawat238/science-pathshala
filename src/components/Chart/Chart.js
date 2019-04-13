import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from  'recharts';
import ChartStyles from './ChartStyles';
import { withStyles } from '@material-ui/core/styles';



const Chart =(props)=> {
    const {classes, data} = props;
    return(
        <div className={classes.bc}>
            <ResponsiveContainer width="100%" height="45%">
                <BarChart  data={data} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis hide="true" dataKey="name"/>
                    <YAxis />
                    <Tooltip/>
                    <Legend verticalAlign="top"/>
                    <Bar dataKey="problemsolved" fill="#FFDF60" stackId="stack" />
                    <Bar dataKey="wronganswer" fill="#E9655B" stackId="stack" />
                </BarChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%" height="55%">
                <BarChart data={data} margin={{top: 0, right: 0, left: 0, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis reversed="true"/>
                    <Tooltip/>
                    <Legend w/>
                    <Bar dataKey="problemasked" fill="#CCCCCD" stackId="stack" />
                    <Bar dataKey="problempending" fill="#7C7C7C" stackId="stack" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    ); 
}


export default withStyles(ChartStyles)(Chart);