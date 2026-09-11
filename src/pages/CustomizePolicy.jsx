// import React, { useState } from 'react';
// import Header from '../component/Header';
// import Footer from '../component/Footer';
// import '../assets/css/customizePolicyScreen.css';
// import { Link } from 'react-router-dom';

// const CustomizePolicy = () => {
//     const [formData, setFormData] = useState({
//         policyDocument: '',
//         desiredDeliveryFormat: '',
//         primaryOrganizationName: '',
//         doingBusinessAs: '',
//         primaryIndustry: '',
//         companySize: '',
//         frameworks: [],
//         primaryEnvironment: '',
//         specificStandards: '',
//         otherTools: '',
//         primaryRole: '',
//         otherRoles: '',
//         customizationsNeeded: [],
//         otherCustomizations: '',
//         existingDocumentation: '',
//         existingPolicyLanguage: '',
//         fileAttachment: null,
//         customizationLevel: 'Basic',
//         additionalRequirements: '',
//         fullName: '',
//         jobTitle: '',
//         businessEmail: '',
//         phoneNumber: ''
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleCheckboxToggle = (category, value) => {
//         setFormData(prev => {
//             const current = prev[category] || [];
//             const updated = current.includes(value)
//                 ? current.filter(item => item !== value)
//                 : [...current, value];
//             return { ...prev, [category]: updated };
//         });
//     };

//     const handleFileChange = (e) => {
//         if (e.target.files && e.target.files[0]) {
//             setFormData(prev => ({ ...prev, fileAttachment: e.target.files[0] }));
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const payload = new FormData();
//         Object.keys(formData).forEach(key => {
//             if (Array.isArray(formData[key])) {
//                 payload.append(key, JSON.stringify(formData[key]));
//             } else {
//                 payload.append(key, formData[key]);
//             }
//         });

//         try {
//             console.log('Submitting Form Payload:', formData);
//             alert('Your request has been submitted successfully.');
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     };

//     return (
//         <>
//             <Header />

//             {/* HERO SECTION */}
//             <section className="resource-hero-section">
//                 <div className="hero-ambient-glow" />
//                 <div className="section-inner-content">
//                     <div className="blog-breadcrumb">
//                         <Link to="/" style={{ textDecoration: "none" }}><span style={{ color: "white" }}>Home</span></Link>
//                         <span className="separator">|</span>{" "}
//                         <span>Resources & Media</span>
//                     </div>

//                     <h1 className="hero-display1-title1">
//                         Customize Your Cybersecurity Policy
//                     </h1>

//                     <p className="hero-display-subtitle">
//                         Tell us about your organization and requirements. Spartan can tailor the policy template to better align with your business, responsibilities, compliance needs and operating environment.
//                     </p>
//                 </div>
//             </section>

//             {/* INTAKE FORM SECTION */}
//             <section className="policy-intake-section">
//                 <div className="section-inner-content">
//                     <div className="intake-header">
//                         <h2>Policy Customization Intake</h2>
//                         <span className="required-notice">* Required Fields</span>
//                     </div>
//                     <p className="intake-subheader">
//                         A snapshot of the certifications, congressional recognitions and industry honors Spartan has received.
//                     </p>

//                     <form onSubmit={handleSubmit} className="intake-form">

