Vue.component("app-sections", {
    template: `
        <div class="row justify-content-md-center">
            <div class="col-sm-4" v-for="section in sections">
                <div class="card centered">
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ section.title }}
                        </h5>
                        <p class="card-text">
                            {{ section.description }}
                        </p>
                        <a :href="section.link" class="btn btn-primary">
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
                }
            ]
        }
    }
});