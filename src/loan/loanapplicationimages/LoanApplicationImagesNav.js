import LoanApplicationImages from "./LoanApplicationImages.vue";
const loanApplicationImagesNav = {
  route: {
    path: "/loanApplicationImages/:mode",
    name: "loanApplicationImages",
    component: LoanApplicationImages,
    meta: { auth: true },
  },
  menu: {
    id: "loan.loanapplicationimages",
    title: "Loan Application Imagess",
    component: LoanApplicationImages,
    path: "loanapplicationimagess",
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
        id: "loan.loanApplicationImages.new",
        name: "New",
        route: "loanApplicationImages",
        mode: 0,
      },
      {
        id: "loan.loanApplicationImages.edit",
        name: "Edit",
        route: "loanApplicationImages",
        mode: 1,
      },
      {
        id: "loan.loanApplicationImages.history",
        name: "History",
        route: "loanApplicationImages",
        mode: 2,
      },
    ],
  },
};
export default loanApplicationImagesNav;
