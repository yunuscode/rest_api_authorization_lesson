import http from "http";

export class ErrorHandler extends Error {
	constructor(code, message) {
		super();
		this.code = code;
		this.message = message;
	}
}

export function handleError(error, response) {
	const { code, message } = error;

	response.status(code || 400).json({
		ok: false,
		message,
	});
}
