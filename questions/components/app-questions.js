Vue.component("app-questions", {
    template: `
        <div class="container pt-5">
            <div v-for="question,i in questions">
                <a :href="'#'+i">
                    {{ question.title }}؟
                </a>
            </div>

            <br />

            <div class="card round" v-for="question,i in questions" style="margin-bottom: 20px" :id="i">
                <div class="card-header">
                    {{ question.title }}
                </div>
                <div class="card-body">
                    <p class="card-text" v-html="question.answer"></p>
                </div>
            </div>
        </div>
    `,
    data: function () {
        return {
            questions: [{
                    title: "ماهو Vue",
                    answer: `
                    Vue هو إطار عمل للغة الجافاسكربت (JavaScript) موجه لبناء واجهات مستخدم متفاعلة.
                    أحد مميزات Vue أنه مبني بشكل بسيط وقوي بنفس الوقت يسهل فهمه والبدء بإستخدامه مباشرة.
                    طبعا يمكنك إستخدام الإطار مع أغلب مكتبات الجافاسكربت التي تعرفها (نعم يمكنك إستخدام jQuery "عند الحاجة") أو مشاريع بنيتها مسبقا ويمكنك ايضا بناء تطبيقات ذات الصفحة الواحدة المعروفة ب Single Page Applications SPA ( أيّ تطبيق بملف index.html واحد وتقوم الجافاسكربت بتغيير محتوى الصفحة دايناميكيا ).
                    <br/>
                    <a href="https://vuejs.org" target="_blank">
                        رابط موقع الإطار
                    </a>
                    <br/>
                    <a href="https://youtu.be/p1iLqZnZPdo" target="_blank">
                        مقدمة بسيطة عن الإطار
                    </a>
                    <br/>
                    <a href="https://jsfiddle.net/10dakzxj/" target="_blank">
                        مثال بسيط لكيفية إستخدام الإطار
                    </a>
                `
                },
                {

                    title: "ما المطلوب مني معرفته قبل تعلم Vue",
                    answer: `
                    بالطبع تحتاج الى تعلم بناء الصفحات بإستخدام HTML ,CSS, JavaScript قبل تعلم Vue.
                `
                },
                {

                    title: "هل يمكنني إستخدام Vue مع مشروع مبني مسبقا",
                    answer: `
                    نعم, وهذا ما يميز Vue, يمكنك إستخدامه بشكل بسيط مثلما تستخدم jQuery أو تستخدمه لبناء مواقع متكاملة وتطبيقات الجوال.
                `
                },
                {
                    title: "أين يمكنني تعلم Vue",
                    answer: `
                    هناك العديد من المصادر لتعلم Vue .. افضلهم برأيي الشخصي موقع الإطار لأن الشرح بسيط ويعتبر مرجع متميز.
                    <br/>
                    هناك ايضا دورات ممتازة مثل:
                    <br/>
                    <a href="https://www.youtube.com/playlist?list=PL1FWK-sgJ9eljz7Tm5SSUcCt5sxmwoFlC" target="_blank">
                        تعلم Vue 2 باللغة العربية (يوتيوب)
                    </a>
                    <br/>
                    <a href="http://vuecasts.com" target="_blank">
                        وهذه دورة باللغة الانجليزية 
                    </a>
                `
                },
                {
                    title: "ماهي الأمثلة على مشاريع بنيت بإستخدام Vue",
                    answer: `
                    بإمكانك الإطلاع على بعض المشاريع التي بنيت بإستخدام Vue على 
                    <a href="https://github.com/vuejs/awesome-vue#projects-using-vuejs" target="_blank">
                        صفحة الـ github
                    </a>
                `
                },
                {
                    title: "كيف يمكنني البدء في استخدام Vue",
                    answer: `
                    يمكن البدء في استخدام Vue باحدى الطريقتين: script-tag او CLI
                    <br/>
                    * طريقة script-tag تعتبر الاسهل والاسرع في بدء استخدام وتعلم Vue عن طريق وضع الـ script tag لمكتبة Vue في الصفحة مثل وضع المكتبات الاخرى كـ bootstrap او jQuery
                    <br/>
                    * طريقة cli تعتبر الافضل لمشاريع الشركات والمشاريع الكبيرة وتكون بتنصيب اداة في الجهاز داخل الـ cmd او الـ terminal وبعدها انشاء وتشغيل المشروع اثناء تطويره (سيتم التكلم عنها في يوم اخر)
                `
                },
                {
                    title: "ما الذي يحدث في هاذا المثال",
                    answer: `
                    <a href="https://jsfiddle.net/bw6z0oyq" target="_blank">
                        مثال باستخدام طريقة script-tag
                    </a>
                    <br/>
                    عند استخدام new Vue فان المكتبة تحتاج الى معرفة نقطة بداية البرنامج فاننا نحتاج الى تحديد نقطة البداية وذلك بتحديدها داخل الـ Object/JSON في new Vue وستكون هكذا
                    ` + this.showCode(`
                            new Vue({
                                el: "#app"
                            })
                    `) + `

                    وهاذا يعني ان نقطة بداية البرنامج هو الـ tag ذو الـ id الذي يساوي app الموجود في الـ HTML وهكذا يكون قد تم الربط بين Vue والصفحة ولكي نستخدم المكتبة فاننا بحاجة الى متغيرات داخل المكتبة ويكون ذلك باستخدام data داخل الـ Object/JSON الخاص بـ Vue وهو بذاته Object/JSON ايضاً

                    ` + this.showCode(`
                            new Vue({
                                el: "#app",
                                data: {
                                    message: "مرحبا بالعالم",
                                    a: 5,
                                    b: 3
                                }
                            });
                    `) + `

                    بعد هاذا يمكن استخدم المتغيرات المعرفة في الصفحة (داخل #app) باستخدام 
                    ` + this.showCode(`{{ varName }}`) + `
                    وطريقة البناء هذه تسمى بالـ mustache syntax ( الشارب/الشنب ) ويمكن ان تحتوي على متغيرات و/او عمليات بسيطة اخرى (وبعض الاشياء الاخرى سنتطرق اليها في يوم اخر)
                `
                },
                {
                    title: "ما الفرق بين vue.js و vue.min.js وايهما استخدم اثناء بناء الصفحة",
                    answer: `
                    الفرق بينهما هو ان vue.min.js هي النسخة المصغرة من vue.js وان vue.min.js لا تحتوي على بعض الارشادات عند وقوع الاخطاء (errors) اما vue.js فتحتوي رسائل لتلك الاخطاء
                    <br/>
                    وهناك فرق جوهري بينهما وهو ان vue.js قد لا تعمل عند وجود خطا ويتم عرض سبب الخطا في الـ console اما vue.min.js فيتجاهل بعض الاخطاء ويستمر في العمل
                    <br/>
                    ولذلك يفضل استخدام vue.js اثناء البناء ومن ثم التحويل الى vue.min.js عند رفع الموقع لصغر حجمه مما يجعل الصفحة تعمل بشكل اسرع
                `
                },
                {
                    title: "ما هي العناصر (components)",
                    answer: `
                        العناصر في Vue هي قطع من الكود قابلة لاعادة الاستخدام في صفحات Vue. وكل عنصر يحوي على المتغيرات الخاصة به.
                        <br/>
                        مثال على العناصر:
                        <br/>
                        ` + this.showCode(`
                                Vue.component('button-counter', {
                                    template: \`
                                        <button @click="count++">
                                            لقد ضغطتني {{ count }} مرات
                                        </button>
                                    \`,
                                    data: function() {
                                        return {
                                            count: 0
                                        }
                                    }
                                })
                        `) + `
                        ومن ثم استخدامه في الـ HTML بوضع
                        ` + this.showCode(`<button-counter></button-counter>`, "html") + `
                        <a href="https://jsfiddle.net/87c2o19n/" target="_blank">يمكن عرض المثال من هنا</a>
                        <br/>
                        ونرى ان طريقة كتابة المتغيرات تختلف عن كتابتها في new Vue
                        ` + this.showCode(`
                                data: function() {
                                    return {
                                        count: 0
                                    }
                                }
                        `) + `
                        بدلا عن هذه الطريقة
                        ` + this.showCode(`
                                data: {
                                    count: 0
                                }
                        `) + `
                        لان العناصر تحتوي على متغيرات خاصة بها واذا لم تكن هكذا فستكون جميع الـ instances للعنصر الواحد تحتوي نفس القيمة
                        <br/>
                        وبسبب ذلك هذه الطريق لا تعمل في العناصر لكي لا يحدث ذلك
                    `
                },
                {
                    title: "التحقق في Vue",
                    answer: `
                        ماذا إذا ما أردنا عرض عنصر معين عندما يتحقق شرط محدد.
                        <br/>
                        مثلا نعرض زر تسجيل دخول عند دخول زائر للصفحة أو نعرض زر تسجيل خروج عند دخول مستخدم للصفحة
                        <br/>
                        بإمكاننا التحقق من الشروط بسهولة بإستخدام v-if و v-else
                        <br/>
                        <a href="https://jsfiddle.net/gheLw82u/4/" target="_blank">كما في المثال التالي</a>
                        <br/>
                        نقوم بالتحقق ما إذا كان قام بتسجيل الدخول فنعرض له زر تسجيل الخروج .. بإستخدام v-if="loggedIn"
                        <br/>
                        لكن إذا لم يكن قام بتسجيل الدخول نقوم بعرض زر تسجيل الدخول بإستخدام  v-else
                        ثم نقوم بعرض رسالة ترحيبية على حسب إذا كان مستخدم أم زائر
                    `
                }
            ]
        }
    },
    methods: {
        showCode(code, type) {
            // split the code into lines
            var lines = code.split("\n");

            // remove first and last lines
            if (lines[lines.length - 1].trim() == "")
                lines.pop();
            if (lines[0].trim() == "")
                lines.shift();

            // remove spaces in front of each line
            var firstLine = lines[0];
            var initialPadding = firstLine.length - firstLine.trim().length;
            lines = lines.map(l => l.substring(initialPadding))
            code = lines.join("\n");

            // make the tags not render
            code = code.split("<").join("<<span></span>");

            // wrap with tags
            if (type == "html")
                code = "<pre><code class='language-html'>" + code + "</code></pre>";
            else
                code = "<pre><code class='language-js'>" + code + "</code></pre>";

            return code;
        }
    }
});