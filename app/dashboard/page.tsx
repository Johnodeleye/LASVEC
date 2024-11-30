'use client';
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Skeleton from "@/components/Skeleton";
import { redirect } from "next/navigation";

const Dashboard = () => {
  const { data: session, status: sessionStatus } = useSession();
  const [userData, setUserData] = useState<any>(null);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (session?.user?.email) {
      // Mock user data, replace with actual API call
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

  if(!session){
    redirect('/login')
  }
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Navigation */}
      <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-3 md:hidden">
        <h2 className="text-xl font-bold">e-Voting Dashboard</h2>
        <button
          className="text-white"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          ☰
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`${
            showSidebar ? "block" : "hidden"
          } fixed inset-0 z-40 bg-blue-600 text-white p-4 w-64 md:relative md:block md:w-64`}
        >
          <h2 className="text-2xl font-bold">e-Voting Dashboard</h2>
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
        <div className="flex-1 ml-0 md:ml-4 px-4 md:px-6">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h1 className="text-3xl font-semibold text-blue-600">
              Welcome Back, {session?.user?.name}!
            </h1>
            <p className="mt-2 text-gray-600">Let’s explore your dashboard.</p>
          </div>

          {/* Voting Progress */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-semibold text-blue-600">Voting Progress</h2>
            <div className="mt-4">
              {userData?.hasVoted ? (
                <p className="text-green-500">You have already voted!</p>
              ) : (
                <p className="text-red-500">You haven’t voted yet. Participate now!</p>
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
