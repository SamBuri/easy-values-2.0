/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { VTreeview } from 'vuetify/labs/VTreeview'
// Composables
import { createVuetify } from 'vuetify'
import { VTextField } from 'vuetify/components/VTextField'
import { VTextarea } from 'vuetify/components/VTextarea'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
     VTreeview
  },
  aliases: {
     STextField: VTextField,
     STextarea: VTextarea
  },
  defaults: {
    STextField: {
      density: "compact"
    },

    VTextField: {
      density: "compact"
    },

    VSelect: {
      density: "compact"
    },
    VAutocomplete: {
      density: "compact"
    },
    STextarea: {
      density: "compact",
      rows: 1,
      autoGrow: true
    },

    VTextarea: {
      density: "compact",
      rows: 1,
      autoGrow: true
    }
  },
  theme: {
    defaultTheme: 'light',
  },
})
