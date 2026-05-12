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
            required: true
        },
        content: {
            type: String,
            required: true,
        },
        
    }
)

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
