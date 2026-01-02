import { clerkClient } from "@clerk/express";

// Middleware to check userId and PremiumPlan

export const auth = async (req, res, next) => {
    try {
            const { userId, has } = await req.auth();
            const hasPremiumPlan = await has({ plan: 'premium' });

            // publicMetadata , privateMetadata,email, name, etc
            // privateMetadata is used to store custom fields like free_usage.
            const user = await clerkClient.users.getUser(userId);

            if (!hasPremiumPlan && user.privateMetadata.free_usage) 
            {
                req.free_usage = user.privateMetadata.free_usage;
            } 
            else {
                await clerkClient.users.updateUserMetadata(userId, {
                    privateMetadata: { free_usage: 0 }
                });
                req.free_usage = 0;
            }

            req.plan = hasPremiumPlan ? 'premium' : 'free';
          next();
    } 
    catch (error) 
    {
        res.json({ success: false, message: error.message });
    }
};


// from google
export const isAuthenticated = (req, res, next) => {
  if (req.user) 
    return next();
  return res.status(401).json({ error: true, message: "Not Authorized" });
};

