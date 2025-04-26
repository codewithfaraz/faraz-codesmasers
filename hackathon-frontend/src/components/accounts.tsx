import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
export default function Accounts() {
  const { isSignedIn } = useClerk();
  const navigate = useNavigate();
  if (!isSignedIn) {
    navigate("/");
  }
  return <h1>this is accounts</h1>;
}
