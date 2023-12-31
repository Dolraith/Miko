const View = require(global.classPaths.view);
class v_index extends View{
    init(){
        this.addDependency('bootstrap');
        this.addDependency([{name:'vue',path:'/modules/Miko/_js/j_spirit_admin.js'}],'modules');
        this.addDependency('vue');
        this.setTemplate('modules/Miko/_templates/t_spirit_admin.html');
        
        this.setVueData("user", this.getDataProp("user"));
        this.setVueData("skillmap",this.getDataProp("skillmap"));
        this.setVueData("powermap",this.getDataProp("powermap"));
        this.setVueData("spirit_types",this.getDataProp("spirit_types"));
        this.setVueData("spirit_powers",this.getDataProp("spirit_powers"));
        this.setVueData("spirit_skills",this.getDataProp("spirit_skills"));
    }    
}
module.exports = v_index;