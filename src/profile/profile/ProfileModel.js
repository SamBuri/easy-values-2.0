const profileModel = {
  model: {
    profileType: "Individual",
    firstName: "",
    lastName: "",
    otherNames: "",
    birthDate: null,
    gender: "",
    maritalStatusId: "",
    countryId: "",
    spouseName: "",
    spouseContact: "",
    nOKin: "",
    nOKinContact: "",
    idTypeId: "",
    idNo: "",
    primaryPhoneNo: "",
    otherPhoneNos: "",
    email: "",
    homeAddress: "",
    residentialAddress: "",
    residenceCoordinates: "",
    addressDetails: "",
    joinDate: null,
    occupationId: "",
    workType: "",
    businessCategoryId: "",
    businessDescriptions: "",
    designation: "",
    businessName: "",
    businessLocation: "",
    workCoordinates: "",
    idNoVerified: false,
    phoneVerified: false,
    hidden: false,

    clear() {
      this.photo = null;
      this.firstName = "";
      this.lastName = "";
      this.otherNames = "";
      this.birthDate = null;
      this.gender = "";
      this.maritalStatusId = "";
      this.countryId = "";
      this.spouseName = "";
      this.spouseContact = "";
      this.nOKin = "";
      this.nOKinContact = "";
      this.idTypeId = "";
      this.idNo = "";
      this.primaryPhoneNo = "";
      this.otherPhoneNos = "";
      this.email = "";
      this.homeAddress = "";
      this.residentialAddress = "";
      this.residenceCoordinates = "";
      this.addressDetails = "";
      this.joinDate = null;
      this.occupationId = "";
      this.workType = "";
      this.businessCategoryId = "";
      this.businessDescriptions = "";
      this.designation = "";
      this.businessName = "";
      this.businessLocation = "";
      this.workCoordinates = "";
      this.idNoVerified = false;
      this.phoneVerified = false;
      this.hidden = false;
    },
    copy(obj) {
      this.id = obj.id;
      this.profileType = obj.profileType;
      this.photo = obj.photo;
      this.firstName = obj.firstName;
      this.lastName = obj.lastName;
      this.otherNames = obj.otherNames;
      this.birthDate = obj.birthDate;
      this.gender = obj.gender;
      this.maritalStatusId = obj.maritalStatusId;
      this.countryId = obj.countryId;
      this.spouseName = obj.spouseName;
      this.spouseContact = obj.spouseContact;
      this.nOKin = obj.nOKin;
      this.nOKinContact = obj.nOKinContact;
      this.idTypeId = obj.idTypeId;
      this.idNo = obj.idNo;
      this.primaryPhoneNo = obj.primaryPhoneNo;
      this.otherPhoneNos = obj.otherPhoneNos;
      this.fingerPrint = obj.fingerPrint;
      this.email = obj.email;
      this.homeAddress = obj.homeAddress;
      this.residentialAddress = obj.residentialAddress;
      this.residenceCoordinates = obj.residenceCoordinates;
      this.addressDetails = obj.addressDetails;
      this.joinDate = obj.joinDate;
      this.occupationId = obj.occupationId;
      this.workType = obj.workType;
      this.businessCategoryId = obj.businessCategoryId;
      this.businessDescriptions = obj.businessDescriptions;
      this.designation = obj.designation;
      this.businessName = obj.businessName;
      this.businessLocation = obj.businessLocation;
      this.workCoordinates = obj.workCoordinates;
      this.idNoVerified = obj.idNoVerified;
      this.phoneVerified = obj.phoneVerified;
      this.hidden = obj.hidden;
    },
    printOptions() {
      let data = [];
      data.push({
        text: "Profile Type",
        value: this.profile.profileType.displayKey,
      });
      data.push({ text: "Photo", value: this.profile.photo });
      data.push({ text: "First Name", value: this.profile.firstName });
      data.push({ text: "Last Name", value: this.profile.lastName });
      data.push({ text: "Other Names", value: this.profile.otherNames });
      data.push({ text: "Birth Date", value: this.profile.birthDate });
      data.push({ text: "Gender", value: this.profile.gender });
      data.push({
        text: "Marital Status",
        value: this.profile.maritalStatusId,
      });
      data.push({ text: "Country", value: this.profile.countryId });
      data.push({ text: "Spouse Name", value: this.profile.spouseName });
      data.push({ text: "Spouse Contact", value: this.profile.spouseContact });
      data.push({ text: "NO Kin", value: this.profile.nOKin });
      data.push({ text: "NO Kin Contact", value: this.profile.nOKinContact });
      data.push({ text: "Id Type", value: this.profile.idTypeId });
      data.push({ text: "Id No", value: this.profile.idNo });
      data.push({
        text: "Primary Phone No",
        value: this.profile.primaryPhoneNo,
      });
      data.push({ text: "Other Phone Nos", value: this.profile.otherPhoneNos });
      data.push({ text: "FingerPrint", value: this.profile.fingerPrint });
      data.push({ text: "Email", value: this.profile.email });
      data.push({ text: "Home Address", value: this.profile.homeAddress });
      data.push({
        text: "Residential Address",
        value: this.profile.residentialAddress,
      });
      data.push({
        text: "Residence Coordinates",
        value: this.profile.residenceCoordinates,
      });
      data.push({
        text: "Address Details",
        value: this.profile.addressDetails,
      });
      data.push({ text: "Join Date", value: this.profile.joinDate });
      data.push({ text: "Occupation", value: this.profile.occupationId });
      data.push({ text: "Work Type", value: this.profile.workType });
      data.push({
        text: "Business Category",
        value: this.profile.businessCategoryId,
      });
      data.push({
        text: "Business Description",
        value: this.profile.businessDescriptions,
      });
      data.push({ text: "Designation", value: this.profile.designation });
      data.push({ text: "Business Name", value: this.profile.businessName });
      data.push({
        text: "Business Location",
        value: this.profile.businessLocation,
      });
      data.push({
        text: "Work Coordinates",
        value: this.profile.workCoordinates,
      });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Profile",
      };
    },
  },
  path: "profiles",
  rules: {
    profileType: [(v) => !!v || "Profile Type is required"],
    firstName: [
      (v) => !!v || "First Name is required",
      (v) => v.length < 20 || "First Name length must be less or equal to 20",
    ],
    lastName: [
      (v) => !!v || "Last Name is required",
      (v) => v.length < 20 || "Last Name length must be less or equal to 20",
    ],
    otherNames: [
      (v) => v.length < 20 || "Other Names length must be less or equal to 20",
    ],
    birthDate: [(v) => !!v || "Birth Date is required"],
    gender: [(v) => !!v || "Gender is required"],
    maritalStatusId: [],
    countryId: [(v) => !!v || "Country is required"],
    spouseName: [(v) => v.length < 100 || "Spouse Name length must be less or equal to 100",
    ],
    spouseContact: [
      (v) =>
        !v ||
        v.length < 100 ||
        "Spouse Contact length must be less or equal to 100",
    ],
    nOKin: [
      (v) =>
        !v || v.length < 100 || "NO Kin length must be less or equal to 100",
    ],
    nOKinContact: [
      (v) =>
        !v ||
        v.length < 100 ||
        "NO Kin Contact length must be less or equal to 100",
    ],
    idTypeId: [(v) => !!v || "Id Type is required"],
    idNo: [
      (v) => !!v || "Id No is required",
      (v) => v.length < 100 || "Id No length must be less or equal to 100",
    ],
    primaryPhoneNo: [
      (v) => !!v || "Primary Phone No is required",
      (v) =>
        v.length < 30 || "Primary Phone No length must be less or equal to 30",
    ],
    otherPhoneNos: [
    ],
    email: [
      (v) =>
        !v || v.length < 100 || "Email length must be less or equal to 100",
    ],
    homeAddress: [
      (v) => !!v || "Home Address is required",
      (v) =>
        v.length < 200 || "Home Address length must be less or equal to 200",
    ],
    residentialAddress: [
      (v) => !!v || "Residential Address is required",
      (v) =>
        v.length < 200 ||
        "Residential Address length must be less or equal to 200",
    ],
    residenceCoordinates: [
      (v) =>
        !v ||
        v.length < 200 ||
        "Residence Coordinates length must be less or equal to 200",
    ],
    addressDetails: [
      (v) => !!v || "Address Details is required",
      (v) =>
        v.length < 200 || "Address Details length must be less or equal to 200",
    ],
    joinDate: [(v) => !!v || "Join Date is required"],
    occupationId: [(v) => !!v || "Occupation is required"],
    workType: [(v) => !!v || "Work Type is required"],
    businessCategoryId: [(v) => !!v || "Business Category is required"],
    businessDescriptions: [
      (v) => !!v || "Business Description is required",
      (v) =>
        v.length < 200 ||
        "Business Description length must be less or equal to 200",
    ],
    designation: [
      (v) =>
        !v ||
        v.length < 100 ||
        "Designation length must be less or equal to 100",
    ],
    businessName: [
      (v) => !!v || "Business Name is required",
      (v) =>
        v.length < 100 || "Business Name length must be less or equal to 100",
    ],
    businessLocation: [
      (v) => !!v || "Business Location is required",
      (v) =>
        v.length < 100 ||
        "Business Location length must be less or equal to 100",
    ],
    workCoordinates: [
      (v) =>
        !v ||
        v.length < 100 ||
        "Work Coordinates length must be less or equal to 100",
    ],
    idNoVerified: [(v) => !!v || "Id must be verified"],
    phoneVerified: [(v) => !!v || "Phone must be verified"],
  },
};

export default profileModel;
