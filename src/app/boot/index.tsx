import stores from "./../redux/Store";
import app from "./setup.store";

export default function () {
	return app(stores);
}
