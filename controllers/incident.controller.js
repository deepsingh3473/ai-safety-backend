import Incident from "../models/incident.model.js";

export const getAllIncidents = async (req, res) => {
    try{
        const incidents = await Incident.find();
        return res.status(200).json(incidents);
    }
    catch(error){
        console.log("Error in getAllIncident controller:", error.message);
        return res.status(500).json({error: "Internal Server Error"});
    }
}

export const addIncident = async (req, res) => {
    try{
        const {title, description, severity} = req.body;
        if(!title || !description || !severity){
            return res.status(400).json({error: "All fields are required!"});
        }

        if(!["Low", "Medium", "High"].includes(severity)){
            return res.status(400).json({error: "Invalid severity value!"});
        }

        const incident = new Incident({
            title,
            description,
            severity
        });

        await incident.save();

        return res.status(201).json(incident);
    }
    catch(error){
        console.log("Error in addIncident controller:", error.message);
        return res.status(500).json({error: "Internal Server Error"});
    }
}

export const getIncident = async (req, res) => {
    try{
        const { id } = req.params;
        const incident = await Incident.findById(id);
        
        if(!incident){
            return res.status(404).json({error: "Incident not found!"});
        }

        return res.status(200).json(incident);
    }
    catch(error){
        console.log("Error in getIncident controller:", error.message);
        return res.status(404).json({error: "Incident not found!"});
    }
}

export const deleteIncident = async (req, res) => {
    try{
        const { id } = req.params;
        const incident = await Incident.findByIdAndDelete(id);

        if(!incident){
            return res.status(404).json({error: "Incident not found!"});
        }

        return res.status(200).json({message: "Incident deleted successfully!"});
    }
    catch(error){
        console.log("Error in deleteIncident", error.message);
        return res.status(404).json({error: "Incident not found!"});
    }
}