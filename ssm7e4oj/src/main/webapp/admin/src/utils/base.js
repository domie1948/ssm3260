const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm7e4oj/",
            name: "ssm7e4oj",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm7e4oj/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "二手车交易网站"
        } 
    }
}
export default base
