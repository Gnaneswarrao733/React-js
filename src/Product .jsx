import React, { useState } from 'react';


const Product = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    designation: '',
    location: ''
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({
      name: '',
      phone: '',
      email: '',
      designation: '',
      location: ''
    });
  };

  return (
    <div className="container1">
    <div className="form-container">
        <h2 className="title">Executiver</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" required />
        </div>
        <div className="form-group">
          <label>Email Id</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Id" required />
        </div>
        <div className="form-group">
          <label>Designation</label>
          <input type="text" name="designation" value={formData.designation} onChange={handleInputChange} placeholder="Designation" required />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" required />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <div className="submitted-data">
        
        {submittedData.map((data, index) => (
          <div key={index} className="data-entry">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Phone Number:</strong> {data.phone}</p>
            <p><strong>Email Id:</strong> {data.email}</p>
            <p><strong>Designation:</strong> {data.designation}</p>
            <p><strong>Location:</strong> {data.location}</p>
          </div>
        ))}
      </div>
    </div>

<div className="form-container">
<h2 className="title">Product Manager</h2>
<form onSubmit={handleSubmit} className="registration-form">
<div className="form-group">
  <label>Name</label>
  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
</div>
<div className="form-group">
  <label>Phone Number</label>
  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" required />
</div>
<div className="form-group">
  <label>Email Id</label>
  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Id" required />
</div>
<div className="form-group">
  <label>Designation</label>
  <input type="text" name="designation" value={formData.designation} onChange={handleInputChange} placeholder="Designation" required />
</div>
<div className="form-group">
  <label>Location</label>
  <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" required />
</div>
<button type="submit" className="submit-btn">Submit</button>
</form>

<div className="submitted-data">

{submittedData.map((data, index) => (
  <div key={index} className="data-entry">
    <p><strong>Name:</strong> {data.name}</p>
    <p><strong>Phone Number:</strong> {data.phone}</p>
    <p><strong>Email Id:</strong> {data.email}</p>
    <p><strong>Designation:</strong> {data.designation}</p>
    <p><strong>Location:</strong> {data.location}</p>
  </div>
))}
</div>
</div>

<div className="form-container">
<h2 className="title">Development</h2>
<form onSubmit={handleSubmit} className="registration-form">
<div className="form-group">
  <label>Name</label>
  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
</div>
<div className="form-group">
  <label>Phone Number</label>
  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" required />
</div>
<div className="form-group">
  <label>Email Id</label>
  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Id" required />
</div>
<div className="form-group">
  <label>Designation</label>
  <input type="text" name="designation" value={formData.designation} onChange={handleInputChange} placeholder="Designation" required />
</div>
<div className="form-group">
  <label>Location</label>
  <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" required />
</div>
<button type="submit" className="submit-btn">Submit</button>
</form>

<div className="submitted-data">

{submittedData.map((data, index) => (
  <div key={index} className="data-entry">
    <p><strong>Name:</strong> {data.name}</p>
    <p><strong>Phone Number:</strong> {data.phone}</p>
    <p><strong>Email Id:</strong> {data.email}</p>
    <p><strong>Designation:</strong> {data.designation}</p>
    <p><strong>Location:</strong> {data.location}</p>
  </div>
))}
</div>
</div>


<div className="form-container">
<h2 className="title">Business Development</h2>
<form onSubmit={handleSubmit} className="registration-form">
<div className="form-group">
  <label>Name</label>
  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
</div>
<div className="form-group">
  <label>Phone Number</label>
  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" required />
</div>
<div className="form-group">
  <label>Email Id</label>
  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Id" required />
</div>
<div className="form-group">
  <label>Designation</label>
  <input type="text" name="designation" value={formData.designation} onChange={handleInputChange} placeholder="Designation" required />
</div>
<div className="form-group">
  <label>Location</label>
  <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" required />
</div>
<button type="submit" className="submit-btn">Submit</button>
</form>

<div className="submitted-data">

{submittedData.map((data, index) => (
  <div key={index} className="data-entry">
    <p><strong>Name:</strong> {data.name}</p>
    <p><strong>Phone Number:</strong> {data.phone}</p>
    <p><strong>Email Id:</strong> {data.email}</p>
    <p><strong>Designation:</strong> {data.designation}</p>
    <p><strong>Location:</strong> {data.location}</p>
  </div>
))}
</div>
</div>
</div>

  );
};

export default Product;
