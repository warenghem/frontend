export default {
    methods: {
        getDescription(id, source) {
            let p = (source || []).find(x => x.id == id);
            return p || {};
        },
    }
};