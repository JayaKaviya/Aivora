import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
  try {

    // STEP 1
    if (!req.auth) {
      return res.status(200).json({
        debug: "STEP 1 - req.auth missing"
      });
    }

    // STEP 2
    const { userId, has } = await req.auth();

    if (!userId) {
      return res.status(200).json({
        debug: "STEP 2 - userId missing",
        userId
      });
    }

    // STEP 3
    const hasPremiumPlan = await has({ plan: "premium" });

    return res.status(200).json({
      debug: "STEP 3 - after has()",
      userId,
      hasPremiumPlan
    });

    // STEP 4
    const user = await clerkClient.users.getUser(userId);

    return res.status(200).json({
      debug: "STEP 4 - got user",
      privateMetadata: user.privateMetadata
    });

    // STEP 5
    if (!hasPremiumPlan) {
      if (typeof user.privateMetadata?.free_usage !== "number") {
        await clerkClient.users.updateUserMetadata(userId, {
          privateMetadata: { free_usage: 0 }
        });

        return res.status(200).json({
          debug: "STEP 5 - metadata initialized"
        });
      }
    }

    req.plan = hasPremiumPlan ? "premium" : "free";
    req.userId = userId;

    return res.status(200).json({
      debug: "STEP 6 - before next()",
      plan: req.plan
    });

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
