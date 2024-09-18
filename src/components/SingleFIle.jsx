import { useState } from "react";
import axios from 'axios';


const SingleFIle = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  // Handle the first file input
  const handleFileInput1 = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile1(file);
      console.log("First File:", file);
    }
  };

  // Handle the second file input
  const handleFileInput2 = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile2(file);
      console.log("Second File:", file);
    }
  };

  const handleFileSubmit = async (e) => {
    e.preventDefault();
    if (!file1 && !file2) {
      alert("Please select files before submitting.");
      return;
    }

    const formData = new FormData();
    if (file1) {
      formData.append('file1', file1);
    }
    if (file2) {
      formData.append('file2', file2);
    }

    console.log("Files to Submit:", file1, file2);

    // try {
    //   const response = await axios.post(`your_api_endpoint`, formData, { headers: { "Content-Type": "multipart/form-data" } });
    //   console.log(response);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className="flex justify-center items-center pt-44">
      <form onSubmit={handleFileSubmit}>
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center justify-center w-full mt-5">
            {/* First File Input */}
            <label
              htmlFor="dropzone-file1"
              className="flex flex-col items-center justify-center p-3 w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#ffffff] hover:bg-[#f9f9f9]"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-[#7b7b7b] dark:text-[#9b9b9b]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-[#7b7b7b] dark:text-[#9b9b9b]">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-[#7b7b7b] dark:text-[#9b9b9b]">
                  pdf, docx, doc (MAX.14MB)
                </p>
              </div>
              <input
                id="dropzone-file1"
                name="dropzone-file1"
                type="file"
                className="hidden"
                accept=".pdf, .docx, .doc, .odt"
                onChange={handleFileInput1}
              />
            </label>

            {/* Second File Input */}
            <label
              htmlFor="dropzone-file2"
              className="flex flex-col items-center justify-center p-3 w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#ffffff] hover:bg-[#f9f9f9]"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-[#7b7b7b] dark:text-[#9b9b9b]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-[#7b7b7b] dark:text-[#9b9b9b]">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-[#7b7b7b] dark:text-[#9b9b9b]">
                  pdf, docx, doc (MAX.14MB)
                </p>
              </div>
              <input
                id="dropzone-file2"
                name="dropzone-file2"
                type="file"
                className="hidden"
                accept=".pdf, .docx, .doc, .odt"
                onChange={handleFileInput2}
              />
            </label>
          </div>

          <button
            type="submit"
            className="py-3 w-full bg-[blue] text-white rounded-lg text-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SingleFIle;
