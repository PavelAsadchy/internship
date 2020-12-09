import { IBooking } from '../models/booking.model';

export enum BookingOptionsType {
  BOOKING_CHANNEL = 'BOOKING_CHANNEL',
  PICK_UP_TIME = 'PICK_UP_TIME',
  PICK_UP_POINT = 'PICK_UP_POINT',
  PICK_UP_ADDRESS = 'PICK_UP_ADDRESS',
  DROP_OFF_POINT = 'DROP_OFF_POINT',
  DROP_OFF_ADDRESS = 'DROP_OFF_ADDRESS',
  VEHICLE = 'VEHICLE',
  CUSTOMER_PHONE = 'CUSTOMER_PHONE',
  CUSTOMER_EMAIL = 'CUSTOMER_EMAIL',
  CUSTOMER_NAME = 'CUSTOMER_NAME',
  PASSENGER_PHONE = 'PASSENGER_PHONE',
  PASSENGER_NAME = 'PASSENGER_NAME',
  PAYMENT_CHANNEL = 'PAYMENT_CHANNEL',
  PAYMENT_TYPE = 'PAYMENT_TYPE',
  PAYMENT_OPTIONS = 'PAYMENT_OPTIONS',
  PAYMENT_EXTRAS = 'PAYMENT_EXTRAS',
  DRIVER_NOTE = 'DRIVER_NOTE',
  DISPATCHER_NOTE = 'DISPATCHER_NOTE',
}

export enum BookingChannelOptions {
  CALL,
  EMAIL,
  WALKING_ROCCO,
  CONCIERGE,
  GOODS_DELIVERY,
  MOBILE_APP,
  BOT,
}

export const BOOKING_CHANNEL_OPTIONS = {
  channel: {
    [BookingChannelOptions[BookingChannelOptions.CALL]]: {
      name: 'Call',
    },
    [BookingChannelOptions[BookingChannelOptions.EMAIL]]: {
      name: 'Email',
    },
    [BookingChannelOptions[BookingChannelOptions.WALKING_ROCCO]]: {
      name: 'Walking Rocco',
    },
    [BookingChannelOptions[BookingChannelOptions.CONCIERGE]]: {
      name: 'Concierge',
    },
    [BookingChannelOptions[BookingChannelOptions.GOODS_DELIVERY]]: {
      name: 'Goods Delivery',
    },
    [BookingChannelOptions[BookingChannelOptions.MOBILE_APP]]: {
      name: 'Mobile App',
    },
    [BookingChannelOptions[BookingChannelOptions.BOT]]: {
      name: 'Bot',
    },
  },
};

export enum PickUpTimeOptions {
  NOW,
  LATER,
}

export enum PickUpPointOptions {
  ADDRESS,
  AIRPORT,
  ROCCO,
  HEAD_OFFICE,
}

export const PICK_UP_OPTIONS = {
  time: {
    [PickUpTimeOptions[PickUpTimeOptions.NOW]]: {
      name: 'Now',
    },
    [PickUpTimeOptions[PickUpTimeOptions.LATER]]: {
      name: 'Later',
    },
  },
  point: {
    [PickUpPointOptions[PickUpPointOptions.ADDRESS]]: {
      name: 'Adress',
    },
    [PickUpPointOptions[PickUpPointOptions.AIRPORT]]: {
      name: 'Airport',
    },
    [PickUpPointOptions[PickUpPointOptions.ROCCO]]: {
      name: 'Rocco',
    },
    [PickUpPointOptions[PickUpPointOptions.HEAD_OFFICE]]: {
      name: 'Head Office',
    },
  },
};

export enum DropOffPointOptions {
  ADDRESS,
  AIRPORT,
  ROCCO,
  HEAD_OFFICE,
  INDEFINITE,
}

