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
        <a class="nav-link btn btn-block btn-default" href="#color-select">Color select</a>
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
      <!-- <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#textarea">Textarea</a>
      </li>       -->
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#toggle">Toggle</a>
      </li>  
      <li class="nav-item">
        <a class="nav-link btn btn-block btn-default" href="#select">Select</a>
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
      <NiceColor title="Custom colors" v-model="colorValue" :colors="customColors" />
    </section>

    <hr />


    <!------------- Nice color select ------------->
    <section id="color-select">
      <h4>Nice color select</h4>

      <pre>&lt;NiceColorSelect title="Nice color select" v-model="values.niceColorSelect" /></pre>

      <NiceColorSelect title="Nice color select" v-model="values.niceColorSelect" />
    </section>

    <hr />


    <!------------- Nice input ------------->
    <section id="input">
      <h4>Nice Input</h4>
      <pre>
value: [String, Number],
title: String,
placeholder: String,
prepend: String,
append: String,
error: [String, Object, Array],
errorString: [String],
required: Boolean,
textarea: Boolean,
disabled: Boolean,
noMargin: Boolean,
type: { // Specifies the type &lt;input> element to display
  type: String,
  default: "text",
  validator: (value) => [
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week"
  ].indexOf(value) !== -1
},
autocomplete: { // Specifies whether an &lt;input> element should have autocomplete enabled
  type: String || null,
  default: null,
  validator: (value) => [
    "off", // The browser is not permitted to automatically enter or select a value for this field. It is possible that the document or application provides its own autocomplete feature, or that security concerns require that the field's value not be automatically entered.
    "on", // The browser is allowed to automatically complete the input. No guidance is provided as to the type of data expected in the field, so the browser may use its own judgement.
    "name", // The field expects the value to be a person's full name
    "honorific-prefix", // The prefix or title, such as "Mrs.", "Mr.", "Miss", "Ms.", "Dr.", or "Mlle.".
    "given-name", // The given (or "first") name.
    "additional-name", // The middle name.
    "family-name", // The family (or "last") name.
    "honorific-suffix", // The suffix, such as "Jr.", "B.Sc.", "PhD.", "MBASW", or "IV".
    "nickname", // A nickname or handle.
    "email", // An email address.
    "username", // A username or account name.
    "new-password", // A new password. This may be used by the browser both to avoid accidentally filling in an existing password and to offer assistance in creating a secure password 
    "current-password", // The user's current password.
    "one-time-code", // A one-time code used for verifying user identity.
    "organization-title", // A job title, or the title a person has within an organization, such as "Senior Technical Writer", "President", or "Assistant Troop Leader".
    "organization", // A company or organization name, such as "Acme Widget Company" or "Girl Scouts of America".
    "street-address", // A street address. This can be multiple lines of text, and should fully identify the location of the address within its second administrative level (typically a city or town), but should not include the city name, ZIP or postal code, or country name.
    "address-line1", // The first administrative level in the address. This is typically the province in which the address is located. In the United States, this would be the state. In Switzerland, the canton. In the United Kingdom, the post town.
    "address-line2", // The second administrative level, in addresses with at least two of them. In countries with two administrative levels, this would typically be the city, town, village, or other locality in which the address is located.
    "address-line3", // The third administrative level, in addresses with at least three administrative levels.
    "address-line4", // The finest-grained administrative level, in addresses which have four levels.
    "country", // A country or territory code.
    "country-name", // A country or territory name.
    "postal-code", // A postal code (in the United States, this is the ZIP code).
    "cc-name", // The full name as printed on or associated with a payment instrument such as a credit card. Using a full name field is preferred, typically, over breaking the name into pieces.
    "cc-given-name", // A given (first) name as given on a payment instrument like a credit card.
    "cc-additional-name", // A middle name as given on a payment instrument or credit card.
    "cc-family-name", // A family name, as given on a credit card.
    "cc-number", // A credit card number or other number identifying a payment method, such as an account number.
    "cc-exp", // A payment method expiration date, typically in the form "MM/YY" or "MM/YYYY".
    "cc-exp-month", // The month in which the payment method expires.
    "cc-exp-year", // The year in which the payment method expires.
    "cc-csc", // The security code for the payment instrument; on credit cards, this is the 3-digit verification number on the back of the card.
    "cc-type", // The type of payment instrument (such as "Visa" or "Master Card").
    "transaction-currency", // The currency in which the transaction is to take place.
    "transaction-amount", // The amount, given in the currency specified by "transaction-currency", of the transaction, for a payment form.
    "language", // A preferred language, given as a valid BCP 47 language tag.
    "bday", // A birth date, as a full date.
    "bday-day", // The day of the month of a birth date.
    "bday-month", // The month of the year of a birth date.
    "bday-year", // The year of a birth date.
    "sex", // A gender identity (such as "Female", "Fa'afafine", "Male"), as freeform text without newlines.
    "tel", // A full telephone number, including the country code. If you need to break the phone number up into its components, you can use these values for those fields:
    "tel-country-code", // The country code, such as "1" for the United States, Canada, and other areas in North America and parts of the Caribbean.
    "tel-national", // The entire phone number without the country code component, including a country-internal prefix. For the phone number "1-855-555-6502", this field's value would be "855-555-6502".
    "tel-area-code", // The area code, with any country-internal prefix applied if appropriate.
    "tel-local", // The phone number without the country or area code. This can be split further into two parts, for phone numbers which have an exchange number and then a number within the exchange. For the phone number "555-6502", use "tel-local-prefix" for "555" and "tel-local-suffix" for "6502".
    "tel-extension", // A telephone extension code within the phone number, such as a room or suite number in a hotel or an office extension in a company.
    "impp", // A URL for an instant messaging protocol endpoint, such as "xmpp:username@example.net".
    "url", // A URL, such as a home page or company web site address as appropriate given the context of the other fields in the form.
    "photo", // The URL of an image representing the person, company, or contact information given in the other fields in the form.
  ].indexOf(value) !== -1
}, 
autofocus: String || null, // Specifies that an &lt;input> element should automatically get focus when the page loads
checked: String || null, // Specifies that an &lt;input> element should be pre-selected when the page loads (for type="checkbox" or type="radio"
form: String || null, // Specifies the form the &lt;input> element belongs to
max: Number || Date || null, // Specifies the maximum value for an &lt;input> element
maxlength: Number || null, // Specifies the maximum number of characters allowed in an &lt;input> element    
min: Number || Date || null, // Specifies the minimum value for an &lt;input> element
minlength: Number || null, // Specifies the minimum number of characters allowed in an &lt;input> element
pattern: String || null, // Specifies a regular expression that an &lt;input> element's value is checked against
step: Number || null, // Specifies the interval between legal numbers in an input field
name: String || null, // Specifies the name of an &lt;input> element</pre>

      <pre>
