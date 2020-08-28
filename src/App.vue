<template>
  <div id="app" class="nice-sanbox">
    <!-- <h1>Nice Elements</h1> -->
    <div class="logo">
      <img src="./assets/nice-elements.png" />
    </div>



    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#notifications">Notifications</a>
      </li>
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#toast">Toast</a>
      </li>
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#modal">Modal</a>
      </li>
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#sideview">Sideview</a>
      </li>      
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#color">Color</a>
      </li>      
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#input">Input</a>
      </li>      
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#button">Button</a>
      </li>      
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-block btn-default" href="#date">Date</a>
      </li>      
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#dropdown">Dropdown</a>
      </li>      
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#dropdown-simple">Dropdown simple</a>
      </li>      
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#file">File</a>
      </li>      
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#progress">Progress</a>
      </li>      
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#progress-circle">Progress circle</a>
      </li>      
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#search">Search</a>
      </li>      
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#text">Text</a>
      </li>      
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#textarea">Textarea</a>
      </li>      
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#toggle">Toggle</a>
      </li>      
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#actions">Actions</a>
      </li>      
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#buttons">Buttons</a>
      </li>
    </ul>



    <NiceToggle title="Dark mode" v-model="darkMode" @changed="darkModeChanged" style="width: 250px;" />

    <hr />

    <!------------- Nice notifications ------------->
    <section id="notifications">
      <h4>Nice notifications</h4>

      <pre>this.$events.$emit('nice-notification', 'ERROR', 'This is the message', 'This is the title');
this.$events.$emit('nice-notification', 'SUCCESS', 'This is the message', 'This is the title');
this.$events.$emit('nice-notification', 'WARNING', 'This is the message', 'This is the title');
this.$events.$emit('nice-notification', 'INFO', 'This is the message', 'This is the title');</pre>

      <pre>&lt;NiceNotifications /></pre>

      <NiceNotifications :position="notificationsPosition" />

      <NiceInput title="Notification title" v-model="notificationTitle" />
      <NiceInput title="Notification message" v-model="notificationMessage" />

      <NiceButton text="Error" @click="testNotification('ERROR')" class="mr-1 btn-danger" />
      <NiceButton text="Success" @click="testNotification('SUCCESS')" class="mr-1 btn-success" />
      <NiceButton text="Info" @click="testNotification('INFO')" class="mr-1 btn-info" />
      <NiceButton text="Warning" @click="testNotification('WARNING')" class="btn-warning" />

      <br />
      <br />

      <NiceButton text="Bottom" class="mr-1 btn-default btn-sm" @click="notificationsPosition = 'BOTTOM'" />
      <NiceButton text="Bottom left" class="mr-1 btn-default btn-sm" @click="notificationsPosition = 'BOTTOM_LEFT'" />
      <NiceButton text="Bottom right" class="mr-1 btn-default btn-sm" @click="notificationsPosition = 'BOTTOM_RIGHT'" />      
      <NiceButton text="Top" class="mr-1 btn-default btn-sm" @click="notificationsPosition = 'TOP'" />
      <NiceButton text="Top left" class="mr-1 btn-default btn-sm" @click="notificationsPosition = 'TOP_LEFT'" />
      <NiceButton text="Top right" class="mr-1 btn-default btn-sm" @click="notificationsPosition = 'TOP_RIGHT'" />
    </section>


    <hr />


    <!------------- Nice toast ------------->
    <section id="toast">
      <h4>Nice toast</h4>

      <pre>this.$events.$emit('nice-toast', 'This is the message')</pre>

      <pre>&lt;NiceToast /></pre>

      <NiceToast :position="toastsPosition" />
      
      <NiceInput title="Toast message" v-model="toastMessage" />
      <NiceButton text="Toast me" class="mr-1 btn-default" @click="testToast" />
      <NiceButton text="Toast error" class="mr-1 btn-danger" @click="testToast('error')" />
      <NiceButton text="Toast success" class="mr-1 btn-success" @click="testToast('success')" />
      <NiceButton text="Toast warning" class="mr-1 btn-warning" @click="testToast('warning')" />
      <NiceButton text="Toast info" class="btn-info" @click="testToast('info')" />

      <br />
      <br />

      <NiceButton text="Bottom" class="mr-1 btn-default btn-sm" @click="toastsPosition = 'BOTTOM'" />
      <NiceButton text="Bottom left" class="mr-1 btn-default btn-sm" @click="toastsPosition = 'BOTTOM_LEFT'" />
      <NiceButton text="Bottom right" class="mr-1 btn-default btn-sm" @click="toastsPosition = 'BOTTOM_RIGHT'" />      
      <NiceButton text="Top" class="mr-1 btn-default btn-sm" @click="toastsPosition = 'TOP'" />
      <NiceButton text="Top left" class="mr-1 btn-default btn-sm" @click="toastsPosition = 'TOP_LEFT'" />
      <NiceButton text="Top right" class="mr-1 btn-default btn-sm" @click="toastsPosition = 'TOP_RIGHT'" />
    </section>

    <hr />


    <!------------- Nice modal ------------->
    <section id="modal">
      <h4>Nice modal</h4>

      <pre>&lt;NiceModal :isOpen="modalValue" @close="modalValue = false">
  This is inside the modal
