/*
The logic for this component was written based off the article below, and is verified to work until at least January of 2036

ref: https://artofmemory.com/blog/how-to-calculate-the-day-of-the-week/
*/

import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-appointment-picker',
  imports: [],
  templateUrl: './appointment-picker.html',
  styleUrl: './appointment-picker.css',
})
export class AppointmentPicker {

  /*CALENDAR ILLUMINATION LOGIC ON CLICK BEGINS*/
  selectedDate = signal<string | null>(null);

  toggleDate(dateCurrentlyPicked: string) {
    this.selectedDate.update((datePreviouslyPicked) => {
      if(datePreviouslyPicked === dateCurrentlyPicked){
          return null;
      }
      return dateCurrentlyPicked;
    });
  }

  dateButtonClicked(dateCurrentlyPicked: string): boolean {
    console.log(this.selectedDate() === dateCurrentlyPicked);
    return this.selectedDate() === dateCurrentlyPicked;
  }
  /*CALENDAR ILLUMINATION LOGIC ON CLICK ENDS*/


/*TIME ILLUMINATION LOGIC ON CLICK BEGINS*/

selectedTime = signal<number | null>(null);

toggleTimeButton = (timeCurrentlyPicked : number) =>{
  this.selectedTime.update((timePreviouslyPicked)=>{
    if(timeCurrentlyPicked === timePreviouslyPicked){
      return null;
    }
    return timeCurrentlyPicked;
  });
}

timeButtonClicked = (timeCurrentlyPicked : number): boolean => {
  return this.selectedTime() === timeCurrentlyPicked;
}




  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth() + 1;
  FIRST_DAY = 1;

    timeBlock = new Map<number, string>([
        [1, "7:00AM"],
        [2, "7:30AM"],
        [3, "8:00AM"],
        [4, "8:30AM"],
        [5, "9:00AM"],
        [6, "9:30AM"],
        [7, "10:00AM"],
        [8, "10:30AM"],
        [9, "11:00AM"],
        [10, "11:30AM"],
        [11, "12:00PM"],
        [12, "12:30PM"],
        [13, "1:00PM"],
        [14, "1:30PM"],
        [15, "2:00PM"],
        [16, "2:30PM"],
        [17, "3:00PM"],
        [18, "3:30PM"],
        [19, "4:00PM"],
        [20, "4:30PM"],
    ]);

    monthBlock = new Map<number, string>([
        [1, "January"],
        [2, "February"],
        [3, "March"],
        [4, "April"],
        [5, "May"],
        [6, "June"],
        [7, "July"],
        [8, "August"],
        [9, "September"],
        [10, "October"],
        [11, "November"],
        [12, "December"],
    ]);

    dayBlock = new Map<string, string>([
      ["d1", "01"],
      ["d2", "02"],
      ["d3", "03"],
      ["d4", "04"],
      ["d5", "05"],
      ["d6", "06"],
      ["d7", "07"],
      ["d8", "08"],
      ["d9", "09"],
      ["d10", "10"],
      ["d11", "11"],
      ["d12", "12"],
      ["d13", "13"],
      ["d14", "14"],
      ["d15", "15"],
      ["d16", "16"],
      ["d17", "17"],
      ["d18", "18"],
      ["d19", "19"],
      ["d20", "20"],
      ["d21", "21"],
      ["d22", "22"],
      ["d23", "23"],
      ["d24", "24"],
      ["d25", "25"],
      ["d26", "26"],
      ["d27", "27"],
      ["d28", "28"],
      ["d29", "29"],
      ["d30", "30"],
      ["d31", "31"],
      ["d32", ""],
      ["d33", ""],
      ["d34", ""],
      ["d35", ""],
      ["d36", ""],
      ["d37", ""],
      ["d38", ""],
      ["d39", ""],
      ["d40", ""],
      ["d41", ""],
      ["d42", ""],
    ]);

    dateCode = new Map<number, string>([
        [0, "Sunday"],
        [1, "Monday"],
        [2, "Tuesday"],
        [3, "Wednesday"],
        [4, "Thursday"],
        [5, "Friday"],
        [6, "Saturday"],
    ]);

    monthCode = new Map<number, number>([
        [1, 0],
        [2, 3],
        [3, 3],
        [4, 6],
        [5, 1],
        [6, 4],
        [7, 6],
        [8, 2],
        [9, 5],
        [10, 0],
        [11, 3],
        [12, 5],
    ]);

    monthCodeFormula = (month: number): number => {
        return this.monthCode.get(month) as number;
    }


    centuryCode = new Map<number, number>([
        [2000, 6],
        [2100, 4],
    ])

    centuryCodeFormula = (currentYear: number) =>{
        if (currentYear < 2100 && currentYear >= 2000) {
            return this.centuryCode.get(2000) as number
        }
            return this.centuryCode.get(2100) as number

    }

    yearCodeFormula = (currentYear: number): number => {
        let currentYearLastTwoDigits = currentYear % 100;
        let yearCode = Math.floor((currentYearLastTwoDigits + (currentYearLastTwoDigits / 4)) % 7);
        return yearCode;
    }

    leapYearFormula = (yearCode: number, monthCode: number): number => {
        if (yearCode % 4 == 0 && monthCode <= 2) {
            return -1
        }
        return 0;
    }

    startMonthOnCalculatedDay =
        (currentYear: number,
         currentMonth: number,
         ): number => {
        let sum = this.yearCodeFormula(currentYear);
        sum = sum + this.monthCodeFormula(currentMonth);
        sum = sum + this.centuryCodeFormula(currentYear);
        sum = sum + this.FIRST_DAY;
        sum = sum + this.leapYearFormula(currentYear, currentMonth);
        return sum % 7;
    }

}
