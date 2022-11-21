//index.js
const http = require("http");
const AppData = require("./controller");

const PORT = process.env.PORT || 5007;

const server = http.createServer(async (req, res) => {
    // =====> Start of English
    // / : GET 
if (req.url === "/" && req.method === "GET") {
    // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "*" });
       res.end(JSON.stringify({ message: "App is active! 🚀" }));
   }
// /api/v1 : GET
else if (req.url === "/v1/names" && req.method === "GET") {
    // get the data.
    const allData = await new AppData().getAllNameData();
    // set the status code, and content-type
    res.writeHead(200, { "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*" });
    // send the data
    res.end(JSON.stringify(allData));
}
//
    // /v1 : GET Year Data
    else if (req.url === "/v1/year" && req.method === "GET") {
        // get year data.
       const dataFullYear = await new AppData().getYearData();
       // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "*"  });
       // send the data
       res.end(JSON.stringify(dataFullYear));
   }
   // /api/v1/month : GET
   else if (req.url === "/v1/month" &&
   req.method === "GET") {
          // get month data.
         const monthData = await new AppData().getThisMonth();
         // set the status code, and content-type
         res.writeHead(200, { "Content-Type": "application/json",
         "Access-Control-Allow-Origin": "*"  });
         // send the data
         res.end(JSON.stringify(monthData));
     }
     //
        // /api/v1/last_month : GET
   else if (req.url === "/v1/last_month" &&
   req.method === "GET") {
          // get month data.
         const last_monthData = await new AppData().getPastMonth();
         // set the status code, and content-type
         res.writeHead(200, { "Content-Type": "application/json",
         "Access-Control-Allow-Origin": "*"  });
         // send the data
         res.end(JSON.stringify(last_monthData));
     }
     //
	    // /api/v1/next_month : GET
   else if (req.url === "/v1/next_month" &&
   req.method === "GET") {
          // get month data.
         const next_monthData = await new AppData().getNextMonth();
         // set the status code, and content-type
         res.writeHead(200, { "Content-Type": "application/json",
         "Access-Control-Allow-Origin": "*"  });
         // send the data
         res.end(JSON.stringify(next_monthData));
     }
     //
   // /api/v1/today : GET
   else if (req.url === "/v1/today" &&
   req.method === "GET") {
          // get today data.
         const todayData = await new AppData().getTodayData();
         // set the status code, and content-type
         res.writeHead(200, { "Content-Type": "application/json",
         "Access-Control-Allow-Origin": "*"  });
         // send the data
         res.end(JSON.stringify(todayData));
     }
     //
     // /api/v1/yesterday : GET
     else if (req.url === "/v1/yesterday" &&
   req.method === "GET") {
          // get yesterday data.
         const yesterdayData = await new AppData().getYesterdayData();
         // set the status code, and content-type
         res.writeHead(200, { "Content-Type": "application/json",
         "Access-Control-Allow-Origin": "*"  });
         // send the data
         res.end(JSON.stringify(yesterdayData));
     }
     //
     // /api/v1/tomorrow : GET
     else if (req.url === "/v1/tomorrow" &&
   req.method === "GET") {
          // get tomorrow data.
         const tomorrowData = await new AppData().getTomorrowData();
         // set the status code, and content-type
         res.writeHead(200, { "Content-Type": "application/json",
         "Access-Control-Allow-Origin": "*"  });
         // send the data
         res.end(JSON.stringify(tomorrowData));
     }
     //
  // /api/v1/sunday : GET
  else if (req.url === "/v1/sunday" &&
  req.method === "GET") {
         // get sunday data.
        const sundayData = await new AppData().getSundayData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(sundayData));
    }
    //
    // /api/v1/monday : GET
    else if (req.url === "/v1/monday" &&
  req.method === "GET") {
         // get monday data.
        const mondayData = await new AppData().getMondayData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(mondayData));
    }
    //
    // /api/v1/tuesday : GET
    else if (req.url === "/v1/tuesday" &&
  req.method === "GET") {
         // get tuesday data.
        const tuesdayData = await new AppData().getTuesdayData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(tuesdayData));
    }
    //
// /api/v1/wednesday : GET
else if (req.url === "/v1/wednesday" &&
req.method === "GET") {
     // get wednesday data.
    const wednesdayData = await new AppData().getWednesdayData();
    // set the status code, and content-type
    res.writeHead(200, { "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"  });
    // send the data
    res.end(JSON.stringify(wednesdayData));
}
//
// /v1 : GET thursday Data
else if (req.url === "/v1/thursday" && req.method === "GET") {
    // get thursday data.
   const datathursday = await new AppData().getThursdayData();
   // set the status code, and content-type
   res.writeHead(200, { "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*"  });
   // send the data
   res.end(JSON.stringify(datathursday));
}
//
   // /v1 : GET friday Data
else if (req.url === "/v1/friday" && req.method === "GET") {
    // get friday data.
   const datafriday = await new AppData().getFridayData();
   // set the status code, and content-type
   res.writeHead(200, { "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*"  });
   // send the data
   res.end(JSON.stringify(datafriday));
}
//
// /v1 : GET saturday Data
else if (req.url === "/v1/saturday" && req.method === "GET") {
    // get saturday data.
   const datasaturday = await new AppData().getSaturdayData();
   // set the status code, and content-type
   res.writeHead(200, { "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*"  });
   // send the data
   res.end(JSON.stringify(datasaturday));
}
//
	  // /api/v1/today_name : GET
      else if (req.url === "/v1/today_name" &&
      req.method === "GET") {
             // get today data.
            const todayDataName = await new AppData().getTodayDataName();
            // set the status code, and content-type
            res.writeHead(200, { "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"  });
            // send the data
            res.end(JSON.stringify(todayDataName));
        }
        //
// ===> End of English

// Add above

// No route present
else {
    res.writeHead(404, { "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"  });
    res.end(JSON.stringify({ message: "Route not found 💣" }));
}
});


server.listen(PORT, () => {
console.log(`server started on port: ${PORT}`);
});

// I will add credit or inspiration later.
// Avoid a single error from crashing the server in production.
process.on("uncaughtException", (...args) => console.error(args));
process.on("unhandledRejection", (...args) => console.error(args));