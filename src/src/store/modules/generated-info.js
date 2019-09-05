
const state = {
    genForm: {
        genId: 0,
        areaType: '',
        width: 0,
        height: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        textAlign: '',
        background: '',
    },
    genForms: [],
}

const getters = {
    genForms: state => {
        // if (window.localStorage.genForms) {
        //     state.genForms =  window.localStorage.getItem("genForms")
        // }
        return state.genForms
    }

    // company_name: state => {
    //     if (window.localStorage.company_name) {
    //         state.company_name =  window.localStorage.getItem("company_name")
    //     }
    //     return state.company_name
    // },
    // user_id: state =>{
    //     if (window.localStorage.user_id) {
    //         state.user_id = window.localStorage.getItem("user_id")
    //     }
    //     return state.user_id
    // },
}

const actions = {
    setGenById({ commit }, genForm) {
        commit('setGenById', genForm)
    },
}

const mutations = {
    setGenById (state, genForm) {

        if (genForm.length > 0) {
            console.log(state.genForms.filter(x => x.id === genForm.Id));
        }
        state.genForms.push(genForm);
        
        // state.company_name = genForm.company_name
        // window.localStorage.setItem('company_name', loginForm.company_name)
        // state.user_id = loginForm.user_id
        // window.localStorage.setItem('user_id', loginForm.user_id)
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}