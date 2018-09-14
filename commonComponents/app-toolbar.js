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
                    <li class="nav-item" v-for="item in rightItems" :class="{'active' : isActive(item.path) }">
                        <a class="nav-link" :href="item.path">
                            <i v-if="item.icon" :class="item.icon"></i>
                            {{ item.title }}
                        </a>
                    </li>
                </ul>
                
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" v-for="item in leftItems" :class="{'active' : isActive(item.path) }">
                        <a class="nav-link" :href="item.path" :target="item.target">
                            <i v-if="item.icon" :class="item.icon" style="font-size:24px;" :title="item.title"></i>
                            <span v-else>{{ item.title }}</span>
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
                    title: "المجموعة على تيليقرام",
                    path: "https://t.me/vuejsarab",
                    left: true,
                    icon: "fab fa-telegram",
                    target: "_blank"
                },
                {
                    title: "...",
                    path: "/"
                }
            ]
        }
    },
    computed: {
        rightItems() {
            return this.items.filter(item => !item.left);
        },
        leftItems() {
            return this.items.filter(item => item.left);
        }
    },
    methods: {
        isActive: function (path) {
            return window.location.pathname == path;
        }
    }
});