<template>
  <div class="nice-component nice-date" :class="{ 'disabled': disabled, 'no-margin': noMargin }">
    <div class="input-group" @click="setOpen(true)">
      <div class="nice-label" v-if="title">
        {{ title }}<span v-if="required">*</span>
      </div>
      <div class="input-group" :class="{ 'is-open': open }">
        <input :placeholder="placeholder" v-model="inputVal" :disabled="disabled" @blur="inputChanged" :required="required" />
        <svg class="icon" viewBox="0 0 24 24" @click="setOpen(!open)">
          <path d="M19 3h-2v-1c0-0.6-0.4-1-1-1s-1 0.4-1 1v1h-6v-1c0-0.6-0.4-1-1-1s-1 0.4-1 1v1h-2c-1.7 0-3 1.3-3 3v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-14c0-1.7-1.3-3-3-3zM5 5h2v1c0 0.6 0.4 1 1 1s1-0.4 1-1v-1h6v1c0 0.6 0.4 1 1 1s1-0.4 1-1v-1h2c0.6 0 1 0.4 1 1v3h-16v-3c0-0.6 0.4-1 1-1zM19 21h-14c-0.6 0-1-0.4-1-1v-9h16v9c0 0.6-0.4 1-1 1z"></path>
        </svg>
      </div>
    </div>

    <div class="nice-backdrop" v-if="open" @click="close"></div>
    <div class="nice-dropdown" v-if="open"> 
      <!-- v-click-outside="close"> -->

      <!--
      <div class="year-wrapper">
        <div class="left" @click="changeYear(false)">
          <svg viewBox="0 0 24 24">
            <path d="M10.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-6 6c-0.4 0.4-0.4 1 0 1.4l6 6c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"></path>
          </svg>
        </div>
        <div class="value">{{ selected.getFullYear() }}</div>
        <div class="right" @click="changeYear(true)">
          <svg viewBox="0 0 24 24">
            <path d="M15.7 11.3l-6-6c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l6-6c0.4-0.4 0.4-1 0-1.4z"></path>
          </svg>
        </div>
      </div>
      -->

      <div class="month-wrapper">
        <div class="left" @click="changeMonth(false)">
          <svg viewBox="0 0 24 24">
            <path d="M10.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-6 6c-0.4 0.4-0.4 1 0 1.4l6 6c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"></path>
          </svg>
        </div>
        <div class="value">
          <div class="year">{{ selected.getFullYear() }}</div>
          <div class="month">{{ monthNames[selected.getMonth() + 1] }}</div>
        </div>
        <div class="right" @click="changeMonth(true)">
          <svg viewBox="0 0 24 24">
            <path d="M15.7 11.3l-6-6c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l6-6c0.4-0.4 0.4-1 0-1.4z"></path>
          </svg>
        </div>
      </div>

      <div class="calendar">
        <div class="header">
          <div>{{ dayNames[1] }}</div>
          <div>{{ dayNames[2] }}</div>
          <div>{{ dayNames[3] }}</div>
          <div>{{ dayNames[4] }}</div>
          <div>{{ dayNames[5] }}</div>
          <div>{{ dayNames[6] }}</div>
          <div>{{ dayNames[7] }}</div>
        </div>

        <div class="month">
          <div 
            class="day" 
            v-for="day in days" 
            @click="dayChanged(day)" 
            :class="{ 'previous-month': !day.currentMonth, 'today': day.today, 'selected': day.selected }" 
            :title="day.text"
            :key="day.id"
          >
            {{ day.day }}
          </div>
        </div>
      </div>


      <div class="time" v-if="time">
        <div class="select-wrapper">
          <div class="arrow-down"></div>
          <select @change="hourChanged">
            <option v-for="hour in hours" :value="hour" :key="hour" :selected="hour == selected.getHours()">{{ hour }}</option>
          </select>
        </div>

        <div class="select-wrapper">
          <div class="arrow-down"></div>
          <select @change="minuteChanged">
            <option v-for="minute in minutes" :value="minute" :key="minute" :selected="minute == selected.getMinutes()">{{ minute }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "NiceDate",
  props: {
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
  },

  data () {
    return {
      open: false,
      innerDate: null,
      inputVal: "",
      hours: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
        20, 21, 22, 23, 24
      ],
      minutes: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
        50, 51, 52, 53, 54, 55, 56, 57, 58, 59
      ],
      dayNames: {
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thu",
        5: "Fri",
        6: "Sat",
        7: "Sun"
      },
      monthNames: {
        1: "January", 
        2: "February", 
        3: "March", 
        4: "April", 
        5: "May", 
        6: "June",
        7: "July", 
        8: "August", 
        9: "September", 
        10: "October", 
        11: "November", 
        12: "December"
      },
      data: {
        month: null,
        year: null,
        day: null,
        hour: null,
        minute: null,
      },
      selected: new Date(),
      days: null
    }
  },

  methods: {
    close () {
      this.open = false
    },

    setOpen (isOpen) {
      this.open = isOpen
      this._buildMonth()
    },

    handleChange () {
      this._extractData()
      this.$emit("input",  this.innerDate)
      this.$emit("changed", this.innerDate)
    },

    inputChanged () {
      if (this.inputVal && this.inputVal != "") {
        let inputSplit = this.inputVal.split(" • ")
        let date = new Date()

        let dateSplit = inputSplit[0].split(".")
        date.setDate(dateSplit[0])
        date.setMonth(dateSplit[1] - 1)
        date.setFullYear(dateSplit[2])

        if (this.time) {
          let timeSplit = inputSplit[1].split(":")
          date.setHours(timeSplit[0])
          date.setMinutes(timeSplit[1])
          date.setSeconds(0, 0)
        } else {
          date.setHours(12)
          date.setMinutes(0)
          date.setSeconds(0, 0)
        }

        this.innerDate = date
        this.handleChange()
      }
    },

    hourChanged (e) {
      let hour = e.target.value
      this.selected.setHours(hour)
      this.innerDate.setHours(hour)
      this.handleChange()
    },

    minuteChanged (e) {
      let minutes = e.target.value
      this.selected.setMinutes(minutes)
      this.innerDate.setMinutes(minutes)
      this.handleChange()
    },

    dayChanged (day) {
      this.innerDate.setYear(day.year)
      this.innerDate.setMonth(day.month)
      this.innerDate.setDate(day.day)
      this.handleChange()
    },

    handleDefault () {
      if (!this.value) {
        this.innerDate = new Date()
        this.innerDate.setSeconds(0, 0)
        // this.inputVal = this._formatDate(this.innerDate)
      } else {
        this.innerDate = new Date(this.value)
        this.innerDate.setSeconds(0, 0)
        this.inputVal = this._formatDate(this.innerDate)
      }
      // this.handleChange()
    },

    changeYear (add) {
      let year = this.selected.getFullYear()
      if (add) { year += 1 }
      else { year -= 1 }
      this.selected.setFullYear(year)
      this._buildMonth()
    },

    changeMonth (add) {
      let month = this.selected.getMonth()
      if (add) { month += 1 }
      else { month -= 1 }
      this.selected.setMonth(month)
      this._buildMonth()
    },

    _buildMonth () {
      this.days = []
      let offset = new Date(this.selected.getFullYear(), this.selected.getMonth(), 1).getDay() - 1
      let daysInMonth = new Date(this.selected.getFullYear(), this.selected.getMonth(), 0).getDate()
      let append = 42 - daysInMonth - offset

      for (var d = (1 - offset); d <= (daysInMonth + append); d++) {
        this.days.push(this._buildDay(this.selected.getFullYear(), this.selected.getMonth(), d));
      }
    },

    _buildDay (year, month, day) {
      let today = new Date()
      let date = new Date(year, month, day)
      return {
        id: date.toString(),
        date: date,
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        dayInWeek: date.getDay(),
        currentMonth: date.getMonth() == this.selected.getMonth(),
        selected: this._isSameDay(this.innerDate, date),
        today: this._isSameDay(today, date),
        text: this._formatDate(date)
      }
    },

    _isSameDay (date1, date2) {
      return date1.getDate() == date2.getDate() &&
        date1.getMonth() == date2.getMonth() &&
        date1.getFullYear() == date2.getFullYear()
    },

    _formatDate (date) {
      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()
      let hour = date.getHours()
      let minute = date.getMinutes()
      if (minute < 10) { 
        minute = "0" + minute;
      }
      
      if (this.time) {
        return `${day}.${month}.${year} • ${hour}:${minute}`
      } else {
        return `${day}.${month}.${year}`
      }
    },

    _extractData () {
      this.data.day = this.innerDate.getDate()
      this.data.month = this.innerDate.getMonth()
      this.data.year = this.innerDate.getFullYear()
      this.data.hour = this.innerDate.getHours()
      this.data.minute = this.innerDate.getMinutes()
      this.inputVal = this._formatDate(this.innerDate)

      this.selected.year = this.data.year
      this.selected.month = this.data.month
      this._buildMonth()
    },
  },

  mounted () {
    this.handleDefault()
  },

  watch: {
    value () {
      if (this.value) {
        this.innerDate = new Date(this.value)
        this.selected = new Date(this.value)
        this._extractData()
      }
    }
  }
};
</script>



