export default class UserRouteController {
	static async UserHomeGetController(request, response, next) {
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
