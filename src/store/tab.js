export default {
    state: {
        isCollapse: false,
        tabsList: [{
                path: '/',
                name: 'home',
                label: '首页',
                icon: 'home'
            }

        ],
        currentMenu: null,

    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        seletcMenu(state, val) {
            if (val.name !== 'home') {
                state.currentMenu = val
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if (result === -1) {
                    state.tabsList.push(val)
                }
            } else {
                state.currentMenu = null
            }

        },
        closeTag(state, val) {
            const result = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(result, 1)
        },
        // setMenu(state,val){
        //     state.menu=val
        //     Cookie.set('menu',JSON.stringify(val))
        // },
        // clearMenu(state){
        //     state.menu=[]
        //     Cookie.remove('menu')
        // },
        // addMenu(state,val){
        //     if(!Cookie.get('menu')){
        //         return
        //     }
        //     const menu=JSON.parse(Cookie.get('menu'))
        //     state.menu=menu
        //     const menuArray=[]
        //     menu.forEach(item=>{
        //         if(item.children){
        //             item.children=item.children.map(item=>{
        //                 item.component
        //                 return
        //             })
        //         }
        //     })
        // }
    }
}