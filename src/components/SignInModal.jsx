import { useState, useEffect } from "react";
import ModalForm from "./ModalForm";

export default function SignInModal({
  onClose,
  handleSignIn,
  activeModal,
  setActiveModal,
  isLoading,
}) {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const resetInputs = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn({ email, password });
  };

  const handleSignUpClick = () => {
    setActiveModal("signup");
  };

  useEffect(() => {
    if (activeModal) {
      resetInputs();
    }
  }, [activeModal]);

  return (
    <ModalForm
      activeModal={activeModal}
      buttonText={isLoading ? "Signing In..." : "Sign In"}
      title="Sign in"
      onClose={onClose}
      isOpen={activeModal === "signin"}
      onSubmit={handleSubmit}
      altButtonClick={handleSignUpClick}
      altButtonText="Sign Up"
    >
      <label htmlFor="loginEmail" className="modal__label mb-6">
        Email{" "}
        <input
          id="loginEmail"
          type="email"
          className="modal__input block w-full border-b-black border-solid border-b"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email || ""}
          required
        />
      </label>
      <label htmlFor="loginPassword" className="modal__label mb-6">
        Password{" "}
        <input
          id="loginPassword"
          type="password"
          className="modal__input block w-full border-b-black border-solid border-b"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password || ""}
          required
        />
      </label>
    </ModalForm>
  );
}
