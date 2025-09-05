// src/components/Modal.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';
import {
  ModalOverlay,
  ModalContent,
  ModalClose,
  ModalForm,
  FormGroup,
  Input,
  Select,
  TextArea,
  SubmitButton,
} from '../styles/Modal.styled';

function Modal({ id, title, isOpen, onClose, type }) {
  const [service, setService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    documentUpload: null,
    scheduleDate: '',
    sourceLanguage: '',
    targetLanguage: '',
    message: '',
    subject: '',
  });

  const handleServiceChange = (e) => {
    setService(e.target.value);
    setFormData({ ...formData, service: e.target.value });
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (formData[key]) data.append(key, formData[key]);
    }

    try {
      const endpoint = type === 'order' ? '/process_form.php' : '/process_contact.php';
      await axios.post(`${process.env.REACT_APP_BASE_URL}${endpoint}`, data);
      console.log('Form submitted successfully');
      onClose();
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <ModalOverlay id={id} className={isOpen ? 'is-active' : ''}>
      <ModalContent>
        <ModalClose onClick={onClose}>
          <FaTimes />
        </ModalClose>
        <h2 className="text-3xl font-bold text-blue-800 mb-6">{title}</h2>
        <ModalForm onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor={`${id}Name`} className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <Input
              type="text"
              id={`${id}Name`}
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor={`${id}Email`} className="block text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <Input
              type="email"
              id={`${id}Email`}
              name="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          {type === 'order' ? (
            <>
              <FormGroup>
                <label htmlFor={`${id}Service`} className="block text-gray-700 font-medium mb-2">
                  Service Needed
                </label>
                <Select id={`${id}Service`} name="service" value={service} onChange={handleServiceChange} required>
                  <option value="">Select a service</option>
                  <option value="translation">Certified & Technical Translation</option>
                  <option value="marketing">Strategic Digital & Marketing Solutions</option>
                  <option value="tutoring">Tutoring</option>
                  <option value="other">Other</option>
                </Select>
              </FormGroup>
              {service === 'translation' && (
                <>
                  <FormGroup>
                    <label htmlFor="documentUpload" className="block text-gray-700 font-medium mb-2">
                      Document Upload
                    </label>
                    <Input type="file" id="documentUpload" name="documentUpload" onChange={handleInputChange} />
                    <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOCX, XLSX, TXT, JPG, PNG</p>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="scheduleDate" className="block text-gray-700 font-medium mb-2">
                      Desired Completion Date
                    </label>
                    <Input type="date" id="scheduleDate" name="scheduleDate" onChange={handleInputChange} />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="sourceLanguage" className="block text-gray-700 font-medium mb-2">
                      Source Language
                    </label>
                    <Select id="sourceLanguage" name="sourceLanguage" onChange={handleInputChange}>
                      <option value="">Select Source Language</option>
                      <option value="amharic">Amharic</option>
                      <option value="english">English</option>
                      <option value="french">French</option>
                      <option value="german">German</option>
                      <option value="arabic">Arabic</option>
                    </Select>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="targetLanguage" className="block text-gray-700 font-medium mb-2">
                      Target Language
                    </label>
                    <Select id="targetLanguage" name="targetLanguage" onChange={handleInputChange}>
                      <option value="">Select Target Language</option>
                      <option value="english">English</option>
                      <option value="amharic">Amharic</option>
                      <option value="french">French</option>
                      <option value="german">German</option>
                      <option value="arabic">Arabic</option>
                    </Select>
                  </FormGroup>
                </>
              )}
              <FormGroup>
                <label htmlFor={`${id}Message`} className="block text-gray-700 font-medium mb-2">
                  Project Details
                </label>
                <TextArea
                  id={`${id}Message`}
                  name="message"
                  rows="5"
                  placeholder="Please describe your project or specific needs..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </>
          ) : (
            <>
              <FormGroup>
                <label htmlFor={`${id}Subject`} className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id={`${id}Subject`}
                  name="subject"
                  placeholder="Inquiry about services"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor={`${id}Message`} className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <TextArea
                  id={`${id}Message`}
                  name="message"
                  rows="5"
                  placeholder="How can we help you today?"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </>
          )}
          <SubmitButton type="submit" $type={type}>
            {type === 'order' ? 'Submit Order Request' : 'Send Message'}
          </SubmitButton>
        </ModalForm>
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;