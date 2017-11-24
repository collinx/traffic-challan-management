export class OFFENCE {
    code: number;
    description: string;
    points: number;
    cost: number;
  }

  export class COMMUTER {
    name: string;
    dl_no: string;
    dob: Date;
    address: string;
    contact_number: number;
    dl_expiry: Date;
    vehicle_plate: string;
  }

  export class OFFICER {
    name: string;
    precinct: string;
    badge_number: string;
    type: string;
    uid: string;
 }

 export class LOC {
   x: number;
   y: number;
 }

export class CHALLAN {
   url: string;
   date: string;
   location: LOC;
   challan_number: number;
   offence: OFFENCE;
   vehicle: Vehicle;
   person_details: COMMUTER;
   payment_due_date: string;
   status: string;
   officer: OFFICER;
   assignedto: OFFICER;
   court: COURT;
   constructor() {
    this.offence = new OFFENCE();
    this.person_details = new COMMUTER();
    this.vehicle = new Vehicle();
    this.officer = new OFFICER();
    this.assignedto = new OFFICER();
    this.court = new COURT();
    this.location = new LOC();
    }
  }

 export class COURT {
     court_date: string;
     is_warrant_issued: boolean;
     arrest_status: String;
 }

 export class USER {

    email: string;
    password: string;
    last_login: Date;
 }
 
 export class InlineResponse200 {
  processing_time: InlineResponse200ProcessingTime;
  img_width: number;
  img_height: number;
  credit_cost: number;
  error: boolean;
  credits_monthly_used: number;
  credits_monthly_total: number;
  results: Array<PlateDetails>;
  regions_of_interest: Array<RegionOfInterest>;
  epoch_time: number;
  version: number;
  data_type: string;
  uuid: string;
  constructor() {
    this.processing_time = new InlineResponse200ProcessingTime();
    this.results = new Array<PlateDetails>();
        this.regions_of_interest = new  Array<RegionOfInterest>();
    }
 }

 export class InlineResponse200ProcessingTime {
  total: number;
  plates: number;
  vehicles: number;
}


 export class RegionOfInterest {
   x: number;
   y: number;
   width: number;
   height: number;
 }

 export class PlateDetails {
  plate: string;
  plate_index: number;
  matches_template: number;
  requested_topn: number;
  processing_time_ms: number;
  confidence: number;
  region: string;
  region_confidence: number;
  coordinates: Array<Coordinate>;
  candidates: Array<PlateCandidate>;
  vehicle_region: RegionOfInterest;
  vehicle: VehicleDetails;
  constructor() {
    this.coordinates = new Array<Coordinate>();
    this.candidates = new Array<PlateCandidate>();
    this.vehicle_region = new RegionOfInterest();
    this.vehicle = new VehicleDetails();
    }
 }

 export class Coordinate {
  x: number;
  y: number;
}

export class PlateCandidate {
  plate: string;
  confidence: number;
  matches_template: number;
}

export class VehicleDetails {
  color: Array<VehicleCandidate>;
  make: Array<VehicleCandidate>;
  make_model: Array<VehicleCandidate>;
  body_type: Array<VehicleCandidate>;
  constructor() {
    this.color = new Array<VehicleCandidate>();
    this.make = new Array<VehicleCandidate>();
    this.make_model = new Array<VehicleCandidate>();
    this.body_type = new Array<VehicleCandidate>();
    }
}

export class VehicleCandidate {
  name: string;
  confidence: number;
}
 
export class Vehicle {
  color: string;
  make: string;
  make_model: string;
  body_type: string;
  vehicle_plate: string;
}
