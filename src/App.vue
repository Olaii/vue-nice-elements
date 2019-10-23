<template>
  <div id="app" class="nice-sanbox">
    <h1>Nice Elements</h1>


    <!------------- Nice notifications ------------->
    <section>
      <h4>Nice notifications</h4>
      <pre>this.$events.$emit('notification', 'ERROR', 'This is the message', 'This is the title');
this.$events.$emit('notification', 'SUCCESS', 'This is the message', 'This is the title');
this.$events.$emit('notification', 'WARNING', 'This is the message', 'This is the title');
this.$events.$emit('notification', 'INFO', 'This is the message', 'This is the title');</pre>

      <NiceInput title="Notification title" v-model="notificationTitle" />
      <NiceInput title="Notification message" v-model="notificationMessage" />

      <NiceButton text="Error" @click="testNotification('ERROR')" class="mr-1 btn-danger" />
      <NiceButton text="Success" @click="testNotification('SUCCESS')" class="mr-1 btn-success" />
      <NiceButton text="Info" @click="testNotification('INFO')" class="mr-1 btn-info" />
      <NiceButton text="Warning" @click="testNotification('WARNING')" class="btn-warning" />
    </section>

    <hr />


    <!------------- Nice toast ------------->
    <section>
      <h4>Nice toast</h4>
      
      <NiceInput title="Toast message" v-model="toastMessage" />
      <NiceButton text="Toast me" @click="testToast" />
    </section>

    <hr />


    <!------------- Nice color ------------->
    <section>
      <h4>Nice color</h4>
      <pre>
value: String,
title: String,
name: String,
placeholder: String,
required: Boolean,
textarea: Boolean,
disabled: Boolean,
noMargin: Boolean</pre>

      <NiceColor title="Nice color" v-model="colorValue" />
    </section>

    <hr />


    <!------------- Nice input ------------->
    <section>
      <h4>Nice Input</h4>
      <pre>
value: [String, Number],
title: String,
name: String,
type: {
type: String,
default: "text"
},
placeholder: String,
required: Boolean,
textarea: Boolean,
disabled: Boolean,
noMargin: Boolean</pre>

      <NiceInput title="Nice input" v-model="inputValue" placeholder="This is a placeholder" />
      <NiceInput title="Appended text" v-model="inputValue" append="EURO" />
      <NiceInput title="Prepended text" v-model="inputValue" prepend="EURO" />
    </section>

    <hr />


    <!------------- Nice button ------------->
    <section>
      <h4>Nice Button</h4>
      <pre>
text: String,
disabled: Boolean,
type: String,
addClass: String,
loading: Boolean,
function: Function</pre>

      <NiceButton text="Nice button" :loading="loading" class="mr-1" />
      <NiceButton text="Toggle loading" @click="toggleLoading" />
    </section>

    <hr />

    <!------------- Nice date ------------->
    <section>
      <h4>Nice Date</h4>
      <pre>
value: [String, Date],
title: String,
noMargin: Boolean,
required: Boolean,
disabled: Boolean,
loading: Boolean,
placeholder: String,
time: {
  default: true,
  type: Boolean
}
      </pre>

      <NiceDate title="Nice date" :loading="true" placeholder="Placeholder" />
    </section>

    <hr />


    <!------------- Nice dropdown simple ------------->
    <h4>Nice Dropdown simple</h4>
    <pre>
value: [Object, String, Number],
values: Array,
title: String,
noMargin: Boolean,
required: Boolean,
nullable: Boolean,
disabled: Boolean,
loading: Boolean,
keyOnly: Boolean,
addFunction: {
  type: Function,
  default: null
},
nullText: {
  type: String,
  default: "None"
},
keyName: {
  type: String,
  default: "key"
},
valueName: {
  type: String,
  default: "value"
}
    </pre>
    <NiceDropdownSimple title="Nice dropdown" v-model="dropdownValue" :values="dropdownValues" />

    <hr />


    <!------------- Nice dropdown ------------->
    <h4>Nice Dropdown</h4>
    <pre>
value: [Object, String, Number],
title: String,
noMargin: Boolean,
required: Boolean,
nullable: Boolean,
disabled: Boolean,
loading: Boolean,
keyOnly: Boolean,
searchFunction: {
  type: Function,
  default: null
},
addFunction: {
  type: Function,
  default: null
},
nullText: {
  type: String,
  default: "None"
},
keyName: {
  type: String,
  default: "key"
},
valueName: {
  type: String,
  default: "value"
},
    </pre>
    <NiceDropdown title="Nice dropdown 2" v-model="dropdownValue" :searchFunction="getDropdownValues" />
  
    <hr />


    <!------------- Nice file ------------->
    <h4>Nice File</h4>
    <pre>
