/*
The logic for this component was written based off the article below, and is verified to work until at least January of 2036

ref: https://artofmemory.com/blog/how-to-calculate-the-day-of-the-week/
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-picker',
  imports: [],
  templateUrl: './appointment-picker.html',
  styleUrl: './appointment-picker.css',
})
export class AppointmentPicker {
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
        [19, "4:00OPM"],
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

    dayBlock = new Map<number, string>([
        [1, "1"],
        [2, "2"],
        [3, "3"],
        [4, "4"],
        [5, "5"],
        [6, "6"],
        [7, "7"],
        [8, "8"],
        [9, "9"],
        [10, "10"],
        [11, "11"],
        [12, "12"],
        [13, "13"],
        [14, "14"],
        [15, "15"],
        [16, "16"],
        [17, "17"],
        [18, "18"],
        [19, "19"],
        [20, "20"],
        [21, "21"],
        [22, "22"],
        [23, "23"],
        [24, "24"],
        [25, "25"],
        [26, "26"],
        [27, "27"],
        [28, "28"],
        [29, "29"],
        [30, "30"],
        [31, "31"],
        [32, ""],
        [33, ""],
        [34, ""],
        [35, ""],
        [36, ""],
        [37, ""],
        [38, ""],
        [39, ""],
        [40, ""],
        [41, ""],
        [42, ""],
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
