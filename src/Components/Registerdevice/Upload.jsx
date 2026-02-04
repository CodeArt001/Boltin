import { useRef, useState } from "react";

const Upload = ({
  text = "Upload Image",
  uploadwidth = "w-64",
  uploadheight = "h-40",
}) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  const fileInputRef = useRef(null);

  /**
   * Handles the file selection event.
   * @param {Event} event
   */
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleRemoveImage = (e) => {
    e.stopPropagation();
    setPreviewUrl(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <div className="text-center w-full">
      <span className="text-black dark:text-white text-lg font-medium ">
        {text}
      </span>
      <div
        className={`bg-white p-10 flex flex-col items-start gap-4 ${uploadwidth} rounded-xl`}
      >
        <label
          htmlFor="file-upload"
          className={`relative w-full ${uploadheight} flex flex-col items-center justify-center border-2 border-dashed border-zinc-300 rounded-2xl cursor-pointer hover:bg-zinc-800 transition-colors overflow-hidden`}
        >
          {previewUrl ? (
            <>
              <img
                src={previewUrl}
                alt="Preview"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity"
                onClick={handleRemoveImage}
              >
                <svg
                  className="w-8 h-8 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-10 h-10 text-white mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                ></path>
              </svg>
            </div>
          )}

          <input
            id="file-upload"
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Upload;
