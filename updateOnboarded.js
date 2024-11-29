import connectMongo from './lib/mongodb.js'; // Ensure the path includes '.js'
import User from './models/User.js'; // Ensure the path includes '.js'

const addMissingOnboardedField = async () => {
  try {
    await connectMongo();

    const result = await User.updateMany(
      { onboarded: { $exists: false } },
      { $set: { onboarded: false } }
    );

    console.log(`Matched ${result.matchedCount} documents.`);
    console.log(`Modified ${result.modifiedCount} documents.`);
  } catch (err) {
    console.error('Error updating users:', err);
  } finally {
    process.exit();
  }
};

addMissingOnboardedField();
