import React, { useState } from 'react';

const StudentForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    dob: '',
    gender: '',
    class: '',
    division: '',
    subjectGroup: '',
    bloodGroup: '',
    aadhar: ''
  });

  const [errors, setErrors] = useState({});
  const [showStudentData, setshowStudentData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.class) newErrors.class = 'Class is required';
    if (!formData.division) newErrors.division = 'Division is required';
    if (!formData.subjectGroup) newErrors.subjectGroup = 'Subject Group is required';
    if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood Group is required';
    if (!formData.aadhar || !/^\d{12}$/.test(formData.aadhar)) newErrors.aadhar = 'Aadhar number is required and must be 12 digits';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setshowStudentData(formData);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      address: '',
      email: '',
      dob: '',
      gender: '',
      class: '',
      division: '',
      subjectGroup: '',
      bloodGroup: '',
      aadhar: ''
    });
    setErrors({});
    setshowStudentData(null);
  };

  return (
    <div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h2 className="text-center mb-4">Student Registration Form</h2>
        <div className="row">
          <div className="col">
          <div className="mb-3">
            <label htmlFor="name" className="form-label"><b>Name:</b></label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <div className="text-danger">{errors.name}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label"><b>Address:</b></label>
            <textarea className="form-control" id="address" name="address" value={formData.address} onChange={handleChange}></textarea>
             {errors.address && <div className="text-danger">{errors.address}</div>}
           </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label"><b>Email:</b></label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label"><b>Date of Birth:</b></label>
            <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
            {errors.dob && <div className="text-danger">{errors.dob}</div>}
          </div>
          <div className="mb-3">
           <label className="form-label"><b>Gender:</b></label>
          <div className="form-check">
            <input className="form-check-input" type="radio" id="male" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
            <label className="form-check-label" htmlFor="male">Male</label>
           </div>
          <div className="form-check">
             <input className="form-check-input" type="radio" id="female" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
             <label className="form-check-label" htmlFor="female">Female</label>
           </div>
           <div className="form-check">
              <input className="form-check-input" type="radio" id="other" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} />
              <label className="form-check-label" htmlFor="other">Other</label>
           </div>
           {errors.gender && <div className="text-danger">{errors.gender}</div>}
          </div>
        </div>
         <div className="col">
          <div className="mb-3">
            <label htmlFor="class" className="form-label"><b>Class:</b></label>
            <input type="text" className="form-control" id="class" name="class" value={formData.class} onChange={handleChange} />
            {errors.class && <div className="text-danger">{errors.class}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="division" className="form-label"><b>Division:</b></label>
            <input type="text" className="form-control" id="division" name="division" value={formData.division} onChange={handleChange} />
            {errors.division && <div className="text-danger">{errors.division}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="subjectGroup" className="form-label"><b>Subject Group:</b></label>
            <select className="form-select" id="subjectGroup" name="subjectGroup" value={formData.subjectGroup} onChange={handleChange}>
              <option value="">Select</option>
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
              <option value="arts">Arts</option>
              <option value="others">Others</option>
            </select>
            {errors.subjectGroup && <div className="text-danger">{errors.subjectGroup}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="bloodGroup" className="form-label"><b>Blood Group:</b></label>
            <input type="text" className="form-control" id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} />
            {errors.bloodGroup && <div className="text-danger">{errors.bloodGroup}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="aadhar" className="form-label"><b>Aadhar Number:</b></label>
            <input type="text" className="form-control" id="aadhar" name="aadhar" value={formData.aadhar} onChange={handleChange} />
            {errors.aadhar && <div className="text-danger">{errors.aadhar}</div>}
          </div>
        </div>
      </div>
      {showStudentData ? (
        <div>
          <h2>Show Student Submitted Data</h2>
          <pre>{JSON.stringify(showStudentData, null, 2)}</pre>
          <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-secondary ms-2" onClick={handleCancel}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default StudentForm
