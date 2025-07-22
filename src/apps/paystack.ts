import ductape from "../ductape";

export const paystack = async () => {

    await ductape.product.init(process.env.PRODUCT_TAG);
    const connect = await ductape.product.apps.connect("ductape:paystack");

    await ductape.product.apps.add({
        access_tag: connect.access_tag,
        envs: [{
            app_env_slug: "prd",
            product_env_slug: "prd",
            auth: {
                auth_tag: "token_access",
                data: {
                    "params": {},
                    "body": {},
                    "query": {},
                    "headers": {
                        "Authorization": `Bearer ${process.env.PAYSTACK_PRIVATE_KEY_PRD}`,
                    }
                }
            }
        },{
            app_env_slug: "snd",
            product_env_slug: "snd",
            auth: {
                auth_tag: "token_access",
                data: {
                    "params": {},
                    "body": {},
                    "query": {},
                    "headers": {
                        "Authorization": `Bearer ${process.env.PAYSTACK_PRIVATE_KEY_SND}`,
                    }
                }
            }
        }]
    })

}