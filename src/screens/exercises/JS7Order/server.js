const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3001;

// Configuración de CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Si tu frontend está en localhost:3000
    methods: ["GET", "POST"], // Permite solo los métodos que vas a utilizar
    allowedHeaders: ["Content-Type", "Authorization"], // Asegura que los headers estén permitidos
  })
);

app.use(express.json());

app.post("/js7/login", async (req, res) => {
  try {
    const response = await axios.post(
      "http://ip:PORT/joc/api/authentication/login",
      {}, // No enviamos cuerpo
      {
        auth: {
          username: "NAME_USER",
          password: "PASSWORD_USER",
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    res.status(500).send(error.message);
  }
});

// Endpoint para crear una orden en JS7
app.post("/js7/order", async (req, res) => {
  const { token, transactionId } = req.body;
  const ORDER_ENDPOINT = "http://IP:PORT/joc/api/orders/add";
  const CONTROLLER_ID = "controller";
  const JOB_CHAIN = "/Fujo_MasterCard/Utilities/Validar_ListaNegra_X_ID";

  if (!token || !transactionId) {
    return res.status(400).send("Faltan parámetros: token y/o transactionId.");
  }

  const orderId = "ValidateBlackList";
  const payload = {
    controllerId: CONTROLLER_ID,
    orders: [
      {
        orderName: orderId,
        workflowPath: JOB_CHAIN,
        arguments: {
          transaction_id: transactionId,
        },
      },
    ],
  };

  try {
    const orderResponse = await axios.post(ORDER_ENDPOINT, payload, {
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": token,
      },
    });

    res.json(orderResponse.data);
  } catch (error) {
    console.error(
      "Error al crear la orden:",
      error.response ? error.response.data : error.message
    );
    res.status(500).send(error.response ? error.response.data : error.message);
  }
});

app.listen(port, () => {
  console.log(`Backend proxy listening at http://localhost:${port}`);
});
