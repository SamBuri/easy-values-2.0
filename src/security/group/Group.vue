<script setup>
import groupController from "./GroupController";
import rootOptions from '@/root/RootOptions';
import groupNav from "./GroupNav";
import { ref, watch } from "vue";
const cols = 12;
const sm = 12;
const md = 12;
rootOptions.maxWidth = 1000;
const controller = groupController();
const miniHeaders = groupNav.miniHeaders

const model = controller.model;
const rules = controller.rules;
const search = ref('')

const selected = ref([])

watch(() => model.value.roles, (newValue) => selected.value = newValue);

</script><template>
  <crud-form :controller="controller" :miniHeaders="miniHeaders">
    <template #heading>Group</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="group" label="Group" v-model="model.name" :rules="rules.group" :counter="100"></s-text-field>
      </v-col>

      <v-col cols="12">
        <v-data-table title="Permissions" :headers="controller.roleNav.menu.editHeaders"
          :items="controller.roleStore.mini" :component="controller.roleNav.menu.component" maxWidth="1000px"
          show-select item-value="name" v-model="selected" height="520px" items-per-page="50" :search="search" dense>

          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Permissions</v-toolbar-title>
              <v-spacer></v-spacer>
            
              <s-text-field label="Search" v-model="search" outlined rounded single-line hide-details
                prepend-inner-icon="mdi-magnify" class="rounded-search"></s-text-field>
            </v-toolbar>
          </template>

        </v-data-table>
      </v-col>

    </template>

  </crud-form>
</template>


