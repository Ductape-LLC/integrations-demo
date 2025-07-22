import { flutterwave } from "./apps/flutterwave"
import { paystack } from "./apps/paystack"

(async () => {
    try {
        // Initialize Paystack integration
        await paystack();
        console.log("Paystack integration initialized successfully.");
        await flutterwave();
        console.log("Flutterwave integration initialized successfully.");
    } catch (error) {
        console.error("Error initializing payment integrations:", error);
    }
})