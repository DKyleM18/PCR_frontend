import { useState, useEffect } from "react";
import ModalForm from "./ModalForm";

export default function SignUpModal({
  onClose,
  handleSignUp,
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

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const resetInputs = () => {
    setEmail("");
    setPassword("");
    setName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp({ email, password, name });
  };

  const handleSignInClick = () => {
    setActiveModal("login");
  };

  useEffect(() => {
    if (activeModal) {
      resetInputs();
    }
  }, [activeModal]);

  return (
    <ModalForm
      activeModal={activeModal}
      buttonText={isLoading ? "Signing up..." : "Next"}
      title="Sign Up"
      altButtonText="Log In"
      onClose={onClose}
      isOpen={activeModal === "register"}
      onSubmit={handleSubmit}
      altButtonClick={handleSignInClick}
    >
      <label htmlFor="registerEmail" className="modal__label">
        Email{" "}
        <input
          id="registerEmail"
          type="email"
          className="modal__input"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email || ""}
          required
        />
      </label>
      <label htmlFor="registerPassword" className="modal__label">
        Password{" "}
        <input
          id="registerPassword"
          type="password"
          className="modal__input"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password || ""}
          required
        />
      </label>
      <label htmlFor="registerName" className="modal__label">
        Name{" "}
        <input
          id="registerName"
          type="text"
          className="modal__input"
          placeholder="Name"
          onChange={handleNameChange}
          value={name || ""}
          required
        />
      </label>
      <label htmlFor="registerAvatar" className="modal__label">
        Avatar URL{" "}
        <input
          id="registerAvatar"
          type="url"
          className="modal__input"
          placeholder="Avatar URL"
          onChange={handleAvatarUrlChange}
          value={avatar || ""}
        />
      </label>
    </ModalForm>
  );
}
