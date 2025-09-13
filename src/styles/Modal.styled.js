// src/styles/Modal.styled.js
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &.is-active {
    opacity: 1;
    visibility: visible;
  }
`;

export const ModalContent = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  position: relative;
  width: 90%;
  max-width: 650px;
  max-height: 90vh;
  overflow-y: auto;
  margin: 1rem;
  border: 1px solid rgba(59, 130, 246, 0.1);
  transform: scale(0.9) translateY(20px);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${ModalOverlay}.is-active & {
    transform: scale(1) translateY(0);
  }

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #3b82f6, #fb923c);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #1d4ed8, #f97316);
  }

  h2 {
    background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(107, 114, 128, 0.1);
  border: none;
  font-size: 1.5rem;
  color: #6b7280;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: #1f2937;
    background: rgba(107, 114, 128, 0.2);
    transform: scale(1.1);
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 600;
    color: #374151;
    font-size: 0.95rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #ffffff;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    transform: translateY(-1px);
  }

  &:hover {
    border-color: #9ca3af;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #ffffff;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    transform: translateY(-1px);
  }

  &:hover {
    border-color: #9ca3af;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #ffffff;
  resize: vertical;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    transform: translateY(-1px);
  }

  &:hover {
    border-color: #9ca3af;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1.25rem 2rem;
  background: ${props => props.$type === 'order' 
    ? 'linear-gradient(135deg, #fb923c, #f97316)' 
    : 'linear-gradient(135deg, #2563eb, #1d4ed8)'};
  color: #ffffff;
  font-weight: 700;
  border-radius: 9999px;
  box-shadow: 0 8px 24px ${props => props.$type === 'order' 
    ? 'rgba(251, 146, 60, 0.3)' 
    : 'rgba(37, 99, 235, 0.3)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    background: ${props => props.$type === 'order' 
      ? 'linear-gradient(135deg, #f97316, #ea580c)' 
      : 'linear-gradient(135deg, #1d4ed8, #1e40af)'};
    transform: translateY(-3px);
    box-shadow: 0 12px 32px ${props => props.$type === 'order' 
      ? 'rgba(251, 146, 60, 0.4)' 
      : 'rgba(37, 99, 235, 0.4)'};

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;