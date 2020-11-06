import { Injectable } from '@angular/core';
import { IBookingOptions } from '../models/bookingOptions.model';

@Injectable({
  providedIn: 'root'
})
export class CreateBookingCalculationService {

  bookingOptions: IBookingOptions = {
    bookingChannel: {
      channel: {
        label: 'Booking channel',
        selected: null,
        options: [
          'Call',
          'Email',
          'Walking Rocco',
          'Concierge',
          'Goods Delivery',
          'Mobile App',
          'Bot',    
        ],
      }
    },
    pickUp: {
      time: {
        label: 'Pick Up Client',
        selected: null,
        options: [
          'Now',
          'Later',
        ],
      },
      address: {
        caption: 'Pick Up',
        selected: null,
        options: [
          'Address',
          'Airport',
          'Rocco',
          'Head Office',
        ],
      },
    },
    dropOff: {
      address: {
        caption: 'Drop Off',
        selected: null,
        options: [
          'Address',
          'Airport',
          'Rocco',
          'Head Office',
          'Indefinite',
        ],
        note: 'If you choose the option "Indefinite", you have to set a custom price.',
      },
    },
    vehicle: {
      items: [
        {
          name: 'Cab',
          img: '',
          capacity: '1-4',
        },
        {
          name: 'Branded standart Cab',
          img: '',
          capacity: '1-4',
        },
        {
          name: 'Van',
          img: '',
          capacity: '5-8',
        },
        {
          name: 'Executive Cab',
          img: '',
          capacity: '1-4',
        },
        {
          name: 'Executive Van',
          img: '',
          capacity: '5-8',
        },
        {
          name: 'Luxury Executive',
          img: '',
          capacity: '1-4',
        },
        {
          name: 'Mini Bus',
          img: '',
          capacity: '9-14',
        },
        {
          name: 'Restricted Mobility',
          img: '',
          capacity: '1-4',
        },
        {
          name: 'Vintage',
          img: '',
          capacity: '1-2',
        },
        {
          name: 'Luxury Exec. Van',
          img: '',
          capacity: '5-8',
        },
      ],
    },
    customerInformation: {
      caption: 'Customer & Loyalty',
      phone: null,
      email: null,
      name: null,
    },
    passengerInformation: {
      caption: 'Passenger',
      phone: null,
      name: null,
    },
    paymentOptions: {
      channel: {
        label: 'Payment channel',
        selected: null,
        options: [
          'In Vehicle',
          'Over The Counter',
          'Invoice',  
        ],
      },
      type: {
        label: 'Payment type',
        selected: null,
        options: [
          'Cash',
        ],
      },
      basicOptions: {
        label: 'Payment Options',
        options: [
          {
            name: 'Willing to share',
            checked: false,
          },
        ],
      },
      extraOptions: {
        label: 'Extras',
        options: [
          {
            name: 'Baby seat',
            checked: false,
            note: '(+€5)',
          },
          {
            name: 'Immediate Return',
            checked: false,
            note: '(Extra Fee)',
          },
          {
            name: 'No Luggage',
            checked: false,
          },
          {
            name: 'Extra Luggage',
            checked: false,
          },
          {
            name: 'Station Wagon',
            checked: false,
          },
          {
            name: 'Pet Onboard',
            checked: false,
          },
          {
            name: 'Receipt',
            checked: false,
          },
          {
            name: 'Restricted Mobility',
            checked: false,
          },
          {
            name: 'Step Stool',
            checked: false,
          },
          {
            name: 'Arrival Pack',
            checked: false,
          },
          {
            name: 'Keys From Office',
            checked: false,
          },
          {
            name: 'Male Driver',
            checked: false,
          },
          {
            name: 'Female Driver',
            checked: false,
          },
        ],
        note: `When you check an extra option, the price is re-calculated because some options could increase it's value`,
      }
    },
  }
}
