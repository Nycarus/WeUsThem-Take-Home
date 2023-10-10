import { useEffect, useState } from "react";
import crypto from 'crypto';

const ContactForm = ({
  visible,
  selectedIndex,
  contactData,
  onUpdateData,
  onCloseModal,
}: {
  visible: boolean;
  selectedIndex: number;
  contactData: any;
  onUpdateData: any;
  onCloseModal: any;
}) => {
  const newData = {
    id: crypto.randomBytes(16).toString('hex'),
    fName: "",
    lName: "",
    email: "",
    phone: "",
    imageUrl: "",
  };
  const [tempData, setTempData] = useState<Contact>(newData);
  const [formError, setFormError] = useState<Contact>(newData);

  let modal_title = "Add New Contact";

  const validateForm = () => {
    let valid = true
    let error = {
      id: tempData.id,
      fName: "",
      lName: "",
      email: "",
      phone: "",
      imageUrl: "",
    }

    // First Name
    if (!tempData.fName){
      valid = false
      error.fName = "Name is invalid."
    }
    else if (tempData.fName.length < 3){
      valid = false
      error.fName = "Name needs to be at least 3 characters long."
    }

    // Last Name
    if (!tempData.lName){
      valid = false
      error.lName = "Name is invalid."
    }
    else if (tempData.lName.length < 3){
      valid = false
      error.lName = "Name needs to be at least 3 characters long."
    }

    // Email Validation
    if (!tempData.email){
      valid = false
      error.email = "Email is invalid."
    }
    else if (!/[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]+/.test(tempData.email)){
      valid = false
      error.email = "Email is invalid."
    }

    // Phone Validation
    if (!tempData.phone || Number.isNaN(tempData.phone)){
      valid = false
      error.phone = "Phone is invalid."
    }
    else if (tempData.phone.length < 10){
      valid = false
      error.phone = "Phone # needs to be at least 10 characters long."
    }

    // Image URL Validation
    if (!tempData.imageUrl){
      valid = false
      error.imageUrl = "Image Url is invalid."
    }

    setFormError(error)

    return valid
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let result = validateForm()

    if (result){
      onUpdateData(tempData)
    }
  }

  useEffect(() => {

    if (selectedIndex != -1) {
      modal_title = "Update Contact";
      setTempData(contactData[selectedIndex]);
    } else {
      setTempData(newData);
    }
  }, [visible]);

  return (
    <>
      {visible && (
        <div className="modal fade show">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modal_title}</h5>
                <button
                  onClick={onCloseModal}
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                  {/* Inputs */}
                  <div className="mb-3">
                    <label className="form-label">First Name:</label>
                    <input
                      className="form-control"
                      name="fName"
                      type="text"
                      value={tempData.fName}
                      onChange={(e) =>
                        setTempData({ ...tempData, fName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div style={{color:"red"}}>{formError.fName}</div>
                  <div>
                    <label>Last Name:</label>
                    <input
                      className="form-control"
                      name="lName"
                      type="text"
                      value={tempData.lName}
                      onChange={(e) =>
                        setTempData({ ...tempData, lName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div style={{color:"red"}}>{formError.fName}</div>
                  <div>
                    <label>Email:</label>
                    <input
                      className="form-control"
                      name="email"
                      type="text"
                      value={tempData.email}
                      onChange={(e) =>
                        setTempData({ ...tempData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div style={{color:"red"}}>{formError.email}</div>
                  <div>
                    <label>Phone #:</label>
                    <input
                      className="form-control"
                      name="phone"
                      type="text"
                      value={tempData.phone}
                      onChange={(e) =>
                        setTempData({ ...tempData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div style={{color:"red"}}>{formError.phone}</div>
                  <div>
                    <label>Image Url:</label>
                    <input
                      className="form-control"
                      name="imageUrl"
                      type="text"
                      value={tempData.imageUrl}
                      onChange={(e) =>
                        setTempData({ ...tempData, imageUrl: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div style={{color:"red"}}>{formError.imageUrl}</div>

                  {/*IMPROVEMENT Button now in form so it can submit */}
                  <div className="modal-footer">
                    <button
                      onClick={onCloseModal}
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
