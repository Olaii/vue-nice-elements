<template>
  <div class="nice-sanbox">

        <!------------- Nice color ------------->
    <h4>Nice color</h4>
    <pre>
value: String,
title: String,
name: String,
placeholder: String,
required: Boolean,
textarea: Boolean,
disabled: Boolean,
noMargin: Boolean
</pre>
    <NiceColor title="Nice color" v-model="colorValue" />

    <hr />


    <!------------- Nice input ------------->
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
noMargin: Boolean
</pre>
    <NiceInput title="Nice input" placeholder="This is a placeholder" />

    <hr />


    <!------------- Nice button ------------->
    <h4>Nice Button</h4>
    <pre>
text: String,
disabled: Boolean,
type: String,
addClass: String,
loading: Boolean,
function: Function
    </pre>
    <NiceButton text="Nice button" />

    <hr />

    <!------------- Nice date ------------->
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

    <hr />


    <!------------- Nice dropdown ------------->
    <h4>Nice Dropdown</h4>
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
    <NiceDropdown title="Nice dropdown" v-model="dropdownValue" :values="dropdownValues" />

    <hr />


    <!------------- Nice dropdown 2 ------------->
    <h4>Nice Dropdown 2</h4>
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
    <NiceDropdown2 title="Nice dropdown 2" v-model="dropdownValue" :searchFunction="getDropdownValues" />
  
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
    <NiceSearch title="Nice search" />

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
    <h4>NiceTextarea</h4>
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



    <!------------- Nice actions ------------->
    <h4>Nice Actions</h4>
    <div>
      <pre>
      </pre>
      <NiceActions title="Nice toggle" />
    </div>
  </div>
</template>



<script>
import NiceActions from "@/components/NiceActions"
import NiceButton from "@/components/NiceButton"
import NiceDate from "@/components/NiceDate"
import NiceDropdown from "@/components/NiceDropdown"
import NiceDropdown2 from "@/components/NiceDropdown2"
import NiceFile from "@/components/NiceFile"
import NiceFilter from "@/components/NiceFilter"
import NiceInput from "@/components/NiceInput"
import NiceProgress from "@/components/NiceProgress"
import NiceProgressCircle from "@/components/NiceProgressCircle"
import NiceSearch from "@/components/NiceSearch"
import NiceText from "@/components/NiceText"
import NiceTextarea from "@/components/NiceTextarea"
import NiceToggle from "@/components/NiceToggle"
import NiceColor from "@/components/NiceColor"

export default {
  name: "NiceSandbox",

  components: {
    NiceActions,
    NiceButton,
    NiceDate,
    NiceDropdown,
    NiceDropdown2,
    NiceFile,
    NiceFilter,
    NiceInput,
    NiceProgress,
    NiceProgressCircle,
    NiceSearch,
    NiceText,
    NiceTextarea,
    NiceToggle,
    NiceColor
  },

  data () {
    return {
      loading: true,
      dropdownValues: [
        { id: 0, key: 0, value: "Value 0" },
        { id: 1, key: 1, value: "Value 1" },
        { id: 2, key: 2, value: "Value 2" },
      ],
      dropdownValue: null,
      colorValue: null
    }
  },

  methods: {
    async getDropdownValues () {
      return this.dropdownValues
    }
  },

  mounted () {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
};
</script>
