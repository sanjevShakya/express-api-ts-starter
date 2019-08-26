import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpecs from "../utils/swagger";

export const handleAPIDocs = (router: Router) =>
    router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
