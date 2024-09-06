import React, { useState } from "react";
import Container from "../shared/Container";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Title from "./Title";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
    setFormStatus("Thank you for reaching out! We will get back to you soon.");
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container>
      <div className="my-32">
        <Title>Contact</Title>

        {/* category section  */}
        <div className="mt-16 max-w-4xl mx-auto">
          <form>
            {/* name and email  */}
            <div className="flex gap-6">
              <Input
                type="text"
                placeholder="Name"
                className="lg:w-[50%]"
                //   value={name}
              />
              <Input
                type="email"
                placeholder="Email"
                className="lg:w-[50%]"
                //   value={name}
              />
            </div>
            {/* text area        */}

            <div className="flex gap-6 mt-3">
              <Textarea placeholder="Your Text" className="lg:w-[100%]" />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
