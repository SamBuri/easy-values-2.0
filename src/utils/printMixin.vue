<!-- <template></template> -->

<script>

import { jsPDF } from "jspdf";
import funcs from "./funcs";
import 'jspdf-autotable'

export default {
  data() {
    return {
     
    }
  },

  

  computed: {

    company() {
      return this.$store.state.security.user.tenant.company;

    },

    currentUser() {
      let tokenParsed = this.$store.state.security.user.keycloak.tokenParsed;
      return `${tokenParsed.given_name} ${tokenParsed.family_name}`;
    },

  },
  methods: {

    makePDFDocument(options) {

      let data = options.data;
      let startXPos = options.startXPos;
      let startYPos = options.startYPos;
      let hSpace = options.hSpace;
      let vSpace = options.vSpace;
      let lineBreak = options.lineBreak;
      let title = options.title;
      let format = options.format || "a4"
      console.log("Options", options);
      const doc = new jsPDF({
        format: format,

      });

      doc.setFont("helvetica", "bold");
      doc.setFontSize(20)
      doc.setTextColor(255, 0, 0);

      //   // var imageData = new ImageData(this.company.logo, 40, 40);
      // var file= funcs.createFileFromBytes(this.company.logo);
      // doc.addImage(file, 'PNG', 10, 10, 40, 40);
      // extract the image from the byte[] array

      // var blob = new Blob([this.company.logo], {type: 'image/jpeg'});
      // var imageUrl = URL.createObjectURL(blob);
   

      // // add the image to the document as a logo
      // doc.addImage(imageUrl, 'JPEG', 10, 10, 50, 50); // adjust the position and size as needed
       let company=this.$store.state.security.user.tenant.company;
       let companyName = company?company.companyName:"";

      doc.text(companyName, 60, 10)
      doc.line(0, 12, 500, 12)

      doc.setFontSize(10)
      doc.setTextColor(150);

      let count = 0;
      let initialXStart = startXPos;

      data.forEach(data => {



        let text = data.text || "Empty String";
        let value = data.value;

        (value === null || value === undefined) ? "" : value.toString();
        doc.text(text, startXPos, startYPos);
        startXPos += hSpace;
        console.log("Text", text);
        console.log("Value", value);
        doc.text(value.toString(), startXPos, startYPos);
        startXPos += hSpace;
        count += 2;

        if (count === lineBreak) {

          startYPos = startYPos + vSpace;
          count = 0;
          startXPos = initialXStart;

          // addVSpace = false;
        }




      });


      var currentUser = this.currentUser;

      var footer = function (data) {
        console.log(data)
        doc.setFontSize(8);
        doc.setTextColor(150);
        let printedBy = "Printed By:" + currentUser + "  On: " + funcs.formatDateTimeToString(new Date()) + "\nfrom Easy Values";
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
}

</script>