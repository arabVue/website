Vue.component("app-resources", {
    template: `
        <div class="container">
            <div class="row">
                <div class="col-sm-4" v-for="item in items">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title" style="margin: 0;">
                                {{ item.title }}
                            </h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">
                                {{ item.description }}
                            </p>
                            <a :href="item.link" class="btn btn-primary" target="_blank">
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
                    description: "مدونة باللغة الإنجليزية مخصصة لشروحات ڤيو مليانة شروحات ومواضيع ممكن تفيد المتعلمين",
                    isArabic: false
                },
                {
                    title: "دورة من laracasts",
                    link: "https://laracasts.com/series/learn-vue-2-step-by-step",
                    description: "دورة Learn Vue 2: Step By Step مقدمة من laracasts لتعلم ڨيو من الصفر",
                    isArabic: false
                }
            ]
        }
    }
});