import React, {useState } from 'react'
import FormInput from './FormInput'
import FormError from './FormError'
import './RegistrationForm.css'
import { FaUser, FaEnvelope, FaLock,FaEye,FaEyeSlash} from "react-icons/fa";


function RegistrationForm() {
    const[formData,setFormData]=useState(()=>({name:"",email:"",password:"",about:"",department:"",gender:"",skills:[],resume:null}))
    const[errors,setErrors]=useState({})
    const[profilePreview,setProfilePreview]=useState(null)
    const[showPassword,setShowPassword]=useState(false)
    const[success,setSuccess]=useState("")
    const[registeredEmployee,setRegisteredEmployee]=useState(null)
    const[touched,setTouched]=useState({name:false,email:false,password:false,about:false,department:false,skills:false,resume:false})
   
    function handleChange(e){
        const{name,value,type,checked,files}=e.target
        if(type==="checkbox"){
            let updatedSkills=[...formData.skills]
            if(checked){
                updatedSkills.push(value)
            }else{
                updatedSkills=updatedSkills.filter((skill)=>skill!==value)
            }
            setFormData({...formData,skills:updatedSkills})
            
            setErrors((prev)=>({...prev,[name]:""}))
        }
        else if(type === "file"){
            if(name==="profile"){
                setProfilePreview(URL.createObjectURL(files[0]))
                return
            }
        setFormData({...formData,resume:files[0]})
        
        setErrors((prev)=>({...prev,[name]:""}))
        }
        else{
            setFormData({...formData,[name]: value})
            
            setErrors({...errors,[name]:""})
        }
        setTouched((prev)=>({...prev,[name]:true}))
    }
    function validate(){
        let newErrors={}
        if(!formData.name.trim()){
            newErrors.name="Name is required"
        }
        if(!formData.email.includes("@")){
            newErrors.email="Valid email required"
        }
        if(formData.password.length < 6) {
            newErrors.password="Minimum 6 characters"
        }
        if(!formData.department){
            newErrors.department="Select Department"
        }
        if(!formData.gender){
            newErrors.gender="Select Gender"
        }
        if(formData.skills.length === 0){
            newErrors.skills="Select at least one skill"
        }
        if(!formData.resume){
            newErrors.resume="Upload Resume"
        }
        
        return newErrors
    }
    function handleSubmit(e){
        e.preventDefault();
        const validationErrors=validate()
        setErrors(validationErrors)
        if(Object.keys(validationErrors).length>0){
            return
        }
        setSuccess("Employee Registered Successfully!")
        setTimeout(()=>{
            setSuccess("")
        },3000)
        setRegisteredEmployee({employeeId:`EMP${Date.now().toString().slice(-4)}`,profile:profilePreview,...formData})
        console.log(formData)
        setFormData({
            name: "",
            email: "",
            password: "",
            about: "",
            department: "",
            gender: "",
            skills: [],
            resume: null,
        });
        setProfilePreview(null)
    }
    function isValid(fieldName){
            switch(fieldName){
                case "name":
                    return formData.name.trim().length>=3
                    case "email":
                        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
                        case "password":
                            return formData.password.length >= 6;
                        case "department":
                            return formData.department !== "";
                             case "gender":
                                return formData.gender !== "";
                                case "skills":
                                    return formData.skills.length > 0;
                                    case "resume":
                                        return formData.resume !== null;
                                        default:
                                            return false;
            }
        }
  return (
    <div className='container'>
        {success && (<p className='success'>✔ {success}</p>)}
        <div className='portal-layout'>
        <form className='form' onSubmit={handleSubmit}>
            <h2>Employee Registration Portal</h2>
            <p className='subtitle'>Fill in the employee information below.</p>
            <div className='profile-section'>
                <div className='profile-preview'>
                    {profilePreview ? (<img src={profilePreview} alt='profile preview'/>):(<span>👤</span>)}
                    <label className='upload-btn'>📷 Upload Profile<input type="file" name='profile' accept='image/*' hidden  onChange={handleChange} /></label>
                    {profilePreview && <p className='selected-file'>✔ Profile Selected</p>}
                </div>
            </div>
            <FormInput label="Name" icon={<FaUser/>} type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" touched={touched.name} isValid={ isValid("name")}error={errors.name}/>
            <FormError error={errors.name}/>
            <FormInput label="Email" icon={<FaEnvelope/>} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" touched={touched.email} isValid={isValid("email")} error={errors.email}/>
            <FormError error={errors.email}/>
            <div className='form-group'>
                <label>Password</label>
                <div className='password-box'>
                    <span className='lock-icon'><FaLock/></span>
                    <input type={showPassword?"text":"password"} name='password' value={formData.password} onChange={handleChange} placeholder='Enter Password' className={touched.password?errors.password ? "input-error" : isValid("password") ? "input-success" : " ":""}/>
                    <span className='eye-icon' onClick={()=>setShowPassword(!showPassword)}>{showPassword?<FaEyeSlash/>:<FaEye/>}</span>
                </div>
                <FormError error={errors.password}/>
            </div>
            <div className='form-group'>
                <label>About</label>
                <textarea name='about' value={formData.about} onChange={handleChange} placeholder='Tell about yourself' className={formData.about?"input-success":""}/>
            </div>
            <div className='form-group'>
                <label>Department</label>
                <select name="department" value={formData.department} onChange={handleChange} className={touched.department?errors.department ? "input-error" :isValid("department") ?"input-success" : " ":""}>
                    <option value="">Select</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="QR">QR</option>
                    <option value="HR">HR</option>
                </select>
                <FormError error={errors.department}/>
            </div>
            <div className='form-group'>
                <label>Gender</label>
                <div className={`radio-group ${errors.gender?"error":formData.gender?"success":""}`}>
                <label><input type="radio" name='gender' value="Male" checked={formData.gender === "Male"} onChange={handleChange} />Male</label>
                <label><input type="radio" name='gender' value="Female" checked={formData.gender === "Female"} onChange={handleChange} />Female</label>
                </div>
                <FormError error={errors.gender}/>
            </div>
            <div className='form-group'>
                <label>Skills</label>
                <div className={`checkbox-group ${errors.skills?"error":formData.skills.length?"success":""}`}>
                <label><input type="checkbox" name='skills' value="React" checked={formData.skills.includes("React")} onChange={handleChange} />React</label>
                <label><input type="checkbox" name='skills' value="JavaScript" checked={formData.skills.includes("JavaScript")} onChange={handleChange} />JavaScript</label>
                <label><input type="checkbox" name='skills' value="CSS" checked={formData.skills.includes("CSS")} onChange={handleChange}/>CSS</label>
                </div>
                <FormError error={errors.skills}/>
            </div>
            <div className='form-group'>
                <label>Resume</label>
                <input type="file"name='resume' onChange={handleChange} className={errors.resume?"input-error":formData.resume?"input-success":""} />
                {formData.resume && (<p className='file-name'>📄 {formData.resume.name}</p>)}
                <FormError error={errors.resume}/>
            </div>
            <button type='submit'>Register</button>
        </form>
        {registeredEmployee && (
            <div className='summary-card'>
                <h3>Employee Profile</h3>
                <div className="summary-avatar">
                    {registeredEmployee.profile?<img src={registeredEmployee.profile}alt='Employee'/>:<span>👤</span>}
                </div>
                <div className='summary-body'>
                    <div className='detail-row'>
                        <label>Name</label>
                        <p>{registeredEmployee.name}</p>
                    </div>
                    <div className='detail-row'>
                        <label>Email</label>
                        <p>{registeredEmployee.email}</p>
                    </div>
                    <div className='detail-row'>
                        <label>Department</label>
                        <p>{registeredEmployee.department}</p>
                    </div>
                    <div>
                        <label>Gender</label>
                        <p>{registeredEmployee.gender}</p>
                    </div>
                    <div className='detail-row'>
                        <label>Skills</label>
                        <div className='skill-list'>
                            {registeredEmployee.skills.map(skill=>(
                            <span key={skill} className='skill-chip'>{skill}</span>
                        ))}
                    </div>
                    </div>
                    <div className='detail-row'>
                        <label>Resume</label>
                        <p>{registeredEmployee.resume?.name}</p>
                    </div>
            </div>
            </div>
        )}
    </div>
    </div>
  )
}

export default RegistrationForm