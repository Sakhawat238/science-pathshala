import React from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import {withStyles} from '@material-ui/core';



const styles = theme=>({
    eventDetailsMain : {
        marginTop: 10,
        marginBottom: 30,
        marginLeft: 0,
        marginRight:0,
        boxShadow: '1px 1px 1px 1px darkgray',
        [theme.breakpoints.only('md')]:{
            marginLeft: 150,
            marginRight: 150,
        },
        [theme.breakpoints.only('lg')]:{
            marginLeft: 180,
            marginRight: 180,
        },
        [theme.breakpoints.only('xl')]:{
            marginLeft: 200,
            marginRight: 200,
        }
    }
});

const ChallengeDetails =(props)=>{
    const {examdata, onTakeExamClick, classes} = props;
 
    return(
        <div className={classes.eventDetailsMain}>
            <Table style={{backgroundColor:'#f9f9f9'}}>
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={3}>{`Exam No: ${examdata.exam_id}`}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <p>Name:</p>
                        </TableCell>
                        <TableCell colSpan={2}>
                            <p>{examdata.name}</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell rowSpan={4}>
                            <p>Details:</p>
                        </TableCell>
                        <TableCell>
                            <strong>Question:</strong>
                        </TableCell>
                        <TableCell>
                            <p>{examdata.no_ques}</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <strong>Mark:</strong>
                        </TableCell>
                        <TableCell>
                            <p>{`${examdata.mark}X${examdata.no_ques}`}</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <strong>Negative Mark:</strong>
                        </TableCell>
                        <TableCell>
                            <p>{examdata.neq_mark}</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <strong>Time:</strong>
                        </TableCell>
                        <TableCell>
                            <p>{`${examdata.time} min`}</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={3} style={{textAlign:'center'}}>
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{ textTransform: "none" }}
                                onClick={()=>onTakeExamClick(examdata.exam_id)}
                            >
                                Take Exam
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
    
}

export default withStyles(styles)(ChallengeDetails);