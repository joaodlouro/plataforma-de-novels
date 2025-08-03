import { useState, useEffect, useRef } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import "./login.css";
import { useNavigate } from "react-router";
import FloatingImg from "../../components/FloatingImgC/FloatingImg";




const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const googleButton = useRef(null);
  const navigate = useNavigate();

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

    if (!username || !password) {
      alert("Preencha todos os campos.");
      return;
    }

    if (username === "admin" && password === "1234") {
      alert("Login bem-sucedido!");
      navigate("/perfil");
      
    } else {
      alert("Credenciais inválidas.");
    }
  };

  const handleAnonymousLogin = () => {
    navigate("/perfil");
  }

  return (
     <div className="login-page">
      <FloatingImg />
      
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

        <div className="recall-forget ">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu sua senha?</a>
        </div>

        <button type="submit">Login</button>
        <button type="button" onClick={handleAnonymousLogin} className="anonymous-login">
        Entrar sem conta
        </button>

        <div ref={googleButton} className="google-login"></div>

        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
    </div>  );
};

export default LoginPage;
