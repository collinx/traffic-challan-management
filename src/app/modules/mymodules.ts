export class OFFENCE {
    code;
    description;
    points;
    cost;
  }

  export class OFFENDER {
    name;
    dl_no;
    dob;
    address;
    contact_number;
    dl_expiry;
    vehicle_plate;
  }

  export class OFFICER {
    name;
    precinct;
    badge_number;
    type;    
 }

export class CHALLAN {
   date:Date;
   location:String;
   challan_number:number;
   offence:number;
   offender:string;
   payment_due_date:Date;
   status:string;
   officer:string;
   
  }

 export class COURT{
     court_date;
     is_warrant_issued;
     arrest_status;
 } 

 export class USER{

    email;
    password;
    last_login;
 }