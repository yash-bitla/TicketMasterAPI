// Refered from https://www.w3schools.com/howto/howto_js_sort_table.asp

function sortTable(n) {
    console.log("SORT")
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("eventData");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } 
            else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount ++;
        } 
        else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function createEvent(eventName, date, time, artist, artist_url, venue, genre, price, ticket_status, buy_ticket, seat_map){
    // console.log("hi")
    var parentDiv = document.createElement('div')
    parentDiv.id = "parentDiv"
    parentDiv.className = "parentDiv"

    var detailed_header = document.createElement('div')
    detailed_header.className = 'detailed_header'
    var header_name = document.createElement('p')
    header_name.textContent = eventName
    header_name.className = 'header_name'
    detailed_header.appendChild(header_name)

    parentDiv.appendChild(detailed_header)

    var infoDiv = document.createElement('div')
    infoDiv.id = "infoDiv"
    infoDiv.className = "infoDiv"
    // infoDiv.textContent = "THIS IS INFO DIV"
    parentDiv.appendChild(infoDiv)

    var leftDiv = document.createElement('div')
    leftDiv.id = 'leftDiv'
    leftDiv.className = "leftDiv"
    var elemItr = 0

    infoDiv.appendChild(leftDiv)

    // console.log(date, time)

    if (date != '' && time != ''){

		elemItr += 1
        var row1Div = document.createElement('div')
        row1Div.className = 'flex-container'

        leftDiv.appendChild(row1Div)

        var row1Name = document.createElement('div')
        row1Name.id = "rowName"
        row1Name.className = 'rowName'
        //row1Name.textContent = "Date"
        row1Div.appendChild(row1Name)

        var eName = document.createElement('p')
        eName.className = "eName"
        eName.textContent = "Date"
        row1Name.appendChild(eName)

        var row1Value = document.createElement('div')
        row1Value.id = "rowValue"
        row1Value.className = 'rowValue'
        // row1Value.textContent = date + " " + time
        row1Div.appendChild(row1Value)

        var eValue = document.createElement('p')
        eValue.className = 'eValue'
        eValue.textContent = date + " " + time
        row1Value.appendChild(eValue)

    }
    
    if (artist != ''){

		elemItr += 1
        var row2Div = document.createElement('div')
        row2Div.className = 'flex-container'

        leftDiv.appendChild(row2Div)

        var row2Name = document.createElement('div')
        row2Name.id = "rowName"
        row2Name.className = 'rowName'
        //row2Name.textContent = "Date"
        row2Div.appendChild(row2Name)

        var eName = document.createElement('p')
        eName.className = "eName"
        eName.textContent = "Artist/Team"
        row2Name.appendChild(eName)

        var row2Value = document.createElement('div')
        row2Value.id = "rowValue"
        row2Value.className = 'rowValue'
        // row2Value.textContent = date + " " + time
        row2Div.appendChild(row2Value)

        var eValue = document.createElement('a')
        eValue.className = 'eValue7'
        eValue.textContent = artist
        function_name = "openlink(\""+artist_url+"\")"
        eValue.setAttribute('onclick', function_name)
        row2Value.appendChild(eValue)
    }

    if (venue != ''){

		elemItr += 1
        var row3Div = document.createElement('div')
        row3Div.className = 'flex-container'

        leftDiv.appendChild(row3Div)

        var row3Name = document.createElement('div')
        row3Name.id = "rowName"
        row3Name.className = 'rowName'
        //row3Name.textContent = "Date"
        row3Div.appendChild(row3Name)

        var eName = document.createElement('p')
        eName.className = "eName"
        eName.textContent = "Venue"
        row3Name.appendChild(eName)

        var row3Value = document.createElement('div')
        row3Value.id = "rowValue"
        row3Value.className = 'rowValue'
        // row3Value.textContent = date + " " + time
        row3Div.appendChild(row3Value)

        var eValue = document.createElement('p')
        eValue.className = 'eValue'
        eValue.textContent = venue
        row3Value.appendChild(eValue)
    }

    if (genre != ''){

		elemItr += 1
        var row4Div = document.createElement('div')
        row4Div.className = 'flex-container'

        leftDiv.appendChild(row4Div)

        var row4Name = document.createElement('div')
        row4Name.id = "rowName"
        row4Name.className = 'rowName'
        //row4Name.textContent = "Date"
        row4Div.appendChild(row4Name)

        var eName = document.createElement('p')
        eName.className = "eName"
        eName.textContent = "Genres"
        row4Name.appendChild(eName)

        var row4Value = document.createElement('div')
        row4Value.id = "rowValue"
        row4Value.className = 'rowValue'
        // row4Value.textContent = date + " " + time
        row4Div.appendChild(row4Value)

        var eValue = document.createElement('p')
        eValue.className = 'eValue'
        eValue.textContent = genre
        row4Value.appendChild(eValue)

    }

    if (price != ''){

		elemItr += 1
        var row5Div = document.createElement('div')
        row5Div.className = 'flex-container'

        leftDiv.appendChild(row5Div)

        var row5Name = document.createElement('div')
        row5Name.id = "rowName"
        row5Name.className = 'rowName'
        //row5Name.textContent = "Date"
        row5Div.appendChild(row5Name)

        var eName = document.createElement('p')
        eName.className = "eName"
        eName.textContent = "Price Ranges"
        row5Name.appendChild(eName)

        var row5Value = document.createElement('div')
        row5Value.id = "rowValue"
        row5Value.className = 'rowValue'
        // row5Value.textContent = date + " " + time
        row5Div.appendChild(row5Value)

        var eValue = document.createElement('p')
        eValue.className = 'eValue'
        eValue.textContent = price
        row5Value.appendChild(eValue)

    }

    if (ticket_status != ''){

		elemItr += 1
        var row6Div = document.createElement('div')
        row6Div.className = 'flex-container'

        leftDiv.appendChild(row6Div)

        var row6Name = document.createElement('div')
        row6Name.id = "rowName6"
        row6Name.className = 'rowName6'
        //row6Name.textContent = "Date"
        row6Div.appendChild(row6Name)

        var eName = document.createElement('p')
        eName.className = "eName"
        eName.textContent = "Ticket Status"
        row6Name.appendChild(eName)

        var row6Value = document.createElement('div')
        row6Value.id = "rowValue6"
        row6Value.className = 'rowValue6'
        // row6Value.textContent = date + " " + time
        row6Div.appendChild(row6Value)
        
        var eValue = document.createElement('div')

        if (ticket_status == "onsale"){
            eValue.className = 't_eValue1'
            eText = document.createElement('p')
            eText.className = 'eText'
            eText.textContent = "On Sale"
            eValue.appendChild(eText)
            row6Value.appendChild(eValue)
        }

        if (ticket_status == 'cancelled'){
            eValue.className = 't_eValue2'
            eText = document.createElement('p')
            eText.className = 'eText'
            eText.textContent = "Cancelled"
            eValue.appendChild(eText)
            row6Value.appendChild(eValue)
        }

        if (ticket_status == 'rescheduled'){
            eValue.className = 't_eValue3'
            eText = document.createElement('p')
            eText.className = 'eText'
            eText.textContent = "Rescheduled"
            eValue.appendChild(eText)
            row6Value.appendChild(eValue)
        }

        if (ticket_status == 'postponed'){
            eValue.className = 't_eValue3'
            eText = document.createElement('p')
            eText.className = 'eText'
            eText.textContent = "Postponed"
            eValue.appendChild(eText)
            row6Value.appendChild(eValue)
        }
        
        if (ticket_status == 'offsale'){
            eValue.className = 't_eValue4'
            eText = document.createElement('p')
            eText.className = 'eText'
            eText.textContent = "Off Sale"
            eValue.appendChild(eText)
            row6Value.appendChild(eValue)
        }
        
    }

    if (buy_ticket != ''){

		elemItr += 1
        var row7Div = document.createElement('div')
        row7Div.className = 'flex-container7'

        leftDiv.appendChild(row7Div)

        var row7Name = document.createElement('div')
        row7Name.id = "rowName7"
        row7Name.className = 'rowName7'
        //row7Name.textContent = "Date"
        row7Div.appendChild(row7Name)

        var eName = document.createElement('p')
        eName.className = "eName7"
        eName.textContent = "Buy Ticket At:"
        row7Name.appendChild(eName)

        var row7Value = document.createElement('div')
        row7Value.id = "rowValue7"
        row7Value.className = 'rowValue7'
        // row7Value.textContent = date + " " + time
        row7Div.appendChild(row7Value)

        var eValue = document.createElement('a')
        eValue.className = 'eValue7'
        eValue.textContent = "Ticketmaster"
        function_name = "openlink(\""+buy_ticket+"\")"
        eValue.setAttribute('onclick', function_name);
        row7Value.appendChild(eValue)

    }

    var rightDiv = document.createElement('div')
    rightDiv.id = 'rightDiv'
    rightDiv.className = "rightDiv"

    infoDiv.appendChild(rightDiv)

    var seat_image = document.createElement('img')
    seat_image.src = seat_map
    seat_image.className = "seat_image"
    rightDiv.appendChild(seat_image);

    seat_image.style.height = elemItr*60
    parentDiv.style.height = 150 + elemItr*60

    var venueDiv = document.createElement('div')
    venueDiv.id = 'venueDiv'
    venueDiv.className = 'venueDiv'
    
    var t = document.createElement('div')
    var textVenue = document.createElement('a')
    textVenue.id = 'textVenue'
    textVenue.className = 'textVenue'
    textVenue.textContent = 'Show Venue Details'
    function_name = "venueDetails(\""+venue+"\")"
    textVenue.setAttribute('onclick', function_name);

    var d = document.createElement('div')
    var arrow = document.createElement('div')
    arrow.className = 'arrow'
    // var textVenue1 = document.createElement('a')
    // textVenue1.className = 'textVenue'
    function_name = "venueDetails(\""+venue+"\")"
    arrow.setAttribute('onclick', function_name);


    t.appendChild(textVenue)
    d.append(arrow)
    // arrow.appendChild(textVenue1)
    venueDiv.appendChild(t)
    venueDiv.appendChild(d)


    document.getElementById("eventDetails").appendChild(parentDiv);
    document.getElementById("eventDetails").appendChild(venueDiv)

}

