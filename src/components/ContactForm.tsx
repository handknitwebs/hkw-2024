import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';
import Form from '../styled_components/Form';
import FormInputContainer from '../styled_components/FormInputContainer';
import Label from '../styled_components/Label';
import TextInput from '../styled_components/TextInput';
import TextArea from '../styled_components/TextArea';
import Button from '../styled_components/Button';
import ErrorMessage from '../styled_components/ErrorMessage';
import { MultiSelectContainer, MultiSelectButton } from '../styled_components/MultiSelect';

const FormHeader = styled(Label)`
  color: #9E9E9E;
  font-size: 1.25rem;
  font-weight: 450;
`;

const SubmitButton = styled(Button)<{ isSubmitting: boolean }>`
  background-color: ${({ isSubmitting }) => (isSubmitting ? '#FDF4E2' : 'transparent')};
  background: ${({ isSubmitting }) => (isSubmitting ? 'linear-gradient(transparent)' : 'linear-gradient(transparent 50%, #FDF4E2 50%)')};
  background-repeat: repeat;
  background-size: 100% 200%;
  transition: all 0.3s linear;
  color: ${({ isSubmitting }) => (isSubmitting ? '#171717' : '#FDF4E2')};
  border: 1px solid #FDF4E2;
  padding: 1.5rem;
  border-radius: 3rem;
  font-size: 1.25rem;
  margin-top: 1.5rem;
  cursor: ${({ isSubmitting }) => (isSubmitting ? 'not-allowed' : 'pointer')};
  &:hover {
    color: #1F1F1F;
    background-position: 0 100%;
  }
`;

type Inputs = {
  productType: { label: string; value: string }[];
  name: string;
  organization: string;
  email: string;
  phone: string;
  website: string;
  project: string;
};

interface ContactFormProps {
  onFormSubmit: () => void;
  isFormSubmitted: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ onFormSubmit, isFormSubmitted }) => {
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const productTypeOptions = [
    { value: 'strategy', label: 'Strategy' },
    { value: 'branding', label: 'Branding' },
    { value: 'writing', label: 'Writing' },
    { value: 'design', label: 'Design' },
    { value: 'web', label: 'Web' },
    { value: 'apps', label: 'Apps' },
    { value: 'products', label: 'Products' },
    { value: 'print', label: 'Print' },
    { value: 'campaigns', label: 'Campaigns' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'seo', label: 'SEO' },
    { value: 'analytics', label: 'Analytics' }
  ];

  const selectedProductTypes = watch("productType") || [];

  const toggleProductType = (option: { label: string; value: string }) => {
    if (selectedProductTypes.some((pt: { label: string; value: string }) => pt.value === option.value)) {
      setValue("productType", selectedProductTypes.filter((pt: { label: string; value: string }) => pt.value !== option.value));
    } else {
      setValue("productType", [...selectedProductTypes, option]);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsSubmitting(true);
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      product_type: Array.isArray(data.productType) ? data.productType.map(pt => pt.label).join(', ') : '',
      organization: data.organization,
      phone: data.phone,
      website: data.website,
      project: data.project
    };

    emailjs
      .send('HKW_contact_form', 'contact_form', templateParams, { publicKey: 'SU5SXRijMIg8MP5Kx', })
      .then(() => {
        setIsSent(true);
        setIsSubmitting(false);
        onFormSubmit();
        console.log('email sent');
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("error", error);
      });
  };

  const inputValues = watch();

  useEffect(() => {
    const inputContainers = document.querySelectorAll('.form-input-container');
    inputContainers.forEach(container => {
      const input = container.querySelector('input, textarea');
      const label = container.querySelector('label');
      if (input && label) {
        const addShrinkClass = () => label.classList.add('shrink');
        const removeShrinkClass = () => {
          if (!input.value && !input.matches(':focus')) {
            label.classList.remove('shrink');
          }
        };

        input.addEventListener('focus', addShrinkClass);
        input.addEventListener('blur', removeShrinkClass);

        if (input.value || input.matches(':focus')) {
          label.classList.add('shrink');
        } else {
          label.classList.remove('shrink');
        }

        return () => {
          input.removeEventListener('focus', addShrinkClass);
          input.removeEventListener('blur', removeShrinkClass);
        };
      }
    });
  }, [inputValues]);

  return (
    <>
      <Form isFormSubmitted={isFormSubmitted} onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>What can we help you with?</FormHeader>
        <MultiSelectContainer>
          {productTypeOptions.map((option) => (
            <MultiSelectButton
              key={option.value}
              selected={selectedProductTypes.some((pt: { label: string; value: string }) => pt.value === option.value)}
              onClick={() => toggleProductType(option)}
              type="button"
              className="action"
            >
              {option.label}
            </MultiSelectButton>
          ))}
        </MultiSelectContainer>
        {errors.productType && <ErrorMessage>This is required</ErrorMessage>}
        <FormInputContainer className="form-input-container">
          <label>What's your name?</label>
          <TextInput defaultValue="" error={!!errors.name} {...register("name", { required: true })} />
          {errors.name && <ErrorMessage className="error-message">This is required</ErrorMessage>}
        </FormInputContainer>
        <FormInputContainer className="form-input-container">
          <label>What organization do you work with?</label>
          <TextInput defaultValue="" error={!!errors.organization} {...register("organization")} />
        </FormInputContainer>
        <FormInputContainer className="form-input-container">
          <label>Email</label>
          <TextInput defaultValue=""
            error={!!errors.email}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format"
              }
            })}
            aria-invalid={errors.email ? "true" : "false"} />
          {errors.email && <ErrorMessage className="error-message">Entered value does not match email format</ErrorMessage>}
        </FormInputContainer>
        <FormInputContainer className="form-input-container">
          <label>Phone</label>
          <TextInput defaultValue="" error={!!errors.phone} {...register("phone")} />
        </FormInputContainer>
        <FormInputContainer className="form-input-container">
          <label>Do you have a website?</label>
          <TextInput defaultValue="" error={!!errors.website} {...register("website")} />
        </FormInputContainer>
        <FormInputContainer className="form-input-container">
          <label className="textarea">Tell us about your project</label>
          <TextArea defaultValue="" error={!!errors.project} {...register("project", { required: true })} />
          {errors.project && <ErrorMessage className="error-message">This is required</ErrorMessage>}
        </FormInputContainer>
        <SubmitButton className="action" type="submit" isSubmitting={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send your message'}</SubmitButton>
      </Form>
    </>
  );
};

export default ContactForm;
