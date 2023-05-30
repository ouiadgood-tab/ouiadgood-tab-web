import { posthog } from "posthog-js";

export default{
    install(app){
        app.config.globalProperties.$posthog = posthog.init(
            'phc_7hQlsfGGLmAR8vLDFXkQi1HKn4dWa3YUJMkuyUF0fIq', 
            { 
                api_host: 'https://app.posthog.com'
             })
    }
}