//                         {/* 01: Select Your Policy */}
//                         <div className="form-step">
//                             <div className="step-header">
//                                 <span className="step-number">01</span>
//                                 <div>
//                                     <h3>Select Your Policy</h3>
//                                     <p>Tell us which policy you would like Spartan to customize.</p>
//                                 </div>
//                             </div>
//                             <div className="form-grid dual-col">
//                                 <div className="form-field">
//                                     <label>Policy to Customize *</label>
//                                     <select name="policyDocument" value={formData.policyDocument} onChange={handleInputChange} required>
//                                         <option value="">Select an option</option>
//                                         <option value="access-control">Access Control Policy</option>
//                                         <option value="incident-response">Incident Response Policy</option>
//                                     </select>
//                                 </div>
//                                 <div className="form-field">
//                                     <label>Customization Scope*</label>
//                                     <select name="desiredDeliveryFormat" value={formData.desiredDeliveryFormat} onChange={handleInputChange} required>
//                                         <option value="">Select an option</option>
//                                         <option value="docx">One Policy</option>
//                                         <option value="pdf">Multiple Policies</option>
//                                         <option value="pdf">Complete Policy Suite</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* 02: Organization Information */}
//                         <div className="form-step">
//                             <div className="step-header">
//                                 <span className="step-number">02</span>
//                                 <div>
//                                     <h3>Organization Information</h3>
//                                     <p>Basic information helps us tailor the document to your organization.</p>
//                                 </div>
//                             </div>
//                             <div className="form-grid dual-col">
//                                 <div className="form-field">
//                                     <label>Company / Organization Name *</label>
//                                     <input type="text" name="primaryOrganizationName" placeholder="Primary organization name" value={formData.primaryOrganizationName} onChange={handleInputChange} required />
//                                 </div>
//                                 <div className="form-field">
//                                     <label>Industry / Business Type *</label>
//                                     <input type="text" name="doingBusinessAs" placeholder="If primary organization name differs" value={formData.doingBusinessAs} onChange={handleInputChange} />
//                                 </div>
//                                 <div className="form-field">
//                                     <label>Company Website</label>
//                                     <input type="text" name="primaryIndustry" placeholder="Select an option" value={formData.primaryIndustry} onChange={handleInputChange} required />
//                                 </div>
//                                 <div className="form-field">
//                                     <label>Company Size</label>
//                                     <select name="companySize" value={formData.companySize} onChange={handleInputChange} required>
//                                         <option value="">Select company size</option>
//                                         <option value="1-10">1 - 25 employees</option>
//                                         <option value="11-50">26 - 100 employees</option>
//                                         <option value="51-200">101 - 250 employees</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* 03: Compliance & Business Requirements */}
//                         <div className="form-step">
//                             <div className="step-header">
//                                 <span className="step-number">03</span>
//                                 <div>
//                                     <h3>Compliance & Business Requirements</h3>
//                                     <p>Identify the frameworks or contractual requirements relevant to your policy.</p>
//                                 </div>
//                             </div>
//                             <label className="section-sublabel">Which requirements apply to your organization?</label>
//                             <div className="checkbox-grid">
//                                 {[
//                                     'CMMC 2.0', 'NIST SP 800-171',
//                                     'ISO/IEC 27001', 'Federal Contract Requirements',
//                                     'Customer / Contractual Requirements', 'Other / Not Sure'
//                                 ].map((item) => (
//                                     <label key={item} className={`checkbox-card ${formData.frameworks.includes(item) ? 'selected' : ''}`}>
//                                         <span>{item}</span>
//                                         <input
//                                             type="checkbox"
//                                             checked={formData.frameworks.includes(item)}
//                                             onChange={() => handleCheckboxToggle('frameworks', item)}
//                                         />
//                                     </label>
//                                 ))}
//                             </div>

//                             <div className="form-grid dual-col mt-20">
//                                 <div className="form-field">
//                                     <label>Does your organization handle CUI?</label>
//                                     <select name="primaryEnvironment" value={formData.primaryEnvironment} onChange={handleInputChange}>
//                                         <option value="">Select an option</option>
//                                         <option value="cloud">Cloud (AWS, Azure, GCP)</option>
//                                         <option value="on-prem">On-Premises</option>
//                                         <option value="hybrid">Hybrid</option>
//                                     </select>
//                                 </div>
//                                 <div className="form-field">
//                                     <label>Specific contractual or regulatory requirements</label>
//                                     <select name="specificStandards" value={formData.specificStandards} onChange={handleInputChange}>
//                                         <option value="">Select an option</option>
//                                         <option value="hipaa">HIPAA</option>
//                                         <option value="gdpr">GDPR</option>
//                                         <option value="soc2">SOC 2</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* 04: Your Operating Environment */}
//                         <div className="form-step">
//                             <div className="step-header">
//                                 <span className="step-number">04</span>
//                                 <div>
//                                     <h3>Your Operating Environment</h3>
//                                     <p>Help us understand the environment the customized policy should reflect.</p>
//                                 </div>
//                             </div>
//                             <div className="form-field full-width">
//                                 <label>Briefly describe your IT / cybersecurity environment</label>
//                                 <textarea
//                                     name="otherTools"
//                                     placeholder="Example: Microsoft 365, Azure, on-premises systems, hybrid environment, managed IT provider, etc."
//                                     value={formData.otherTools}
//                                     onChange={handleInputChange}
//                                     rows={2}
//                                 />
//                             </div>

