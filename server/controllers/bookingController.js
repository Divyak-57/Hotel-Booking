import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
    try {
        const {
            roomId,
            checkIn,
            checkOut
        } = req.body;

        if (new Date(checkIn) >= new Date(checkOut)) {
            return res.status(400).json({
                message: "Check-out must be after check-in"
            });
        }

        const overlappingBooking = await Booking.findOne({
            roomId,
            status: "confirmed",
            checkIn: { $lt: new Date(checkOut) },
            checkOut: { $gt: new Date(checkIn) }
        });

        if (overlappingBooking) {
            return res.status(409).json({
                message: "Room is already booked for these dates"
            });
        }

        const booking = await Booking.create({
            roomId,
            userId: req.auth.userId,
            checkIn,
            checkOut
        });

        res.status(201).json(booking);

    } catch (error) {
        res.status(500).json({
            message: "Booking creation failed"
        });
    }
};

export const getMyBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({
            userId: req.auth.userId
        }).populate("roomId");

        res.status(200).json(bookings);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch bookings"
        });
    }
};
