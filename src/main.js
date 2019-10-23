import NiceActions from "@/components/NiceActions"
import NiceButton from "@/components/NiceButton"
import NiceDate from "@/components/NiceDate"
import NiceDropdownSimple from "@/components/NiceDropdownSimple"
import NiceDropdown from "@/components/NiceDropdown"
import NiceColor from "@/components/NiceColor"
import NiceFile from "@/components/NiceFile"
import NiceFilter from "@/components/NiceFilter"
import NiceInput from "@/components/NiceInput"
import NiceNotifications from "@/components/NiceNotifications"
import NiceProgressCircle from "@/components/NiceProgressCircle"
import NiceProgress from "@/components/NiceProgress"
import NiceSearch from "@/components/NiceSearch"
import NiceText from "@/components/NiceText"
import NiceTextarea from "@/components/NiceTextarea"
import NiceToast from "@/components/NiceToast"
import NiceToggle from "@/components/NiceToggle"
import NiceLoading from "@/components/NiceLoading"


export default {
  install (Vue) {
    Vue.prototype.$events = new Vue();

    Vue.component('NiceActions', NiceActions)
    Vue.component('NiceButton', NiceButton)
    Vue.component('NiceDate', NiceDate)
    Vue.component('NiceDropdownSimple', NiceDropdownSimple)
    Vue.component('NiceDropdown', NiceDropdown)
    Vue.component('NiceColor', NiceColor)
    Vue.component('NiceFile', NiceFile)
    Vue.component('NiceFilter', NiceFilter)
    Vue.component('NiceInput', NiceInput)
    Vue.component('NiceNotifications', NiceNotifications)
    Vue.component('NiceProgressCircle', NiceProgressCircle)
    Vue.component('NiceProgress', NiceProgress)
    Vue.component('NiceSearch', NiceSearch)
    Vue.component('NiceText', NiceText)
    Vue.component('NiceTextarea', NiceTextarea)
    Vue.component('NiceToast', NiceToast)
    Vue.component('NiceToggle', NiceToggle)
    Vue.component('NiceLoading', NiceLoading)
  }
}