"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Updated import
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
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa"; // Added FaTimes for close button
import { motion } from "framer-motion";

export const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+234) 813 373 0145" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "adebayoinioluwamarvellous1@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description:
      "No 16, Ajangboju Layout, Bashorun Housing Estate, Ibadan, Oyo State",
  },
];

const Contact = () => {
  const router = useRouter(); // Get router instance
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // State for notification visibility

  useEffect(() => {
    const service = router.query?.service; // Access query parameters from router
    if (service) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        service,
      }));
    }
  }, [router]);

  useEffect(() => {
    if (status) {
      setIsVisible(true); // Show the notification when status changes
      const timer = setTimeout(() => {
        setIsVisible(false); // Hide notification after 5 seconds
      }, 12000);

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  const handleClose = () => {
    setIsVisible(false); // Close the notification when the button is clicked
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 relative"
    >
      <div className="container mx-auto">
        {isVisible && (
          <div
            className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg transition-opacity ${
              status === "sending"
                ? "bg-[#333] text-white"
                : status === "success"
                ? "bg-[#333] text-accent"
                : "bg-[#333] text-[#FF0000]"
            }`}
          >
            <div className="flex justify-between items-center">
              <span>
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Thank you for contacting, I will respond shortly."
                  : "Failed. Try again please."}
              </span>
              <button onClick={handleClose} className="ml-4">
                <FaTimes className="text-white hover:text-gray-400" />
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Here to make your ideas a reality. Get in touch now.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                <Input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (e.g., +234 xx)"
                />
              </div>
              <Select
                onValueChange={handleSelectChange}
                value={formData.service}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Bots Development/Management">
                      Bots Development/Management
                    </SelectItem>
                    <SelectItem value="Graphics Design">
                      Graphics Design
                    </SelectItem>
                    <SelectItem value="Automation / Python Scripting">
                      Automation / Python Scripting
                    </SelectItem>
                    <SelectItem value="SEO">SEO</SelectItem>
                    <SelectItem value="Mobile App Development">
                      Mobile App Development
                    </SelectItem>
                    <SelectItem value="API Integration">
                      API Integration
                    </SelectItem>
                    <SelectItem value="Presentation Design">
                      Presentation Design
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Additional Information"
                className="h-[200px]"
              />
              <Button type="submit" size="md" className="max-w-40 p-2">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="md:text-[12.5px] text-[13.5px]">
                      {item.description}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
