Vue.component("app-sections", {
    template: `
        <div class="row justify-content-md-center">
            <div class="col-12 col-sm-6 col-lg-4" v-for="section in sections">
                <div class="card centered round" style="margin: 10px;">
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ section.title }}
                        </h5>
                        <p class="card-text">
                            {{ section.description }}
                        </p>
                        <a :href="section.link" class="btn round-button">
                            الذهاب للصفحة <i :class="section.icon" :title="section.title"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `,
    data: function () {
        return {
            sections: [{
                    title: "قسم الاسئلة والاجوبة",
                    description: "بعض الاسئلة المجاب عليها",
                    link: "/questions/",
                    icon: "fas fa-question-circle"
                },
                {
                    title: "قسم مصادر التعلم",
                    description: "بعض مصادر التعلم لڨيو",
                    link: "/resources/",
                    icon: "fas fa-graduation-cap"
                },
                {
                    title: "قسم التوسع في ڨيو",
                    description: "بعض مصادر التوسع في ڨيو",
                    link: "/scaling/",
                    icon: "fas fa-sort-amount-up"
                }
            ]
        }
    }
});