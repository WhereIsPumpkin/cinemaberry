import SwaggerUI from "swagger-ui-express";
import YAML from "yamljs";

const options = {
  customCss: ".swagger-ui .topbar { display: none }",
  customSiteTitle: "Inventory Management",
};

const swaggerDocument = YAML.load("./src/config/swagger.yaml");
export default [SwaggerUI.serve, SwaggerUI.setup(swaggerDocument, options)];
