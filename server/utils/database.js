import User from '../models/user.model.js';

export const aggregateUserData = async () => {
  try {
    const result = await User.aggregate([
      {
        $group: {
          _id: null,
          totalUsers: { $sum: 1 },
          averageAge: { $avg: "$age" },
          usersByCountry: {
            $push: {
              country: "$country",
              count: 1
            }
          }
        }
      },
      {
        $unwind: "$usersByCountry"
      },
      {
        $group: {
          _id: "$usersByCountry.country",
          totalUsers: { $sum: "$usersByCountry.count" },
          averageAge: { $first: "$averageAge" }
        }
      }
    ]);
    return result;
  } catch (error) {
    throw error;
  }
};