export const DROP_OFF_OPTIONS = {
  point: {
    [DropOffPointOptions[DropOffPointOptions.ADDRESS]]: {
      name: 'Address',
    },
    [DropOffPointOptions[DropOffPointOptions.AIRPORT]]: {
      name: 'Airport',
    },
    [DropOffPointOptions[DropOffPointOptions.ROCCO]]: {
      name: 'Rocco',
    },
    [DropOffPointOptions[DropOffPointOptions.HEAD_OFFICE]]: {
      name: 'Head Office',
    },
    [DropOffPointOptions[DropOffPointOptions.INDEFINITE]]: {
      name: 'Indefinite',
    },
  },
};

export enum VehicleOptions {
  CAB,
  BRANDED_STANDART_CAB,
  VAN,
  EXECUTIVE_CAB,
  EXECUTIVE_VAN,
  LUXURY_EXECUTIVE,
  MINI_BUS,
  RESTRICTED_MOBILITY,
  VINTAGE,
  LUXURY_EXEC_VAN,
}

export const VEHICLE_OPTIONS = {
  items: {
    [VehicleOptions[VehicleOptions.CAB]]: {
      name: 'Cab',
      img: 'assets/vehicles/cab.svg',
      capacity: '1-4',
      abbr: 'C',
    },
    [VehicleOptions[VehicleOptions.BRANDED_STANDART_CAB]]: {
      name: 'Branded standart Cab',
      img: 'assets/vehicles/branded-stand-cab.svg',
      capacity: '1-4',
      abbr: 'BSC',
    },
    [VehicleOptions[VehicleOptions.VAN]]: {
      name: 'Van',
      img: 'assets/vehicles/van.svg',
      capacity: '5-8',
      abbr: 'V',
    },
    [VehicleOptions[VehicleOptions.EXECUTIVE_CAB]]: {
      name: 'Executive Cab',
      img: 'assets/vehicles/exec-cab.svg',
      capacity: '1-4',
      abbr: 'EC',
    },
    [VehicleOptions[VehicleOptions.EXECUTIVE_VAN]]: {
      name: 'Executive Van',
      img: 'assets/vehicles/exec-van.svg',
      capacity: '5-8',
      abbr: 'EV',
    },
    [VehicleOptions[VehicleOptions.LUXURY_EXECUTIVE]]: {
      name: 'Luxury Executive',
      img: 'assets/vehicles/luxury-exec.svg',
      capacity: '1-4',
      abbr: 'LE',
    },
    [VehicleOptions[VehicleOptions.MINI_BUS]]: {
      name: 'Mini Bus',
      img: 'assets/vehicles/mini-bus.svg',
      capacity: '9-14',
      abbr: 'MB',
    },
    [VehicleOptions[VehicleOptions.RESTRICTED_MOBILITY]]: {
      name: 'Restricted Mobility',
      img: 'assets/vehicles/restr-mobility.svg',
      capacity: '1-4',
      abbr: 'RM',
    },
    [VehicleOptions[VehicleOptions.VINTAGE]]: {
      name: 'Vintage',
      img: 'assets/vehicles/vintage.svg',
      capacity: '1-2',
      abbr: 'VG',
    },
    [VehicleOptions[VehicleOptions.LUXURY_EXEC_VAN]]: {
      name: 'Luxury Exec. Van',
      img: 'assets/vehicles/luxury-exec-van.svg',
      capacity: '5-8',
      abbr: 'LEV',
    },
  },
};

export enum PaymentChannels {
  IN_VEHICLE,
  OVER_THE_COUNTER,
  INVOICE,
}

export enum PaymentTypes {
  CASH,
}

export enum PaymentBasicOptions {
  WILLING_TO_SHARE,
}

export enum PaymentExtraOptions {
  BABY_SEAT,
  IMMEDIATE_RETURN,
  NO_LUGGAGE,
  EXTRA_LUGGAGE,
  STATION_WAGON,
  PET_ONBOARD,
  RECEIPT,
  RESTRICTED_MOBILITY,
  STEP_STOOL,
  ARRIVAL_PACK,
  KEYS_FROM_OFFICE,
  MALE_DRIVER,
  FEMALE_DRIVER,
}

