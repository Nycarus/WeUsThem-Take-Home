"use client";
import { useEffect, useState } from "react";
import ContactRow from "./ContactRow";
import ContactForm from "./ContactForm";

const ContactTable = () => {
  const [contactData, setContactData] = useState<Contact[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [displayForm, setDisplayForm] = useState(false);
  const [sorting, setSorting] = useState({
    fName: false,
    lName: false,
    email: false,
    phone: false
  })
  const [search, setSearch] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: ""
  })

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    //await fetch api
    let res = await fetch('http://localhost:5000/api/contact', {
      method:"GET",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    //let res = localStorage.getItem("@contact-data");
    let json = [];
    if (res != null) json = await res.json();
    setContactData(json.result);
  };

  const deleteUserData = async (id: string) => {
    //await delete api
    //let temp = contactData.filter((el) => el.id !== id);
    //localStorage.setItem("@contact-data", JSON.stringify(temp));
    let res = await fetch('http://localhost:5000/api/contact', {
      method:"DELETE",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:JSON.stringify({
        id:id
      })})
    fetchUserData()
  };

  const updateUserData = async (contact: Contact) => {
    if (selectedIndex != -1) {
      //await update api
      let res = await fetch('http://localhost:5000/api/contact', {
        method:"PATCH",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify(contact)})

      if (res.status === 200){
        
        let temp = contactData;
        temp[selectedIndex] = contact;
      }
      //localStorage.setItem("@contact-data", JSON.stringify(temp));
    } else {
      //await add api
      let res = await fetch('http://localhost:5000/api/contact', {
        method:"POST",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify(contact)})

      let temp = contactData;
      temp.push(contact);
      //localStorage.setItem("@contact-data", JSON.stringify(temp));
    }
    fetchUserData()
    closeFormModal();
  };

  const closeFormModal = () => {
    setDisplayForm(false);
    setSelectedIndex(-1);
  };

  const handleSortFName = () => {
    let data = contactData
    if (sorting.fName){
      data.sort((a,b)=>a.fName.toLowerCase() > b.fName.toLowerCase() ? 1 : a.fName.toLowerCase() < b.fName.toLowerCase() ? -1 : 0)
    }
    else{
      data.sort((a,b)=>a.fName.toLowerCase() > b.fName.toLowerCase() ? -1 : a.fName.toLowerCase() < b.fName.toLowerCase() ? 1 : 0)
    }
    setContactData(data)
    setSorting({...sorting, fName:!sorting.fName})
  }

  const handleSortLName = () => {
    let data = contactData
    if (sorting.lName){
      data.sort((a,b)=>a.lName.toLowerCase() > b.lName.toLowerCase() ? 1 : a.lName.toLowerCase() < b.lName.toLowerCase() ? -1 : 0)
    }
    else{
      data.sort((a,b)=>a.lName.toLowerCase() > b.lName.toLowerCase() ? -1 : a.lName.toLowerCase() < b.lName.toLowerCase() ? 1 : 0)
    }

    setContactData(data)
    setSorting({...sorting, lName:!sorting.lName})
  }

  const handleSortEmail = () => {
    let data = contactData
    if (sorting.email){
      data.sort((a,b)=>a.email.toLowerCase() > b.email.toLowerCase() ? 1 : a.email.toLowerCase() < b.email.toLowerCase() ? -1 : 0)
    }
    else{
      data.sort((a,b)=>a.email.toLowerCase() > b.email.toLowerCase() ? -1 : a.email.toLowerCase() < b.email.toLowerCase() ? 1 : 0)
    }
    setContactData(data)
    setSorting({...sorting, email:!sorting.email})
  }

  const handleSortPhone = () => {
    let data = contactData
    if (sorting.phone){
      data.sort((a,b)=>a.phone > b.phone ? 1 : a.phone < b.phone ? -1 : 0)
    }
    else{
      data.sort((a,b)=>a.phone > b.phone ? -1 : a.phone < b.phone ? 1 : 0)
    }
    setContactData(data)
    setSorting({...sorting, phone:!sorting.phone})
  }

  return (
    <>
      <div>
        <label className="form-label">First Name Search:</label>
        <input type="text" onChange={(e) =>setSearch({ ...search, fName: e.target.value })}/>
        <label className="form-label">Last Name Search:</label>
        <input type="text" onChange={(e) =>setSearch({ ...search, lName: e.target.value })}/>
        <label className="form-label">Email Search:</label>
        <input type="text" onChange={(e) =>setSearch({ ...search, email: e.target.value })}/>
      </div>

      <table className="table">
        <thead>
          <tr className="contact-row">
            <th>image</th>
            <th><button type="button" onClick={()=>handleSortFName()}>First Name</button></th>
            <th><button type="button" onClick={()=>handleSortLName()}>Last Name</button></th>
            <th><button type="button" onClick={()=>handleSortEmail()}>Email</button></th>
            <th><button type="button" onClick={()=>handleSortPhone()}>Phone #</button></th>
            <th>options</th>
          </tr>
        </thead>
        <tbody>
          {contactData.filter(value=>search.fName === "" || value.fName.toLowerCase().includes(search.fName.toLowerCase()))
          .filter(value=>search.lName === "" || value.lName.toLowerCase().includes(search.lName.toLowerCase()))
          .filter(value=>search.email === "" || value.email.toLowerCase().includes(search.email.toLowerCase()))
          .map((contact, index) => {
            return (
              <ContactRow
                key={contact.id}
                data={contact}
                onDeleteData={() => deleteUserData(contact.id)}
                onUpdateData={() => {
                  setSelectedIndex(index);
                  setDisplayForm(true);
                }}
              />
            );
          })}
        </tbody>
      </table>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            setDisplayForm(true);
          }}
        >
          Add New
        </button>
      </div>
      <ContactForm
        visible={displayForm}
        selectedIndex={selectedIndex}
        contactData={contactData}
        onUpdateData={updateUserData}
        onCloseModal={closeFormModal}
      ></ContactForm>
    </>
  );
};

export default ContactTable;
