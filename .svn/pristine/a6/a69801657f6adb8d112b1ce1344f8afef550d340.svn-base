import icons from './icon.json'
export default {
    components: {
        IconItem: () =>
            import ('./item.vue')
    },
    data() {
        return {
            iconfont: [],
            keyword: '',
        }
    },
    computed: {
        filteredList() {
            return this.iconfont.filter(item => {
                return new RegExp(this.keyword).test(item.name)
            })
        }
    },
    created() {
        this.iconfont = icons
        console.log(this.filteredList)
    }
}