import React from "react";
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

class PetNew extends React.Component {
  constructor(props) {
    super(props)
    this.medicalInput= React.createRef()
    this.state={
      pet:{
        name:"",
        age:"",
        sex:"",
        species:"",
        breed:"",
        behavior:"",
        city:"",
        state:"",
        available:"",
        description:"",
        housetrained:false,
        vaccinations:false,
        livedWithAnimals:false,
        fixed:false,
        declawed:false,
        livedWithChildren:false,
        medical:[]
      }
    }
  }

  handleChange = (e) => {
    let { pet } = this.state
    const { name, value } = e.target
    if(name == "housetrained" || name == "vaccinations" || name == "livedWithAnimals" || name == "fixed" || name == "declawed" || name == "livedWithChildren"){
      pet[name] = e.target.checked
    } else {
      pet[name]=value
    }
    this.setState({pet})
  }

  handleMedical = (e) => {
    //get value from medical field
    let value = this.medicalInput.current.value
    //add value to pet medical array
    let pet = this.state.pet
    pet.medical.push(value)
    this.setState({pet})
    this.medicalInput.current.value = ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let { pet } = this.state
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
    fetch('/pets', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({ pet: data })
    })
      .then(response => {
        this.props.history.push('/petindex')
      })
      .catch(err => console.log(err))
  }

  render() {
    let { medical }=this.state.pet
    return (
      <>
      <div page-body>
        <Grid>
          <FormControl>
            <Grid>
              <Grid>
                <FormLabel>Name</FormLabel>
                <TextField
                  aria-label="Name"
                  variant="outlined"
                  name="name"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid>
                <FormLabel>Age</FormLabel>
                <TextField
                  aria-label="Age"
                  variant="outlined"
                  name="age"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid>
                <RadioGroup
                  aria-label="sex"
                  name="sex"
                  onChange={this.handleChange}
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
                  aria-label="Species"
                  variant="outlined"
                  name="species"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid>
                <FormLabel>Breed</FormLabel>
                <TextField
                  aria-label="Breed"
                  variant="outlined"
                  name="breed"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid>
                <FormLabel>Behavior/Personality</FormLabel>
                <TextField
                  aria-label="Behavior/Personality"
                  variant="outlined"
                  name="behavior"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid>
                <FormLabel>City</FormLabel>
                <TextField
                  aria-label="City"
                  variant="outlined"
                  name="city"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid>
                <FormLabel>State</FormLabel>
                <TextField
                  aria-label="State"
                  variant="outlined"
                  name="state"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid>
                <RadioGroup
                  aria-label="availability"
                  name="available"
                  onChange={this.handleChange}
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
                  className="input"
                  aria-label="Description"
                  variant="outlined"
                  name="description"
                  onChange={this.handleChange}
                  multiline
                  rows={4}
                />
              </Grid>
              <FormControl>
                <Grid>
                  <FormControlLabel
                  control={<Checkbox checked={this.state.housetrained}
                  onChange={this.handleChange}
                  name="housetrained"/>}
                  label="Housetrained"
                  />
                  <FormControlLabel
                  control={<Checkbox checked={this.state.vaccinations}
                  onChange={this.handleChange}
                  name="vaccinations"/>}
                  label="Vaccinations Current"
                  />
                  <FormControlLabel
                  control={<Checkbox checked={this.state.livedWithAnimals}
                  onChange={this.handleChange}
                  name="livedWithAnimals"/>}
                  label="Lived With Animals"
                  />
                  <FormControlLabel
                  control={<Checkbox checked={this.state.fixed}
                  onChange={this.handleChange}
                  name="fixed"/>}
                  label="Spayed/Neutered"
                  />
                  <FormControlLabel
                  control={<Checkbox checked={this.state.declawed}
                  onChange={this.handleChange}
                  name="declawed"/>}
                  label="Declawed(Cats Only)"
                  />
                  <FormControlLabel
                  control={<Checkbox checked={this.state.livedWithChildren}
                  onChange={this.handleChange}
                  name="livedWithChildren"/>}
                  label="Lived With Children"
                  />
                </Grid>
              </FormControl>
              <FormLabel>Please List Medical Issues</FormLabel>
              {medical && medical.map((issue, index)=>{
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
                  inputRef={this.medicalInput}
                  aria-label="Medical Issue Input"
                  variant="outlined"
                  name="medical"
                  />
                }
              />
              <Button onClick={this.handleMedical} variant="outlined">Add New</Button>
            </Grid>
            <Grid>
              <Button variant="outlined">
                Cancel
              </Button>
              <Button onClick={this.handleSubmit} variant="contained">
                Submit
              </Button>
            </Grid>
          </FormControl>
        </Grid>
        </div>
      </>
    );
  }
}
export default PetNew;
