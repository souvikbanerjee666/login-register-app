import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      setUser(JSON.parse(currentUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
    window.location.href = '/UserLogin'
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Please log in</h1>
          <Link to="/UserLogin" className="text-blue-600 hover:underline">Go to Login</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">My App</h1>
            </div>
            <div className="flex items-center space-x-4">
              {user.profilePicture && (
                <img 
                  src={`http://localhost:4000${user.profilePicture}`}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
              <span className="text-gray-700">Welcome, {user.fullname}</span>
              <button 
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex-shrink-0">
                  {user.profilePicture ? (
                    <img 
                      src={`http://localhost:4000${user.profilePicture}`}
                      alt="Profile"
                      className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-4 border-gray-200">
                      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{user.fullname}</h2>
                  <p className="text-gray-600">@{user.username}</p>
                </div>
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Information</h3>
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                  <dd className="mt-1 text-sm text-gray-900">{user.fullname}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Username</dt>
                  <dd className="mt-1 text-sm text-gray-900">{user.username}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Profile Picture</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {user.profilePicture ? 'Uploaded' : 'Not uploaded'}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard