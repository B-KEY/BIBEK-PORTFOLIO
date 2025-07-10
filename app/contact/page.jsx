"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Social from "@/components/Social";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const countryCodes = [
  { code: "+44", country: "UK" },
  { code: "+1", country: "US/Canada" },
  { code: "+91", country: "India" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
  { code: "+31", country: "Netherlands" },
  { code: "+32", country: "Belgium" },
  { code: "+46", country: "Sweden" },
  { code: "+47", country: "Norway" },
  { code: "+45", country: "Denmark" },
  { code: "+358", country: "Finland" },
  { code: "+48", country: "Poland" },
  { code: "+420", country: "Czech Republic" },
  { code: "+36", country: "Hungary" },
  { code: "+40", country: "Romania" },
  { code: "+421", country: "Slovakia" },
  { code: "+386", country: "Slovenia" },
  { code: "+385", country: "Croatia" },
  { code: "+387", country: "Bosnia" },
  { code: "+389", country: "Macedonia" },
  { code: "+381", country: "Serbia" },
  { code: "+382", country: "Montenegro" },
  { code: "+355", country: "Albania" },
  { code: "+30", country: "Greece" },
  { code: "+351", country: "Portugal" },
  { code: "+353", country: "Ireland" },
  { code: "+43", country: "Austria" },
  { code: "+41", country: "Switzerland" },
  { code: "+352", country: "Luxembourg" },
  { code: "+375", country: "Belarus" },
  { code: "+380", country: "Ukraine" },
  { code: "+371", country: "Latvia" },
  { code: "+372", country: "Estonia" },
  { code: "+370", country: "Lithuania" },
  { code: "+7", country: "Russia" },
  { code: "+90", country: "Turkey" },
  { code: "+972", country: "Israel" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+974", country: "Qatar" },
  { code: "+973", country: "Bahrain" },
  { code: "+965", country: "Kuwait" },
  { code: "+968", country: "Oman" },
  { code: "+973", country: "Bahrain" },
  { code: "+20", country: "Egypt" },
  { code: "+27", country: "South Africa" },
  { code: "+234", country: "Nigeria" },
  { code: "+254", country: "Kenya" },
  { code: "+255", country: "Tanzania" },
  { code: "+256", country: "Uganda" },
  { code: "+233", country: "Ghana" },
  { code: "+225", country: "Ivory Coast" },
  { code: "+237", country: "Cameroon" },
  { code: "+212", country: "Morocco" },
  { code: "+216", country: "Tunisia" },
  { code: "+213", country: "Algeria" },
  { code: "+218", country: "Libya" },
  { code: "+249", country: "Sudan" },
  { code: "+251", country: "Ethiopia" },
  { code: "+252", country: "Somalia" },
  { code: "+253", country: "Djibouti" },
  { code: "+257", country: "Burundi" },
  { code: "+258", country: "Mozambique" },
  { code: "+260", country: "Zambia" },
  { code: "+261", country: "Madagascar" },
  { code: "+262", country: "Reunion" },
  { code: "+263", country: "Zimbabwe" },
  { code: "+264", country: "Namibia" },
  { code: "+265", country: "Malawi" },
  { code: "+266", country: "Lesotho" },
  { code: "+267", country: "Botswana" },
  { code: "+268", country: "Swaziland" },
  { code: "+269", country: "Comoros" },
  { code: "+290", country: "St Helena" },
  { code: "+291", country: "Eritrea" },
  { code: "+297", country: "Aruba" },
  { code: "+298", country: "Faroe Islands" },
  { code: "+299", country: "Greenland" },
  { code: "+350", country: "Gibraltar" },
  { code: "+351", country: "Portugal" },
  { code: "+352", country: "Luxembourg" },
  { code: "+353", country: "Ireland" },
  { code: "+354", country: "Iceland" },
  { code: "+355", country: "Albania" },
  { code: "+356", country: "Malta" },
  { code: "+357", country: "Cyprus" },
  { code: "+358", country: "Finland" },
  { code: "+359", country: "Bulgaria" },
  { code: "+36", country: "Hungary" },
  { code: "+370", country: "Lithuania" },
  { code: "+371", country: "Latvia" },
  { code: "+372", country: "Estonia" },
  { code: "+373", country: "Moldova" },
  { code: "+374", country: "Armenia" },
  { code: "+375", country: "Belarus" },
  { code: "+376", country: "Andorra" },
  { code: "+377", country: "Monaco" },
  { code: "+378", country: "San Marino" },
  { code: "+379", country: "Vatican" },
  { code: "+380", country: "Ukraine" },
  { code: "+381", country: "Serbia" },
  { code: "+382", country: "Montenegro" },
  { code: "+383", country: "Kosovo" },
  { code: "+384", country: "Croatia" },
  { code: "+385", country: "Croatia" },
  { code: "+386", country: "Slovenia" },
  { code: "+387", country: "Bosnia" },
  { code: "+389", country: "Macedonia" },
  { code: "+420", country: "Czech Republic" },
  { code: "+421", country: "Slovakia" },
  { code: "+423", country: "Liechtenstein" },
  { code: "+43", country: "Austria" },
  { code: "+44", country: "UK" },
  { code: "+45", country: "Denmark" },
  { code: "+46", country: "Sweden" },
  { code: "+47", country: "Norway" },
  { code: "+48", country: "Poland" },
  { code: "+49", country: "Germany" },
  { code: "+500", country: "Falkland Islands" },
  { code: "+501", country: "Belize" },
  { code: "+502", country: "Guatemala" },
  { code: "+503", country: "El Salvador" },
  { code: "+504", country: "Honduras" },
  { code: "+505", country: "Nicaragua" },
  { code: "+506", country: "Costa Rica" },
  { code: "+507", country: "Panama" },
  { code: "+508", country: "St Pierre" },
  { code: "+509", country: "Haiti" },
  { code: "+51", country: "Peru" },
  { code: "+52", country: "Mexico" },
  { code: "+53", country: "Cuba" },
  { code: "+54", country: "Argentina" },
  { code: "+55", country: "Brazil" },
  { code: "+56", country: "Chile" },
  { code: "+57", country: "Colombia" },
  { code: "+58", country: "Venezuela" },
  { code: "+590", country: "Guadeloupe" },
  { code: "+591", country: "Bolivia" },
  { code: "+592", country: "Guyana" },
  { code: "+593", country: "Ecuador" },
  { code: "+594", country: "French Guiana" },
  { code: "+595", country: "Paraguay" },
  { code: "+596", country: "Martinique" },
  { code: "+597", country: "Suriname" },
  { code: "+598", country: "Uruguay" },
  { code: "+599", country: "Netherlands Antilles" },
  { code: "+60", country: "Malaysia" },
  { code: "+61", country: "Australia" },
  { code: "+62", country: "Indonesia" },
  { code: "+63", country: "Philippines" },
  { code: "+64", country: "New Zealand" },
  { code: "+65", country: "Singapore" },
  { code: "+66", country: "Thailand" },
  { code: "+670", country: "East Timor" },
  { code: "+672", country: "Australia External" },
  { code: "+673", country: "Brunei" },
  { code: "+674", country: "Nauru" },
  { code: "+675", country: "Papua New Guinea" },
  { code: "+676", country: "Tonga" },
  { code: "+677", country: "Solomon Islands" },
  { code: "+678", country: "Vanuatu" },
  { code: "+679", country: "Fiji" },
  { code: "+680", country: "Palau" },
  { code: "+681", country: "Wallis & Futuna" },
  { code: "+682", country: "Cook Islands" },
  { code: "+683", country: "Niue" },
  { code: "+685", country: "Samoa" },
  { code: "+686", country: "Kiribati" },
  { code: "+687", country: "New Caledonia" },
  { code: "+688", country: "Tuvalu" },
  { code: "+689", country: "French Polynesia" },
  { code: "+690", country: "Tokelau" },
  { code: "+691", country: "Micronesia" },
  { code: "+692", country: "Marshall Islands" },
  { code: "+7", country: "Russia" },
  { code: "+850", country: "North Korea" },
  { code: "+852", country: "Hong Kong" },
  { code: "+853", country: "Macau" },
  { code: "+855", country: "Cambodia" },
  { code: "+856", country: "Laos" },
  { code: "+880", country: "Bangladesh" },
  { code: "+886", country: "Taiwan" },
  { code: "+90", country: "Turkey" },
  { code: "+91", country: "India" },
  { code: "+92", country: "Pakistan" },
  { code: "+93", country: "Afghanistan" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+95", country: "Myanmar" },
  { code: "+960", country: "Maldives" },
  { code: "+961", country: "Lebanon" },
  { code: "+962", country: "Jordan" },
  { code: "+963", country: "Syria" },
  { code: "+964", country: "Iraq" },
  { code: "+965", country: "Kuwait" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+967", country: "Yemen" },
  { code: "+968", country: "Oman" },
  { code: "+970", country: "Palestine" },
  { code: "+971", country: "UAE" },
  { code: "+972", country: "Israel" },
  { code: "+973", country: "Bahrain" },
  { code: "+974", country: "Qatar" },
  { code: "+975", country: "Bhutan" },
  { code: "+976", country: "Mongolia" },
  { code: "+977", country: "Nepal" },
  { code: "+98", country: "Iran" },
  { code: "+992", country: "Tajikistan" },
  { code: "+993", country: "Turkmenistan" },
  { code: "+994", country: "Azerbaijan" },
  { code: "+995", country: "Georgia" },
  { code: "+996", country: "Kyrgyzstan" },
  { code: "+998", country: "Uzbekistan" },
];

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "please use the form or use linkedin to contact me",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "please use the form or use linkedin to contact me",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "London, UK",
  },
];

import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [selectedCountryCode, setSelectedCountryCode] = useState("+44");
  const router = useRouter();

  // Find the selected country object
  const selectedCountry = countryCodes.find(country => country.code === selectedCountryCode);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return false;
    }
    setEmailError(null);
    return true;
  };

  const validatePhone = (phone) => {
    if (!phone) return false; // Phone is required
    const phoneRegex = /^[0-9]{1,15}$/;
    if (!phoneRegex.test(phone)) {
      return false;
    }
    return true;
  };

  const validateForm = (formData) => {
    const errors = {};
    
    const requiredFields = ["firstname", "lastname", "email", "phone", "message"];
    requiredFields.forEach((field) => {
      if (!formData.get(field)) {
        errors[field] =
          field.charAt(0).toUpperCase() + field.slice(1) + " is required";
      }
    });

    const email = formData.get("email");
    if (email && !validateEmail(email)) {
      errors.email = "Invalid email address";
    }

    const phone = formData.get("phone");
    if (phone && !validatePhone(phone)) {
      errors.phone = "Phone number must be 1-15 digits only";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const isValid = validateForm(formData);

    if (isValid) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: "53f69236-e43e-475e-9ea4-c59bff44cc64",
            name: formData.get("firstname") + " " + formData.get("lastname"),
            email: formData.get("email"),
            phone: selectedCountryCode + " " + formData.get("phone"),
            message: formData.get("message"),
          }),
        });

        if (response.ok) {
          router.push("/thankyou");
        } else {
          setSubmissionStatus({
            success: false,
            message: "Failed to send message. Please try again later.",
          });
        }
      } catch (error) {
        console.error("Error:", error);
        setSubmissionStatus({
          success: false,
          message: "An error occurred. Please try again.",
        });
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.2, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[65%] order-2 xl:order-none">
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-6 p-10 bg-[#000000] rounded-xl contact-box"
            >
              <h2 className="text-4xl text-accent">Connect with me...</h2>
              <p className="text-white/60">
                If you have any questions or want to reach out to me please
                fill out the form below.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input type="text" name="firstname" placeholder="Firstname" />
                  {formErrors.firstname && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.firstname}
                    </p>
                  )}
                </div>
                <div>
                  <Input type="text" name="lastname" placeholder="Lastname" />
                  {formErrors.lastname && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.lastname}
                    </p>
                  )}
                </div>
                <div>
                  <Input type="email" name="email" placeholder="Email address" />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <div className="flex gap-2">
                    <Select value={selectedCountryCode} onValueChange={setSelectedCountryCode}>
                      <SelectTrigger className="w-[100px]">
                        <SelectValue>
                          {selectedCountry ? selectedCountry.code : "Select"}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        <SelectGroup>
                          {countryCodes.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              {country.code} {country.country}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Input 
                      type="tel" 
                      name="phone" 
                      placeholder="Phone number" 
                      className="w-[180px]"
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.phone}
                    </p>
                  )}
                </div>
              </div>
              {/* textarea */}
              <div>
                <Textarea
                  name="message"
                  className="h-[200px]"
                  placeholder="Type your message here."
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.message}
                  </p>
                )}
              </div>
              {/* btn */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>
              {emailError && <p className="text-red-500">{emailError}</p>}
              {submissionStatus && (
                <p
                  className={
                    submissionStatus.success
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {submissionStatus.message}
                </p>
              )}
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex flex-col items-center xl:items-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10 mb-8">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-lg">{item.title}</h4>
                      <p className="text-white/60">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <Social
              containerStyles="flex gap-6 relative -left-[150px]"
              iconStyles="text-2xl text-accent hover:text-pink-600 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