<style lang="scss" scoped>
.nice-date {
  position: relative;

  .input-group {
    position: relative;
    margin-bottom: 0;

    .icon {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
      height: 20px;
      fill: var(--font-color);
    }

    &.is-open {
      z-index: 100000;
    }
  }

  .nice-dropdown {
    z-index: 1000;
    position: absolute;
    left: 0;
    top: 110%;
    width: 300px;
    background: var(--nice-card);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: var(--nice-border-radius);
    border: var(--nice-border);

    .year-wrapper, .month-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      .left, .right {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--nice-border-radius);

        svg {
          height: 15px;
        }

        &:hover {
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
        }
      }

      .value {
        flex-grow: 1;
        text-align: center;
        line-height: 1;

        .year {
          font-size: 0.5em;
        }
      }
    }

    .month-wrapper {
      .value {
        font-size: 1.5em;
      }
    }

    .calendar {
      margin-top: 1.5rem;

      .week, .header, .month {
        display: grid;
        grid-template-columns: repeat(7, 1fr); 
      }

      .day {
        cursor: pointer;
        text-align: center;
        border-radius: 5px;
        line-height: 30px;

        &:hover {
          background: var(--nice-base-color-lighter);
          color: white;
        }

        &.previous-month {
          opacity: 0.3;
        }

        &.selected {
          background: var(--nice-base-color);
          color: white !important;
        }

        &.today {
          color: var(--nice-base-color);
        }
      }

      .header {
        font-size: 0.6em;
        text-transform: uppercase;
        align-items: center;
        text-align: center;
      }
    }

    .time {
      margin-top: 1rem;
      display: flex;

      .select-wrapper {
        flex-grow: 1;

        &:first-child {
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>

