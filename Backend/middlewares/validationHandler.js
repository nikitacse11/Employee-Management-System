import { validationResult } from "express-validator";

const validationHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map((error) => {
      return {
        type: "field",
        value: req.body?.[error.param] ?? null,
        msg: error.msg,
        path: error.param,
        // location: 'body',
        location: error.location || "body",
      };
    });
    const allErrors = formattedErrors.map(
      (formattedError) => formattedError.msg,
    );

    return res.status(400).json({
      data: null,
      success: false,
      errMessage: formattedErrors[0].msg,
      responseCode: 400,
      additionalErr: allErrors.join(", "),
    });
  }

  next();
};

export { validationHandler };
