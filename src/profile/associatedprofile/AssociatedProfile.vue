<script setup>
import associatedProfileController from "./AssociatedProfileController";
const cols = 12;
const sm = 6;
 const md = 6;
const controller= associatedProfileController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Associated Profile</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-select-field
 id="profileId" label="Profile"
          v-model="model.profileId"
 :rules="rules.profileId"
:counter="20"
@ok="controller.profileOk"
          :items="controller.profileStore.mini"
          :headers="controller.profileNav.menu.miniHeaders"
        ></s-select-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-select-field
 id="associatedProfileId" label="Associated Profile"
          v-model="model.associatedProfileId"
 :rules="rules.associatedProfileId"
:counter="20"
@ok="controller.associatedProfileOk"
          :items="controller.profileStore.mini"
          :headers="controller.profileNav.menu.miniHeaders"
        ></s-select-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="position" label="Position"
          v-model="model.position"
 :rules="rules.position"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-checkbox id="main" label="Main"
          v-model="model.main"
></v-checkbox>
</v-col>
    </template>
  </crud-form>
</template>

