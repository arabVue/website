Vue.component("app-sections", {
    template: `
        <div class="container pt-5">

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
                        تعتبر افضل صفحة للمصادر لاطار عمل Vue
                    </p>
                </div>
            </div>

            <br v-for="i in 3"/>

            <h2 class="section-header">
                خيارات اضافية (رسمية)
            </h2>
            
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4" v-for="option in options">
                    <a class="card centered round" :href="option.link" target="_blank" style="margin: 10px; text-decoration: none">
                        <img class="card-img-top" :src="option.img" style="width: 80px; align-self: center; margin-top: 20px; height: 100px; object-fit: contain;">
                        <div class="card-body">
                            <h5 class="card-title">
                                {{ option.name }}
                            </h5>
                            <p class="card-text">
                                {{ option.desc }}
                            </p>
                        </div>
                    </a>
                </div>
            </div>

            <br v-for="i in 3"/>

            <h2 class="section-header">
                إطارات العمل (Framworks)
            </h2>
            
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4" v-for="framework in frameworks">
                    <a class="card centered round" :href="framework.link" target="_blank" style="margin: 10px; text-decoration: none">
                        <img class="card-img-top" :src="framework.img" style="width: 80px; align-self: center; margin-top: 20px; height: 100px; object-fit: contain;">
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

            <br v-for="i in 3"/>

            <h2 class="section-header">
                إطارات عمل خاصة بالجوال
            </h2>
            
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4" v-for="framework in mobileFrameworks">
                    <a class="card centered round" :href="framework.link" target="_blank" style="margin: 10px; text-decoration: none">
                        <img class="card-img-top" :src="framework.img" style="width: 80px; align-self: center; margin-top: 20px; height: 100px; object-fit: contain;">
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

            <br v-for="i in 3"/>

            <h2 class="section-header">
                مولدات المواقع الثابتة (Static Site Generator)
            </h2>
            
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4" v-for="framework in ssgFrameworks">
                    <a class="card centered round" :href="framework.link" target="_blank" style="margin: 10px; text-decoration: none">
                        <img class="card-img-top" :src="framework.img" style="width: 80px; align-self: center; margin-top: 20px; height: 100px; object-fit: contain;">
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

            <br v-for="i in 3"/>

            <h2 class="section-header">
                العرض من جانب الخادم (Server-Side Rendering)
            </h2>
            
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4" v-for="framework in ssrFrameworks">
                    <a class="card centered round" :href="framework.link" target="_blank" style="margin: 10px; text-decoration: none">
                        <img class="card-img-top" :src="framework.img" style="width: 80px; align-self: center; margin-top: 20px; height: 100px; object-fit: contain;">
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
            frameworks: [
                {
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
            mobileFrameworks: [
                {
                    name: "Vue Native",
                    link: "https://vue-native.io/",
                    desc: "",
                    img: "../../assets/images/frameworks/VueNative.png"
                },
                {
                    name: "Mint UI",
                    link: "https://mint-ui.github.io/#!/en",
                    desc: "",
                    img: "../../assets/images/frameworks/Mint.svg"
                },
                {
                    name: "Onsen UI",
                    link: "https://onsen.io/vue/",
                    desc: "",
                    img: "../../assets/images/frameworks/onsen.png"
                },
                {
                    name: "Framework7",
                    link: "https://framework7.io/vue/",
                    desc: "",
                    img: "../../assets/images/frameworks/Framework7.svg"
                },
            ],
            ssgFrameworks: [
                {
                    name: "Nuxt",
                    link: "https://nuxtjs.org/",
                    desc: "",
                    img: "../../assets/images/frameworks/nuxt.svg"
                },
                {
                    name: "Gridsome",
                    link: "https://gridsome.org/",
                    desc: "",
                    img: "../../assets/images/frameworks/gridsome.svg"
                },
                {
                    name: "VuePress",
                    link: "https://vuepress.vuejs.org/",
                    desc: "",
                    img: "../../assets/images/frameworks/VuePress.png"
                },
            ],
            ssrFrameworks: [
                {
                    name: "Nuxt",
                    link: "https://nuxtjs.org/",
                    desc: "",
                    img: "../../assets/images/frameworks/nuxt.svg"
                },
                {
                    name: "Ream",
                    link: "https://ream.dev/",
                    desc: "",
                    img: "../../assets/images/frameworks/ream.png"
                },
            ],
            options: [
                {
                    name: "vue-router",
                    link: "https://router.vuejs.org/",
                    desc: "",
                    img: "../../assets/images/vue-logo.png"
                },
                {
                    name: "vuex",
                    link: "https://vuex.vuejs.org/",
                    desc: "",
                    img: "../../assets/images/vue-logo.png"
                },
                {
                    name: "vue-cli",
                    link: "https://cli.vuejs.org/",
                    desc: "",
                    img: "../../assets/images/vue-logo.png"
                },
                {
                    name: "Vue Devtools",
                    link: "https://devtools.vuejs.org/",
                    desc: "",
                    img: "../../assets/images/frameworks/devtools.svg"
                },
                {
                    name: "VuePress",
                    link: "https://vuepress.vuejs.org/",
                    desc: "",
                    img: "../../assets/images/frameworks/VuePress.png"
                },
                {
                    name: "Vite",
                    link: "https://vitejs.dev/",
                    desc: "",
                    img: "../../assets/images/frameworks/vite.svg"
                },
            ]
        }
    }
});