function openlink(link){
    window.open(link, '_blank');
}


async function venueDetails(venue_name){
    if(document.contains(document.getElementById('venueDiv'))){
        document.getElementById('venueDiv').remove();
    }

    if(document.contains(document.getElementById('venueDetailsDiv'))){
        document.getElementById('venueDetailsDiv').remove();
    }

    const link = '/venueDetails?'
    const res = await fetch(link + new URLSearchParams({venue_name: venue_name}))

    // console.log(res)
    data = await res.json()
    console.log(data['_embedded']['venues[0]'])

    var venueDetailsDiv = document.createElement('div')
    venueDetailsDiv.id = "venueDetailsDiv"
    venueDetailsDiv.className = "venueDetailsDiv"

    var childvenueDiv = document.createElement("div")
    childvenueDiv.className = 'childvenueDiv'

    venueDetailsDiv.appendChild(childvenueDiv)
    

    var venueName = document.createElement('div')
    venueName.className = 'venueName'
    venueName.textContent = data._embedded.venues[0].name

    var venueContent = document.createElement('div')
    venueContent.className = "venueContent"

    var leftContent = document.createElement('div')
    leftContent.className = 'leftContent'
    var top = document.createElement('div')
    top.className = 'top'

    var venueAddress = document.createElement('div')
    venueAddress.className = 'venueAddress'
    venueAddress.textContent = "Address:"

    var venueAddressValue = document.createElement('div')
    venueAddressValue.className = 'venueAddressValue'
    
    var l1 = "N/A"
    var l2 = "N/A"
    var l3 = "N/A"
    var l4 = "N/A"

    if (data.hasOwnProperty("_embedded") && data["_embedded"].hasOwnProperty("venues") && data["_embedded"]["venues"].hasOwnProperty("0") && data["_embedded"]["venues"][0].hasOwnProperty("address") && data["_embedded"]["venues"][0]["address"].hasOwnProperty("line1")){
        l1 = data._embedded.venues[0].address.line1
    }

    if (data.hasOwnProperty("_embedded") && data["_embedded"].hasOwnProperty("venues") && data["_embedded"]["venues"].hasOwnProperty("0") && data["_embedded"]["venues"][0].hasOwnProperty("city") && data["_embedded"]["venues"][0]["city"].hasOwnProperty("name")){
        l2 = data._embedded.venues[0].city.name
    }

    if (data.hasOwnProperty("_embedded") && data["_embedded"].hasOwnProperty("venues") && data["_embedded"]["venues"].hasOwnProperty("0") && data["_embedded"]["venues"][0].hasOwnProperty("state") && data["_embedded"]["venues"][0]["state"].hasOwnProperty("stateCode")){
        l3 = data._embedded.venues[0].state.stateCode
    }

    if (data.hasOwnProperty("_embedded") && data["_embedded"].hasOwnProperty("venues") && data["_embedded"]["venues"].hasOwnProperty("0") && data["_embedded"]["venues"][0].hasOwnProperty("postalCode")){
        l4 = data._embedded.venues[0].postalCode
    }



    text = l1 + '<br>' + l2 + ',' + " " + l3 + '<br>' + l4;
    gmap_text = data._embedded.venues[0].address.line1 + ',' + data._embedded.venues[0].city.name + ',' + data._embedded.venues[0].state.stateCode + ',' + data._embedded.venues[0].postalCode;
    venueAddressValue.innerHTML = text;

    var down = document.createElement('div');
    down.className = 'down';
    var gmap = document.createElement('a');
    gmap.className = "gmap";
    gmap.textContent = "Open in Google Maps";
    
    const gmap_address = `https://www.google.com/maps/search/?api=1&query=${gmap_text}`;

    gmap_function = "openlink(\""+gmap_address+"\")"
    gmap.setAttribute('onclick', gmap_function);

    var rightContent = document.createElement('div')
    rightContent.className = 'rightContent'
    var more_events = document.createElement('a');
    more_events.className = "more_events";
    more_events.textContent = "More events at this venue";

    map_link = data._embedded.venues[0].url
    map_function = "openlink(\""+map_link+"\")"
    more_events.setAttribute('onclick', map_function);

    
    childvenueDiv.appendChild(venueName)    
    childvenueDiv.appendChild(venueContent)
    venueContent.appendChild(leftContent)
    venueContent.appendChild(rightContent)
    leftContent.appendChild(top)
    leftContent.appendChild(down)
    top.appendChild(venueAddress)
    top.appendChild(venueAddressValue)
    down.appendChild(gmap)
    rightContent.appendChild(more_events)

    document.getElementById("venueDetails").appendChild(venueDetailsDiv)

    let e = document.getElementById('venueDetails')
    e.scrollIntoView({behavior: 'smooth'})
    

}


