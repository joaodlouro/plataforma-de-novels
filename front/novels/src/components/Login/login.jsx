import { useState, useEffect, useRef } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const googleButton = useRef(null);

  useEffect(() => {

    if (window.google && googleButton.current) {
      google.accounts.id.initialize({
        client_id: "",
        callback: handleGoogleResponse,
      });

      google.accounts.id.renderButton(googleButton.current, {
        theme: "outline",
        size: "large",
      });
    }
  }, []);

  const handleGoogleResponse = (response) => {
    console.log("Token do Google:", response.credential);
  
    alert("Login com Google realizado!");
  }; 

  const handleSubmit = async (event) => {
    event.preventDefault();
  
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>

        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu sua senha?</a>
        </div>

        <button type="submit">Login</button>

        <div ref={googleButton} className="google-login" style={{ marginTop: "20px" }}></div>

        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
