import { useState } from "react";
import axios from 'axios';

const MultiFile = () => {
  const [fileData, setFileData] = useState({
    fileOne: null,
    fileTwo: null
  });

  // Merged handleFileInput function
  const handleFileInput = (e, fileKey) => {
    const file = e.target.files[0];
    if (file) {
      setFileData((prevData) => ({
        ...prevData,
        [fileKey]: file
      }));
      // console.log(`${fileKey === 'fileOne' ? 'First' : 'Second'} File:`, file);
    }
  };

  const handleFileSubmit = async (e) => {
    e.preventDefault();
    if (!fileData.fileOne || !fileData.fileTwo) {
      alert("Please select both files before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append('fileOne', fileData.fileOne);
    formData.append('fileTwo', fileData.fileTwo);

    console.log("First File:", fileData.fileOne);
    console.log("Second File:", fileData.fileTwo);

    // Uncomment this to make an actual request:
    // try {
    //   const response = await axios.post(`your_api_endpoint`, formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    //   console.log(response);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className="flex justify-center items-center pt-44">
      <form onSubmit={handleFileSubmit}>
        <div className="flex flex-col gap-y-4">
          {/* First File Upload */}
          <label
            htmlFor="dropzone-file-one"
            className="flex flex-col items-center justify-center p-3 w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#ffffff] hover:bg-[#f9f9f9]"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <p className="mb-2 text-sm text-[#7b7b7b] dark:text-[#9b9b9b]">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-[#7b7b7b] dark:text-[#9b9b9b]">pdf, docx, doc (MAX.14MB)</p>
            </div>
            <input
              id="dropzone-file-one"
              name="dropzone-file-one"
              type="file"
              className="hidden"
              accept=".pdf, .docx, .doc, .odt"
              onChange={(e) => handleFileInput(e, 'fileOne')}
            />
          </label>

          {/* Second File Upload */}
          <label
            htmlFor="dropzone-file-two"
            className="flex flex-col items-center justify-center p-3 w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#ffffff] hover:bg-[#f9f9f9]"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <p className="mb-2 text-sm text-[#7b7b7b] dark:text-[#9b9b9b]">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-[#7b7b7b] dark:text-[#9b9b9b]">pdf, docx, doc (MAX.14MB)</p>
            </div>
            <input
              id="dropzone-file-two"
              name="dropzone-file-two"
              type="file"
              className="hidden"
              accept=".pdf, .docx, .doc, .odt"
              onChange={(e) => handleFileInput(e, 'fileTwo')}
            />
          </label>

          {/* Submit Button */}
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

export default MultiFile;