//                             <div className="form-grid dual-col mt-20">
//                                 <div className="form-field">
//                                     <label>Primary Environment</label>
//                                     <select name="primaryRole" value={formData.primaryRole} onChange={handleInputChange}>
//                                         <option value="">Select an option</option>
//                                         <option value="ciso">CISO</option>
//                                         <option value="it-admin">IT Administrator</option>
//                                         <option value="security-manager">Security Manager</option>
//                                     </select>
//                                 </div>
//                                 <div className="form-field">
//                                     <label>Who manages cybersecurity?</label>
//                                     <select name="otherRoles" value={formData.otherRoles} onChange={handleInputChange}>
//                                         <option value="">Select an option</option>
//                                         <option value="yes">Yes</option>
//                                         <option value="no">No</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* 05: Customization Requirements */}
//                         <div className="form-step">
//                             <div className="step-header">
//                                 <span className="step-number">05</span>
//                                 <div>
//                                     <h3>Customization Requirements</h3>
//                                     <p>Select the areas that should be adapted to your organization.</p>
//                                 </div>
//                             </div>
//                             <label className="section-sublabel">What elements need customization? *</label>
//                             <div className="checkbox-grid">
//                                 {[
//                                     'Organization name & branding', 'Roles & responsibilities',
//                                     'Policy scope & applicability', 'Business processes / workflows',
//                                     'Technology / system references', 'CMMC / NIST requirements',
//                                     'Evidence / documentation requirements', 'Other'
//                                 ].map((item) => (
//                                     <label key={item} className={`checkbox-card ${formData.customizationsNeeded.includes(item) ? 'selected' : ''}`}>
//                                         <span>{item}</span>
//                                         <input
//                                             type="checkbox"
//                                             checked={formData.customizationsNeeded.includes(item)}
//                                             onChange={() => handleCheckboxToggle('customizationsNeeded', item)}
//                                         />
//                                     </label>
//                                 ))}
//                             </div>

//                             <div className="form-field full-width mt-20">
//                                 <label>Specific roles, departments, systems, locations, or processes to include</label>
//                                 <textarea
//                                     name="otherCustomizations"
//                                     placeholder="Tell us anything specific the policy should address."
//                                     value={formData.otherCustomizations}
//                                     onChange={handleInputChange}
//                                     rows={3}
//                                 />
//                                 {/* <p className="field-note-text">* Tell us if any section should be removed or added...</p> */}
//                             </div>
//                         </div>

//                         {/* 06: Existing Documentation */}
//                         <div className="form-step">
//                             <div className="step-header">
//                                 <span className="step-number">06</span>
//                                 <div>
//                                     <h3>Existing Documentation</h3>
//                                     <p>Share existing material if you want it considered during customization.</p>
//                                 </div>
//                             </div>

//                             <div className="form-grid dual-col">
//                                 <div className="form-field">
//                                     <label>Do you currently have an existing policy or related documentation?</label>
//                                     <select
//                                         name="existingDocumentation"
//                                         value={formData.existingDocumentation}
//                                         onChange={handleInputChange}
//                                     >
//                                         <option value="">Select an option</option>
//                                         <option value="yes">Yes</option>
//                                         <option value="no">No</option>
//                                     </select>
//                                 </div>

//                                 <div className="form-field">
//                                     <label>Existing policy language to retain or incorporate</label>
//                                     <input
//                                         type="text"
//                                         name="existingPolicyLanguage"
//                                         placeholder="Optional"
//                                         value={formData.existingPolicyLanguage}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                             </div>

//                             {/* <div className="form-field full-width mt-20">
//                                 <label className="label-gray">Upload Relevant Documents <span className="sub-text">(Optional)</span></label>
//                                 <div className="dropzone-box">
//                                     <p className="dropzone-title">Drop files here or select a file</p>
//                                     <p className="dropzone-desc">PDF, DOC, DOCX - upload only documents relevant to the requested policy.</p>
//                                     <input
//                                         type="file"
//                                         id="figmaFileInput"
//                                         onChange={handleFileChange}
//                                         style={{ display: 'none' }}
//                                     />
//                                     <label htmlFor="figmaFileInput" className="choose-file-btn">
//                                         {formData.fileAttachment ? formData.fileAttachment.name : "Choose File"}
//                                     </label>
//                                 </div>
//                             </div> */}

