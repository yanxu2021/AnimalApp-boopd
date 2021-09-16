import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Button,
  Typography,
  Checkbox
} from "@material-ui/core";

const PetEdit = (props) => {
  const [pet, setPet] = useState({})
  const [loaded, setLoaded] = useState(0)
  const [medical, setMedical] = useState('')

  useEffect(() => {
    fetch(`/pets/${props.match.params.id}`)
      .then(response => response.json())
      .then(payload => {
        setPet({...payload, livedWithChildren: payload.lived_with_children, livedWithAnimals: payload.lived_with_animals})
      })
      .catch(err => console.log(err))
  }, [loaded])

  const handleChange = (e) => {
    let petEditing = pet
    const { name, value } = e.target
    if(name == "housetrained" || name == "vaccinations" || name == "livedWithAnimals" || name == "fixed" || name == "declawed" || name == "livedWithChildren"){
      petEditing[name] = e.target.checked
    } else {
      petEditing[name]=value
    }
    setPet({...pet, ...petEditing})
    console.log(pet)
  }

  const handleMedicalInput = e => {
    setMedical(e.target.value)
  }

  const handleMedical = (e) => {
    setPet({...pet, medical: [...pet.medical, e.target.value] })
    setMedical('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      name: pet.name,
      age: pet.age,
      sex: pet.sex,
      species: pet.species,
      breed: pet.breed,
      behavior: pet.behavior,
      city: pet.city,
      state: pet.state,
      available: pet.available,
      description: pet.description,
      housetrained: pet.housetrained,
      vaccinations: pet.vaccinations,
      lived_with_animals: pet.livedWithAnimals,
      fixed: pet.fixed,
      declawed: pet.declawed,
      lived_with_children: pet.livedWithChildren,
      medical: pet.medical
    }
    fetch(`/pets/${props.match.params.id}`, {
      method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({ pet: data })
    })
      .then(response => {
        props.history.push('/petindex')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      {pet.id && (
      <Grid>
        <FormControl>
          <Grid>
            <Grid>
              <FormLabel>Name</FormLabel>
              <TextField
                defaultValue={pet.name}
                aria-label="Name"
                variant="outlined"
                name="name"
                onChange={handleChange}
              />
            </Grid>
            <Grid>
              <FormLabel>Age</FormLabel>
              <TextField
                defaultValue={pet.age}
                aria-label="Age"
                variant="outlined"
                name="age"
                onChange={handleChange}
              />
            </Grid>
            <Grid>
              <RadioGroup
                defaultValue={pet.sex}
                aria-label="sex"
                name="sex"
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                  aria-label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                  aria-label="Female"
                />
              </RadioGroup>
            </Grid>
            <Grid>
              <FormLabel>Species</FormLabel>
              <TextField
                defaultValue={pet.species}
                aria-label="Species"
                variant="outlined"
                name="species"
                onChange={handleChange}
              />
            </Grid>
            <Grid>
              <FormLabel>Breed</FormLabel>
              <TextField
                defaultValue={pet.breed}
                aria-label="Breed"
                variant="outlined"
                name="breed"
                onChange={handleChange}
              />
            </Grid>
            <Grid>
              <FormLabel>Behavior/Personality</FormLabel>
              <TextField
                defaultValue={pet.behavior}
                aria-label="Behavior/Personality"
                variant="outlined"
                name="behavior"
                onChange={handleChange}
              />
            </Grid>
            <Grid>
              <FormLabel>City</FormLabel>
              <TextField
                defaultValue={pet.city}
                aria-label="City"
                variant="outlined"
                name="city"
                onChange={handleChange}
              />
            </Grid>
            <Grid>
              <FormLabel>State</FormLabel>
              <TextField
                defaultValue={pet.state}
                aria-label="State"
                variant="outlined"
                name="state"
                onChange={handleChange}
              />
            </Grid>
            <Grid>
              <RadioGroup
                defaultValue={pet.available}
                aria-label="availability"
                name="available"
                onChange={handleChange}
              >
                <FormControlLabel
                value="true"
                control={<Radio />}
                label="Available Now"
                aria-label="Available Now"
                />
                <FormControlLabel
                value="false"
                control={<Radio />}
                label="Not Available"
                aria-label="Not Available"
                />
              </RadioGroup>
            </Grid>
            <Grid>
              <FormLabel>Description</FormLabel>
              <TextField
                defaultValue={pet.description}
                aria-label="Description"
                variant="outlined"
                name="description"
                onChange={handleChange}
                multiline
                rows={4}
              />
            </Grid>
            <FormControl>
              <Grid>
                <FormControlLabel
                control={<Checkbox
                checked={pet.housetrained}
                onChange={handleChange}
                name="housetrained"/>}
                label="Housetrained"
                />
                <FormControlLabel
                control={<Checkbox
                checked={pet.vaccinations}
                onChange={handleChange}
                name="vaccinations"/>}
                label="Vaccinations Current"
                />
                <FormControlLabel
                control={<Checkbox
                checked={pet.livedWithAnimals}
                onChange={handleChange}
                name="livedWithAnimals"/>}
                label="Lived With Animals"
                />
                <FormControlLabel
                control={<Checkbox
                checked={pet.fixed}
                onChange={handleChange}
                name="fixed"/>}
                label="Spayed/Neutered"
                />
                <FormControlLabel
                control={<Checkbox
                checked={pet.declawed}
                onChange={handleChange}
                name="declawed"/>}
                label="Declawed(Cats Only)"
                />
                <FormControlLabel
                control={<Checkbox
                checked={pet.livedWithChildren}
                onChange={handleChange}
                name="livedWithChildren"/>}
                label="Lived With Children"
                />
              </Grid>
            </FormControl>
            <FormLabel>Please List Medical Issues</FormLabel>
            {pet.medical && pet.medical.map((issue, index)=>{
              return(
                <div key={index}>
                  <FormLabel>Issue {index+1}</FormLabel>
                  <Typography>{issue}</Typography>
                </div>
              )
            })}
            <FormControlLabel
              control={
                <TextField
                onChange={handleMedicalInput}
                aria-label="Medical Issue Input"
                variant="outlined"
                name="medical"
                />
              }
            />
            <Button onClick={handleMedical} variant="outlined">Add New</Button>
          </Grid>
          <Grid>
            <Button onClick={()=> {props.history.push(`/petshow/${props.match.params.id}`)}}
              variant="outlined">
              Cancel
            </Button>
            <Button onClick={handleSubmit} variant="contained">
              Submit
            </Button>
          </Grid>
        </FormControl>
      </Grid>
      )}
    </>
  );
}
export default PetEdit;