export const PAYMENT_OPTIONS = {
  paymentOptions: {
    channels: {
      [PaymentChannels[PaymentChannels.IN_VEHICLE]]: {
        name: 'In Vehicle',
      },
      [PaymentChannels[PaymentChannels.OVER_THE_COUNTER]]: {
        name: 'Over The Counter',
      },
      [PaymentChannels[PaymentChannels.INVOICE]]: {
        name: 'Invoice',
      },
    },
    types: {
      [PaymentTypes[PaymentTypes.CASH]]: {
        name: 'Cash',
      },
    },
  },
};

// export const CHECK_BASIC_OPTIONS = [
//   {
//     [PaymentBasicOptions[PaymentBasicOptions.WILLING_TO_SHARE]]: {
//       name: 'Willing to share',
//     },
//   },
// ];

// export const CHECK_EXTRA_OPTIONS = [
//   {
//     [PaymentExtraOptions[PaymentExtraOptions.BABY_SEAT]]: {
//       name: 'Baby seat (+€5)',
//     },
//   },
//   {
//     [PaymentExtraOptions[PaymentExtraOptions.IMMEDIATE_RETURN]]: {
//       name: 'Immediate Return (Extra Fee)',
//     },
//   },
//   {
//     [PaymentExtraOptions[PaymentExtraOptions.NO_LUGGAGE]]: {
//       name: 'No Luggage',
//     },
//   },
//   {
//     [PaymentExtraOptions[PaymentExtraOptions.EXTRA_LUGGAGE]]: {
//       name: 'Extra Luggage',
//     },
//   },
//   {
//     [PaymentExtraOptions[PaymentExtraOptions.STATION_WAGON]]: {
//       name: 'Station Wagon',
//     },
//   },
//   {
//     [PaymentExtraOptions[PaymentExtraOptions.PET_ONBOARD]]: {
//       name: 'Pet Onboard',
//     },
//   },
//   {
//     [PaymentExtraOptions[PaymentExtraOptions.RECEIPT]]: { name: 'Receipt' },
//   },
//   {
//     [PaymentExtraOptions[PaymentExtraOptions.RESTRICTED_MOBILITY]]: {
//       name: 'Restricted Mobility',
//     },
//   },
//   {
//     [PaymentExtraOptions[PaymentExtraOptions.STEP_STOOL]]: {
//       name: 'Step Stool',
//     },
//   },
//   {
//     [PaymentExtraOptions[PaymentExtraOptions.ARRIVAL_PACK]]: {
//       name: 'Arrival Pack',
//     },
//   },
//   {
//     [PaymentExtraOptions[PaymentExtraOptions.KEYS_FROM_OFFICE]]: {
//       name: 'Keys From Office',
//     },
//   },
//   {
//     [PaymentExtraOptions[PaymentExtraOptions.MALE_DRIVER]]: {
//       name: 'Male Driver',
//     },
//   },
//   {
//     [PaymentExtraOptions[PaymentExtraOptions.FEMALE_DRIVER]]: {
//       name: 'Female Driver',
//     },
//   },
// ];

export const CHECK_BASIC_OPTIONS = [
  {
    name: 'Willing to share',
    value: PaymentBasicOptions[PaymentBasicOptions.WILLING_TO_SHARE],
  },
];

