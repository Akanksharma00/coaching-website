import React,{useState} from 'react';
import { FormCard, Title, Description, FormComponentDiv, Input, Label, Button, SignupButton } from '../Pages/AuthenticationPage';

const SignupForm = ({switchBetweenForms}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUpSubmit = (e)=>{
        e?.preventDefault();

        console.log("Email:: ",email);
        console.log("password:: ",password);
        console.log("confirmPassword:: ",confirmPassword);
    }

  return (
    <FormCard>
        <form onSubmit={handleSignUpSubmit}>
            <img src="#" alt="Application Logo"/>
            <Title>Signup</Title>
            <Description>Create an account, its free</Description>
            <FormComponentDiv>
                <Label>Email</Label>
                <Input type='email' value={email} onChange={(e)=>setEmail(e?.target?.value)} required/>
            </FormComponentDiv>
            <FormComponentDiv>
                <Label>Password</Label>
                <Input type='password' value={password} onChange={(e)=>setPassword(e?.target?.value)} required/>
            </FormComponentDiv>
            <FormComponentDiv>
                <Label>Confirm Password</Label>
                <Input type='password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e?.target?.value)} required/>
            </FormComponentDiv>
            <SignupButton type='submit'>Signup</SignupButton>
        </form>
        <p>Already have an account? <span style={{color:"#4DC879", cursor:"pointer"}} onClick={()=>switchBetweenForms(true)}>Login</span></p>
    </FormCard>
  )
}

export default SignupForm