import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment-timezone';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MdLiveTv } from 'react-icons/md';

import './index.css'

import api from '../../services/api';


interface Entries {
    media_id: number,
    title: string,
    description: string,
    human_start_time: string,
    human_end_time: string,
    duration_in_minutes: string,
    custom_info: any
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const Index = () => {

    const classes = useStyles();
    const [entries, setEntries] = useState<Entries[]>([]);

    useEffect(() => {
        api.get("/getRPCProgramming/" + moment().local().format("YYYY-MM-DD")).then(response => {
            const entries = response.data.programme.entries.map(((entries: any) => entries));
            setEntries(entries);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    function handleActiveProgram(title: string, startTime: string, endTime: string) {
        const localTimeNow = moment().local();
        const startTimeFormatted = moment(localTimeNow.toISOString().slice(0,10) + ' ' + startTime).local();
        const endTimeFormatted = moment(localTimeNow.toISOString().slice(0,10) + ' ' + endTime).local();

        if (localTimeNow.isBetween(startTimeFormatted, endTimeFormatted, undefined, '[]')) {
            return true;
        }

        return false;
    }

    function getTimeBrasiliaTimeZone (time: string) {
        return moment(moment().local().toISOString().slice(0,10) + ' ' + time).local().format("HH:mm");
    }

    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1>Programação - RPC</h1>
                    </Grid>                         
                    {entries.map((entries) => (
                        <Grid item xs={12} key={entries.media_id}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={entries.media_id.toString()}
                                    id={entries.media_id.toString()}>
                                    <img className="logo" src={entries.custom_info.Graficos.LogoURL} alt={entries.title}/>
                                    <Typography className={classes.heading}>&nbsp;&nbsp; {handleActiveProgram(entries.title, entries.human_start_time, entries.human_end_time) ? <span className="liveNow"> <MdLiveTv></MdLiveTv> EXIBINDO AGORA: </span> : ''} {entries.title} - Das {getTimeBrasiliaTimeZone(entries.human_start_time)} às {getTimeBrasiliaTimeZone(entries.human_end_time)}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid item xs={6}>
                                        <img className="image" src={entries.custom_info.Graficos.ImagemURL} alt={entries.title}/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p>{entries.title}</p>
                                        <p>Descrição: {entries.description}</p>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>          
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Index;