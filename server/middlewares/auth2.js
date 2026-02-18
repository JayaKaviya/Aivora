import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
  try {
  
      console.log("🔥 AUTH MIDDLEWARE HIT");
    if (!req.user || !req.isAuthenticated()) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
    }
     console.log("user authenticated");
    console.log("🔍 Google user email:", req.user.email);

    const users = await clerkClient.users.getUserList({
      emailAddress: [req.user.email],
    });

    console.log("🔍 Clerk users found:", users.length);


    if (!users.length) {
      return res.status(401).json({
        success: false,
        message: "Choose your plan (Free or Premium) to use the features of Aivora.",
      });
    }

    const clerkUser = users[0];
    const userId = clerkUser.id;
    const subscriptions = clerkUser.subscriptions || [];

    const hasPremiumPlan = subscriptions.some(
      (sub) =>
        sub.status === "active" &&
        sub.plan?.name?.toLowerCase() === "premium"
    );

    let free_usage = clerkUser.privateMetadata?.free_usage;

    if (!hasPremiumPlan) {
      if (typeof free_usage !== "number") {
        await clerkClient.users.updateUserMetadata(userId, {
          privateMetadata: { free_usage: 0 },
        });
        free_usage = 0;
      }
    } else {
 
      free_usage = null;
    }

    req.plan = hasPremiumPlan ? "premium" : "free";
    req.free_usage = free_usage;
    req.userId = userId;

    next();
  } catch (error) {
    console.error("❌ AUTH ERROR:", error.message);

    return res.status(401).json({
      success: false,
      message: "Choose your plan (Free or Premium) to use the features of Aivora.",
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
