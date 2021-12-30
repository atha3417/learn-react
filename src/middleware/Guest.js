import { Navigate, useLocation } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { authenticated } from "../store/authenticated"

function Guest({ render }) {
	const auth = useRecoilValue(authenticated)
	let location = useLocation();

	if (auth.check) {
		return <Navigate to="/dashboard" state={{ from: location }} replace />;
	}

	return render
}

export default Guest
