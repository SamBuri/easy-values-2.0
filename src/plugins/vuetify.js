import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'
import { saburiVuetifyConfig } from 'saburi-vue-utils'

export default createVuetify({
  ...saburiVuetifyConfig,
  components: {
    ...components,
    ...labsComponents,
  },
  directives,
})
