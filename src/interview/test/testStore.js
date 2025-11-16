import {reactive, ref, computed} from "vue";

const candidateStore = {

  candidate: reactive({
    firstName: "",
    lastName: "",
    email: "",
    skills: [],
  }),
  candidates: ref([]), //store candidates


  state: reactive({message: "", saved: false}),

  clear(e) {
    e?.preventDefault()
    this.candidate.firstName = "";
    this.candidate.lastName = "";
    this.candidate.email = "";
    this.candidate.skills = [];
  },

  add(e) {
    e?.preventDefault()
    if (!this.candidate.email || !this.candidate.firstName || !this.candidate.firstName
      || !this.candidate.skills.length) {
      this.state.message = 'Required fields are missing';
      return;
    }
    // if (this.candidates.value.filter(c => c.email === this.candidate.email).length > 0) {
    const email = this.candidate.email?.toLowerCase()?.trim();
    if (this.candidates.value.some(c => c.email.toLowerCase().includes(email))) {
      this.state.saved=false;
      this.state.message = "Email already exists";
      return;
    }

    this.candidates.value.push({...this.candidate});
    this.clear();
    this.state.message = 'Operation Success';
    this.state.saved = true;

  },
  isSearching: ref(false),
  searchResults: ref([]),

  clearSearch() {
    this.isSearching.value = false;
    this.searchResults.value = [];
  },

  clearState() {
    this.state.message = '';
    this.state.saved = false;
  },
  clearAll(e) {
    e?.preventDefault()
    this.clear(e);
    this.clearState(e)
  },

  // Search method
  search(searchTerm) {

    this.isSearching.value = true;
    const term = searchTerm?.trim()?.toLowerCase();
    this.searchResults.value = this.candidates.value.filter(candidate => candidate.skills.some(s => s.toLowerCase().includes(term)))

  },




}

export default candidateStore;
