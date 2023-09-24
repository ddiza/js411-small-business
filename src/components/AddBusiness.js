import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Container, Paper, TextField, Button, Chip } from '@mui/material'



const AddBusiness = (props) => {

    const [newBiz, setNewBiz] = useState({
        name: "",
        description: "",
        address: "",
        hours: [],
        url: "",
        position: {}
    })

    const [tempHours, setTempHours] = useState("")

    const navigate = useNavigate()

    const handleTextChange = (e) => {
        const newState = { ...newBiz }
        newState[e.target.id] = e.target.value
        setNewBiz(newState)
    }
    
    const updateTempHours = (e) => {
        let newState = e.target.value
        setTempHours(newState)
    }

    const handleHours = (e) => {
        if (tempHours) {
            const newState = { ...newBiz }
            newState.hours.push(tempHours)
            setNewBiz(newState)
            tempHours = ""
        }
    }

    const deleteHour = (index) => {
        const newState = {...newBiz}
        newState.hours.splice(index, 1)
        setNewBiz(newState)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newBiz.hours.length === 0){
            alert("Looks like your business has no hours listed.  Be sure and click 'add hours' after you type the schedule!")
        } else
        fetch(`https://geocode.maps.co/search?q=${newBiz.address}`)
            .then((response)=> response.json())
            .then((data)=> {
                const pos = {
                    lat: parseFloat(data[0].lat),
                    lng: parseFloat(data[0].lon)
                }
                setNewBiz((prev)=> {prev.position = pos})
                const payload = { ...newBiz }
                console.log("NEW BUSINESS: ", payload)
                props.addBusiness(payload)
                navigate("/business")
            })
            .catch((err)=> console.log(err))
    }

    return (
        <Container className="addContainer">
            <Paper>
            <h1>Add add to business listing</h1>
            <form onSubmit={handleSubmit} >
            <TextField 
                id="name" 
                className="addInput"
                placeholder="Name of Organization" 
                value={newBiz.name} 
                onChange={handleTextChange} 
                required />
            <TextField 
                id="description" 
                className="addInput"
                placeholder="Organization description" 
                value={newBiz.description} 
                onChange={handleTextChange} 
                required />
            <TextField 
                id="address" 
                className="addInput"
                placeholder="Physical Location Address" 
                value={newBiz.address} 
                onChange={handleTextChange} 
                required />
            <TextField 
                id="hours" 
                className="addInput"
                placeholder="Hours-of-Operation (Example: MON-FRI: 1 pm - 5 pm)" 
                value={tempHours} 
                onChange={updateTempHours} 
                required />
            <Button onClick={handleHours}>Click: Add & Review Hours</Button>
            {newBiz.hours.map((entry, index)=> {
                // May need to add Stack element here 
                return <Chip label={entry} onDelete={()=> {deleteHour(index)}}></Chip>
            })}
            <TextField 
                id="url" 
                className="addInput"
                placeholder="Organization's Website" 
                value={newBiz.url} 
                onChange={handleTextChange} 
                required />
            <Button variant="contained" type="submit">Add to Listing</Button>
            </form>
            </Paper>
        </Container>
    )

}

export default AddBusiness