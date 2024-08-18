import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
import funcs from "./funcs";
import { defineTenantStore } from "@/organisation/tenant/TenantStore";
import { useAuthStore } from "@/store/authstore";
export default function printPDF(options){


    let data = options.data;
    let startXPos = options.startXPos;
    let startYPos = options.startYPos;
    let hSpace = options.hSpace;
    let vSpace = options.vSpace;
    let lineBreak = options.lineBreak;
    let title = options.title;
    let format = options.format || "a6"

    console.log("Options", options);
    const doc = new jsPDF({
      format: format,

    });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20)
    doc.setTextColor(255, 0, 0);
    const tenantStore = defineTenantStore();

     let company =tenantStore.getCurrentCompany;
     let companyName = company?company.companyName:"";
     let titleX = format==='a6'?10:60
    doc.text(companyName, titleX, 10)
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

    const authstore = useAuthStore();


    autoTable(doc, {
      head: [],
      body: [],
      didDrawPage:  (data) =>{
        // This is where you can add content to each page
        // For example, adding a header and footer

         doc.setFontSize(8);
      doc.setTextColor(150);
      let printedBy = "Printed By:" + authstore.user.fullName + "  On: " + funcs.formatDateTimeToString(new Date()) + "\nfrom Easy Values";

      // doc.text('Header text', data.settings.margin.left, 10);//HEADER
        doc.text(printedBy, data.settings.margin.left, doc.internal.pageSize.height - 10);
      },
      // Other configurations...
    });






    window.open(doc.output('bloburl'), title);

    // Remove the document from memory when the window is closed
    window.addEventListener('unload', function () {
      window.URL.revokeObjectURL(doc.output('bloburl'));
    });




}
