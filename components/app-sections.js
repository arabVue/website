Vue.component("app-sections", {
    template: `
        <div class="row justify-content-md-center pt-3">
            <div class="col-12 col-sm-6 col-lg-4 pb-2" v-for="section in sections">
                <div class="card centered round" style="margin: 10px;">
                    <div class="card-body">
                        <h4 class="card-title">
                            {{ section.title }}
                        </h4>
                        <p class="card-text">
                            {{ section.description }}
                        </p>
                        <a :href="section.link" class="btn round-button" :target="section.target">
                            الذهاب للصفحة <i :class="section.icon" :title="section.title"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `,
    data: function () {
        return {
            sections: [
                {
                    title: "قسم الاسئلة والاجوبة",
                    description: "بعض الاسئلة المجاب عليها",
                    link: "/questions/",
                    icon: "fas fa-question-circle"
                },
                {
                    title: "قسم مصادر التعلم",
                    description: "بعض مصادر التعلم لـVue",
                    link: "/resources/",
                    icon: "fas fa-graduation-cap"
                },
                {
                    title: "قسم التوسع في Vue",
                    description: "بعض مصادر التوسع في Vue",
                    link: "/scaling/",
                    icon: "fas fa-sort-amount-up"
                },
                {
                    title: "الموقع على القتهب",
                    description: "يمكنك معاينة الكود المصدري والمساهمة فيه",
                    link: "https://github.com/ibrahimBeladi/arabVue",
                    target: "_blank",
                    icon: "fab fa-github",
                },
                {
                    title: "المجموعة على تيليقرام",
                    description: "يمكنك الدخول الى المجموعة لاخذ واعطاء العلم",
                    link: "https://t.me/vuejsarab",
                    target: "_blank",
                    icon: "fab fa-telegram",
                }
            ]
        }
    }
});