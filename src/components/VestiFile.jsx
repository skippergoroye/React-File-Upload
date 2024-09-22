import React from "react";

const VestiFile = () => {
  const [form, setForm] = useState({
    completedBankAccountOpeningForm: null,
    validIdentitydocument: null,
    utilityBill: null,
    visaProcessingDocumentOrAdmissonLetter: null,
  });

  const fileInputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    const inputValue = type === "file" ? files[0] : value;
    setForm({
      ...form,
      [name]: inputValue,
    });
  };

  const handleBrowseClick = (index) => {
    if (fileInputRefs[index].current) {
      fileInputRefs[index].current.click();
    }
  };

  const handleRemoveFile = (field) => {
    setForm({
      ...form,
      [field]: null,
    });
  };

  const handleSubmit = () => {
    dispatch(
      handleProofOfFundsApplication(
        chosenAccount,
        newBankToOpen,
        form.amount,
        form.loanDuration,
        form.completedBankAccountOpeningForm,
        form.validIdentitydocument,
        form.utilityBill,
        form.visaProcessingDocumentOrAdmissonLetter,
        form.existingBankNameToDeposit,
        form.existingAccountNumberToDeposit
      )
    );
    navigate("/interestpayment");
  };

  return (
    <div>
      <span className="mt-4 flex flex-col items-center justify-center gap-[20px] lg:flex-row space__itemn">
        <div className="input-container">
          <Inputfloat
            label="amount"
            type="text"
            name="amount"
            value={form.amount}
            disabled={false}
            placeholder="How much loan do you need? *"
            onChange={handleChange}
          />
        </div>
        <div className="input-containerpp">
          <Inputfloat
            label="loanDuration"
            type="text"
            name="loanDuration"
            value={form.loanDuration}
            disabled={false}
            placeholder="How many months do you need the loan for?*"
            onChange={handleChange}
          />
        </div>
      </span>

      <div className="mt-4 containerthree">
        <div className="file-group">
          {/* 1  */}
          <div className="file-box">
            <img src={DocumentUpload} alt="document-upload" />

            {form.validIdentitydocument ? (
              <p>{form.validIdentitydocument.name}</p>
            ) : (
              <p className="text-center">
                Upload a Valid Identity Document (With names as on BVN)
              </p>
            )}

            <p>(JPG, PNG, and PDF only | 2MB max size)</p>

            {form.validIdentitydocument ? (
              <p
                className="file-actions"
                onClick={() => handleRemoveFile("validIdentitydocument")}
              >
                Change
              </p>
            ) : (
              <p className="file-actions" onClick={() => handleBrowseClick(1)}>
                Upload
              </p>
            )}

            <input
              type="file"
              ref={fileInputRefs[1]}
              onChange={handleChange}
              name="validIdentitydocument"
              accept=".doc,.docx,.pdf"
              style={{ display: "none" }}
            />
          </div>

          {/* 2  */}
          <div className="file-box">
            <img src={DocumentUpload} alt="document-upload" />

            {form.utilityBill ? (
              <p>{form.utilityBill.name}</p>
            ) : (
              <p>Upload a Current Utility Bill</p>
            )}

            <p>(Doc and PDF only | 2MB max size)</p>

            {form.utilityBill ? (
              <p
                className="file-actions"
                onClick={() => handleRemoveFile("utilityBill")}
              >
                Change
              </p>
            ) : (
              <p className="file-actions" onClick={() => handleBrowseClick(2)}>
                Upload
              </p>
            )}

            <input
              type="file"
              ref={fileInputRefs[2]}
              onChange={handleChange}
              name="utilityBill"
              accept=".doc,.docx,.pdf"
              style={{ display: "none" }}
            />
          </div>
        </div>
        {/* 3 */}
        <div className="file-box">
          <img src={DocumentUpload} alt="document-upload" />

          {form.visaProcessingDocumentOrAdmissonLetter ? (
            <p>{form.visaProcessingDocumentOrAdmissonLetter.name}</p>
          ) : (
            <p className="text-center">
              Upload Evidence of Visa Processing or a Provisional Offer of
              Admission
            </p>
          )}

          <p>(JPG, PNG, and PDF only | 2MB max size)</p>

          {form.visaProcessingDocumentOrAdmissonLetter ? (
            <p
              className="file-actions"
              onClick={() =>
                handleRemoveFile("visaProcessingDocumentOrAdmissonLetter")
              }
            >
              Change
            </p>
          ) : (
            <p className="file-actions" onClick={() => handleBrowseClick(3)}>
              Upload
            </p>
          )}

          <input
            type="file"
            ref={fileInputRefs[3]}
            onChange={handleChange}
            name="visaProcessingDocumentOrAdmissonLetter"
            accept=".doc,.docx,.pdf"
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default VestiFile;
