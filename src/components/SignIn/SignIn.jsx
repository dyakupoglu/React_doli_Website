import React, { useState } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  Text,
} from "./SignInStyle";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div>
      <Container>
        <FormWrap>
          <Icon to="/">doli</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                type="email"
                required
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                type="password"
                required
              />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </div>
  );
};

export default SignIn;
