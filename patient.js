class Patient {
    constructor(
        ID
        , Patient_ID
        , Name
        , Date_Of_Birth
        , Sex
        , Blood_Group
        , Father_Name
        , Mother_Name
        , Contact
        , Email
        , Occupation
        , District
        , Present_Village
        , Present_PO
        , Present_PS
        , Present_District
        , Trans_Date
    ) {
        this.ID = ID;
        this.Patient_ID = Patient_ID;
        this.Name = Name;
        this.Date_Of_Birth = Date_Of_Birth;
        this.Sex = Sex;
        this.Blood_Group = Blood_Group;
        this.Father_Name = Father_Name;
        this.Mother_Name = Mother_Name;
        this.Contact = Contact;
        this.Email = Email;
        this.Occupation = Occupation;
        this.District = District;
        this.Present_Village = Present_Village;
        this.Present_PO = Present_PO;
        this.Present_PS = Present_PS;
        this.Present_District = Present_District;
        this.Trans_Date = Trans_Date;
    }
}
module.exports = Patient;