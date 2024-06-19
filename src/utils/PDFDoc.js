import { jsPDF } from "jspdf";
import 'jspdf-autotable'
// import storeFuncs from "./storeFuncs";
// import store from '../store/index'
// import funcs from "./funcs";

const PDFDoc = {



  modifyTitle(title) {
    return title.concat(" (COPY)");
  },

  getFont(columnsSize) {
    let tfont = 7;
    if (columnsSize <= 10) {
      for (let i = columnsSize; i <= 10; i++) {
        tfont++;
      }
    }
    return tfont;
  },

  // company() {
  //   return store.state.organisation.company.company;

  // },

  // currentUser() {
  //   let  tokenParsed = store.state.security.user.keycloak.tokenParsed;
  // return `${tokenParsed.given_name} ${tokenParsed.family_name}`;
  // },



  makePDFDocument(options) {

    let data = options.data;
    let startXPos = options.startXPos;
    let startYPos = options.startYPos;
    let hSpace = options.hSpace;
    let vSpace = options.vSpace;
    let lineBreak = options.lineBreak;
    let title = options.title;
    console.log("Options", options);
    const doc = new jsPDF();


    // ttitle.setAlignment(Element.ALIGN_CENTER);

    // this.document.open();
    // this.document.add(ttitle);
    let count = 0;
    // let addVSpace = true;
    // var pageHeight = doc.internal.pageSize.getHeight();
    let initialXStart = startXPos;
    data.forEach(data => {


      doc.setFontSize(10)
      doc.setTextColor(150);
      let text = data.text || "Empty String";
      let value = data.value;

      (value === null||value === undefined) ? "" : value.toString();
      doc.text(text, startXPos, startYPos);
      startXPos += hSpace;
      doc.text(value, startXPos, startYPos);
      startXPos += hSpace;
      count += 2;

      if (count === lineBreak) {

        startYPos = startYPos + vSpace;
        count = 0;
        startXPos = initialXStart;

        // addVSpace = false;
      }




    });

    // doc.save(title + ".pdf");

    // console.log("Current User", storeFuncs.currentUser());

    var footer = function (data) {
      console.log(data)
      doc.setFontSize(10);
      doc.setTextColor(150);
      let printedBy = "Sam" //"printed By:"+storeFuncs.currentUser()+"  On: " + funcs.formatDateTimeToString(new Date()) + "\nPrinted from Easyvalues";
      doc.text(printedBy, doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() - 10, {
        align: 'center'
      });
    };

    var footerOptions = {
      beforePageContent: footer,
      margin: {
        top: 80
      }
    };
    doc.autoTable([], [], footerOptions);


    window.open(doc.output('bloburl'), title);

    // Remove the document from memory when the window is closed
    window.addEventListener('unload', function () {
      window.URL.revokeObjectURL(doc.output('bloburl'));
    });





  }



}

export default PDFDoc;
