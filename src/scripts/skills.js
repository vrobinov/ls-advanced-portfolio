import Vue from "vue"

const skill = {
    tamplate:"#skill",
    props: ["SkillName", "SkillPercent"]
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