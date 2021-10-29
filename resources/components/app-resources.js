Vue.component("app-resources", {
    template: `
        <div class="container">
            <h2 class="section-header">
                المصادر العربية
            </h2>
            <br/>
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4" v-for="item in arabicResources">
                    <div class="card round" style="margin: 10px">
                        <div class="card-header">
                            <h5 class="card-title" style="margin: 0;">
                                {{ item.title }}
                            </h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">
                                {{ item.description }}
                            </p>
                            <a :href="item.link" class="btn round-button" target="_blank">
                                فتح المصدر
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <h2 class="section-header">
                المصادر الانغليزية
            </h2>
            <br/>
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4" v-for="item in englishResources">
                    <div class="card round" style="margin: 10px">
                        <div class="card-header">
                            <h5 class="card-title" style="margin: 0;">
                                {{ item.title }}
                            </h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">
                                {{ item.description }}
                            </p>
                            <a :href="item.link" class="btn round-button" target="_blank">
                                فتح المصدر
                            </a>
                        </div>
                    </div>
                </div>
            </div>                
        </div>
    `,
    data: function () {
        return {
            items: [{
                    title: "مدونة vuejsdevelopers",
                    link: "https://vuejsdevelopers.com/",
                    description: "مدونة باللغة الإنجليزية مخصصة لشروحات Vue مليانة شروحات ومواضيع ممكن تفيد المتعلمين"
                },
                {
                    title: "دورة من laracasts",
                    link: "https://laracasts.com/series/learn-vue-2-step-by-step",
                    description: "دورة Learn Vue 2: Step By Step مقدمة من laracasts لتعلم Vue من الصفر"
                },
                {
                    title: "سلسلة تعلم برمجة Vuejs",
                    link: "https://www.youtube.com/watch?v=ZH50a_ZbxFA&list=PLXgJ7cArk9uSB0kiR1ALOOOpiwJbd93b8",
                    description: "سلسلة فيديو في اليتيوب لتعلم Vue",
                    isArabic: true
                }
            ]
        }
    },
    computed: {
        arabicResources: function () {
            return this.items.filter(item => item.isArabic);
        },
        englishResources: function () {
            return this.items.filter(item => !item.isArabic);
        },
    }
});