async function eventDetails(event_id){

    if(document.contains(document.getElementById('parentDiv'))){
        document.getElementById('parentDiv').remove();
    }

    if(document.contains(document.getElementById('venueDetailsDiv'))){
        document.getElementById('venueDetailsDiv').remove();
    }

    if(document.contains(document.getElementById('venueDiv'))){
        document.getElementById('venueDiv').remove();
    }
    

    const link = '/eventDetails?'
    const res = await fetch(link + new URLSearchParams({event_id:event_id}))
    // console.log(res)
    data = await res.json()

    console.log(data)

    date = ""
    time = ""
    artist = ""
    artist_url = ""
    venue = ""
    genre = ""
    price = ""
    ticket_status = ""
    buy_ticket = ""
    seat_map = ""

    if (data.hasOwnProperty('dates') && data['dates'].hasOwnProperty('start') && data['dates']['start'].hasOwnProperty('localDate')){
        date = date + data['dates']['start']['localDate']
    }

    if (data.hasOwnProperty('dates') && data['dates'].hasOwnProperty('start') && data['dates']['start'].hasOwnProperty('localTime')){
        time = time + data['dates']['start']['localTime']
    }
    
    if (data.hasOwnProperty('_embedded') && data['_embedded'].hasOwnProperty('attractions') && data['_embedded']['attractions'][0].hasOwnProperty('name')){
        artist = artist + data['_embedded']['attractions'][0]['name']
        artist_url = artist_url + data['_embedded']['attractions'][0]['url']
    }

    if (data.hasOwnProperty('_embedded') && data['_embedded'].hasOwnProperty('venues') && data['_embedded']['venues'][0].hasOwnProperty('name')){
        venue = venue + data['_embedded']['venues'][0]['name'] 
    }

    if (data.hasOwnProperty('classifications') && data['classifications'][0].hasOwnProperty('subGenre')){
        genre = genre + data['classifications'][0]['subGenre']['name'] + " " + "|" + " "
    }

    if (data.hasOwnProperty('classifications') && data['classifications'][0].hasOwnProperty('genre')){
        genre = genre + data['classifications'][0]['genre']['name'] + " " + "|" + " "
    }

    if(data.hasOwnProperty('classifications') && data['classifications'][0].hasOwnProperty('segment')){
        genre = genre + data['classifications'][0]['segment']['name']
    }

    if (data.hasOwnProperty('priceRanges') && data['priceRanges'][0].hasOwnProperty('max') && data['priceRanges'][0].hasOwnProperty('min')){
        price = price + data['priceRanges'][0]['min'] + " " + '-' + " " + data['priceRanges'][0]['max'] + " " +'USD'
    }

    if (data.hasOwnProperty('dates') && data['dates'].hasOwnProperty('status')){
        ticket_status = ticket_status + data['dates']['status']['code']
    }

    if (data.hasOwnProperty('url')){
        buy_ticket = buy_ticket + data['url']
    }

    if (data.hasOwnProperty('seatmap')){
        seat_map = seat_map + data['seatmap']['staticUrl']
    }

    event_name = data['name']
    createEvent(event_name, date, time, artist, artist_url, venue, genre, price, ticket_status, buy_ticket, seat_map)
    let e = document.getElementById('eventDetails')
    e.scrollIntoView({behavior: 'smooth'})
    console.log(date, time, artist, artist_url,venue, genre, price, ticket_status, buy_ticket, seat_map)

}

