import Vue from "vue";

const skill = {
    template: "#skill",
    props: ["skillName", "skillPercent"],
    mounted() {
        const circle = this.$refs["color-circle"];
        const dashArray = parseInt(
            getComputedStyle(circle).getPropertyValue('stroke-dasharray'));
        const percent =(dashArray / 100) * (100 - this.skillPercent);

        circle.style.strokeDashoffset = percent;
    }
};

const skillsRow = {
    template:"#skills-row",
    components: { skill },
    props: ["skill"]
};

new Vue({
    el: "#skills-component",
    template: "#skills-list",
    data: () => ({
        skills: []
    }),
    components: { skillsRow },
    created() {
        this.skills = require("../data/skills.json");
    }
}); 