&lt;/NiceModal></pre>

      <NiceModal :isOpen="modalValue" @close="modalValue = false">
        This is inside the modal
      </NiceModal>
      
      <NiceButton text="Open modal" @click="modalValue = true" />
    </section>

    <hr />


    <!------------- Nice sideview ------------->
    <section id="sideview">
      <h4>Nice sideview</h4>

      <pre>&lt;NiceSideview :isOpen="modalValue" @close="modalValue = false">
  This is inside the sidebar
&lt;/NiceSideview></pre>

      <NiceSideview :isOpen="sideviewValue" @close="sideviewValue = false">
        This is inside the sidebar
      </NiceSideview>
      
      <NiceButton text="Open sideview" @click="sideviewValue = true" />
    </section>

    <hr />


    <!------------- Nice color ------------->
    <section id="color">
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

      <pre>&lt;NiceColor title="Nice color" v-model="colorValue" /></pre>

      <NiceColor title="Nice color" v-model="colorValue" />
    </section>

    <hr />


    <!------------- Nice input ------------->
    <section id="input">
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

      <pre>
&lt;NiceInput title="Nice input" v-model="inputValue" placeholder="This is a placeholder" />
&lt;NiceInput title="Appended text" v-model="inputValue" append="EURO" />
&lt;NiceInput title="Prepended text" v-model="inputValue" prepend="EURO" /></pre>

      <NiceInput title="Nice input" v-model="inputValue" placeholder="This is a placeholder" />
      <NiceInput title="Appended text" v-model="inputValue" placeholder="This is a placeholder" append="EURO" />
      <NiceInput title="Prepended text" v-model="inputValue" placeholder="This is a placeholder" prepend="EURO" errorString="This is an error!" />
    </section>

    <hr />


    <!------------- Nice button ------------->
    <section id="button">
      <h4>Nice Button</h4>
      <pre>
text: String,
disabled: Boolean,
type: String,
addClass: String,
loading: Boolean,
function: Function</pre>

      <pre>
&lt;NiceButton text="Nice button" :loading="loading" class="mr-1" />
&lt;NiceButton text="Toggle loading" @click="toggleLoading" /></pre>

      <NiceButton text="Nice button" :loading="loading" class="mr-1" />
      <NiceButton text="Toggle loading" @click="toggleLoading" />
    </section>

    <hr />

    <!------------- Nice date ------------->
    <section id="date">
      <h4>Nice Date</h4>
      <pre>
value: [String, Date],
title: String,
noMargin: Boolean,
required: Boolean,
disabled: Boolean,
placeholder: String,
time: {
  default: true,
  type: Boolean
}
      </pre>

      <pre>&lt;NiceDate title="Nice date" placeholder="Select date" v-model="dateValue" /></pre>

      <NiceDate title="Nice date" placeholder="Select date" v-model="dateValue" />
    </section>


    <hr />


    <!------------- Nice dropdown simple ------------->
    <section id="dropdown-simple">
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

      <pre>&lt;NiceDropdownSimple title="Nice dropdown" v-model="dropdownValue" :values="dropdownValues" :nullable="true" :addFunction="addFunction" /></pre>

      <NiceDropdownSimple title="Nice dropdown simple" v-model="dropdownValue" :values="dropdownValues" :nullable="true" :addFunction="addFunction" />
    </section>
    
    <hr />


    <!------------- Nice dropdown ------------->
    <section id="dropdown">
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
}</pre>

      <pre>&lt;NiceDropdown title="Nice dropdown" v-model="dropdownValue" :searchFunction="getDropdownValues" /></pre>

      <NiceDropdown title="Nice dropdown (nullable)" v-model="dropdownValue" :searchFunction="getDropdownValues" :nullable="true" />
      <NiceDropdown title="Nice dropdown" v-model="dropdownValue2" :searchFunction="getDropdownValues" :addFunction="addFunction" />
    </section>


    <hr />


    <!------------- Nice file ------------->
    <section id="file">
      <h4>Nice File</h4>
      <pre>
