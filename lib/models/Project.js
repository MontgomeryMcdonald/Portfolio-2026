import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: false,
            trim:true
        },
        isOngoing: {
            type: Boolean,
            required: true
        },
        image: {
            type: String,
            required: false
        },
        source: {
            type: String,
            required: false
        }
        
    }
)

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
