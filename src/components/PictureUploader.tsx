import React from 'react';

interface PictureUploaderProps {
  title: string;
  profilePicture: string | null | undefined;
}

const PictureUploader: React.FC<PictureUploaderProps> = ({ title, profilePicture }) => {
  const handleUpload = () => {
    // Upload handler...
  };

  const handleDelete = () => {
    // Delete handler...
  };
	console.log('profilePicture', profilePicture)
  return (
    <div>
      <img
        className="w-200 h-200 mb-4 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0"
        src={profilePicture ?? '/user.png'}
        alt="User profile"
      />
      <div>
        <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          JPG, GIF or PNG. Max size of 800K
        </div>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={handleUpload}
          >
            <svg
              className="-ml-1 mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
              ></path>
              <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
            </svg>
            Upload picture
          </button>

          <button
            type="button"
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PictureUploader;
