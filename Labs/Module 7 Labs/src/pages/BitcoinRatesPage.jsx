import { useNavigate } from "react-router-dom";
import BitcoinRates from "../components/BitcoinRates";
import { useUserContext } from "../context/UserContext";


export default function BitcoinRatesPage() {
  const navigate = useNavigate();
  const {currentUser, handleUpdateUser} = useUserContext()

  return (
    <div>
      <h1>Bitcoin Rates</h1>
      {currentUser.email ? <h2>Welcome, {currentUser.email}</h2> : null}
      <BitcoinRates />
    </div>
  );
}


