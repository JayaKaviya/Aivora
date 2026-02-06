import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
  try {
    // If user is authenticated via Passport (Google OAuth)
    if (req.user && req.isAuthenticated()) {
      console.log("✅ Using Passport session, bypassing Clerk");
      req.plan = "free"; // Default plan for Passport users
      req.free_usage = 0;
      req.userId = req.user.id;
      return next();
    }

    // Otherwise use Clerk authentication
    const { userId, has } = await req.auth();
    console.log("userId =", userId);
    
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
    
    req.plan = hasPremiumPlan ? "premium" : "free";
    req.userId = userId;
    next();
    
  } catch (error) {
    console.log("❌ AUTH ERROR:", error.message);
    return res.status(401).json({
      success: false,
      message: "Choose your plan (Free or Premium) to use the features of Aivora."
    });
  }
};

export const isAuthenticated = (req, res, next) => {
  if (req.user) return next();
  return res.status(401).json({ error: true, message: "Not Authorized" });
};

// import { clerkClient } from "@clerk/express";

// export const auth = async (req, res, next) => {

//   try {

//     console.log("STEP 1: req.auth =", req.auth);

//     const { userId, has } = await req.auth();
//     console.log("STEP 2: userId =", userId);
//     console.log("STEP 3: has =", has);

//     const hasPremiumPlan = await has({ plan: "premium" });
//     console.log("STEP 4: hasPremiumPlan =", hasPremiumPlan);

//     const user = await clerkClient.users.getUser(userId);
//     console.log("STEP 5: clerk user fetched");

//     console.log("STEP 6: privateMetadata =", user.privateMetadata);

//     if (!hasPremiumPlan && user.privateMetadata.free_usage) {
//       console.log("STEP 7: using existing free_usage");
//       req.free_usage = user.privateMetadata.free_usage;
//     } 
//     else {
//       console.log("STEP 8: resetting free_usage");
//       await clerkClient.users.updateUserMetadata(userId, {
//         privateMetadata: { free_usage: 0 }
//       });
//       req.free_usage = 0;
//     }

//     req.plan = hasPremiumPlan ? "premium" : "free";
//     console.log("STEP 9: plan =", req.plan);

//     next();

//   } catch (error) {

//     console.log("❌ AUTH ERROR LINE:", error.stack);

//     return res.status(401).json({
//       success: false,
//       message: "Choose your plan (Free or Premium) to use the features of Aivora."
//     });
//   }
// };


// // // Middleware to check userId and PremiumPlan
// // export const auth = async (req, res, next) => {

// //     // console.log("Auth middleware called! req.headers:", req.headers);
// //     try {

// //           const { userId, has } = await req.auth();

// //             const hasPremiumPlan = await has({ plan: 'premium' });       

// //             // publicMetadata , privateMetadata,email, name, etc
// //             // privateMetadata is used to store custom fields like free_usage.
// //             const user = await clerkClient.users.getUser(userId);

// //             if (!hasPremiumPlan && user.privateMetadata.free_usage) 
// //             {
// //                 req.free_usage = user.privateMetadata.free_usage;
// //             } 
// //             else {
// //                 await clerkClient.users.updateUserMetadata(userId, {
// //                     privateMetadata: { free_usage: 0 }
// //                 });
// //                 req.free_usage = 0;
// //             } 

// //             req.plan = hasPremiumPlan ? 'premium' : 'free';

// //             //  console.log("Clerk auth details : ", userId,req.plan,req.free_usage)
// //           next();
// //     } 
// //     catch (error) 
// //     {    
// //       // console.log("Clerk auth error", error.message)

// //       return res.status(401).json({
// //         success: false,
// //         message: "Choose your plan (Free or Premium) to use the features of Aivora."
// //     });
        
// //     }
// // };


// // from google
// export const isAuthenticated = (req, res, next) => {
//   if (req.user) 
//     return next();
//   return res.status(401).json({ error: true, message: "Not Authorized" });
// };

