import { ErrorHandler, handleError } from "../helpers/errorHandler.js";

export function addErrorHandler(request, response, next) {
	response.error = ErrorHandler;
	next();
}

export function handleErrorCheck(error, request, response, next) {
	handleError(error, response);
}
