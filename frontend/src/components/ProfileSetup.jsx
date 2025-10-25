import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ProfileSetup = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onload = () => setPreview(reader.result)
      reader.readAsDataURL(file)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a profile picture')
      return
    }

    setLoading(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('profilePicture', selectedFile)

      const currentUser = JSON.parse(localStorage.getItem('currentUser'))
      
      const response = await axios.post(
        `http://localhost:4000/api/upload-profile/${currentUser.id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )

      // Update user data in localStorage
      const updatedUser = { ...currentUser, profilePicture: response.data.profilePicture }
      localStorage.setItem('currentUser', JSON.stringify(updatedUser))

      navigate('/dashboard')
    } catch (error) {
      setError('Failed to upload profile picture. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSkip = () => {
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Set up your profile
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Add a profile picture to personalize your account
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow rounded-lg">
          <div className="space-y-6">
            {/* Profile Picture Preview */}
            <div className="flex justify-center">
              <div className="relative">
                {preview ? (
                  <img
                    src={preview}
                    alt="Profile preview"
                    className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center border-4 border-gray-200">
                    <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* File Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Choose Profile Picture
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleUpload}
                disabled={loading}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Uploading...
                  </>
                ) : (
                  'Upload Picture'
                )}
              </button>
              
              <button
                onClick={handleSkip}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
              >
                Skip for now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSetup