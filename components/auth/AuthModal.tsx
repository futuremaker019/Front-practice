import React from "react"
import SignUpModal from "./SignUpModal"
import { useSelector, RootState } from "../../store"
import LoginModal from './LoginModal';

interface IProps {
  closeModal: () => void;
}

const AuthModal: React.FC<IProps> = ({closeModal}) => {
  console.log("AuthModal active??? >>>>>>>>>>>>> ");
  

  const authMode = useSelector((state:RootState) => state.auth.authMode);

  return(
    <div>
      {authMode === "signup" && <SignUpModal closeModal={closeModal} />}
      {authMode === "login" && <LoginModal closeModal={closeModal} />}
    </div>
  )
}

export default AuthModal;