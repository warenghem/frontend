import jsonp from 'jsonp'
import queryString from 'query-string'

export default {
    props: {
        url: {
            required: true,
            type: String,
        },

        userId: {
            required: true,
            type: String,
        },

        listId: {
            required: true,
            type: String,
        },
    },

    data() {
        return {
            email: null,
            name: null,
            baglbb: null,
            bagdbb: null,
            belt: null,
            wallet: null,
            boots: null,
            success: false,
            error: null,
            loading: false,
        }
    },

    computed: {
        data() {
            return queryString.stringify({
                u: this.userId,
                id: this.listId,
                EMAIL: this.email,
                FNAME: this.name,
                BAGDBB: this.name,
                BAGLBB: this.name,
                BELT: this.name,
                WALLET: this.name,
                BOOTS: this.name,
                LANGUAGE: this.$i18n.localeProperties.language
            })
        },
    },

    methods: {
        setEmail(value = '') {
            this.email = value.trim();
            this.$parent.email = this.email
        },
        setName(value = '') {
            this.name = value.trim()
        },
        subscribe() {
            if (this.email === null || this.name === null || this.baglbb === null || this.bagdbb === null || this.belt === null || this.wallet === null || this.boots === null || this.loading) {
                return
            }

            this.success = false;
            this.error = null;
            this.loading = true;

            const url = `${this.url}?${this.data}`;
            console.log(this.data, url);

            jsonp(url, {param: 'c'}, this.onResponse)
        },

        onResponse(error, data) {
            this.loading = false;

            if (error) {
                this.error = error
            }

            if (data && data.result === 'error') {
                this.error = this.formatErrorMessage(data.msg)
            }

            if (this.error) {
                this.$emit('error', this.error)
            } else {
                this.success = true;
                this.email = null;
                this.name = null;
                this.baglbb = null;
                this.bagdbb = null;
                this.belt = null;
                this.wallet = null;
                this.boots = null;
                this.$emit('success')
            }
        },

        formatErrorMessage(message) {
            return message.replace('0 - ', '')
        },
    },

    render() {
        return this.$scopedSlots.default({
            subscribe: this.subscribe,
            setEmail: this.setEmail,
            setName: this.setName,
            error: this.error,
            success: this.success,
            loading: this.loading,
        }) 
    },
}