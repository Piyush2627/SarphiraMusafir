export interface PopularDestination {
  name: string;
  days: number;
}

export interface QuickInfo {
  route: string;
  duration: string;
  startingPoint: string;
  endPoint: string;
}

export interface OverviewPoint {
  title: string;
  points: string[];
}

export interface Overview {
  about: string;
  quickInfo: QuickInfo;
  otherInfo: OverviewPoint[];
  travelVia: {
    byAir: string;
    byRail: string;
    byRoad: string;
  };
  note: string[];
}

export interface Site {
  name: string;
  descriptionPoints: string[];
  images: string[];
}

export interface ItineraryDay {
  day: number;
  mainTitle: string;
  mainDescription: string;
  images: string[];
  sites: Site[];
}

export interface EventPlan {
  name: string;
  days: number;
  night: number;
  price: number;
  discount: number;
  highlightDestination: PopularDestination[];
  transferIncluded: boolean;
  stayIncluded: boolean;
  mealsIncluded: boolean;
  sightseeingIncluded: boolean;
  overview: Overview;
  itinerary: ItineraryDay[];
  moreDetails: string[];
}
