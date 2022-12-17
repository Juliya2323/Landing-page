const app = Vue.createApp({
data() {
    return {
        name: '',
        outputInfo: '',
        finalOutputInfo: '',
        toDoList: [],
        toDoListItem: '',
        vueLink: 'https://vuejs.org/guide/introduction.html',
        location: '',
        number: 0,
    }
},
computed: {
    result() {
        if (this.number > 20) {
            return 'It is too much';
        } else if (this.number === 20) {
            return this.number;
        } else {
            return 'Not enough!';
        }
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
    },
    addLocation() {
        if (this.location === '') {
            return '***'
        }
        return this.location + ', ' + 'Belarus';
    },
    resetLocationInput() {
        this.location = '';
    },
    addNumber(num) {
        this.number = this. number + num;
        console.log('a number was added')
    }
}
});

app.mount('#assignment');