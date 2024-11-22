const Grid = () => {
    return (
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 lg:py-32">
        <div className="bg-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-lg font-bold mb-2">Step 1: Create an Account</h3>
          <p className="text-sm">Sign up for free and start exploring our platform.</p>
        </div>
        <div className="bg-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-lg font-bold mb-2">Step 2: Verify Your Email</h3>
          <p className="text-sm">Check your inbox for a verification email and click the link to activate your account.</p>
        </div>
        <div className="bg-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-lg font-bold mb-2">Step 3: Set Up Your Profile</h3>
          <p className="text-sm">Complete your profile with a profile picture, bio, and other relevant information.</p>
        </div>
        <div className="bg-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-lg font-bold mb-2">Step 4: Get Started</h3>
          <p className="text-sm">You're all set! Start exploring our platform and achieving your goals.</p>
        </div>
      </div>
    );
  };
  
  export default Grid;