export const CHECK_EXTRA_OPTIONS = [
  {
    name: 'Baby seat (+€5)',
    value: PaymentExtraOptions[PaymentExtraOptions.BABY_SEAT],
  },
  {
    name: 'Immediate Return (Extra Fee)',
    value: PaymentExtraOptions[PaymentExtraOptions.IMMEDIATE_RETURN],
  },
  {
    name: 'No Luggage',
    value: PaymentExtraOptions[PaymentExtraOptions.NO_LUGGAGE],
  },
  {
    name: 'Extra Luggage',
    value: PaymentExtraOptions[PaymentExtraOptions.EXTRA_LUGGAGE],
  },
  {
    name: 'Station Wagon',
    value: PaymentExtraOptions[PaymentExtraOptions.STATION_WAGON],
  },
  {
    name: 'Pet Onboard',
    value: PaymentExtraOptions[PaymentExtraOptions.PET_ONBOARD],
  },
  {
    name: 'Receipt',
    value: PaymentExtraOptions[PaymentExtraOptions.RECEIPT],
  },
  {
    name: 'Restricted Mobility',
    value: PaymentExtraOptions[PaymentExtraOptions.RESTRICTED_MOBILITY],
  },
  {
    name: 'Step Stool',
    value: PaymentExtraOptions[PaymentExtraOptions.STEP_STOOL],
  },
  {
    name: 'Arrival Pack',
    value: PaymentExtraOptions[PaymentExtraOptions.ARRIVAL_PACK],
  },
  {
    name: 'Keys From Office',
    value: PaymentExtraOptions[PaymentExtraOptions.KEYS_FROM_OFFICE],
  },
  {
    name: 'Male Driver',
    value: PaymentExtraOptions[PaymentExtraOptions.MALE_DRIVER],
  },
  {
    name: 'Female Driver',
    value: PaymentExtraOptions[PaymentExtraOptions.FEMALE_DRIVER],
  },
];

export enum PickUpUrgency {
  ASAP = 'ASAP',
  MOBILE = 'MOBILE',
  DELIVERY = 'DELIVERY',
  WALKIN = 'WALKIN',
  CONCIERGE = 'CONCIERGE',
  IN_15_MIN = 'IN_15_MIN',
  STANDART = 'STANDART',
}

export const PICK_UP_URGENCY_COLORS = {
  [PickUpUrgency.ASAP]: {
    name: 'asap',
    class: 'asap',
    color: '#ffd900',
  },
  [PickUpUrgency.MOBILE]: {
    name: 'mobile',
    class: 'mobile',
    color: '#ff00ee',
  },
  [PickUpUrgency.DELIVERY]: {
    name: 'delivery',
    class: 'delivery',
    color: '#ff8c00',
  },
  [PickUpUrgency.WALKIN]: {
    name: 'walkin',
    class: 'walkin',
    color: '#3080ff',
  },
  [PickUpUrgency.CONCIERGE]: {
    name: 'concierge',
    class: 'concierge',
    color: '#64dd17',
  },
  [PickUpUrgency.IN_15_MIN]: {
    name: 'in 15 min',
    class: 'in-15-min',
    color: '#ff2f00',
  },
  [PickUpUrgency.STANDART]: {
    name: 'standart',
    class: 'standart',
    color: '#666666',
  },
};

export enum BookingStatusOptions {
  RESERVED = 'Reserved',
  DISPATCHED = 'Dispatched',
  TRIP_STARTED = 'Trip started',
  TRIP_ENDED = 'Trip ended',
}

export const BOOKING_DISPLAYED_COLUMNS = [
  'vehicle',
  'pickUpTime',
  'extras',
  'pickUp',
  'dropOff',
  'passenger',
  'customer',
  'price',
  'status',
];

export const MY_DP_FORMAT = {
  parse: {
    dateInput: ['l', 'LL'],
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export const DEFAULT_BOOKING_PARAMS: IBooking = {
  bookingChannel: BookingChannelOptions[BookingChannelOptions.CALL],
  pickUpAddress: '',
  pickUpPoint: PickUpPointOptions[PickUpPointOptions.ADDRESS],
  pickUpUrgencyFlag: PickUpTimeOptions[PickUpTimeOptions.NOW],
  dropOffAddress: '',
  dropOffPoint: DropOffPointOptions[DropOffPointOptions.ADDRESS],
  vehicle: null,
  customerEmail: '',
  customerName: '',
  customerPhone: '',
  passengerName: '',
  passengerPhone: '',
  paymentChannel: PaymentChannels[PaymentChannels.IN_VEHICLE],
  paymentType: PaymentTypes[PaymentTypes.CASH],
  paymentBasicOptions: CHECK_BASIC_OPTIONS,
  paymentExtraOptions: CHECK_EXTRA_OPTIONS,
  notesToDispatcher: '',
  notesToDriver: '',
};
