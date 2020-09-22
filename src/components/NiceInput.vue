<template>
  <div class="nice-component nice-input" :class="{ 'disabled': disabled, 'no-margin': noMargin, 'validation-error': errorMessage || error || errorString }">
    <div class="nice-label" v-if="title">{{ title }}<span v-if="required">*</span></div>
    <div class="input-group">
      <div class="prepend" v-if="prepend">{{ prepend }}</div>

      <input 
        v-if="!textarea" 
        v-model="inputVal"
        :placeholder="placeholder" 
        :name="name" 
        :type="type" 
        :required="required"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
        :checked="checked"
        :form="form"
        :max="max"
        :maxlength="maxlength"
        :min="min"
        :minlength="minlength"
        :pattern="pattern"
        :step="step"
        @input="validation"
      >
      
      <NiceTextarea 
        v-if="textarea"
        v-model="inputVal"
        :placeholder="placeholder" 
        :name="name" 
        :required="required"
        :disabled="disabled"
        @input="validation"
      />

      <div class="append" v-if="append">{{ append }}</div>
    </div>

    <div class="error-message" v-if="errorString">{{ errorString }}</div>
    <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
    <div class="error-message" v-if="error">{{ error[0].message }}</div>
  </div>
</template>



<script>
import NiceTextarea from "@/components/NiceTextarea"

export default {
  name: "NiceInput",

  props: {
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
    type: { // Specifies the type <input> element to display
      type: String,
      default: "text",
      validator(value) {
        return [
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
        ].indexOf(value) !== -1;
      }
    },
    autocomplete: { // Specifies whether an <input> element should have autocomplete enabled
      type: String,
      default: null,
      validator(value) {
        return [
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
        ].indexOf(value) !== -1;
      }
    }, 
    autofocus: String, // Specifies that an <input> element should automatically get focus when the page loads
    checked: String, // Specifies that an <input> element should be pre-selected when the page loads (for type="checkbox" or type="radio"
    form: String, // Specifies the form the <input> element belongs to
    max: [Number, Date], // Specifies the maximum value for an <input> element
    maxlength: Number, // Specifies the maximum number of characters allowed in an <input> element    
    min: [Number, Date], // Specifies the minimum value for an <input> element
    minlength: Number, // Specifies the minimum number of characters allowed in an <input> element
    pattern: String, // Specifies a regular expression that an <input> element's value is checked against
    step: Number, // Specifies the interval between legal numbers in an input field
    name: String, // Specifies the name of an <input> element
  },

  components: {
    NiceTextarea
  },

  data () {
    return {
      dirty: false,
      inputVal: this.value,
      errorMessage: null
    }
  },

  mounted () {
    // this.$emit('input', val)
    this.validation()
  },

  methods: {
    validation () {
      this.errorMessage = null

      if (this.inputVal) {
        this.dirty = true
      }

      if (this.required) {
        if (this.dirty && (!this.inputVal || this.inputVal.length == 0)) {
          this.errorMessage = "This field is required"
        }
      }
    }
  },

  watch: {
    inputVal (value) {
      this.$emit('input', value);
    },
    value () {
      this.inputVal = this.value
    }
  }
};
</script>



<style lang="scss" scoped>
.input-group {
  display: flex;
  border: var(--nice-border);
  border-radius: var(--nice-border-radius);
  overflow: hidden;

  .append, .prepend {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--nice-bg-hover);
    padding: 0 1rem;
  }

  .append {
    border-right: var(--nice-border);
  }
  
  .prepend {
    border-left: var(--nice-border);
  }

  input {
    border: 0 none;
    border-radius: 0;
  }
}

.validation-error {
  .nice-label {
    color: var(--nice-error-color);
  }

  .input-group {
    border: 1px solid var(--nice-error-color);
  }
}

.error-message {
  padding-top: 5px;
  font-size: 0.8em;
  color: var(--nice-error-color);
  text-align: right;
}
</style>