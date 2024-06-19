import funcs from '../../utils/funcs'
const profileModel = {
    profile: {
        profileType: 'Individual',
        photo: null,
        firstName: "",
        lastName: "",
        otherNames: "",
        birthDate: "",
        gender: "",
        maritalStatusId: "",
        countryId: "",
        countryName: "",
        countryObj: null,
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
        joinDate: funcs.today(),
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
        associatedProfiles: [],

        clear() {
            this.photo = null;
            this.firstName = "";
            this.lastName = "";
            this.otherNames = "";
            this.birthDate = "",
                this.gender = "";
            this.maritalStatusId = "";
            this.countryId = "";
            this.countryObj = null;
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
            this.joinDate = funcs.today(),
                this.occupationId = "";
            this.workType = "";
            this.businessCategoryId = "";
            this.businessDescriptions = "";
            this.designation = "";
            this.businessName = "";
            this.profileType = 'Individual';
            this.businessLocation = "";
            this.workCoordinates = "";
            this.idNoVerified = false;
            this.phoneVerified = false;
            this.associatedProfiles= [];
        }
    },
    path: "profiles"
}

export default profileModel;
