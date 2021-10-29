Vue.component("app-jumbotron", {
    template: `
        <div class="p-4 centered" style="background: #41b883; color: #35495e">
            <div class="container p-4">
                <h1 class="display-5">
                    {{ title }}
                </h1>
                <p class="lead" v-if="subtitle">
                    {{ subtitle }}
                </p>
            </div>
        </div>
    `,
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String
        }
    }
});