import { flutterwave } from "./apps/flutterwave"
import { paystack } from "./apps/paystack"

const createIntegrations = async () => {
    console.log("Add flutterwave");
    await flutterwave()

    console.log("Add Paystack")
    await paystack()
}

createIntegrations();