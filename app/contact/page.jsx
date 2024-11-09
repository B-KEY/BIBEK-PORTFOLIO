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

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "07459939217",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "thapabibekuk55@gmail.com",
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
  const router = useRouter();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return false;
    }
    setEmailError(null);
    return true;
  };

  const validateForm = (formData) => {
    const errors = {};
    
    // Check required fields
    const requiredFields = ['firstname', 'lastname', 'email', 'message'];
    requiredFields.forEach(field => {
      if (!formData.get(field)) {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    // Validate email if it exists
    const email = formData.get('email');
    if (email && !validateEmail(email)) {
      errors.email = 'Invalid email address';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,  // Using environment variable here
            name: formData.get("firstname") + " " + formData.get("lastname"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message")
          }),
        });

        if (response.ok) {
          router.push('/thankyou');
        }
      } catch (error) {
        console.error('Error:', error);
        setFormErrors({ submit: 'Failed to send message' });
      }
    } else {
      setFormErrors(errors);
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
          <div className="xl:w-[54%] order-2 xl:order-none">
          <form onSubmit={onSubmit} className="flex flex-col gap-6 p-10 bg-[#000000] rounded-xl contact-box">
  <h2 className="text-4xl text-accent">Connect with me...</h2>
              <p className="text-white/60">If you have any questions or want to reach out to me  please fill out the form below.</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input type="text" name="firstname" placeholder="Firstname" />
                  {formErrors.firstname && <p className="text-red-500 text-sm mt-1">{formErrors.firstname}</p>}
                </div>
                <div>
                  <Input type="text" name="lastname" placeholder="Lastname" />
                  {formErrors.lastname && <p className="text-red-500 text-sm mt-1">{formErrors.lastname}</p>}
                </div>
                <div>
                  <Input type="email" name="email" placeholder="Email address" />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
                <Input type="phone" name="phone" placeholder="Phone number" />
              </div>
              {/* textarea */}
              <div>
                <Textarea
                  name="message"
                  className="h-[200px]"
                  placeholder="Type your message here."
                />
                {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
              </div>
              {/* btn */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>
              {emailError && <p className="text-red-500">{emailError}</p>}
              {submissionStatus && (
                <p className={submissionStatus.success ? "text-green-500" : "text-red-500"}>
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
