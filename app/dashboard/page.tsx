'use client';
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Skeleton from "@/components/Skeleton"; // Assuming you have a Skeleton component for loading states

const Dashboard = () => {
  const { data: session, status: sessionStatus } = useSession();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Fetch additional user data (e.g., voting status, upcoming elections)
    if (session?.user?.email) {
      // Fetch user data (e.g., voting progress, elections data, etc.)
      // Replace this with actual API call to fetch user-related data (e.g., voting status, elections)
      setUserData({
        hasVoted: false,
        upcomingElections: [
          { name: "Election 1", date: "2024-12-15" },
          { name: "Election 2", date: "2024-12-20" },
        ],
        recentActivity: [
          { action: "Registered for Election 1", date: "2024-11-25" },
          { action: "Checked Election Status", date: "2024-11-26" },
        ],
      });
    }
  }, [session]);

  if (sessionStatus === "loading") {
    return <Skeleton />;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col p-6">
      {/* Sidebar */}
      <div className="flex">
        <div className="w-64 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">LASVEC Dashboard</h2>
          <ul className="mt-6 space-y-4">
            <li>
              <a href="/dashboard" className="text-lg hover:text-blue-300">Home</a>
            </li>
            <li>
              <a href="/profile" className="text-lg hover:text-blue-300">Profile</a>
            </li>
            <li>
              <a href="/elections" className="text-lg hover:text-blue-300">Elections</a>
            </li>
            <li>
              <a href="/settings" className="text-lg hover:text-blue-300">Settings</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-4">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h1 className="text-3xl font-semibold text-blue-600">Welcome Back, {session?.user?.name}!</h1>
            <p className="mt-2 text-gray-600">We are glad to have you here. Let's take a look at your dashboard.</p>
          </div>

          {/* Voting Progress */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-semibold text-blue-600">Voting Progress</h2>
            <div className="mt-4">
              {userData?.hasVoted ? (
                <p className="text-green-500">You have already voted in the upcoming elections!</p>
              ) : (
                <p className="text-red-500">You haven't voted yet. Please participate in the upcoming elections.</p>
              )}
            </div>
          </div>

          {/* Upcoming Elections */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-semibold text-blue-600">Upcoming Elections</h2>
            <div className="mt-4">
              {userData?.upcomingElections?.length ? (
                <ul className="space-y-4">
                  {userData.upcomingElections.map((election: any, index: number) => (
                    <li key={index} className="border-b py-2">
                      <h3 className="text-lg font-semibold text-gray-800">{election.name}</h3>
                      <p className="text-gray-600">{election.date}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No upcoming elections available.</p>
              )}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600">Recent Activity</h2>
            <div className="mt-4">
              {userData?.recentActivity?.length ? (
                <ul className="space-y-4">
                  {userData.recentActivity.map((activity: any, index: number) => (
                    <li key={index} className="border-b py-2">
                      <p className="text-gray-800">{activity.action}</p>
                      <p className="text-gray-600 text-sm">{activity.date}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No recent activity available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
