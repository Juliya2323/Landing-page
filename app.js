const app = Vue.createApp({
data() {
    return {
        name: '',
        outputInfo: '',
        finalOutputInfo: '',
        toDoList: [],
        toDoListItem: '',
        vueLink: 'https://vuejs.org/guide/introduction.html'
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
    },
    addItem() {
        this.toDoList.push(this.toDoListItem);
    }
}
});

app.mount('#assignment');