title: String,
required: Boolean,
disabled: Boolean,
noMargin: Boolean,
canEdit: Boolean
    </pre>
    <NiceFile title="Nice file" />

    <hr />


    <!------------- Nice filter ------------->
    <h4>Nice Filter</h4>
    <pre>
text: String
    </pre>
    <NiceFilter title="Nice filter" />

    <hr />


    <!------------- Nice progress ------------->
    <h4>Nice Progress</h4>
    <pre>
amount: {
  type: Number,
  default: 0
},
total: {
  type: Number,
  default: 0
}
    </pre>
    <NiceProgress title="Nice progress" :amount="12" :total="20" />

    <hr />


    <!------------- Nice progress circle ------------->
    <h4>Nice Progress Circle</h4>
    <pre>
amount: {
  type: Number,
  default: 0
},
total: {
  type: Number,
  default: 0
}
    </pre>
    <NiceProgressCircle title="Nice progress circle" :amount="12" :total="20" />

    <hr />


    <!------------- Nice search ------------->
    <h4>Nice Search</h4>
    <pre>
title: String,
value: String,
placeholder: String,
disabled: Boolean,
debounce: {
  default: 500,
  type: Number
}
    </pre>
    <NiceSearch title="Nice search" placeholder="Search..." />

    <hr />


    <!------------- Nice text ------------->
    <h4>Nice Text</h4>
    <pre>
title: String,
text: [String, Number],
noMargin: Boolean
    </pre>
    <NiceText title="Nice text" text="This is a test" />

    <hr />


    <!------------- Nice textareat ------------->
    <h4>Nice Textarea</h4>
    <pre>
value: {
  type: [String, Number],
  default: ''
},
autosize: {
  type: Boolean,
  default: true
},
minHeight: {
  type: [Number],
  default: null
},
maxHeight: {
  type: [Number],
  default: null
},
important: {
  type: [Boolean, Array],
  default: false
}
    </pre>
    <NiceTextarea title="Nice textarea" />

    <hr />


    <!------------- Nice toggle ------------->
    <h4>Nice Toggle</h4>
    <div>
      <pre>
value: [Boolean],
title: String,
name: String,
noMargin: Boolean,
yes: {
  default: "Yes",
  type: [String, Number]
},
no: {
  default: "No",
  type: [String, Number]
},
disabled: Boolean
      </pre>
      <NiceToggle title="Nice toggle" />
    </div>
  
    <hr />
    

    <!------------- Nice actions ------------->
    <h4>Nice Actions</h4>
    <div>
      <pre>
      </pre>
      <NiceActions title="Nice toggle" />
    </div>

    <hr />


    <!------------- Nice notifications ------------->
    <NiceNotifications />


    <!------------- Nice toast ------------->
    <NiceToast />
  </div>
</template>



<script>
export default {
  name: "app",


  data () {
    return {
      loading: true,
      dropdownValues: [
        { id: 0, key: 0, value: "Value 0" },
        { id: 1, key: 1, value: "Value 1" },
        { id: 2, key: 2, value: "Value 2" },
      ],
      dropdownValue: null,
      colorValue: null,
      inputValue: "This is a test",
      toastMessage: "This is a test toast message",
      notificationTitle: "Title",
      notificationMessage: "This is a test notification message"
    }
  },
  

  methods: {
    async getDropdownValues () {
      return this.dropdownValues
    },

    toggleLoading () {
      this.loading = !this.loading
    },

    testNotification (type) {
      this.$events.$emit('notification', type, this.notificationMessage, this.notificationTitle);
    },

    testToast () {
      this.$events.$emit('toast', this.toastMessage);
    }
  },


  mounted () {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
};
</script>



<style lang="scss" scope>
@import "./styles/main";

body, html {
  padding: 2rem;
  margin: 0;

  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

h1 {
  margin: 0;
  margin-bottom: 3rem;
}

.mr-1 {
  margin-right: 0.5rem;
}

hr {
  margin: 3rem 0;
  padding: 0;
}

pre {
  padding: 1rem;
  background: rgb(236, 236, 236);
  border-radius: 1rem;
}
</style>
