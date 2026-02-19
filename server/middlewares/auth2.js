import { clerkClient } from "@clerk/express";
export const auth = async (req, res, next) => {
  try {

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const email = req.user.emails?.[0]?.value;

    if (!email) {
      return res.status(401).json({
        success: false,
        message: "Email not found in Google profile",
      });
    }

    const users = await clerkClient.users.getUserList({
      emailAddress: [email],
    });

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

    req.plan = hasPremiumPlan ? "premium" : "free";
    req.userId = userId;

    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
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
