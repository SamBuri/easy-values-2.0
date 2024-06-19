import { computed, reactive, ref } from "vue";
export default function testController() {
  const candidate = reactive({
    name: "",
    firstName: '',
    lastName: '',
    email: "",
    role: "",
    skills: [],
    clear (){
      this.name = "";
      this.firstName= '';
      this.lastName= '';
      this.email = "";
      this.role = "";
      this.skills = [];
    },
  });
  const candidates = ref([]);

  const add = (e) => {
    e.preventDefault();

    // candidates.value.push(Object.assign({}, candidate));
    // let finishedData =  Object.assign({}, candidate)
    candidates.value.push(Object.assign({}, candidate));
    // localStorage.setItem('candidates', [])
    localStorage.setItem('candidates', JSON.stringify(candidates.value));
    candidate.clear();
  };

  const clear = (e)=>{
    e.preventDefault();
    candidate.clear;
  }

  const mount=()=>{
     let v = JSON.parse(localStorage.getItem('candidates')) || [];
    //  if(v) candidates.value.push(v)
     candidates.value=v;

  }

  const formValid = computed(
    () => candidate.value.email && candidate.firstName && candidate.skills.length > 0
  );

  return { candidate, candidates, add, formValid, clear, mount };
}