//                             <div className="form-field full-width mt-20">
//                                 <label className="label-gray">Upload Relevant Documents <span className="sub-text">(Optional)</span></label>
//                                 <div className="dropzone-box">
//                                     {formData.fileAttachment ? (
//                                         /* SELECTED FILE DISPLAY WITH REMOVE BUTTON */
//                                         <div className="file-selected-info">
//                                             <span className="file-name">📄 {formData.fileAttachment.name}</span>
//                                             <button
//                                                 type="button"
//                                                 className="remove-file-btn"
//                                                 onClick={() => setFormData(prev => ({ ...prev, fileAttachment: null }))}
//                                             >
//                                                 Remove ✕
//                                             </button>
//                                         </div>
//                                     ) : (
//                                         /* DEFAULT DROPZONE STATE */
//                                         <>
//                                             <p className="dropzone-title">Drop files here or select a file</p>
//                                             <p className="dropzone-desc">PDF, DOC, DOCX - upload only documents relevant to the requested policy.</p>
//                                             <input
//                                                 type="file"
//                                                 id="figmaFileInput"
//                                                 onChange={handleFileChange}
//                                                 style={{ display: 'none' }}
//                                             />
//                                             <label htmlFor="figmaFileInput" className="choose-file-btn">
//                                                 Choose File
//                                             </label>
//                                         </>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* 07: Customization Level */}
//                         <div className="form-step">
//                             <div className="step-header">
//                                 <span className="step-number">07</span>
//                                 <div>
//                                     <h3>Customization Level</h3>
//                                     <p>Choose the level of customization you believe you need.</p>
//                                 </div>
//                             </div>
//                             <div className="radio-card-grid">
//                                 {[
//                                     { id: 'Basic', label: 'Basic', desc: 'Branding, organization details and general applicability.' },
//                                     { id: 'Standard', label: 'Standard', desc: 'Environment, responsibilities, requirements and processes.' },
//                                     { id: 'Comprehensive', label: 'Comprehensive', desc: 'Environment, responsibilities, requirements and processes.' }
//                                 ].map((level) => (
//                                     // <div 
//                                     //     key={level.id} 
//                                     //     className={`radio-card ${formData.customizationLevel === level.id ? 'selected' : ''}`}
//                                     //     onClick={() => setFormData(prev => ({ ...prev, customizationLevel: level.id }))}
//                                     // >
//                                     //     <div className="radio-card-top">
//                                     //         <strong>{level.label}</strong>
//                                     //         <input 
//                                     //             type="radio" 
//                                     //             name="customizationLevel" 
//                                     //             checked={formData.customizationLevel === level.id} 
//                                     //             onChange={() => {}} 
//                                     //         />
//                                     //     </div>
//                                     //     <p>{level.desc}</p>
//                                     // </div>

//                                     <div
//                                         key={level.id}
//                                         className={`radio-card ${formData.customizationLevel === level.id ? 'selected' : ''}`}
//                                         onClick={() => setFormData(prev => ({ ...prev, customizationLevel: level.id }))}
//                                     >
//                                         {/* Text Content Left Side */}
//                                         <div className="radio-card-body">
//                                             <strong>{level.label}</strong>
//                                             <p>{level.desc}</p>
//                                         </div>

//                                         {/* Radio Input Right Side */}
//                                         <input
//                                             type="radio"
//                                             name="customizationLevel"
//                                             checked={formData.customizationLevel === level.id}
//                                             onChange={() => { }}
//                                         />
//                                     </div>

//                                 ))}
//                             </div>

//                             <div className="alert-banner mt-20">
//                                 Not sure which level is right for you? Select the closest option or explain your needs below. Spartan can recommend the appropriate approach.
//                             </div>
//                         </div>

//                         {/* 08: Additional Requirements */}
//                         <div className="form-step">
//                             <div className="step-header">
//                                 <span className="step-number">08</span>
//                                 <div>
//                                     <h3>Additional Requirements</h3>
//                                     <p>Anything else we should know before reviewing your request?</p>
//                                 </div>
//                             </div>
//                             <div className="form-field full-width">
//                                 <textarea
//                                     name="additionalRequirements"
//                                     placeholder="Share any additional requirements, deadlines, special considerations, or questions."
//                                     value={formData.additionalRequirements}
//                                     onChange={handleInputChange}
//                                     rows={3}
//                                 />
//                             </div>
//                         </div>

//                         {/* 09: Your Contact Information */}
//                         <div className="form-step border-none">
//                             <div className="step-header">
//                                 <span className="step-number">09</span>
//                                 <div>
//                                     <h3>Your Contact Information</h3>
//                                     <p>We'll use these details to follow up regarding your customization request.</p>
//                                 </div>
//                             </div>
//                             <div className="form-grid dual-col">
//                                 <div className="form-field">
//                                     <label>Full Name *</label>
//                                     <input type="text" name="fullName" placeholder="e.g. John Doe" value={formData.fullName} onChange={handleInputChange} required />
//                                 </div>
//                                 <div className="form-field">
//                                     <label>Job Title *</label>
//                                     <input type="text" name="jobTitle" placeholder="e.g. IT Manager" value={formData.jobTitle} onChange={handleInputChange} required />
//                                 </div>
//                                 <div className="form-field">
//                                     <label>Business Email *</label>
//                                     <input type="email" name="businessEmail" placeholder="name@company.com" value={formData.businessEmail} onChange={handleInputChange} required />
//                                 </div>
//                                 <div className="form-field">
//                                     <label>Phone Number *</label>
//                                     <input type="tel" name="phoneNumber" placeholder="(555) 000-0000" value={formData.phoneNumber} onChange={handleInputChange} required />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* SUBMIT BUTTON */}
//                         <div className="form-submit-footer">
//                             <p className="privacy-text">
//                                 By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information with third parties.
//                             </p>
//                             <button type="submit" className="submit-btn">
//                                 SUBMIT CUSTOMIZATION REQUEST <i className="fas fa-arrow-right"></i>
//                             </button>
//                         </div>