title: String,
required: Boolean,
disabled: Boolean,
noMargin: Boolean,
canEdit: Boolean</pre>

      <pre>&lt;NiceFile title="Nice file" /></pre>

      <NiceFile title="Nice file" />
    </section>

    <hr />


    <!------------- Nice filter ------------->
    <!-- <h4>Nice Filter</h4>
    <pre>
text: String
    </pre>
    <NiceFilter title="Nice filter" />

    <hr /> -->


    <!------------- Nice progress ------------->
    <section id="progress">
      <h4>Nice Progress</h4>
      <pre>
amount: {
  type: Number,
  default: 0
},
total: {
  type: Number,
  default: 0
}</pre>

      <pre>&lt;NiceProgress title="Nice progress" :amount="12" :total="20" /></pre>

      <NiceProgress title="Nice progress" :amount="12" :total="20" />
    </section>

    <hr />


    <!------------- Nice progress circle ------------->
    <section id="progress-circle">
      <h4>Nice Progress Circle</h4>
      <pre>
amount: {
  type: Number,
  default: 0
},
total: {
  type: Number,
  default: 0
}</pre>

      <pre>&lt;NiceProgressCircle title="Nice progress circle" :amount="12" :total="20" /></pre>

      <NiceProgressCircle title="Nice progress circle" :amount="12" :total="20" />
    </section>

    <hr />


    <!------------- Nice search ------------->
    <section id="search">
      <h4>Nice Search</h4>
      <pre>
title: String,
value: String,
placeholder: String,
disabled: Boolean,
debounce: {
  default: 500,
  type: Number
}</pre>

      <pre>&lt;NiceSearch title="Nice search" placeholder="Search..." /></pre>
      
      <NiceSearch title="Nice search" placeholder="Search..." />
    </section>

    <hr />


    <!------------- Nice text ------------->
    <section id="text">
      <h4>Nice Text</h4>
      <pre>
title: String,
text: [String, Number],
noMargin: Boolean</pre>

      <pre>&lt;NiceText title="Nice text" text="This is a test" /></pre>

      <NiceText title="Nice text" text="This is a test" />
    </section>

    <hr />


    <!------------- Nice textareat ------------->
    <section id="textarea">
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
}</pre>

      <pre>&lt;NiceTextarea title="Nice textarea" /></pre>

      <NiceTextarea title="Nice textarea" />
    </section>

    <hr />


    <!------------- Nice toggle ------------->
    <section id="toggle">
      <h4>Nice Toggle</h4>
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
disabled: Boolean</pre>

      <pre>&lt;NiceToggle title="Nice toggle" /></pre>

      <NiceToggle title="Nice toggle" />
    </section>
  
    <hr />


    <!----------- Nice actions ------------->
    <section id="actions">
      <h4>Nice Actions</h4>
      <pre>&lt;NiceActions>
  &lt;template slot="dropdown">
    &lt;li>
      &lt;NiceButton addClass="btn-block">
        &lt;span>{{ 'Send email' }}&lt;/span>
      &lt;/NiceButton>
    &lt;/li>

    &lt;li>
      &lt;NiceButton addClass="btn-block">
        &lt;span>{{ 'Export attendees' }}&lt;/span>
      &lt;/NiceButton>
    &lt;/li>

    &lt;li>
      &lt;NiceButton addClass="btn-block">
        &lt;span>{{ 'Import attendees' }}&lt;/span>
      &lt;/NiceButton>
    &lt;/li>
  &lt;/template>
