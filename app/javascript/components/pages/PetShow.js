import React from 'react'
import {
  Typography,
  Checkbox,
  Grid,
  FormGroup,
  FormLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const PetShow = ({match, pets, history, readPet, currentUser}) => {
  let pet = {}
  let livedWithAnimals, livedWithChildren
  if(pets) {
    pet = pets.find(obj => obj.id === +match.params.id)
    if(pet) {
      livedWithAnimals = pet.lived_with_animals
      livedWithChildren = pet.lived_with_children
    }
  }

  const deletePet = (id) => {
    fetch(`/pets/${id}`, {
      headers: {
          "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      readPet()
      history.push('/index')
    })
    .catch(errors => console.log("delete errors:", errors))
  }

  return(
    <Grid>
      {pet && (
        <>
          <Grid>
            <Typography>Name: {pet.name}</Typography>
            <Typography>Age: {pet.age}</Typography>
            <Typography>Sex: {pet.sex}</Typography>
            <Typography>Species: {pet.species}</Typography>
          </Grid>
          <Grid>
            <Typography>Behavior/Personality: {pet.behavior}</Typography>
            <Typography>City: {pet.city}</Typography>
            <Typography>State: {pet.state}</Typography>
            <Typography>Breed: {pet.breed}</Typography>
          </Grid>
          <Grid>
            <FormGroup>
              <FormLabel>Housetrained</FormLabel>
              <Checkbox disabled checked={pet.housetrained}/>
              <FormLabel>Vaccinations Current</FormLabel>
              <Checkbox disabled checked={pet.vaccinations}/>
              <FormLabel>Lived With Animals</FormLabel>
              <Checkbox disabled checked={livedWithAnimals}/>
              <FormLabel>Spayed/Neutered</FormLabel>
              <Checkbox disabled checked={pet.fixed}/>
              <FormLabel>Declawed (cats only)</FormLabel>
              <Checkbox disabled checked={pet.declawed}/>
              <FormLabel>Lived With Children</FormLabel>
              <Checkbox disabled checked={livedWithChildren}/>
            </FormGroup>
            <Typography>Description: </Typography>
            <Typography>{pet.description}</Typography>
            <Grid>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                  <Typography>Medical History </Typography>
                </AccordionSummary>
                  {pet.medical.map((issue, index) => {
                    return(
                      <AccordionDetails key={index}>
                        <Typography>
                          {issue}
                        </Typography>
                      </AccordionDetails>
                    )
                  }) }
              </Accordion>
            </Grid>
          </Grid>
          <Grid>
            <Button onClick={() => history.push('/index')}>Back</Button>
            {pet.available == true && <Button>Adopt Me!</Button>}
          </Grid>
          <Grid>
            {pet.user_id === currentUser.id && (
              <Button onClick={() => history.push(`/petedit/${match.params.id}`)}>
                Edit this pet
              </Button>
            )}
            <Button onClick={() => deletePet(pet.id)}>
              Delete Pet
            </Button>
          </Grid>
        </>
      ) }
    </Grid>
  )
}

export default PetShow
