import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Why boopd?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There are many resources out there for finding potential pets to adopt. We at boopd found that the vast
            majority of these resources are overpopulated by organizations like animal shelters and breeding companies.
            Our product is aimed towards the individual. We desire to nurture a more intimate and accountable setting
            for pets that allows owners who know what the pet needs to find the perfect home for them. At boopd, your pet
            is not simply a commodity; they are a cherished friend and companion for whom you wish to ensure the brightest
            future with their new human.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What do I need to do to post my pet?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Anyone can post a pet for adoption, or simply for advice. All you have to do is sign up for an account with us.
            Accounts are free and are distinguished by role upon sign-up: specify whether you are looking for a new companion
            with which to share your life and love, or looking for a home where you can relocate your cherished furry one.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How do I adopt?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In order to protect our members from unnecessary exposure of information, we ask that the primary contact
            point for communication between our members be an e-mail address. You are welcome to post any other contact
            information you wish, but the only required fields are general location and e-mail as far as contact information
            goes. Our organization is dedicated to finding homes for pets that will nurture and treasure them, and to that end
            we ask that you contact the current owner of a pet and speak with them about that pets needs and personality before
            either party must take a leap of faith and confirm the re-home. This is to ensure that unforseen circumstances are
            kept to a minimum, and pets are not subjected to the turmoil of moving back and forth between homes. Remember, this
            is first and foremost for the prosperity of the non-human friends we share our lives with!
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
