import Vue from "vue";

const thumbs = {
    template: "#slider-thumbs",
    props: ["works"]
}

const btns = {
    template: "#slider-btns"
}

const display = {
    template: "#slider-display",
    components: { thumbs, btns },
    props: ["works"] 
}

const tags = {
    template: "#slider-tags"
}

const info = {
    template: "#slider-info",
    components: { tags }
}


new Vue({
    el: "#slider-component",
    template: "#slider-container",
    components: { display, info },
    data: () => ({
        works: []
    }),
    methods: {
        makeArrWithRequiredImages(data) {
            return data.map(item =>{
                const requiredPic = require(`../images/content/${item.photo}`);
                item.photo = requiredPic;
                return item;
            })
        }
    },
    created(){
        const data = require("../data/works.json");
        this.works = this.makeArrWithRequiredImages(data);
    }
})