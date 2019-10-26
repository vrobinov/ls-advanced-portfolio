import VueScrollTo from "vue-scrollto";

export default {
    template: "#menu-template",
    data(){
        return {
            menu: [
                {href:'#home', text: 'Главная'},
                {href:'#about', text: 'Обо мне'},
                {href:'#skills', text: 'Навыки'},
                {href:'#works', text: 'Работы'},
                {href:'#reviews', text: 'Отзывы'},
                {href:'#feedback', text: 'Связаться'},
            ]
        }
    }

}