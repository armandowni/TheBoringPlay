// let sgMail = require('@sendgrid/mail');
export default {
    data() {
        return {
            form: {
                fullname: "",
                email: "",
                title: "",
                messages: ""
            }
        }
    },
    mounted() {

    },
    methods: {
        submitFeedback() {
            console.log(this.form);
        }
    },
}