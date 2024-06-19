import LoanApplicationPhoto from "./LoanApplicationPhoto.vue";
const loanApplicationPhotoNav = {
  route: {
    path: "/loanApplicationPhoto/:mode",
    name: "loanApplicationPhoto",
    component: LoanApplicationPhoto,
    meta: { auth: true },
  },
  menu: {
    id: "loan.loanapplicationphoto",
    title: "Loan Application Photos",
    component: LoanApplicationPhoto,
    path: "loanapplicationphotos",
    width: "700px",
    editHeaders: [
      { text: "LoanApplication", value: "loanApplication.displayKey" },
      { text: "Image Description", value: "imageDescription" },
      { text: "Image", value: "image" },
      { text: "Actions", value: "actions" },
    ],
    headers: [
      {
        text: "Id",
        align: "start",
        // sortable: false,
        value: "id",
      },
      { text: "LoanApplication", value: "loanApplication.displayKey" },
      { text: "Image Description", value: "imageDescription" },
      { text: "Image", value: "image" },
    ],
    children: [
      {
        id: "loan.loanApplicationPhoto.new",
        name: "New",
        route: "loanApplicationPhoto",
        mode: 0,
      },
      {
        id: "loan.loanApplicationPhoto.edit",
        name: "Edit",
        route: "loanApplicationPhoto",
        mode: 1,
      },
      {
        id: "loan.loanApplicationPhoto.history",
        name: "History",
        route: "loanApplicationPhoto",
        mode: 2,
      },
    ],
  },
};
export default loanApplicationPhotoNav;
