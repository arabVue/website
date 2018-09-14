Vue.component("app-toolbar", {
    template: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">
                <img src="/assets/images/vue-logo.png" style="height: 35px; width: 35px;" />
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="item in items" :class="{'active' : isActive(item.path) }">
                        <a class="nav-link" :href="item.path">
                            {{ item.title }}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    `,
    data: function () {
        return {
            items: [{
                    title: "الرئيسية",
                    path: "/"
                },
                {
                    title: "اسئلة واجوبة",
                    path: "/questions/"
                },
                {
                    title: "...",
                    path: "/"
                },
                {
                    title: "...",
                    path: "/"
                }
            ]
        }
    },
    methods: {
        isActive: function (path) {
            return window.location.pathname == path;
        }
    }
});