/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { useForm, SubmitHandler } from "react-hook-form"
// https://react-hook-form.com/get-started
import Container from '../styled_components/Container';
import Form from '../styled_components/Form';
import FormInputContainer from '../styled_components/FormInputContainer';
import Label from '../styled_components/Label';
import TextInput from '../styled_components/TextInput';
import Button from '../styled_components/Button';
import RadioButton from '../styled_components/RadioButton';

const FormHeader = styled(Label)`
  color: #9E9E9E;
  font-size: 1.25rem;
  font-weight: 450;
`
const RadioContainer = styled(Container)`
    display: flex;
    gap: 1rem 0;
    flex-wrap: wrap;
    background-color: transparent;
`

const SubmitButton = styled(Button)`
    background-color: transparent;
    background: linear-gradient(transparent 50%, #FDF4E2 50%);
    background-repeat: repeat;
    background-size: 100% 200%;
    transition: all 0.3s linear;
    color: #FDF4E2;
    border: 1px solid #FDF4E2;
    padding: 1.5rem;
    border-radius: 3rem;
    &:hover {
        color: #1F1F1F;
        background-position: 0 100%;
    }
`
type Inputs = {
    productType: string
    name: string
    organization: string
    email: string
    phone: string
    website: string
    project: string
}

const ContactForm: React.FC = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const productTypeRadios = [
        'Strategy', 'Branding', 'Writing', 'Design', 'Web', 'Apps', 
        'Products', 'Print', 'Campaigns', 'Marketing', 'SEO', 'Analytics'
    ];

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormHeader>Project Type</FormHeader>
                {/* TODO: format radio buttons right  */}
                <RadioContainer>
                    {productTypeRadios.map((type) => (
                        <RadioButton key={type}>
                            <input
                                type="radio"
                                value={type.toLowerCase()}
                                {...register("productType")}
                            />
                            <label>{type}</label>
                        </RadioButton>
                    ))}
                </RadioContainer>
                <FormInputContainer>
                    <FormHeader>What's your name?</FormHeader>
                    <TextInput {...register("name", { required: true })} />
                    {errors.name && <span>*Required</span>}
                </FormInputContainer>
                <FormInputContainer>
                    <FormHeader>What organization do you work with?</FormHeader>
                    <TextInput defaultValue="" {...register("organization")} />
                </FormInputContainer>
                <FormInputContainer>
                    <FormHeader>Email</FormHeader>
                    <TextInput defaultValue="" {...register("email")} />
                </FormInputContainer>
                <FormInputContainer>
                    <FormHeader>Phone</FormHeader>
                    <TextInput defaultValue="" {...register("phone")} />
                </FormInputContainer>
                <FormInputContainer>
                    <FormHeader>Do you have a website?</FormHeader>
                    <TextInput defaultValue="" {...register("website")} />
                </FormInputContainer>
                <FormInputContainer>
                    <FormHeader>Tell us about your project</FormHeader>
                    <TextInput defaultValue="" {...register("project")} />
                </FormInputContainer>
                <SubmitButton type="submit">Send your message</SubmitButton>
            </Form>
        </>
    )
}

export default ContactForm;