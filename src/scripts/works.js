import Vue from "vue";

const thumbs = {
    template: "#slider-thumbs"
}

const btns = {
    template: "#slider-btns"
}

const display = {
    template: "#slider-display",
    components: { thumbs, btns } 
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
    components: { display, info }
})