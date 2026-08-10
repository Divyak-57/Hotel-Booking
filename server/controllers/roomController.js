import Room from "../models/Room.js";

export const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();

        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch rooms"
        });
    }
};

export const getRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);

        if (!room) {
            return res.status(404).json({
                message: "Room not found"
            });
        }

        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch room"
        });
    }
};

export const createRoom = async (req, res) => {
    try {
        const room = await Room.create({
            ...req.body,
            ownerId: req.auth.userId
        });

        res.status(201).json(room);
    } catch (error) {
        res.status(500).json({
            message: "Failed to create room"
        });
    }
};
