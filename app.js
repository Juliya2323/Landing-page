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
        itemASelected: false,
        itemBSelected: false,
        itemCSelected: false,
        itemDSelected: false,
        itemESelected: false,
        styleColor: '',
        visible: true,
        counter: 0,
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
    },
    selectedBoxEStyle() {
        return { active: this.itemESelected };
    },
    vivibilityClasses() {
        return {
            visible: this.visible,
            hidden: !this.visible
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
    },
    selectItem(item) {
        if (item === 'A') {
            this.itemASelected = !this.itemASelected;
        } else if (item === 'B') {
            this.itemBSelected = !this.itemBSelected;
        } else if (item === 'C') {
            this.itemCSelected = !this.itemCSelected;
        } else if (item === 'D') {
            this.itemDSelected = !this.itemDSelected;
        } else {
            this.itemESelected = !this.itemESelected;
        }
    },
    switchVisibility() {
        this.visible = !this.visible;
    },
    add(num) {
        this.counter = this.counter + num;
      },
    reduce(num) {
        this.counter = this.counter - num;
      },
}
});

app.mount('#assignment');