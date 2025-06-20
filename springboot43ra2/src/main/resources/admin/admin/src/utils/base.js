const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot43ra2/",
            name: "springboot43ra2",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot43ra2/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Vue.js高校学生选课系统"
        } 
    }
}
export default base