//                     </form>
//                 </div>
//             </section>

//             <Footer />
//         </>
//     );
// };

// export default CustomizePolicy;






import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../assets/css/customizePolicyScreen.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resourceTitles } from '../redux/slices/secondSlice';

const initialFormState = {
    policyDocument: '',
    desiredDeliveryFormat: '',
    primaryOrganizationName: '',
    doingBusinessAs: '',
    primaryIndustry: '',
    companySize: '',
    frameworks: [],
    primaryEnvironment: '',
    specificStandards: '',
    otherTools: '',
    primaryRole: '',
    otherRoles: '',
    customizationsNeeded: [],
    otherCustomizations: '',
    existingDocumentation: '',
    existingPolicyLanguage: '',
    fileAttachment: null,
    customizationLevel: 'Basic',
    additionalRequirements: '',
    fullName: '',
    jobTitle: '',
    businessEmail: '',
    phoneNumber: ''
};

const CustomizePolicy = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {resourceTitlesData, loading} = useSelector((state) => state.second);

    useEffect(() => {
        dispatch(resourceTitles());
    }, [dispatch])

    // console.log("@@@@@@@@@", resourceTitlesData);

    const [formData, setFormData] = useState(initialFormState);
    const [toastMessage, setToastMessage] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const showToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(''), 3000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxToggle = (category, value) => {
        setFormData(prev => {
            const current = prev[category] || [];
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [category]: updated };
        });
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, fileAttachment: e.target.files[0] }));
        }
    };

    const validateForm = () => {
        // if (!formData.policyDocument) return "Please select a Policy to Customize.";
        // if (!formData.desiredDeliveryFormat) return "Please select a Customization Scope.";
        // if (!formData.primaryOrganizationName.trim()) return "Please enter your Company / Organization Name.";
        // if (!formData.doingBusinessAs.trim()) return "Please enter Industry / Business Type.";
        // if (!formData.primaryIndustry.trim()) return "Please enter Company Website.";
        // if (!formData.companySize) return "Please select Company Size.";
        // if (formData.customizationsNeeded.length === 0) return "Please select at least one item for Customization Requirements.";
        // if (!formData.fullName.trim()) return "Please enter your Full Name.";
        // if (!formData.jobTitle.trim()) return "Please enter your Job Title.";
        // if (!formData.businessEmail.trim()) return "Please enter your Business Email.";
        // if (!formData.phoneNumber.trim()) return "Please enter your Phone Number.";
        // return null;

        const isFormValid =
            formData.policyDocument &&
            formData.desiredDeliveryFormat &&
            formData.primaryOrganizationName.trim() &&
            formData.doingBusinessAs.trim() &&
            formData.primaryIndustry.trim() &&
            formData.companySize &&
            formData.customizationsNeeded.length > 0 &&
            formData.fullName.trim() &&
            formData.jobTitle.trim() &&
            formData.businessEmail.trim() &&
            formData.phoneNumber.trim();

        return isFormValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const errorMessage = validateForm();
        // if (errorMessage) {
        //     showToast(errorMessage);
        //     return;
        // }
        const isValid = validateForm();
        if (!isValid) {
            showToast("Please fill all required fields with *");
            return;
        }

        console.log('Submitting Form Payload Data:', formData);

        // Show exact modal popup
        setShowSuccessModal(true);

        // Reset form state
        setFormData(initialFormState);
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        navigate('/resources');
    }

    return (
        <>
            <Header />

            {/* TOAST MESSAGE */}
            {toastMessage && (
                <div className="custom-toast-notification">
                    <span>⚠️ {toastMessage}</span>
                </div>
            )}

            {/* HERO SECTION */}
            <section className="resource-hero-section">
                <div className="hero-ambient-glow" />
                <div className="section-inner-content">
                    <div className="blog-breadcrumb">
                        <Link to="/" style={{ textDecoration: "none" }}><span style={{ color: "white" }}>Home</span></Link>
                        <span className="separator">|</span>{" "}
                        <span>Resources & Media</span>
                    </div>

                    <h1 className="hero-display1-title1">
                        Customize Your Cybersecurity Policy
                    </h1>

                    <p className="hero-display-subtitle">
                        Tell us about your organization and requirements. Spartan can tailor the policy template to better align with your business, responsibilities, compliance needs and operating environment.
                    </p>
                </div>
            </section>

            {/* INTAKE FORM SECTION */}
            <section className="policy-intake-section">
                <div className="section-inner-content">
                    <div className="intake-header">
                        <h2>Policy Customization Intake</h2>
                        <span className="required-notice">* Required Fields</span>
                    </div>
                    <p className="intake-subheader">
                        A snapshot of the certifications, congressional recognitions and industry honors Spartan has received.
                    </p>

                    <form onSubmit={handleSubmit} className="intake-form" noValidate>

                        {/* 01: Select Your Policy */}
                        <div className="form-step">
                            <div className="step-header">
                                <span className="step-number">01</span>
                                <div>
                                    <h3>Select Your Policy</h3>
                                    <p>Tell us which policy you would like Spartan to customize.</p>
                                </div>
                            </div>
                            <div className="form-grid dual-col">
                                <div className="form-field">
                                    <label>Policy to Customize *</label>
                                    <select name="policyDocument" value={formData.policyDocument} onChange={handleInputChange} disabled={loading}>
                                        <option value="">
                                            {loading ? "Loading Policies" : "Select an option"}
                                        </option>
                                        {resourceTitlesData && resourceTitlesData.length > 0 &&
                                        (
                                            resourceTitlesData.map((item, index) => {
                                                const truncatedTitle = item && item.length > 50 ? `${item.substring(0, 35)}...` : item;

                                                return (
                                                    <option key={index} value={item} title={item}>
                                                        {truncatedTitle}
                                                    </option>
                                                )
                                            })
                                        )}
                                        
                                    </select>
                                </div>
                                <div className="form-field">
                                    <label>Customization Scope *</label>
                                    <select name="desiredDeliveryFormat" value={formData.desiredDeliveryFormat} onChange={handleInputChange}>
                                        <option value="">Select an option</option>
                                        <option value="one-policy">One Policy</option>
                                        <option value="multiple-policies">Multiple Policies</option>
                                        <option value="complete-suite">Complete Policy Suite</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* 02: Organization Information */}
                        <div className="form-step">
                            <div className="step-header">
                                <span className="step-number">02</span>
                                <div>
                                    <h3>Organization Information</h3>
                                    <p>Basic information helps us tailor the document to your organization.</p>
                                </div>
                            </div>
                            <div className="form-grid dual-col">
                                <div className="form-field">
                                    <label>Company / Organization Name *</label>
                                    <input type="text" name="primaryOrganizationName" placeholder="Primary organization name" value={formData.primaryOrganizationName} onChange={handleInputChange} />
                                </div>
                                <div className="form-field">
                                    <label>Industry / Business Type *</label>
                                    <input type="text" name="doingBusinessAs" placeholder="If primary organization name differs" value={formData.doingBusinessAs} onChange={handleInputChange} />
                                </div>
                                <div className="form-field">
                                    <label>Company Website *</label>
                                    <input type="text" name="primaryIndustry" placeholder="www.example.com" value={formData.primaryIndustry} onChange={handleInputChange} />
                                </div>
                                <div className="form-field">
                                    <label>Company Size *</label>
                                    <select name="companySize" value={formData.companySize} onChange={handleInputChange}>
                                        <option value="">Select company size</option>
                                        <option value="1-25">1 - 25 employees</option>
                                        <option value="26-100">26 - 100 employees</option>
                                        <option value="101-250">101 - 250 employees</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* 03: Compliance & Business Requirements */}
                        <div className="form-step">
                            <div className="step-header">
                                <span className="step-number">03</span>
                                <div>
                                    <h3>Compliance & Business Requirements</h3>
                                    <p>Identify the frameworks or contractual requirements relevant to your policy.</p>
                                </div>
                            </div>
                            <label className="section-sublabel">Which requirements apply to your organization?</label>
                            <div className="checkbox-grid">
                                {[
                                    'CMMC 2.0', 'NIST SP 800-171',
                                    'ISO/IEC 27001', 'Federal Contract Requirements',
                                    'Customer / Contractual Requirements', 'Other / Not Sure'
                                ].map((item) => (
                                    <label key={item} className={`checkbox-card ${formData.frameworks.includes(item) ? 'selected' : ''}`}>
                                        <span>{item}</span>
                                        <input
                                            type="checkbox"
                                            checked={formData.frameworks.includes(item)}
                                            onChange={() => handleCheckboxToggle('frameworks', item)}
                                        />
                                    </label>
                                ))}
                            </div>

                            <div className="form-grid dual-col mt-20">
                                <div className="form-field">
                                    <label>Does your organization handle CUI?</label>
                                    <select name="primaryEnvironment" value={formData.primaryEnvironment} onChange={handleInputChange}>
                                        <option value="">Select an option</option>
                                        <option value="cloud">Cloud (AWS, Azure, GCP)</option>
                                        <option value="on-prem">On-Premises</option>
                                        <option value="hybrid">Hybrid</option>
                                    </select>
                                </div>
                                <div className="form-field">
                                    <label>Specific contractual or regulatory requirements</label>
                                    <select name="specificStandards" value={formData.specificStandards} onChange={handleInputChange}>
                                        <option value="">Select an option</option>
                                        <option value="hipaa">HIPAA</option>
                                        <option value="gdpr">GDPR</option>
                                        <option value="soc2">SOC 2</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* 04: Your Operating Environment */}
                        <div className="form-step">
                            <div className="step-header">
                                <span className="step-number">04</span>
                                <div>
                                    <h3>Your Operating Environment</h3>
                                    <p>Help us understand the environment the customized policy should reflect.</p>
                                </div>
                            </div>
                            <div className="form-field full-width">
                                <label>Briefly describe your IT / cybersecurity environment</label>
                                <textarea
                                    name="otherTools"
                                    placeholder="Example: Microsoft 365, Azure, on-premises systems, hybrid environment, managed IT provider, etc."
                                    value={formData.otherTools}
                                    onChange={handleInputChange}
                                    rows={2}
                                />
                            </div>

                            <div className="form-grid dual-col mt-20">
                                <div className="form-field">
                                    <label>Primary Environment</label>
                                    <select name="primaryRole" value={formData.primaryRole} onChange={handleInputChange}>
                                        <option value="">Select an option</option>
                                        <option value="ciso">CISO</option>
                                        <option value="it-admin">IT Administrator</option>
                                        <option value="security-manager">Security Manager</option>
                                    </select>
                                </div>
                                <div className="form-field">
                                    <label>Who manages cybersecurity?</label>
                                    <select name="otherRoles" value={formData.otherRoles} onChange={handleInputChange}>
                                        <option value="">Select an option</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* 05: Customization Requirements */}
                        <div className="form-step">
                            <div className="step-header">
                                <span className="step-number">05</span>
                                <div>
                                    <h3>Customization Requirements</h3>
                                    <p>Select the areas that should be adapted to your organization.</p>
                                </div>
                            </div>
                            <label className="section-sublabel">What elements need customization? *</label>
                            <div className="checkbox-grid">
                                {[
                                    'Organization name & branding', 'Roles & responsibilities',
                                    'Policy scope & applicability', 'Business processes / workflows',
                                    'Technology / system references', 'CMMC / NIST requirements',
                                    'Evidence / documentation requirements', 'Other'
                                ].map((item) => (
                                    <label key={item} className={`checkbox-card ${formData.customizationsNeeded.includes(item) ? 'selected' : ''}`}>
                                        <span>{item}</span>
                                        <input
                                            type="checkbox"
                                            checked={formData.customizationsNeeded.includes(item)}
                                            onChange={() => handleCheckboxToggle('customizationsNeeded', item)}
                                        />
                                    </label>
                                ))}
                            </div>

                            <div className="form-field full-width mt-20">
                                <label>Specific roles, departments, systems, locations, or processes to include</label>
                                <textarea
                                    name="otherCustomizations"
                                    placeholder="Tell us anything specific the policy should address."
                                    value={formData.otherCustomizations}
                                    onChange={handleInputChange}
                                    rows={3}
                                />
                            </div>
                        </div>

                        {/* 06: Existing Documentation */}
                        <div className="form-step">
                            <div className="step-header">
                                <span className="step-number">06</span>
                                <div>
                                    <h3>Existing Documentation</h3>
                                    <p>Share existing material if you want it considered during customization.</p>
                                </div>
                            </div>

                            <div className="form-grid dual-col">
                                <div className="form-field">
                                    <label>Do you currently have an existing policy or related documentation?</label>
                                    <select
                                        name="existingDocumentation"
                                        value={formData.existingDocumentation}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select an option</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>

                                <div className="form-field">
                                    <label>Existing policy language to retain or incorporate</label>
                                    <input
                                        type="text"
                                        name="existingPolicyLanguage"
                                        placeholder="Optional"
                                        value={formData.existingPolicyLanguage}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="form-field full-width mt-20">
                                <label className="label-gray">Upload Relevant Documents <span className="sub-text">(Optional)</span></label>
                                <div className="dropzone-box">
                                    {formData.fileAttachment ? (
                                        <div className="file-selected-info">
                                            <span className="file-name">📄 {formData.fileAttachment.name}</span>
                                            <button
                                                type="button"
                                                className="remove-file-btn"
                                                onClick={() => setFormData(prev => ({ ...prev, fileAttachment: null }))}
                                            >
                                                Remove ✕
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <p className="dropzone-title">Drop files here or select a file</p>
                                            <p className="dropzone-desc">PDF, DOC, DOCX - upload only documents relevant to the requested policy.</p>
                                            <input
                                                type="file"
                                                id="figmaFileInput"
                                                onChange={handleFileChange}
                                                style={{ display: 'none' }}
                                            />
                                            <label htmlFor="figmaFileInput" className="choose-file-btn">
                                                Choose File
                                            </label>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* 07: Customization Level */}
                        <div className="form-step">
                            <div className="step-header">
                                <span className="step-number">07</span>
                                <div>
                                    <h3>Customization Level</h3>
                                    <p>Choose the level of customization you believe you need.</p>
                                </div>
                            </div>
                            <div className="radio-card-grid">
                                {[
                                    { id: 'Basic', label: 'Basic', desc: 'Branding, organization details and general applicability.' },
                                    { id: 'Standard', label: 'Standard', desc: 'Environment, responsibilities, requirements and processes.' },
                                    { id: 'Comprehensive', label: 'Comprehensive', desc: 'Environment, responsibilities, requirements and processes.' }
                                ].map((level) => (
                                    <div
                                        key={level.id}
                                        className={`radio-card ${formData.customizationLevel === level.id ? 'selected' : ''}`}
                                        onClick={() => setFormData(prev => ({ ...prev, customizationLevel: level.id }))}
                                    >
                                        <div className="radio-card-body">
                                            <strong>{level.label}</strong>
                                            <p>{level.desc}</p>
                                        </div>

                                        <input
                                            type="radio"
                                            name="customizationLevel"
                                            checked={formData.customizationLevel === level.id}
                                            onChange={() => { }}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="alert-banner mt-20">
                                Not sure which level is right for you? Select the closest option or explain your needs below. Spartan can recommend the appropriate approach.
                            </div>
                        </div>

                        {/* 08: Additional Requirements */}
                        <div className="form-step">
                            <div className="step-header">
                                <span className="step-number">08</span>
                                <div>
                                    <h3>Additional Requirements</h3>
                                    <p>Anything else we should know before reviewing your request?</p>
                                </div>
                            </div>
                            <div className="form-field full-width">
                                <textarea
                                    name="additionalRequirements"
                                    placeholder="Share any additional requirements, deadlines, special considerations, or questions."
                                    value={formData.additionalRequirements}
                                    onChange={handleInputChange}
                                    rows={3}
                                />
                            </div>
                        </div>

                        {/* 09: Your Contact Information */}
                        <div className="form-step border-none">
                            <div className="step-header">
                                <span className="step-number">09</span>
                                <div>
                                    <h3>Your Contact Information</h3>
                                    <p>We'll use these details to follow up regarding your customization request.</p>
                                </div>
                            </div>
                            <div className="form-grid dual-col">
                                <div className="form-field">
                                    <label>Full Name *</label>
                                    <input type="text" name="fullName" placeholder="e.g. John Doe" value={formData.fullName} onChange={handleInputChange} />
                                </div>
                                <div className="form-field">
                                    <label>Job Title *</label>
                                    <input type="text" name="jobTitle" placeholder="e.g. IT Manager" value={formData.jobTitle} onChange={handleInputChange} />
                                </div>
                                <div className="form-field">
                                    <label>Business Email *</label>
                                    <input type="email" name="businessEmail" placeholder="name@company.com" value={formData.businessEmail} onChange={handleInputChange} />
                                </div>
                                <div className="form-field">
                                    <label>Phone Number *</label>
                                    <input type="tel" name="phoneNumber" placeholder="(555) 000-0000" value={formData.phoneNumber} onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>

                        {/* SUBMIT BUTTON */}
                        <div className="form-submit-footer">
                            <p className="privacy-text">
                                By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information with third parties.
                            </p>
                            <button type="submit" className="submit-btn">
                                SUBMIT CUSTOMIZATION REQUEST <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>

                    </form>
                </div>
            </section>

            {/* FIGMA ACCURATE SUCCESS MODAL */}
            {showSuccessModal && (
                <div className="modal-backdrop-overlay">
                    <div className="spartan-success-modal">
                        <button className="modal-close-icon" onClick={() => setShowSuccessModal(false)}>
                            ✕
                        </button>

                        {/* TOP DARK SECTION */}
                        <div className="modal-header-section">
                            <div className="shield-icon-wrapper">
                                <svg width="32" height="36" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 6V13C2 19.5 6.3 25.5 12 27C17.7 25.5 22 19.5 22 13V6L12 2Z" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.5 13.5L11 16L16 10.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h2 className="modal-title">Submission Successful!</h2>
                            <p className="modal-subtitle">Thank you for providing the information.</p>
                        </div>

                        {/* BOTTOM LIGHT SECTION */}
                        <div className="modal-body-section">
                            <p className="modal-description">
                                Your cybersecurity policy request has been submitted successfully. Our team will review your details and get back to you shortly.
                            </p>
                            <button className="modal-red-close-btn" onClick={handleCloseModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default CustomizePolicy;