async function eventsSearch(keyword, distance, category, lat, long){
    if (document.contains(document.getElementById("eventData"))) {
        document.getElementById("eventData").remove();
    }

    if (document.contains(document.getElementById("parentDiv"))) {
        document.getElementById("parentDiv").remove();
    }

    if (document.contains(document.getElementById("noEventsDiv"))) {
        document.getElementById("noEventsDiv").remove();
    }

    if(document.contains(document.getElementById('venueDetailsDiv'))){
        document.getElementById('venueDetailsDiv').remove();
    }

    if(document.contains(document.getElementById('venueDiv'))){
        document.getElementById('venueDiv').remove();
    }

    const link = `/search?`
    // console.log("sdfkjshdkfjhsdkjfhsdkf", keyword, distance, category, lat, long)
    const res = await fetch(link + new URLSearchParams({
        keyword:keyword,
        latitude:lat,
        longitude:long,
        categories:category,
        radius:distance,
    }))

    data = await res.json()
    console.log(data)
    // console.log(data._embedded.events)
    // console.log(data["_embedded"]["events"][0])

    // total_events = data._embedded.events

    if (data.page.totalPages == 0){     
        console.log("empty")
        var noevents = document.createElement('div');
        noevents.id = 'noEventsDiv'
        noevents.className = 'noEvents'
        noevents.textContent = 'No Records found'
        document.getElementById('eventTable').appendChild(noevents);
    }

    else{
        var table = document.createElement('table')
        table.id = 'eventData'
        table.className = 'eventData'

        document.getElementById("eventTable").appendChild(table);
        var tableDiv = document.getElementById("eventData");
        var row = tableDiv.insertRow(0)
        row.className = 'row';

        let th1 = document.createElement('th');
        th1.width = '90px'
        th1.className = "tableHeader"
        th1.innerHTML = "Date"
        row.appendChild(th1);

        let th2 = document.createElement('th');
        th2.width = '100px'
        th2.className = "tableHeader"
        th2.innerHTML = "Icon"
        row.appendChild(th2)

        let th3 = document.createElement('th');
        th3.width = '300px'
        th3.className = "tableHeader"
        th3.setAttribute('onclick', "sortTable(2)");        
        th3.innerHTML = "Event"
        row.appendChild(th3)

        let th4 = document.createElement('th');
        th4.width = '70px'
        th4.className = "tableHeader"
        th4.setAttribute('onclick', "sortTable(3)")
        th4.innerHTML = "Genre"
        row.appendChild(th4)

        let th5 = document.createElement('th');
        th5.width = '125px'
        th5.className = "tableHeader"
        th5.setAttribute('onclick', "sortTable(4)")
        th5.innerHTML = "Venue"
        row.appendChild(th5)

    }

    if (data._embedded.events.length >= 20){
        for (let i=0; i<20; i++){
            var tableDiv = document.getElementById("eventData");
    
            var rowNo = tableDiv.rows.length
            var row = tableDiv.insertRow(rowNo)
    
            var c1 = row.insertCell(0);
            c1.className = 'c';
            c1.innerHTML = data["_embedded"]["events"][i]["dates"]["start"]["localDate"] + "<br>" + data["_embedded"]["events"][i]["dates"]["start"]["localTime"]
    
            var c2 = row.insertCell(1);
            c2.className = "c";
            var im = document.createElement("input");
            im.type = 'image';
    
            for (let j=0; j<data["_embedded"]["events"][i]['images'].length; j++){
                if (data["_embedded"]["events"][i]['images'][j]['height'] == 56){
                    im.src = data["_embedded"]["events"][i]['images'][j]['url']
                }
            }
            c2.appendChild(im)
    
            content = data["_embedded"]["events"][i]        
            var c3 = row.insertCell(2);
            c3.className = 'c';
            var e = document.createElement("a")
            e.className = "eventName"
            e.id = data["_embedded"]["events"][i]['name'];        
            function_name = "eventDetails(\""+content.id+"\")";
            e.setAttribute("onclick", function_name)        
            e.textContent = data["_embedded"]["events"][i]['name'] 
            c3.appendChild(e);
    
            var c4 = row.insertCell(3)
            c4.className = 'c'
            c4.innerHTML = data["_embedded"]["events"][i]['classifications'][0]['segment']['name']
    
            var c5 = row.insertCell(4)
            c5.className = 'c'
            // console.log(data["_embedded"]["events"][i]["_embedded"])
            c5.innerHTML = data["_embedded"]["events"][i]["_embedded"]['venues'][0]['name']
    
        }
        
    }

    else{
        for (let i=0; i<data._embedded.events.length; i++){
            var tableDiv = document.getElementById("eventData");
    
            var rowNo = tableDiv.rows.length
            var row = tableDiv.insertRow(rowNo)
    
            var c1 = row.insertCell(0);
            c1.className = 'c';
            c1.innerHTML = data["_embedded"]["events"][i]["dates"]["start"]["localDate"] + "<br>" + data["_embedded"]["events"][i]["dates"]["start"]["localTime"]
    
            var c2 = row.insertCell(1);
            c2.className = "c";
            var im = document.createElement("input");
            im.type = 'image';
    
            for (let j=0; j<data["_embedded"]["events"][i]['images'].length; j++){
                if (data["_embedded"]["events"][i]['images'][j]['height'] == 56){
                    im.src = data["_embedded"]["events"][i]['images'][j]['url']
                }
            }
            c2.appendChild(im)
    
            content = data["_embedded"]["events"][i]        
            var c3 = row.insertCell(2);
            c3.className = 'c';
            var e = document.createElement("a")
            e.className = "eventName"
            e.id = data["_embedded"]["events"][i]['name'];        
            function_name = "eventDetails(\""+content.id+"\")";
            e.setAttribute("onclick", function_name)        
            e.textContent = data["_embedded"]["events"][i]['name'] 
            c3.appendChild(e);
    
            var c4 = row.insertCell(3)
            c4.className = 'c'
            c4.innerHTML = data["_embedded"]["events"][i]['classifications'][0]['segment']['name']
    
            var c5 = row.insertCell(4)
            c5.className = 'c'
            // console.log(data["_embedded"]["events"][i]["_embedded"])
            c5.innerHTML = data["_embedded"]["events"][i]["_embedded"]['venues'][0]['name']
    
        }
    }

    
    // document.getElementById("eventTable").scrollIntoView()
}

