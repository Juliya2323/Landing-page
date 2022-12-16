const app = Vue.createApp({
data() {
    return {
        name: '',
        outputInfo: '',
        finalOutputInfo: ''
    }
},
methods: {
    showAlert() {
        alert('Bonjour!')
    },
    showName(event) {
        this.name = event.target.value;
    },
    addInfo(event) {
        this.outputInfo = event.target.value;
    },
    confirmInfo() {
        this.finalOutputInfo = this.outputInfo;
    }
}
});

app.mount('#assignment');