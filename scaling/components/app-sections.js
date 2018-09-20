Vue.component("app-sections", {
    template: `
        <div class="container">

            <div class="card round">
                <div class="card-body">
                    <a href="https://github.com/vuejs/awesome-vue" target="_blank" style="text-decoration: none">
                        <h5 class="card-title">
                            Awesome-Vue
                        </h5>
                    </a>
                    <p class="card-text">
                        صفحة 
                        Awesome-Vue
                        هي صفحة تضم الكثير الكثير من المصادر للتعلم والتطور والامثلة والكثير من الاشياء الاخرى.
                        <br/>
                        تعتبر افضل صفحة للمصادر لاطار عمل ڨيو
                    </p>
                </div>
            </div>

            <br v-for="i in 3"/>

            <h2 class="section-header">
                خيارات اضافية
            </h2>
            
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4" v-for="option in options">
                    <div class="card centered round" style="margin: 10px">
                        <div class="card-body">
                            <a :href="option.link" target="_blank" style="text-decoration: none">
                                <h5 class="card-title">
                                    {{ option.name }}
                                </h5>
                            </a>
                            <p class="card-text">
                                {{ option.desc }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <br v-for="i in 3"/>

            <h2 class="section-header">
                إطارت العمل (Framworks)
            </h2>
            
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4" v-for="framework in frameworks">
                    <a class="card centered round" :href="framework.link" target="_blank" style="margin: 10px; text-decoration: none">
                        <img class="card-img-top" :src="framework.img" style="width: 80px; align-self: center; margin-top: 20px">
                        <div class="card-body">
                            <h5 class="card-title">
                                {{ framework.name }}
                            </h5>
                            <p class="card-text">
                                {{ framework.desc }}
                            </p>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    `,
    data: function () {
        return {
            frameworks: [{
                    name: "Vuetify",
                    link: "https://vuetifyjs.com/",
                    desc: "",
                    img: "../../assets/images/frameworks/vuetify.ico"
                },
                {
                    name: "Element",
                    link: "https://element.eleme.io/",
                    desc: "",
                    img: "../../assets/images/frameworks/element.svg"
                },
                {
                    name: "Quasar",
                    link: "https://quasar-framework.org/",
                    desc: "",
                    img: "../../assets/images/frameworks/quasar.png"
                },
                {
                    name: "Buefy",
                    link: "https://buefy.github.io/",
                    desc: "",
                    img: "../../assets/images/frameworks/buefy.png"
                },
                {
                    name: "Bootstrap-Vue",
                    link: "https://bootstrap-vue.js.org/",
                    desc: "",
                    img: "../../assets/images/frameworks/bootstrap-vue.png"
                },
                {
                    name: "Vue Material",
                    link: "https://vuematerial.io/",
                    img: "../../assets/images/frameworks/vuematerial.png"
                }
            ],
            options: [{
                    name: "vue-router",
                    link: "https://router.vuejs.org/",
                    desc: ""
                },
                {
                    name: "vuex",
                    link: "https://vuex.vuejs.org/",
                    desc: ""
                },
                {
                    name: "vue-cli",
                    link: "https://cli.vuejs.org/",
                    desc: ""
                },
            ]
        }
    }
});