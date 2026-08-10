import { requireAuth } from "@clerk/express";

export const authenticateUser = requireAuth();
