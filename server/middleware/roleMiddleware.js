export const requireOwner = (req, res, next) => {

    const role = req.auth?.sessionClaims?.metadata?.role;

    if (role !== "owner") {
        return res.status(403).json({
            message: "Owner access required"
        });
    }

    next();
};
