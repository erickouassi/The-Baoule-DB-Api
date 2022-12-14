//const data = require("./data");
const dataName = require("./db_date_with_name");
const dataCalendar = require("./db_calendar");


// Logic behind the functionalities
//import jstz from 'jstz';
var jstz = require('jstz');
const timezone = jstz.determine();
var localTime = jstz.determine().name();
//console.log(localTime);
//var serverTime = "Africa/Abidjan";

// current datetime string in America/Chicago timezone
let local_datetime_str = new Date().toLocaleString("en-US", { timeZone: localTime });

// create new Date object
//let date_local = new Date(local_datetime_str);
let d = new Date(local_datetime_str);
//let d = new Date("November 20, 2023 01:15:00");

// Weekday
let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let d_day = weekday[d.getDay()];
//console.log(d_day);


// Months
let allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let c_month_txt = allMonths[d.getMonth()];  // May
let p_month_txt = allMonths[d.getMonth()-1];  // April
let f_month_txt = allMonths[d.getMonth()+1];  // June
//console.log(p_month_txt);
//console.log(c_month_txt);
//console.log(f_month_txt);

// year as (YYYY) format
let d_yyyy = d.getFullYear();

// month as (MM) format
let d_month = d.getMonth() + 1;

// date as (DD) format
let d_dd = d.getDate();

// date time in YYYY-MM-DD format
let today = d_month + "/" + d_dd + "/" + d_yyyy; // 11/20/2022,
//console.log(today);

// Yesterday
const y = new Date(d);
y.setDate(y.getDate() - 1);
let y_dd = y.getDate(); // 17
let y_month = y.getMonth() +1;  // 11
let y_yyyy = y.getFullYear();  // 2022

let yesterday = y_month +'/'+ y_dd +'/'+ y_yyyy;   //  -> 11/19/2022
//console.log(yesterday);

// Tomorrow
const t = new Date(d);
t.setDate(t.getDate() + 1);
let t_dd = t.getDate(); // 19
let t_month = t.getMonth()+1;  // 11
let t_yyyy = t.getFullYear();  // 2022

let tomorrow = t_month +'/'+ t_dd +'/'+ t_yyyy;   //  -> 11/21/2022
//console.log(tomorrow);
//
const start_index = dataCalendar.map(i => i.date_short).indexOf("1/1");
//console.log(start_index);
const end_index = dataCalendar.map(i => i.date_short).indexOf("12/31");
//console.log(end_index);





class Controller {
     // =====> Start of English
    // getting all dataName
    async getAllNameData() {
      // return all dataName
      return new Promise((resolve, _) => resolve(dataName));
    }
// getting full year data
async getYearData() {
    return new Promise((resolve, reject) => {
      // get the data
     // slice from 1..3 - add 1 as the end index is not included
  const year_data = dataCalendar.slice(start_index, end_index + 1);
  
      if (year_data) {
        // return the data
        resolve(year_data);
      } else {
        // return an error
        reject(`Object Year data  not found `);
      }
    });
  }
  	  // getting this month data
        async getThisMonth() {
            return new Promise((resolve, reject) => {
              // get the data
              let monthNow = dataCalendar.filter(function(monthIn) {
            return monthIn.month_en == c_month_txt; });
           // console.log(monthNow);
        //
              if (monthNow) {
                // return the data
                resolve(monthNow);
              } else {
                // return an error
                reject(`Today object not found `);
              }
            });
          }
          //
      	  // getting past month data
            async getPastMonth() {
                return new Promise((resolve, reject) => {
                  // get the data
                  let pastMonth = dataCalendar.filter(function(monthOut) {
                return monthOut.month_en == p_month_txt; });
               // console.log(pastMonth);
            //
                  if (pastMonth) {
                    // return the data
                    resolve(pastMonth);
                  } else {
                    // return an error
                    reject(`Today object not found `);
                  }
                });
              }
              //
              
                      // getting next month data
            async getNextMonth() {
                return new Promise((resolve, reject) => {
                  // get the data
                  let nextMonth = dataCalendar.filter(function(monthNext) {
                return monthNext.month_en == f_month_txt; });
               // console.log(nextMonth);
            //
                  if (nextMonth) {
                    // return the data
                    resolve(nextMonth);
                  } else {
                    // return an error
                    reject(`Today object not found `);
                  }
                });
              }
              //
    // getting today data
    async getTodayData() {
        return new Promise((resolve, reject) => {
          // get the data
          let todayData = dataCalendar.filter(function(todayIn) {
        return todayIn.date == today; });
       // console.log(todayData);
    //
          if (todayData) {
            // return the data
            resolve(todayData);
          } else {
            // return an error
            reject(`Today object not found `);
          }
        });
      }
      
      // getting yesterday data
      async getYesterdayData() {
        return new Promise((resolve, reject) => {
          // get the data
          let yesterdayData = dataCalendar.filter(function(yesterdayIn) {
        return yesterdayIn.date == yesterday; });
       // console.log(yesterdayData);
          if (yesterdayData) {
            // return the data
            resolve(yesterdayData);
          } else {
            // return an error
            reject(`Yesterday object not found `);
          }
        });
      }
      
       // getting tomorrow data
       async getTomorrowData() {
        return new Promise((resolve, reject) => {
          // get the data
          let tomorrowData = dataCalendar.filter(function(tomorrowIn) {
        return tomorrowIn.date == tomorrow; });
       // console.log(tomorrowData);
          if (tomorrowData) {
            // return the data
            resolve(tomorrowData);
          } else {
            // return an error
            reject(`Tomorrow object not found `);
          }
        });
      }
    //
   // getting today data
    async getTodayDataName() {
        return new Promise((resolve, reject) => {
          // get the data
          let todayDataName = dataName.filter(function(todayName) {
        return todayName.date == d_day; });
        //console.log(todayDataName);
    //
          if (todayDataName) {
            // return the data
            resolve(todayDataName);
          } else {
            // return an error
            reject(`Today object not found `);
          }
        });
      }
      //
      	     // getting today day data
    async getDayDataName() {
      return new Promise((resolve, reject) => {
        // get the data
        let dayDataName = dataName.filter(function(dayName) {
      return dayName.dayEnglish == d_day; });
      //console.log(todayDataName);
        if (dayDataName) {
          // return the data
          resolve(dayDataName);
        } else {
          // return an error
          reject(`Today object not found `);
        }
      });
    }
  
  //
  // getting a single data
  async getSingleData(X) {
    return new Promise((resolve, reject) => {
      // get the data
      let singleData = dataName.find((Y) => Y.dayEnglish === X);

      if (singleData) {
        // return the data
        resolve(singleData);
      } else {
        // return an error
        reject(`Object with id ${X} not found `);
      }
    });
  }
//
    // ===> End of English
    // add above
  }
  module.exports = Controller;