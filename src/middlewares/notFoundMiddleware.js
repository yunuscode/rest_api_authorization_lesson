export default function NotFoundMiddleware(request, response, next) {
	response.status(404).json({
		ok: false,
		message: "Not found",
	});
}
