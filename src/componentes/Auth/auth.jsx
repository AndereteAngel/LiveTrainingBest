import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(""); // Agregar estado para el número de celular
  const [user, setUser] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  const registerWithEmailAndPassword = async () => {
    try {
      // Validar que se haya ingresado un número de celular
      if (!phone) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Por favor, ingrese su número de celular.",
        });
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Usuario registrado:", user);
      setRegistrationSuccess(true);
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: `Usuario: ${user?.email}`,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  };

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Usuario autenticado:", user);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  };

  return (
    <div>
      <h2>Registro e Inicio de Sesión</h2>
      <input
        type="text"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="tel" // Usa el tipo "tel" para el número de celular
        placeholder="Número de celular"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={registerWithEmailAndPassword}>Registrarse</button>
      {registrationSuccess && <p>¡Registro exitoso! Usuario: {user?.email}</p>}
      <Link to="/items" className="btn-ingresar">
        <button onClick={signIn}>Ingresar</button>
      </Link>
    </div>
  );
}

export default Auth;
