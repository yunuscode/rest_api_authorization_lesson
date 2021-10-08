export default class HomeRouteController {
	static async HomeRouteGetController(request, response, next) {
		try {
			response.status(200).json({
				ok: true,
				message: "OK",
			});
		} catch (error) {
			next(error);
		}
	}
}
