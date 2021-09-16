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

class PetEdit extends React.Component {
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
      },
      loaded:0
    }
  }

  componentDidUpdate = () => {
    let pet  
    if (!this.state.loaded) { 
      console.log(this.props.pets)
      pet = this.props.pets.find((p)=>{
        return p.id === +this.props.match.params.id
      })
      pet && this.setState({pet, loaded:1})
      console.log(pet)
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
    this.setState({...this.state, pet})
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
    fetch(`/pets/${this.props.match.params.id}`, {
      method: 'PATCH',
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
    let pet=this.state.pet
    return (
      <>
        <Grid>
          <FormControl>
            <Grid>
              <Grid>
                <FormLabel>Name</FormLabel>
                <TextField
                  value={pet.name}
                  aria-label="Name"
                  variant="outlined"
                  name="name"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid>
                <FormLabel>Age</FormLabel>
                <TextField
                  value={pet.age}
                  aria-label="Age"
                  variant="outlined"
                  name="age"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid>
                <RadioGroup
                  value={pet.sex}
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
                  value={pet.species}
                  aria-label="Species"
                  variant="outlined"
                  name="species"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid>
                <FormLabel>Breed</FormLabel>
                <TextField
                  value={pet.breed}
                  aria-label="Breed"
                  variant="outlined"
                  name="breed"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid>
                <FormLabel>Behavior/Personality</FormLabel>
                <TextField
                  value={pet.behavior}
                  aria-label="Behavior/Personality"
                  variant="outlined"
                  name="behavior"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid>
                <FormLabel>City</FormLabel>
                <TextField
                  value={pet.city}
                  aria-label="City"
                  variant="outlined"
                  name="city"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid>
                <FormLabel>State</FormLabel>
                <TextField
                  value={pet.state}
                  aria-label="State"
                  variant="outlined"
                  name="state"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid>
                <RadioGroup
                  value={pet.availability}
                  aria-label="availability"
                  name="available"
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                  value="true"
                  control={<Radio checked={pet.availability == true} />}
                  label="Available Now"
                  aria-label="Available Now"
                  />
                  <FormControlLabel
                  value="false"
                  control={<Radio checked={pet.availability == true} />}
                  label="Not Available"
                  aria-label="Not Available"
                  />
                </RadioGroup>
              </Grid>
              <Grid>
                <FormLabel>Description</FormLabel>
                <TextField
                  value={pet.description}
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
                  control={<Checkbox 
                  checked={pet.housetrained}
                  onChange={this.handleChange}
                  name="housetrained"/>}
                  label="Housetrained"
                  />
                  <FormControlLabel
                  control={<Checkbox 
                  checked={pet.vaccinations}
                  onChange={this.handleChange}
                  name="vaccinations"/>}
                  label="Vaccinations Current"
                  />
                  <FormControlLabel
                  control={<Checkbox 
                  checked={pet.livedWithAnimals}
                  onChange={this.handleChange}
                  name="livedWithAnimals"/>}
                  label="Lived With Animals"
                  />
                  <FormControlLabel
                  control={<Checkbox 
                  checked={pet.fixed}
                  onChange={this.handleChange}
                  name="fixed"/>}
                  label="Spayed/Neutered"
                  />
                  <FormControlLabel
                  control={<Checkbox 
                  checked={pet.declawed}
                  onChange={this.handleChange}
                  name="declawed"/>}
                  label="Declawed(Cats Only)"
                  />
                  <FormControlLabel
                  control={<Checkbox 
                  checked={pet.livedWithChildren}
                  onChange={this.handleChange}
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
              <Button onClick={()=> {this.props.history.push(`/petshow/${this.props.match.params.id}`)}}
                variant="outlined">
                Cancel
              </Button>
              <Button onClick={this.handleSubmit} variant="contained">
                Submit
              </Button>
            </Grid>
          </FormControl>
        </Grid>
      </>
    );
  }
}
export default PetEdit;