&lt;NiceInput title="Nice input" v-model="inputValue" placeholder="This is a placeholder" />
&lt;NiceInput title="Appended text" v-model="inputValue" append="EURO" />
&lt;NiceInput title="Prepended text" v-model="inputValue" prepend="EURO" /></pre>

      <NiceInput title="Nice input" v-model="inputValue" placeholder="This is a placeholder" />
      <NiceInput title="Email" v-model="inputValues.email" placeholder="john@doe.com" type="email" name="email" autocomplete="email" :required="true" />
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
    <!-- <section id="textarea">
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

    <hr /> -->


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
    
    
    <!------------- Nice select ------------->
    <section id="select">
      <h4>Nice Select</h4>

      <pre>&lt;NiceSelect title="Nice select" v-model="values.niceSelect" :list="dropdownValues" valueName="value" :inlineValues="true" /></pre>

      <NiceSelect title="Nice select" v-model="values.niceSelect" :list="dropdownValues" valueName="value" />
      <NiceSelect title="Nice select" v-model="values.niceSelect" :list="dropdownValues" valueName="value" :inlineValues="true" />
    </section>

    <hr />


    <!------------- Nice textareat ------------->
    <!-- <section id="textarea">
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

    <hr /> -->


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
      values: {
        niceSelect: [
          { id: 0, key: 0, value: "Value 0" },
          { id: 1, key: 1, value: "Value 1" }
        ]
      },
      dropdownValue: null,
      dropdownValue2: null,
      colorValue: null,
      dateValue: null,
      inputValue: "This is a test",
      inputValues: {},
      toastMessage: "This is a test toast message",
      notificationTitle: "Title",
      notificationMessage: "This is a test notification message",
      modalValue: false,
      sideviewValue: false,
      darkMode: false,
      toastsPosition: "BOTTOM",
      notificationsPosition: "TOP_RIGHT",
      customColors: [
        '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
      ]
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

h4 {
  text-transform: uppercase;
  font-size: 2em;
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
  white-space: pre-wrap;
}
</style>
