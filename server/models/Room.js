import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
    {
        hotelName: {
            type: String,
            required: true
        },

        roomType: {
            type: String,
            required: true
        },

        pricePerNight: {
            type: Number,
            required: true
        },

        capacity: {
            type: Number,
            required: true
        },

        description: {
            type: String
        },

        available: {
            type: Boolean,
            default: true
        },

        ownerId: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;
