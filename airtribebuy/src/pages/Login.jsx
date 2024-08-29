import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const navigate = useNavigate();
    const submit = (e) => {
        e.preventDefault();
        const payload = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        const dummyPayload = {
            email: "airtribe@gmail.com",
            password: 'test'
        }
        if (payload.email === dummyPayload.email && payload.password === dummyPayload.password) {
            localStorage.setItem('airtribe-user-auth', 'authenticated');
            navigate('/products', {
               replace: true,
            });
        } else {
            alert("Invalid Credentials");
        }
    }
    return ( 
        <form onSubmit={submit}>
            <input type="email" name="email" id="" />
            <input type="password" name="password" id="" />
            <button type="submit">Login</button>
        </form>
     );
}
 
export default LoginPage;