function onClickCheckbox(){
    var location = document.getElementById("checkedlocation");
    if (location.checked == true){
        document.getElementById("location").style.display = "none";
    }
    else{
        document.getElementById("location").style.display = "block";
    }
}

function clearForm(){
    if (document.contains(document.getElementById("eventData"))) {
        document.getElementById("eventData").remove();
    }

    if (document.contains(document.getElementById("parentDiv"))) {
        document.getElementById("parentDiv").remove();
    }

    if (document.contains(document.getElementById("noEventsDiv"))) {
        document.getElementById("noEventsDiv").remove();
    }

    if(document.contains(document.getElementById('venueDetailsDiv'))){
        document.getElementById('venueDetailsDiv').remove();
    }

    if(document.contains(document.getElementById('venueDiv'))){
        document.getElementById('venueDiv').remove();
    }

    document.getElementById("keyword").value = ""
    document.getElementById("distance").value = ''
    document.getElementById("distance").ariaPlaceholder = "10"
    document.getElementById("category").value = "default"
    if (document.getElementById("location").style.display == 'block'){
        document.getElementById("location").value = ""
    }
    else{
        document.getElementById("location").style.display = "block"
    }
    
    document.getElementById("checkedlocation").checked = false;
}

async function getLiveLocation(keyword, distanceInt, category){
    console.log("getLiveLocation")
    const request = await fetch("https://ipinfo.io/json?token=c871f9b29cdf09");
    const jsonResponse = await request.json();
    data = jsonResponse.loc.split(",")
    console.log(data);
    eventsSearch(keyword, distanceInt, category, data[0], data[1])
}

async function getLocation(keyword, distanceInt, category, loc){
    key = "AIzaSyB-zOyWamWVDFOlq6A5dBF5zIKNMOC9hrQ"
    address = loc.replace(" ", "+");
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`
    const res = await fetch(url).then(res=>res.json())
    data = await res.results[0].geometry.location
    console.log(data)
    eventsSearch(keyword, distanceInt, category, data.lat, data.lng)
}

function submitForm(){
    console.log("Submit")
    var keyword = document.getElementById("keyword").value
    var distance = document.getElementById("distance").value;
    var category = document.getElementById("category").value;
    var liveLocation = document.getElementById("checkedlocation").checked;
    var loc = document.getElementById("location").value;
    // console.log(liveLocation)
    
    
    if (distance == ""){
        distance = 10
    }
   
    if(liveLocation == true && keyword != ''){
        getLiveLocation(keyword, distance, category)
    }
    
    else{        
        getLocation(keyword, distance, category, loc)
    }
    console.log(keyword, distance, category, liveLocation, loc)
}


