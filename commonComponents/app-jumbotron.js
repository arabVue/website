Vue.component("app-jumbotron", {
    template: `
        <div class="jumbotron jumbotron-fluid centered" style="background: #41b883; color: #35495e">
            <div class="container">
                <h1 class="display-4">
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