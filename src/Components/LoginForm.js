import React,{useState} from 'react';
import { FormCard, Title, Description, Label, FormComponentDiv, Input, Button, GmailLoginButton, Link, LineContainer, Line } from '../Pages/AuthenticationPage';



const LoginForm = ({switchBetweenForms}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit = (e)=>{
        e?.preventDefault();

        console.log("Email:: ",email);
        console.log("Password:: ",password);
    }

  return (
    <FormCard>
        <form autoComplete='false' onSubmit={handleLoginSubmit}>
            <img src="#" alt="Application Logo"/>
            <Title>Login</Title>
            <Description>Welcome back! Login with your credentials</Description>
            <FormComponentDiv>
                <Label>Email</Label>
                <Input type='email' value={email} onChange={(e)=>setEmail(e?.target?.value)} required/>
            </FormComponentDiv>   
            <FormComponentDiv>
                <Label>Password</Label>
                <Input type='password' value={password} onChange={(e)=>setPassword(e?.target?.value)} required/>
            </FormComponentDiv>  
            <Link>Forgot Password?</Link>
            <Button type='submit'>Login</Button> 
        </form>
        <p>Don't have an account? <span style={{color:"#4DC879", cursor:"pointer"}} onClick={()=>switchBetweenForms(false)}>Signup</span></p>
        <LineContainer>
            <Line></Line>
        </LineContainer>
        <GmailLoginButton>
            <img src='../images/gmail_logo.png' alt='Gmail logo' width="24px" style={{marginLeft:"-5em", marginRight:"4em"}}/>
            <span>Login with Google</span>
        </GmailLoginButton>
    </FormCard>
  )
}

export default LoginForm