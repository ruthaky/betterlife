
import * as React from "react"
import { Html, Heading, Text } from "@react-email/components";
const EmailTemplate = ({
  name,
  email,
  phonenumber,
  message,
}: {
 name: string;
  email: string;
  phonenumber: string;
  message: string;
}) => {
  return (
    <Html lang="en">
      <Heading as="h1">New Form Submission</Heading>
      <Text>Here are the details:</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Phonenumber: {phonenumber}</Text>
      <Text>Message: {message}</Text>
    </Html>
  );
};
export default EmailTemplate;