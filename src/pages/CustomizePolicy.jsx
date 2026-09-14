import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../assets/css/customizePolicyScreen.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resourceTitles, submitCustomizeForm } from '../redux/slices/secondSlice';

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
    const { resourceTitlesData, resourceTitleLoading, submitFormLoading } = useSelector((state) => state.second);

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

    // const handleFileChange = (e) => {
    //     if (e.target.files && e.target.files[0]) {
    //         setFormData(prev => ({ ...prev, fileAttachment: e.target.files[0] }));
    //     }
    // };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const allowedExtensions = ["pdf", "doc", "docx"];

        const fileExtension = file.name
            .split(".")
            .pop()
            .toLowerCase();

        if (!allowedExtensions.includes(fileExtension)) {
            showToast("Please upload only PDF, DOC, or DOCX files.");

            // Clear the selected file
            e.target.value = "";

            return;
        }

        setFormData(prev => ({
            ...prev,
            fileAttachment: file
        }));
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
            // formData.customizationsNeeded.length > 0 &&
            formData.fullName.trim() &&
            formData.jobTitle.trim() &&
            formData.businessEmail.trim()

        return isFormValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("SUBMIT BUTTON CLICKED");

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

        let companyWebsite = formData.primaryIndustry.trim();

        if (companyWebsite && !/^https?:\/\//i.test(companyWebsite)) {
            companyWebsite = `https://${companyWebsite}`;
        }

        const payload = new FormData();

        // Section 01 - Policy
        payload.append("policy_to_customize", formData.policyDocument);
        payload.append("customization_scope", formData.desiredDeliveryFormat);

        // Section 02 - Organization
        payload.append("company_name", formData.primaryOrganizationName);
        payload.append("industry", formData.doingBusinessAs);
        // payload.append("company_website", formData.primaryIndustry);
        payload.append("company_website", companyWebsite);
        payload.append("company_size", formData.companySize);

        // Section 03 - Compliance
        // payload.append("requirements", JSON.stringify(formData.frameworks));
        formData.frameworks.forEach((item) => {
            payload.append("requirements[]", item);
        });
        payload.append("handles_cui", formData.primaryEnvironment);
        payload.append("contractual_requirements", formData.specificStandards);

        // Section 04 - Environment
        payload.append("it_environment", formData.otherTools);
        payload.append("primary_environment", formData.primaryRole);
        payload.append("cybersecurity_managed_by", formData.otherRoles);

        // Section 05 - Customization
        // payload.append(
        //     "customization_requirements",
        //     JSON.stringify(formData.customizationsNeeded)
        // );
        formData.customizationsNeeded.forEach((item) => {
            payload.append("customization_requirements[]", item);
        });

        payload.append("specific_requirements", formData.otherCustomizations);

        // Section 06 - Documentation
        payload.append(
            "existing_documentation",
            formData.existingDocumentation
        );
        payload.append(
            "existing_policy_language",
            formData.existingPolicyLanguage
        );

        // File
        if (formData.fileAttachment) {
            payload.append("document", formData.fileAttachment);
        }

        // Section 07 - Customization Level
        payload.append("customization_level", formData.customizationLevel);

        // Section 08 - Additional Requirements
        payload.append(
            "additional_requirements",
            formData.additionalRequirements
        );

        // Section 09 - Contact
        payload.append("full_name", formData.fullName);
        payload.append("job_title", formData.jobTitle);
        payload.append("business_email", formData.businessEmail);
        payload.append("phone", formData.phoneNumber);

        // console.log('Submitting Form Payload Data:', formData);

        // setShowSuccessModal(true);
        // setFormData(initialFormState);

        try {
            // console.log("Submitting API Payload:");

            // for (let [key, value] of payload.entries()) {
            //     console.log(key, value);
            // }

            const response = await dispatch(
                submitCustomizeForm(payload)
            ).unwrap();

            // console.log("Customize Policy API Response:", response);

            // Show success modal only after API succeeds
            setShowSuccessModal(true);

            // Reset form
            setFormData(initialFormState);

        } catch (error) {
            console.error("Customize Policy API Error:", error);

            // showToast(
            //     error?.message ||
            //     "Something went wrong while submitting your request."
            // );

            // Get the first error from the array, or fall back to main message, or default string
            const firstError =
                (Array.isArray(error?.errors) && error.errors.length > 0 && error.errors[0]) ||
                error?.message ||
                "Something went wrong while submitting your request.";

            showToast(firstError);
        }

    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        navigate('/policies');
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
                        <span>Policies & Media</span>
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
                        <span className="required-notice"><span className='star'>*</span> Required Fields</span>
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
                                    <label>Policy to Customize <span className='star'>*</span></label>
                                    <select name="policyDocument" value={formData.policyDocument} onChange={handleInputChange} disabled={resourceTitleLoading}>
                                        <option value="">
                                            {resourceTitleLoading ? "Loading Policies" : "Select an option"}
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
                                    <label>Customization Scope <span className='star'>*</span></label>
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
                                    <label>Company / Organization Name <span className='star'>*</span></label>
                                    <input type="text" name="primaryOrganizationName" placeholder="Primary organization name" value={formData.primaryOrganizationName} onChange={handleInputChange} />
                                </div>
                                <div className="form-field">
                                    <label>Industry / Business Type <span className='star'>*</span></label>
                                    <input type="text" name="doingBusinessAs" placeholder="Enter organization name" value={formData.doingBusinessAs} onChange={handleInputChange} />
                                </div>
                                <div className="form-field">
                                    <label>Company Website</label>
                                    <input type="text" name="primaryIndustry" placeholder="www.example.com" value={formData.primaryIndustry} onChange={handleInputChange} />
                                </div>
                                <div className="form-field">
                                    <label>Company Size</label>
                                    <select name="companySize" value={formData.companySize} onChange={handleInputChange}>
                                        <option value="">Select company size</option>
                                        <option value="1-25">1 - 25 employees</option>
                                        <option value="26-100">26 - 100 employees</option>
                                        <option value="101-250">101 - 250 employees</option>
                                        <option value="251-500">251 - 500 employees</option>
                                        <option value="500+">500+ employees</option>
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
                            <label className="section-sublabel" style={{ marginBottom: "8px" }}>Which requirements apply to your organization?</label>
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
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="not-sure">Not Sure</option>
                                    </select>
                                </div>
                                <div className="form-field">
                                    <label>Specific contractual or regulatory requirements</label>
                                    {/* <select name="specificStandards" value={formData.specificStandards} onChange={handleInputChange}>
                                        <option value="">Select an option</option>
                                        <option value="hipaa">HIPAA</option>
                                        <option value="gdpr">GDPR</option>
                                        <option value="soc2">SOC 2</option>
                                    </select> */}
                                    <input
                                        type="text"
                                        name="specificStandards"
                                        placeholder="Optional"
                                        value={formData.specificStandards}
                                        onChange={handleInputChange}
                                    />
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
                                        <option value="cloud">Cloud</option>
                                        <option value="on-premises">On-premises</option>
                                        <option value="hybrid">Hybrid</option>
                                        <option value="not-sure">Not Sure</option>
                                    </select>
                                </div>
                                <div className="form-field">
                                    <label>Who manages cybersecurity?</label>
                                    <select name="otherRoles" value={formData.otherRoles} onChange={handleInputChange}>
                                        <option value="">Select an option</option>
                                        <option value="internal-it-team">Internal IT Team</option>
                                        <option value="dedicated-security-team">Dedicated Security Team</option>
                                        <option value="msp-mssp">MSP / MSSP</option>
                                        <option value="external-consultant">External Consultant</option>
                                        <option value="no-dedicated-team">No Dedicated Team</option>
                                        <option value="other">Other</option>
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
                            <label className="section-sublabel" style={{ marginBottom: '8px' }}>What would you like us to customize?</label>
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
                                            {/* <input
                                                type="file"
                                                id="figmaFileInput"
                                                onChange={handleFileChange}
                                                style={{ display: 'none' }}
                                            /> */}
                                            <input
                                                type="file"
                                                id="figmaFileInput"
                                                accept=".pdf,.doc,.docx"
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
                                    <label>Full Name <span className='star'>*</span></label>
                                    <input type="text" name="fullName" placeholder="e.g. John Doe" value={formData.fullName} onChange={handleInputChange} />
                                </div>
                                <div className="form-field">
                                    <label>Job Title <span className='star'>*</span></label>
                                    <input type="text" name="jobTitle" placeholder="e.g. IT Manager" value={formData.jobTitle} onChange={handleInputChange} />
                                </div>
                                <div className="form-field">
                                    <label>Business Email <span className='star'>*</span></label>
                                    <input type="email" name="businessEmail" placeholder="name@company.com" value={formData.businessEmail} onChange={handleInputChange} />
                                </div>
                                <div className="form-field">
                                    <label>Phone Number</label>
                                    <input type="tel" name="phoneNumber" placeholder="Optional" value={formData.phoneNumber} onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>

                        {/* SUBMIT BUTTON */}
                        <div className="form-submit-footer">
                            <p className="privacy-text">
                                By submitting this form, you are requesting policy customization support from Spartan Cyber Security. A team member may contact you to clarify requirements and discuss the appropriate customization approach.
                            </p>
                            <button type="submit" className="submit-btn" disabled={submitFormLoading}>
                                {submitFormLoading ? "Submitting..." : "Submit Customization Request"} {!submitFormLoading && <i className="fas fa-arrow-right"></i>}
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