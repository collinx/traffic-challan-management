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

export class CHALLAN {
   url: string;
   date: Date;
   location: string;
   challan_number: number;
   offence: OFFENCE;
   vehicle: Vehicle;
   person_details: COMMUTER;
   payment_due_date: Date;
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
    }
  }

 export class COURT {
     court_date: Date;
     is_warrant_issued: boolean;
     arrest_status: String;
 }

 export class USER {

    email: string;
    password: string;
    last_login: Date;
 }
 
 export class InlineResponse200 {
  processingTime: InlineResponse200ProcessingTime;
  imgWidth: number;
  imgHeight: number;
  creditCost: number;
  creditsMonthlyUsed: number;
  creditsMonthlyTotal: number;
  results: Array<PlateDetails>;
  regionsOfInterest: Array<RegionOfInterest>;
  epochTime: number;
  version: number;
  dataType: string;
  constructor() {
    this.processingTime = new InlineResponse200ProcessingTime();
    this.results = new Array<PlateDetails>();
        this.regionsOfInterest = new  Array<RegionOfInterest>();
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
  matchesTemplate: number;
  requestedTopn: number;
  processingTimeMs: number;
  confidence: number;
  region: string;
  regionConfidence: number;
  coordinates: Array<Coordinate>;
  candidates: Array<PlateCandidate>;
  vehicleRegion: RegionOfInterest;
  vehicle: VehicleDetails;
  constructor() {
    this.coordinates = new Array<Coordinate>();
        this.candidates = new Array<PlateCandidate>();
    this.vehicleRegion = new RegionOfInterest();
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
  matchesTemplate: number;
}

export class VehicleDetails {
  color: Array<VehicleCandidate>;
  make: Array<VehicleCandidate>;
  makeModel: Array<VehicleCandidate>;
  bodyType: Array<VehicleCandidate>;
  constructor() {
    this.color = new Array<VehicleCandidate>();
    this.make = new Array<VehicleCandidate>();
    this.makeModel = new Array<VehicleCandidate>();
    this.bodyType = new Array<VehicleCandidate>();
    }
}

export class VehicleCandidate {
  name: string;
  confidence: number;
}
 
export class Vehicle {
  color: string;
  make: string;
  makeModel: string;
  bodyType: string;
  vehicle_plate: string;
}