&lt;/NiceActions></pre>

      <div class="text-right">
        <NiceActions>
          <template slot="dropdown">
            <li>
              <NiceButton addClass="btn-block">
                <span>{{ 'Send email' }}</span>
              </NiceButton>
            </li>

            <li>
              <NiceButton addClass="btn-block">
                <span>{{ 'Export attendees' }}</span>
              </NiceButton>
            </li>

            <li>
              <NiceButton addClass="btn-block">
                <span>{{ 'Import attendees' }}</span>
              </NiceButton>
            </li>
          </template>
        </NiceActions>
      </div>
    </section>

    <hr />

    <!----------------------------------------------------------------- Buttons ------------------------------------------------------------------------------>
    <section id="buttons">
       <h4>Buttons</h4>

       <svg style="display:none;">
         <symbol id="icon-file-text" viewBox="0 0 24 24">
          <path d="M17.586 7h-2.586v-2.586zM20.703 7.289l-5.996-5.996c-0.001-0.001-0.003-0.002-0.004-0.004-0.095-0.094-0.204-0.165-0.32-0.213-0.122-0.051-0.253-0.076-0.383-0.076h-8c-0.405 0-0.793 0.081-1.148 0.228-0.367 0.152-0.697 0.375-0.973 0.651s-0.499 0.606-0.651 0.973c-0.147 0.355-0.228 0.743-0.228 1.148v16c0 0.405 0.081 0.793 0.228 1.148 0.152 0.368 0.375 0.698 0.651 0.974s0.606 0.499 0.974 0.651c0.354 0.146 0.742 0.227 1.147 0.227h12c0.405 0 0.793-0.081 1.148-0.228 0.368-0.152 0.698-0.375 0.974-0.651s0.499-0.606 0.651-0.974c0.146-0.354 0.227-0.742 0.227-1.147v-12c0-0.276-0.112-0.526-0.293-0.707zM13 3v5c0 0.552 0.448 1 1 1h5v11c0 0.137-0.027 0.266-0.075 0.382-0.050 0.122-0.125 0.232-0.218 0.325s-0.203 0.167-0.325 0.218c-0.116 0.048-0.245 0.075-0.382 0.075h-12c-0.137 0-0.266-0.027-0.382-0.075-0.122-0.050-0.232-0.125-0.325-0.218s-0.167-0.203-0.218-0.325c-0.048-0.116-0.075-0.245-0.075-0.382v-16c0-0.137 0.027-0.266 0.075-0.382 0.050-0.122 0.125-0.232 0.218-0.325s0.203-0.167 0.325-0.218c0.116-0.048 0.245-0.075 0.382-0.075zM16 12h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1h8c0.552 0 1-0.448 1-1s-0.448-1-1-1zM16 16h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1h8c0.552 0 1-0.448 1-1s-0.448-1-1-1zM10 8h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path>
        </symbol>
       </svg>

       <div class="mb-2">
        <div class="mr-1 btn btn-default">btn-default <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-primary">btn-primary <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-danger">btn-danger <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-success">btn-success <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-info">btn-info <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-warning">btn-warning <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
      </div>

      <div class="mb-2">
        <div class="mr-1 btn btn-sm btn-default">btn-default btn-sm <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-sm btn-primary">btn-primary btn-sm <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-sm btn-danger">btn-danger btn-sm <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-sm btn-success">btn-success btn-sm <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-sm btn-info">btn-info btn-sm <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-sm btn-warning">btn-warning btn-sm <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
      </div>

      <div class="mb-2">
        <div class="mr-1 btn btn-lg btn-default">btn-default btn-lg <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-lg btn-primary">btn-primary btn-lg <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-lg btn-danger">btn-danger btn-lg <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-lg btn-success">btn-success btn-lg <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-lg btn-info">btn-info btn-lg <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-lg btn-warning">btn-warning btn-lg <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
      </div>

      <div class="mb-2">
        <button class="mr-1 btn btn-default" disabled>btn-default <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></button>
        <button class="mr-1 btn btn-primary" disabled>btn-primary <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></button>
        <button class="mr-1 btn btn-danger" disabled>btn-danger <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></button>
        <button class="mr-1 btn btn-success" disabled>btn-success <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></button>
        <button class="mr-1 btn btn-info" disabled>btn-info <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></button>
        <button class="mr-1 btn btn-warning" disabled>btn-warning <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></button>
      </div>

      <div class="mb-2">
        <div class="mr-1 btn btn-outline-default">btn-outline-default <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-outline-primary">btn-outline-primary <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-outline-danger">btn-outline-danger <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-outline-success">btn-outline-success <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-outline-info">btn-outline-info <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-outline-warning">btn-outline-warning <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
      </div>

      <div class="mb-2">
        <div class="mr-1 btn btn-sm btn-outline-default">btn-outline-default btn-sm <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-sm btn-outline-primary">btn-outline-primary btn-sm <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-sm btn-outline-danger">btn-outline-danger btn-sm <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-sm btn-outline-success">btn-outline-success btn-sm <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-sm btn-outline-info">btn-outline-info btn-sm <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-sm btn-outline-warning">btn-outline-warning btn-sm <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
      </div>

      <div class="mb-2">
        <div class="mr-1 btn btn-lg btn-outline-default">btn-outline-default btn-lg <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-lg btn-outline-primary">btn-outline-primary btn-lg <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-lg btn-outline-danger">btn-outline-danger btn-lg <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-lg btn-outline-success">btn-outline-success btn-lg <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-lg btn-outline-info">btn-outline-info btn-lg <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
        <div class="mr-1 btn btn-lg btn-outline-warning">btn-outline-warning btn-lg <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></div>
      </div>

      <div class="mb-2">
        <button class="mr-1 btn btn-outline-default" disabled>btn-outline-default <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></button>
        <button class="mr-1 btn btn-outline-primary" disabled>btn-outline-primary <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></button>
        <button class="mr-1 btn btn-outline-danger" disabled>btn-outline-danger <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></button>
        <button class="mr-1 btn btn-outline-success" disabled>btn-outline-success <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></button>
        <button class="mr-1 btn btn-outline-info" disabled>btn-outline-info <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></button>
        <button class="mr-1 btn btn-outline-warning" disabled>btn-outline-warning <svg class="icon ml-1 icon-file-text"><use xlink:href="#icon-file-text"></use></svg></button>
      </div>

    </section>
    
    <hr />

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
      dropdownValue2: null,
      colorValue: null,
      dateValue: null,
      inputValue: "This is a test",
      toastMessage: "This is a test toast message",
      notificationTitle: "Title",
      notificationMessage: "This is a test notification message",
      modalValue: false,
      sideviewValue: false,
      darkMode: false,
      toastsPosition: "BOTTOM",
      notificationsPosition: "TOP_RIGHT"
    }
  },
  

  methods: {
    async getDropdownValues () {
      const sleep = m => new Promise(r => setTimeout(r, m));
      await sleep(500);
      return this.dropdownValues;
    },

    async addFunction () {
      this.testToast();
    },

    toggleLoading () {
      this.loading = !this.loading
    },

    testNotification (type) {
      this.$events.$emit('nice-notification', type, this.notificationMessage, this.notificationTitle);
    },

    testToast (type) {
      this.$events.$emit('nice-toast', this.toastMessage, type);
    },    

    darkModeChanged () {
      if (this.darkMode) {
        document.body.className = "dark";
      } else {
        document.body.className = "";
      }
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
:root {
  --font-color: black;
  --nice-font-color: var(--font-color);
  --background-color: white;
}

.dark {
  --font-color: white;
  --nice-font-color: var(--font-color);
  --background-color: #222;

  --nice-card: #111;
  --nice-bg: #333;
  --nice-bg-hover: #555;
  --nice-bg-active: #444;
  --nice-bg-focus: #444;
  --nice-border-color: #333;
  --nice-border: 1px solid var(--nice-border-color);
  --nice-border-radius: 5px;
}

body {
  padding: 2rem;
  margin: 0;

  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--nice-font-color);
  background: var(--background-color);
}

.logo {
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 5rem;
  img {
    max-width: 100%;
  }
}

h1 {
  margin: 0;
  margin-bottom: 5rem;
  margin-top: 3rem;
  font-size: 4em;
  text-transform: uppercase;
  text-align: center;
  color: var(--nice-base-color);
}

.mr-1 {
  margin-right: 0.5rem;
}

.ml-1 {
  margin-left: 0.5rem !important;
}

.mb-2 {
  margin-bottom: 1rem;
}

.text-right {
  text-align: right;
}

.nav {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 6rem;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 0.5rem;

  .nav-item {
    // display: inline-block;
    // margin-right: 0.5rem;
    // margin-bottom: 0.5rem;
    width: 100%;
  }
}

hr {
  margin: 5rem 0;
  padding: 0;
  border: 0 none;
  border-top: 2px solid var(--nice-border-color);
}

pre {
  padding: 1rem;
  background: var(--nice-bg);
  border-radius: var(--nice-border-radius);
}
</style>
