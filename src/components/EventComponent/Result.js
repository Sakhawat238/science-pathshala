import React from 'react'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {withStyles} from '@material-ui/core/styles';

const styles = theme=>({
    rmaindiv:{
        paddingTop:30,
        paddingBottom:30,
        [theme.breakpoints.only('xs')]:{
            paddingLeft: 0,
            paddingRight: 0
        },
        [theme.breakpoints.only('sm')]:{
            paddingLeft: 10,
            paddingRight: 10
        },
        [theme.breakpoints.only('md')]:{
            paddingLeft: 100,
            paddingRight: 100
        },
        [theme.breakpoints.only('lg')]:{
            paddingLeft: 300,
            paddingRight: 300
        },
        [theme.breakpoints.only('xl')]:{
            paddingLeft: 400,
            paddingRight: 400
        }
    }
})


const Result =(props)=>{
    const{data, classes}= props;
    return(
        <div className={classes.rmaindiv}>
            <Table style={{boxShadow:'1px 1px 4px 1px darkgray'}}>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <p>Event Name:</p>
                        </TableCell>
                        <TableCell>
                            <p>{data["0"].event_name}</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <p>Event Start:</p>
                        </TableCell>
                        <TableCell>
                            <p>{data["0"].event_start_from}</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <p>Event End:</p>
                        </TableCell>
                        <TableCell>
                            <p>{data["0"].event_end_at}</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <p>Exam Name:</p>
                        </TableCell>
                        <TableCell>
                            <p>{data["0"].event_exam_name}</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <p>Exam Attend Time:</p>
                        </TableCell>
                        <TableCell>
                            <p>{data["0"].exam_taken_at}</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <p>Exam Duration:</p>
                        </TableCell>
                        <TableCell>
                            <p>{data["0"].exam_time}</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <p>Total Marks:</p>
                        </TableCell>
                        <TableCell>
                            <p>{`${data["0"].number_of_question}*${data["0"].mark_per_question}`}</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <p>Mark Obtained:</p>
                        </TableCell>
                        <TableCell>
                            <p>{data["0"].marks_obtained}</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <p>Rank:</p>
                        </TableCell>
                        <TableCell>
                            <p>{data["0"].rank}</p>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export default withStyles(styles)(Result);