import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
  try {

    const { userId, has } = await req.auth();

    if (!userId) {
      return res.status(403).json({
        success: false,
        message: "No plan selected"
      });
    }

    const hasPremiumPlan = await has({ plan: "premium" });
    const user = await clerkClient.users.getUser(userId);

    if (!hasPremiumPlan && user.privateMetadata?.free_usage !== undefined) {
      req.free_usage = user.privateMetadata.free_usage;
    
    } else {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: { free_usage: 0 }
      });
      req.free_usage = 0;
    }

    req.userId = userId;
    req.plan = hasPremiumPlan ? "premium" : "free";

    next();

  } catch (error) {
    return res.status(200).json({
      debug: "CATCH BLOCK",
      error: error.message,
      stack: error.stack
    });
  }
};

export const isAuthenticated = (req, res, next) => {
  if (req.user && req.isAuthenticated()) return next();
  return res.status(401).json({
    success: false,
    message: "Not Authorized",
  });
};
