<template>
  <crud-form
    @save="save"
    @update="update"
    @search="search"
    @updateDialog="updateDialog"
    @reset="reset"
    @done="done"
    @updateCrudTableDialog="updateCrudTableDialog"
    @resetCrudTableDialog="resetCrudTableDialog"
    :path="path"
    :maxWidth="maxWidth"
  >
    <template slot="heading">Loan Application Photo</template>

    <template slot="form-data">
<v-col :cols="cols" :sm="sm" :md="md">
<v-select label="LoanApplication"
          v-model="loanApplicationPhoto.loanApplication"
 :rules="loanApplicationRules"
:counter="100"          required
:items="$store.state.loan.loanapplication.mini"
:loading="$store.state.loan.loanapplication.miniLoading"
item-text="loanApplicationName"
          item-value="id"
          return-object
></v-select>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-textarea
 label="Image Description"
          v-model="loanApplicationPhoto.imageDescription"
 :rules="imageDescriptionRules"
:counter="200"          required
rows="1"
           auto-grow></v-textarea>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-file-input
 label="Image"
          v-model="loanApplicationPhoto.image"
          prepend-icon="mdi-camera"
          show-size
          accept="image/*"
 @change="onImageFileChange"        >
          <template v-slot:selection="{ text }">
              <v-chip small label color="primary">
                {{ text }}
              </v-chip>
              <v-img
                max-height="200"
                max-width="200"
                v-if="imageUrl"
                :src="imageUrl"
              ></v-img>
            </template>
></v-file-input>
</v-col>
    </template>
  </crud-form>
</template>
<script>
import loanApplicationPhotoModel from "./LoanApplicationPhotoModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "LoanApplicationPhoto",
data: () => ({
    cols: 12,
    sm:6,
       md: 4,
       maxWidth:700,
path: loanApplicationPhotoModel.path,
    loanApplicationPhoto: loanApplicationPhotoModel.loanApplicationPhoto,
loanApplicationRules: [(v) => !!v || "LoanApplication is required",
 ],imageDescriptionRules: [(v) => !!v || "Image Description is required",
(v) => v.length < 200 || "Image Description length must be less or equal to 200", ],imageRules: [(v) => !!v || "Image is required",
 ],imageUrl: null,
  }),
 created() {this.$store.dispatch("loan/loanapplication/getMini");
},
  computed: {},

  watch: {},

methods: {save() {
      this.$store.dispatch("post", { path: this.path, body: this.getFormData()});
    },
update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.loanApplicationPhoto.id}`,body: this.getFormData()});
    },
updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
async search() {
      var obj = this.$store.state.obj;
      this.loanApplicationPhoto = Object.assign({}, obj);
      this.setObjects(obj);
    },
reset() {
      this.loanApplicationPhoto.clear();
    },
setObjects(obj){
console.log(obj);
this.setImageFile(obj);
},setDialog(obj) {
this.loanApplicationPhoto = Object.assign({}, obj);
this.setObjects(obj);
},
done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.loanApplicationPhoto)
      );
    },
updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
resetCrudTableDialog() {
      this.reset();
    },
getFormData() {
      var data = new FormData();
data.append("loanApplication", this.loanApplicationPhoto.loanApplication);
data.append("imageDescription", this.loanApplicationPhoto.imageDescription);
data.append("image", this.loanApplicationPhoto.image);

      return data;
    },onImageFileChange(e) {
      if (e) {
        this.imageUrl = URL.createObjectURL(e);
      } else {
        this.imageUrl = null;
      }
    },
 async setImageFile(obj) {
      let image = obj.image;
      if (image) {
        this.imageUrl = "data:image/png;base64," + image;
        const getUrlExtension = (url) => {
        return url.split(/[#?]/)[0].split(".").pop().trim();
      };
      var imgExt = getUrlExtension(this.imageUrl);

        const response = await fetch(this.imageUrl);
        const blob = await response.blob();
        console.log("Blob: ", blob);
        const file = new File([blob], "logo." + imgExt, {
          type: blob.type,
        });
      this.loanApplicationPhoto.image = file;

      } else {
        this.imageUrl = null;
      }
    },
}};
</script>
