import ductape from "../ductape";

export const flutterwave = async () => {

    await ductape.product.init(process.env.PRODUCT_TAG);
    const connect = await ductape.product.apps.connect("ductape:flutterwave");

    await ductape.product.apps.add({
        access_tag: connect.access_tag,
        envs: [{
            app_env_slug: "prd",
            product_env_slug: "prd",
            auth: {
                auth_tag: "bearer_token",
                data: {
                    "params": {},
                    "body": {},
                    "query": {},
                    "headers": {
                        "Authorization": `Bearer ${process.env.FLUTTERWAVE_PRIVATE_KEY_PRD}`,
                    }
                }
            }
        }, {
            app_env_slug: "snd",
            product_env_slug: "snd",
            auth: {
                auth_tag: "bearer_token",
                data: {
                    "params": {},
                    "body": {},
                    "query": {},
                    "headers": {
                        "Authorization": `Bearer ${process.env.FLUTTERWAVE_PRIVATE_KEY_SND}`,
                    }
                }
            }
        }]
    })

}