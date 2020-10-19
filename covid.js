//get current screen dimensions
const w = window.innerWidth;
const h = window.innerHeight;

//set size variable adjustments
var w_var = .584;
var h_var = 70;
var mobile_font = 0;
var legend_font = 15;
var table_height = h-300;
var table_width = 400;
var mobile_titles = 0;

//set populations and lockdown tiers
var populations = {'Allerdale':97527,'Barrow-in-Furness':67137,'Blackburn with Darwen':148942,'Blackpool':139305,'Bolton':285372,'Burnley':88527,'Bury':190108,'Carlisle':108387,'Cheshire East':380790,'Cheshire West and Chester':340502,'Chorley':116821,'Copeland':68424,'Eden':52881,'Fylde':79770,'Halton':128432,'Hyndburn':80815,'Knowsley':149571,'Lancaster':144246,'Liverpool':380790,'Manchester':547627,'Oldham':235623,'Pendle':91405,'Preston':141818,'Ribble Valley':60057,'Rochdale':220001,'Rossendale':70895,'Salford':254408,'Sefton':275396,'South Lakeland':104532,'South Ribble':110527,'St. Helens':180049,'Stockport':291775,'Tameside':225197,'Trafford':236370,'Warrington':209547,'West Lancashire':113949,'Wigan':326088,'Wirral':323235,'Wyre':111223,'Barking and Dagenham':211998,'Barnet':392140,'Bexley':247258,'Brent':330795,'Bromley':331096,'Camden':262226,'Croydon':385346,'Ealing':341982,'Enfield':333869,'Greenwich':286186,'Hackney and City of London':288371,'Hammersmith and Fulham':185426,'Haringey':270624,'Harrow':250149,'Havering':257810,'Hillingdon':304824,'Hounslow':270782,'Islington':239142,'Kensington and Chelsea':156197,'Kingston upon Thames':175470,'Lambeth':325917,'Lewisham':303536,'Merton':206186,'Newham':352005,'Redbridge':303858,'Richmond upon Thames':196904,'Southwark':317256,'Sutton':204525,'Tower Hamlets':317705,'Waltham Forest':276700,'Wandsworth':326474,'Westminster':255324,'County Durham':526980,'Darlington':106566,'Gateshead':202508,'Hartlepool':93242,'Middlesbrough':140545,'Newcastle upon Tyne':300196,'North Tyneside':205985,'Northumberland':320274,'Redcar and Cleveland':136718,'South Tyneside':150265,'Stockton-on-Tees':197213,'Sunderland':277417,'Amber Valley':126678,'Ashfield':127151,'Bassetlaw':116839,'Blaby':100421,'Bolsover':79530,'Boston':69366,'Broxtowe':113272,'Charnwood':182643,'Chesterfield':104628,'Corby':70827,'Daventry':84484,'Derby':257174,'Derbyshire Dales':71977,'East Lindsey':140741,'East Northamptonshire':93906,'Erewash':115490,'Gedling':117786,'Harborough':92499,'High Peak':92221,'Hinckley and Bosworth':112423,'Kettering':101266,'Leicester':355218,'Lincoln':99039,'Mansfield':108841,'Melton':51100,'Newark and Sherwood':121566,'North East Derbyshire':101125,'North Kesteven':115985,'North West Leicestershire':102126,'Northampton':225146,'Nottingham':331069,'Oadby and Wigston':57056,'Rushcliffe':117671,'Rutland':39697,'South Derbyshire':104493,'South Holland':93980,'South Kesteven':141853,'South Northamptonshire':92515,'Wellingborough':79478,'West Lindsey':94869,'Babergh':91401,'Basildon':185862,'Bedford':171623,'Braintree':151561,'Breckland':139329,'Brentwood':76550,'Broadland':129464,'Broxbourne':96876,'Cambridge':125758,'Castle Point':90070,'Central Bedfordshire':283606,'Chelmsford':177079,'Colchester':192523,'Dacorum':154280,'East Cambridgeshire':89362,'East Hertfordshire':148105,'East Suffolk':248249,'Epping Forest':131137,'Fenland':101491,'Great Yarmouth':99370,'Harlow':86594,'Hertsmere':104205,'Huntingdonshire':177352,'Ipswich':137532,'Kings Lynn and West Norfolk':151811,'Luton':214109,'Maldon':64425,'Mid Suffolk':102493,'North Hertfordshire':133214,'North Norfolk':104552,'Norwich':141137,'Peterborough':201041,'Rochford':86981,'South Cambridgeshire':157519,'South Norfolk':138017,'Southend-On-Sea':182463,'St Albans':147373,'Stevenage':87754,'Tendring':145803,'Three Rivers':93045,'Thurrock':172525,'Uttlesford':89179,'Watford':96767,'Welwyn Hatfield':122746,'West Suffolk':178881,'Adur':63869,'Arun':159827,'Ashford':129281,'Aylesbury Vale':199448,'Basingstoke and Deane':175729,'Bracknell Forest':121676,'Brighton and Hove':290395,'Canterbury':164553,'Cherwell':149161,'Chichester':120750,'Chiltern':95927,'Crawley':112448,'Dartford':109709,'Dover':116969,'East Hampshire':120681,'Eastbourne':103160,'Eastleigh':131819,'Elmbridge':136626,'Epsom and Ewell':79928,'Fareham':116339,'Folkestone and Hythe':112578,'Gosport':85283,'Gravesham':106385,'Guildford':147889,'Hart':96293,'Hastings':92855,'Havant':125813,'Horsham':142217,'Isle of Wight':141538,'Lewes':102744,'Maidstone':169955,'Medway':277855,'Mid Sussex':149716,'Milton Keynes':268607,'Mole Valley':87253,'New Forest':179753,'Oxford':154327,'Portsmouth':215133,'Reading':163203,'Reigate and Banstead':147757,'Rother':95656,'Runnymede':88000,'Rushmoor':95142,'Sevenoaks':120293,'Slough':149112,'South Bucks':70043,'South Oxfordshire':140504,'Southampton':252796,'Spelthorne':99334,'Surrey Heath':88874,'Swale':148519,'Tandridge':87496,'Test Valley':125169,'Thanet':141819,'Tonbridge and Malling':130508,'Tunbridge Wells':118054,'Vale of White Horse':133732,'Waverley':125610,'Wealden':160175,'West Berkshire':158527,'West Oxfordshire':109800,'Winchester':124295,'Windsor and Maidenhead':150906,'Woking':101167,'Wokingham':167979,'Worthing':110025,'Wycombe':174641,'Barnsley':245199,'Bradford':537173,'Calderdale':210082,'Craven':56832,'Doncaster':310542,'East Riding of Yorkshire':339614,'Hambleton':91134,'Harrogate':160533,'Kingston upon Hull, City of':260645,'Kirklees':438727,'Leeds':789194,'North East Lincolnshire':159821,'North Lincolnshire':172005,'Richmondshire':53244,'Rotherham':264671,'Ryedale':54920,'Scarborough':108736,'Selby':89106,'Sheffield':582506,'Wakefield':345038,'York':209893,'Birmingham':1141374,'Bromsgrove':98662,'Cannock Chase':100109,'Coventry':366785,'Dudley':320626,'East Staffordshire':118574,'Herefordshire, County of':192107,'Lichfield':103965,'Malvern Hills':78113,'Newcastle-under-Lyme':129490,'North Warwickshire':64850,'Nuneaton and Bedworth':128902,'Redditch':84989,'Rugby':107194,'Sandwell':327378,'Shropshire':320274,'Solihull':214909,'South Staffordshire':112126,'Stafford':135880,'Staffordshire Moorlands':98397,'Stoke-on-Trent':255833,'Stratford-on-Avon':127580,'Tamworth':76678,'Telford and Wrekin':177799,'Walsall':283378,'Warwick':142484,'Wolverhampton':262008,'Worcester':101891,'Wychavon':127340,'Wyre Forest':101062,'Bath and North East Somerset':192106,'Bournemouth, Christchurch and Poole':395784,'Bristol, City of':463405,'Cheltenham':117090,'Cornwall and Isles of Scilly':568210,'Cotswold':89022,'Dorset':426516,'East Devon':144317,'Exeter':130428,'Forest of Dean':86543,'Gloucester':129285,'Mendip':114881,'Mid Devon':81695,'North Devon':96110,'North Somerset':213919,'Plymouth':263100,'Sedgemoor':122791,'Somerset West and Taunton':153866,'South Gloucestershire':282644,'South Hams':86221,'South Somerset':167861,'Stroud':119019,'Swindon':221996,'Teignbridge':132844,'Tewkesbury':92599,'Torbay':135780,'Torridge':68143,'West Devon':55528,'Wiltshire':498064,'Isle of Anglesey':70046,'Blaenau Gwent':69858,'Bridgend':147044,'Caerphilly':181080,'Cardiff':366890,'Carmarthenshire':188760,'Ceredigion':72727,'Conwy':117205,'Denbighshire':95697,'Flintshire':156105,'Gwynedd':124549,'Merthyr Tydfil':60326,'Monmouthshire':94598,'Neath Port Talbot':143305,'Newport':154685,'Pembrokeshire':125799,'Powys':132450,'Rhondda Cynon Taf':241279,'Swansea':246985,'Torfaen':93951,'Vale of Glamorgan':133598,'Wrexham':135955,'Aberdeen City':227560,'Aberdeenshire':261470,'Angus':116040,'Argyll and Bute':86260,'City of Edinburgh':518500,'Clackmannanshire':51400,'Dumfries and Galloway':148790,'Dundee City':148750,'East Ayrshire':121840,'East Dunbartonshire':108330,'East Lothian':105790,'East Renfrewshire':95170,'Falkirk':160340,'Fife':371910,'Glasgow City':626410,'Highland':235540,'Inverclyde':78150,'Midlothian':91340,'Moray':95520,'Na h-Eileanan Siar':26830,'North Ayrshire':135280,'North Lanarkshire':340180,'Orkney Islands':22190,'Perth and Kinross':151290,'Renfrewshire':177790,'Scottish Borders':115270,'Shetland Islands':22990,'South Ayrshire':112550,'South Lanarkshire':319020,'Stirling':94330,'West Dunbartonshire':89130,'West Lothian':182140};
//var tiers = {'Cheshire West and Chester':'Level 2 – High','Cheshire East':'Level 2 – High','Manchester':'Level 2 – High','Bolton':'Level 2 – High','Bury':'Level 2 – High','Stockport':'Level 2 – High','Tameside':'Level 2 – High','Trafford':'Level 2 – High','Wigan':'Level 2 – High','Salford':'Level 2 – High','Rochdale':'Level 2 – High','Oldham':'Level 2 – High','Warrington':'Level 2 – High','Warrington':'Level 2 – High','Tintwistle':'Level 2 – High','Padfield':'Level 2 – High','Dinting':'Level 2 – High','St Johns':'Level 2 – High','Old Glossop':'Level 2 – High','Whitfield':'Level 2 – High','Simmondley':'Level 2 – High','Gamesley':'Level 2 – High','Howard Town':'Level 2 – High','Hadfield South':'Level 2 – High','Hadfield North':'Level 2 – High','Lancashire':'Level 2 – High','Blackpool':'Level 2 – High','Blackburn with Darwen':'Level 2 – High','Burnley':'Level 2 – High','Chorley':'Level 2 – High','Fylde':'Level 2 – High','Hyndburn':'Level 2 – High','Lancaster':'Level 2 – High','Pendle':'Level 2 – High','Preston':'Level 2 – High','Ribble Valley':'Level 2 – High','Rossendale':'Level 2 – High','South Ribble':'Level 2 – High','West Lancashire':'Level 2 – High','Wyre':'Level 2 – High','Leeds':'Level 2 – High','Bradford':'Level 2 – High','Kirklees':'Level 2 – High','Calderdale':'Level 2 – High','Wakefield':'Level 2 – High','Barnsley':'Level 2 – High','Rotherham':'Level 2 – High','Doncaster':'Level 2 – High','Sheffield':'Level 2 – High','Newcastle':'Level 2 – High','South Tyneside':'Level 2 – High','North Tyneside':'Level 2 – High','Gateshead':'Level 2 – High','Sunderland':'Level 2 – High','Durham':'Level 2 – High','Northumberland':'Level 2 – High','Middlesbrough':'Level 2 – High','Redcar and Cleveland':'Level 2 – High','Stockton-on-Tees':'Level 2 – High','Darlington':'Level 2 – High','Hartlepool':'Level 2 – High','Birmingham':'Level 2 – High','Sandwell':'Level 2 – High','Solihull':'Level 2 – High','Wolverhampton':'Level 2 – High','Walsall':'Level 2 – High','Leicester':'Level 2 – High','Leicester':'Level 2 – High','Oadby and Wigston':'Level 2 – High','Nottinghamshire':'Level 2 – High','Nottingham':'Level 2 – High','Liverpool':'Level 3 – Very High','Knowsley':'Level 3 – Very High','Wirral':'Level 3 – Very High','St Helens':'Level 3 – Very High','Sefton':'Level 3 – Very High','Halton':'Level 3 – Very High'};
var tiers = {'Allerdale':'Level 1 - Medium','Barrow-in-Furness':'Level 2 - High','Blackburn with Darwen':'Level 3 - Very High','Blackpool':'Level 3 - Very High','Bolton':'Level 2 - High','Burnley':'Level 3 - Very High','Bury':'Level 2 - High','Carlisle':'Level 1 - Medium','Cheshire East':'Level 2 - High','Cheshire West and Chester':'Level 2 - High','Chorley':'Level 3 - Very High','Copeland':'Level 1 - Medium','Eden':'Level 1 - Medium','Fylde':'Level 3 - Very High','Halton':'Level 3 - Very High','Hyndburn':'Level 3 - Very High','Knowsley':'Level 3 - Very High','Lancaster':'Level 3 - Very High','Liverpool':'Level 3 - Very High','Manchester':'Level 2 - High','Oldham':'Level 2 - High','Pendle':'Level 3 - Very High','Preston':'Level 3 - Very High','Ribble Valley':'Level 3 - Very High','Rochdale':'Level 2 - High','Rossendale':'Level 3 - Very High','Salford':'Level 2 - High','Sefton':'Level 3 - Very High','South Lakeland':'Level 1 - Medium','South Ribble':'Level 3 - Very High','St. Helens':'Level 3 - Very High','Stockport':'Level 2 - High','Tameside':'Level 2 - High','Trafford':'Level 2 - High','Warrington':'Level 2 - High','West Lancashire':'Level 3 - Very High','Wigan':'Level 2 - High','Wirral':'Level 3 - Very High','Wyre':'Level 3 - Very High','Barking and Dagenham':'Level 2 - High','Barnet':'Level 2 - High','Bexley':'Level 2 - High','Brent':'Level 2 - High','Bromley':'Level 2 - High','Camden':'Level 2 - High','Croydon':'Level 2 - High','Ealing':'Level 2 - High','Enfield':'Level 2 - High','Greenwich':'Level 2 - High','Hackney and City of London':'Level 2 - High','Hammersmith and Fulham':'Level 2 - High','Haringey':'Level 2 - High','Harrow':'Level 2 - High','Havering':'Level 2 - High','Hillingdon':'Level 2 - High','Hounslow':'Level 2 - High','Islington':'Level 2 - High','Kensington and Chelsea':'Level 2 - High','Kingston upon Thames':'Level 2 - High','Lambeth':'Level 2 - High','Lewisham':'Level 2 - High','Merton':'Level 2 - High','Newham':'Level 2 - High','Redbridge':'Level 2 - High','Richmond upon Thames':'Level 2 - High','Southwark':'Level 2 - High','Sutton':'Level 2 - High','Tower Hamlets':'Level 2 - High','Waltham Forest':'Level 2 - High','Wandsworth':'Level 2 - High','Westminster':'Level 2 - High','County Durham':'Level 2 - High','Darlington':'Level 2 - High','Gateshead':'Level 2 - High','Hartlepool':'Level 2 - High','Middlesbrough':'Level 2 - High','Newcastle upon Tyne':'Level 2 - High','North Tyneside':'Level 2 - High','Northumberland':'Level 2 - High','Redcar and Cleveland':'Level 2 - High','South Tyneside':'Level 2 - High','Stockton-on-Tees':'Level 2 - High','Sunderland':'Level 2 - High','Amber Valley':'Level 1 - Medium','Ashfield':'Level 2 - High','Bassetlaw':'Level 2 - High','Blaby':'Level 1 - Medium','Bolsover':'Level 1 - Medium','Boston':'Level 1 - Medium','Broxtowe':'Level 2 - High','Charnwood':'Level 1 - Medium','Chesterfield':'Level 2 - High','Corby':'Level 1 - Medium','Daventry':'Level 1 - Medium','Derby':'Level 1 - Medium','Derbyshire Dales':'Level 1 - Medium','East Lindsey':'Level 1 - Medium','East Northamptonshire':'Level 1 - Medium','Erewash':'Level 2 - High','Gedling':'Level 2 - High','Harborough':'Level 1 - Medium','High Peak':'Level 2 - High','Hinckley and Bosworth':'Level 1 - Medium','Kettering':'Level 1 - Medium','Leicester':'Level 2 - High','Lincoln':'Level 1 - Medium','Mansfield':'Level 2 - High','Melton':'Level 1 - Medium','Newark and Sherwood':'Level 2 - High','North East Derbyshire':'Level 2 - High','North Kesteven':'Level 1 - Medium','North West Leicestershire':'Level 1 - Medium','Northampton':'Level 1 - Medium','Nottingham':'Level 2 - High','Oadby and Wigston':'Level 2 - High','Rushcliffe':'Level 2 - High','Rutland':'Level 1 - Medium','South Derbyshire':'Level 1 - Medium','South Holland':'Level 1 - Medium','South Kesteven':'Level 1 - Medium','South Northamptonshire':'Level 1 - Medium','Wellingborough':'Level 1 - Medium','West Lindsey':'Level 1 - Medium','Babergh':'Level 1 - Medium','Basildon':'Level 2 - High','Bedford':'Level 1 - Medium','Braintree':'Level 2 - High','Breckland':'Level 1 - Medium','Brentwood':'Level 2 - High','Broadland':'Level 1 - Medium','Broxbourne':'Level 1 - Medium','Cambridge':'Level 1 - Medium','Castle Point':'Level 2 - High','Central Bedfordshire':'Level 1 - Medium','Chelmsford':'Level 2 - High','Colchester':'Level 2 - High','Dacorum':'Level 1 - Medium','East Cambridgeshire':'Level 1 - Medium','East Hertfordshire':'Level 1 - Medium','East Suffolk':'Level 1 - Medium','Epping Forest':'Level 2 - High','Fenland':'Level 1 - Medium','Great Yarmouth':'Level 1 - Medium','Harlow':'Level 2 - High','Hertsmere':'Level 1 - Medium','Huntingdonshire':'Level 1 - Medium','Ipswich':'Level 1 - Medium','Kings Lynn and West Norfolk':'Level 1 - Medium','Luton':'Level 1 - Medium','Maldon':'Level 2 - High','Mid Suffolk':'Level 1 - Medium','North Hertfordshire':'Level 1 - Medium','North Norfolk':'Level 1 - Medium','Norwich':'Level 1 - Medium','Peterborough':'Level 1 - Medium','Rochford':'Level 2 - High','South Cambridgeshire':'Level 1 - Medium','South Norfolk':'Level 1 - Medium','Southend-On-Sea':'Level 1 - Medium','St Albans':'Level 1 - Medium','Stevenage':'Level 1 - Medium','Tendring':'Level 2 - High','Three Rivers':'Level 1 - Medium','Thurrock':'Level 1 - Medium','Uttlesford':'Level 2 - High','Watford':'Level 1 - Medium','Welwyn Hatfield':'Level 1 - Medium','West Suffolk':'Level 1 - Medium','Adur':'Level 1 - Medium','Arun':'Level 1 - Medium','Ashford':'Level 1 - Medium','Aylesbury Vale':'Level 1 - Medium','Basingstoke and Deane':'Level 1 - Medium','Bracknell Forest':'Level 1 - Medium','Brighton and Hove':'Level 1 - Medium','Canterbury':'Level 1 - Medium','Cherwell':'Level 1 - Medium','Chichester':'Level 1 - Medium','Chiltern':'Level 1 - Medium','Crawley':'Level 1 - Medium','Dartford':'Level 1 - Medium','Dover':'Level 1 - Medium','East Hampshire':'Level 1 - Medium','Eastbourne':'Level 1 - Medium','Eastleigh':'Level 1 - Medium','Elmbridge':'Level 2 - High','Epsom and Ewell':'Level 1 - Medium','Fareham':'Level 1 - Medium','Folkestone and Hythe':'Level 1 - Medium','Gosport':'Level 1 - Medium','Gravesham':'Level 1 - Medium','Guildford':'Level 1 - Medium','Hart':'Level 1 - Medium','Hastings':'Level 1 - Medium','Havant':'Level 1 - Medium','Horsham':'Level 1 - Medium','Isle of Wight':'Level 1 - Medium','Lewes':'Level 1 - Medium','Maidstone':'Level 1 - Medium','Medway':'Level 1 - Medium','Mid Sussex':'Level 1 - Medium','Milton Keynes':'Level 1 - Medium','Mole Valley':'Level 1 - Medium','New Forest':'Level 1 - Medium','Oxford':'Level 1 - Medium','Portsmouth':'Level 1 - Medium','Reading':'Level 1 - Medium','Reigate and Banstead':'Level 1 - Medium','Rother':'Level 1 - Medium','Runnymede':'Level 1 - Medium','Rushmoor':'Level 1 - Medium','Sevenoaks':'Level 1 - Medium','Slough':'Level 1 - Medium','South Bucks':'Level 1 - Medium','South Oxfordshire':'Level 1 - Medium','Southampton':'Level 1 - Medium','Spelthorne':'Level 1 - Medium','Surrey Heath':'Level 1 - Medium','Swale':'Level 1 - Medium','Tandridge':'Level 1 - Medium','Test Valley':'Level 1 - Medium','Thanet':'Level 1 - Medium','Tonbridge and Malling':'Level 1 - Medium','Tunbridge Wells':'Level 1 - Medium','Vale of White Horse':'Level 1 - Medium','Waverley':'Level 1 - Medium','Wealden':'Level 1 - Medium','West Berkshire':'Level 1 - Medium','West Oxfordshire':'Level 1 - Medium','Winchester':'Level 1 - Medium','Windsor and Maidenhead':'Level 1 - Medium','Woking':'Level 1 - Medium','Wokingham':'Level 1 - Medium','Worthing':'Level 1 - Medium','Wycombe':'Level 1 - Medium','Barnsley':'Level 2 - High','Bradford':'Level 2 - High','Calderdale':'Level 2 - High','Craven':'Level 1 - Medium','Doncaster':'Level 2 - High','East Riding of Yorkshire':'Level 1 - Medium','Hambleton':'Level 1 - Medium','Harrogate':'Level 1 - Medium','Kingston upon Hull, City of':'Level 1 - Medium','Kirklees':'Level 2 - High','Leeds':'Level 2 - High','North East Lincolnshire':'Level 1 - Medium','North Lincolnshire':'Level 1 - Medium','Richmondshire':'Level 1 - Medium','Rotherham':'Level 2 - High','Ryedale':'Level 1 - Medium','Scarborough':'Level 1 - Medium','Selby':'Level 1 - Medium','Sheffield':'Level 2 - High','Wakefield':'Level 2 - High','York':'Level 2 - High','Birmingham':'Level 2 - High','Bromsgrove':'Level 1 - Medium','Cannock Chase':'Level 1 - Medium','Coventry':'Level 1 - Medium','Dudley':'Level 1 - Medium','East Staffordshire':'Level 1 - Medium','Herefordshire, County of':'Level 1 - Medium','Lichfield':'Level 1 - Medium','Malvern Hills':'Level 1 - Medium','Newcastle-under-Lyme':'Level 1 - Medium','North Warwickshire':'Level 1 - Medium','Nuneaton and Bedworth':'Level 1 - Medium','Redditch':'Level 1 - Medium','Rugby':'Level 1 - Medium','Sandwell':'Level 2 - High','Shropshire':'Level 1 - Medium','Solihull':'Level 2 - High','South Staffordshire':'Level 1 - Medium','Stafford':'Level 1 - Medium','Staffordshire Moorlands':'Level 1 - Medium','Stoke-on-Trent':'Level 1 - Medium','Stratford-on-Avon':'Level 1 - Medium','Tamworth':'Level 1 - Medium','Telford and Wrekin':'Level 1 - Medium','Walsall':'Level 2 - High','Warwick':'Level 1 - Medium','Wolverhampton':'Level 2 - High','Worcester':'Level 1 - Medium','Wychavon':'Level 1 - Medium','Wyre Forest':'Level 1 - Medium','Bath and North East Somerset':'Level 1 - Medium','Bournemouth, Christchurch and Poole':'Level 1 - Medium','Bristol, City of':'Level 1 - Medium','Cheltenham':'Level 1 - Medium','Cornwall and Isles of Scilly':'Level 1 - Medium','Cotswold':'Level 1 - Medium','Dorset':'Level 1 - Medium','East Devon':'Level 1 - Medium','Exeter':'Level 1 - Medium','Forest of Dean':'Level 1 - Medium','Gloucester':'Level 1 - Medium','Mendip':'Level 1 - Medium','Mid Devon':'Level 1 - Medium','North Devon':'Level 1 - Medium','North Somerset':'Level 1 - Medium','Plymouth':'Level 1 - Medium','Sedgemoor':'Level 1 - Medium','Somerset West and Taunton':'Level 1 - Medium','South Gloucestershire':'Level 1 - Medium','South Hams':'Level 1 - Medium','South Somerset':'Level 1 - Medium','Stroud':'Level 1 - Medium','Swindon':'Level 1 - Medium','Teignbridge':'Level 1 - Medium','Tewkesbury':'Level 1 - Medium','Torbay':'Level 1 - Medium','Torridge':'Level 1 - Medium','West Devon':'Level 1 - Medium','Wiltshire':'Level 1 - Medium'};

//disable touch screen issues
function touchHandler(event){
    if(event.touches.length > 1){
        event.preventDefault();
    }
}

function formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    date = yyyy+'-'+mm+'-'+dd;
    return date
 }

function Last7Days (latest) {
    var result = [];
    for (var i=0; i<7; i++) {
        var d = new Date(latest);
        d.setDate(d.getDate() - i);
        result.push( formatDate(d) )
    }
    return(result);
}

var latest_date_data = "";

//Local Authority data popup
var div = d3.select("body").append("div") 
  .attr("class", "tooltip")       
  .style("opacity", 0)
  .style("padding", "7px");

//map container
d3.select("body").append("div").attr("id", "container").style("height", h-h_var + "px").style("width", (h-h_var)*w_var + "px").style("float", "left");

//position loading div
d3.select(".loading").style("left", ((h-h_var)*w_var)/3 + "px").style("top", h/3 + "px");

//legend, search and list view
var outer_div = d3.select("body").append("div").attr("id", "outerdiv").style("display", "inline-block").style("padding-left", "20px").style("padding-top", "10px");
outer_div.append("div").attr("id", "container_legend").style("width", "450px").style("height", "205px").style("top","10px").style("background", "white");
var search_group = outer_div.append("div").attr("id", "search_grp").style("padding-top", "10px");
search_group.append("input").attr("id", "search_box").style("width", "200px").attr("placeholder", "Enter area name to search map");
search_group.append("button").attr("id", "search_btn").text("Search");
outer_div.append("div").attr("id", "container_list").style("width", "450px");

d3.select("body").append("div").html("*Risk levels calculated from daily cases per 100,000 population (7 day rolling average). <a href='https://coronavirus.data.gov.uk/' target='_blank'>source</a>");

var svg = d3.select("#container").append("svg").attr("height", h-h_var).attr("width", (h-h_var)*w_var);

//set up attributes for mobile phone browsers
if (h > w){
  //assume mobile phone if browser height is greater than width
  mobile_font = 8;
  mobile_titles = 6;
  table_height = h-445;
  table_width = 500;
  legend_font = 18;
  div.style("font-size", "20px");
  d3.select("#title_label").style("font-size", "34px");
  d3.select("#page_des").style("font-size", "20px");
  legend_font = 18;
  $(".header").show();
  $(".sidebarIconToggle").show();
  $("#outerdiv").appendTo("#sidebarMenu");
  d3.select("#page_des").html("Based on the <a href='https://globalepidemics.org/key-metrics-for-covid-suppression/' target='_blank'>Harvard Global Health Institute Key Metrics for COVID Suppression</a> framework. Click an area for details.");
  d3.select("#search_box").style("height", "30px").style("width", "300px").style("font-size", "20px");
  d3.select("#search_btn").style("height", "30px").style("font-size", "20px");
  d3.select("#new_cases").style("font-size", "20px");
}

$("#search_box").on( "autocompleteselect", function( event, ui ) {
    var searchval = ui.item.value.toLowerCase().replace(/[\s&,]/g,"_");
    d3.selectAll(".map_area").style("opacity", 0.5); 
    d3.select("#" + searchval).style("opacity", 1); 
    clicked_area = searchval;
    d3.select("#openSidebarMenu").property('checked', false);
    mouseover_txt = popup(d3.select("#" + searchval).data()[0]);
    div.style("opacity", .9);    
    div .html(mouseover_txt)  
      .style("left", ($("#"+searchval)[0].getBoundingClientRect().x + 10) + "px")   
      .style("top", ($("#"+searchval)[0].getBoundingClientRect().y - 28) + "px"); 
});

$("#search_btn").on( "click", function() {
  var searchval = d3.select("#search_box").property("value").toLowerCase().replace(/[\s&,]/g,"_");
  d3.selectAll(".map_area").style("opacity", 0.5); 
  d3.select("#" + searchval).style("opacity", 1); 
  clicked_area = searchval;
  d3.select("#openSidebarMenu").property('checked', false);
  mouseover_txt = popup(d3.select("#" + searchval).data()[0]);
  div.style("opacity", .9);    
  div .html(mouseover_txt)  
    .style("left", ($("#"+searchval)[0].getBoundingClientRect().x + 10) + "px")   
    .style("top", ($("#"+searchval)[0].getBoundingClientRect().y - 28) + "px");
});

/* set up zooming/panning (disabled)     
const zoom = d3.zoom()
  .scaleExtent([1,8])
  .on('zoom', zoomed);
*/
$.ajax({
        url: "https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=United%2520Kingdom;areaType=overview&latestBy=newCasesByPublishDate&structure=%7B%22date%22:%22date%22,%22value%22:%22newCasesByPublishDate%22%7D",
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            latest_date_data = result.data[0].date;
            d3.select("#updated_date").text("(" + latest_date_data + ")");
            get_data(Last7Days(result.data[0].date));
            //d3.select("#new_cases").append("label").text("New cases " + result.data[0].date + ": " + result.data[0].value).style("font-weight", "bold");          
            d3.select("#new_cases").append("label").text("New cases " + result.data[0].date + ": " + result.data[0].value).style("font-weight", "bold");          
        }
    })
//set up map
var path = d3.geoPath();
var projection = d3.geoMercator();
const g = svg.append("g");

var all_data = [];
var data = d3.map();

function get_data(latest_date){
  var iteration = 0;
  latest_date.forEach(function(d) {
    $.ajax({
        url: "https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=ltla;date="+d+"&structure={%22date%22:%22date%22,%22value%22:%22newCasesByPublishDate%22,%22area%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22newDeaths%22:%22newDeaths28DaysByPublishDate%22}",
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
          all_data = [].concat(all_data, result.data);
          iteration += 1;
          if (iteration > 6){
            
            process_data(calculate(all_data));
          }
        }
    })
  });
}

function calculate(all_data){
  //var grouped_data = d3.nest().key(function(d) { return d.name;}).entries(all_data);
  //{key:name, values:[{name:name, value:value, date:date}]}
  var grouped_data = d3.nest().key(function(d) { return d.area;}).rollup(function(v) { 
    var cases_week = d3.sum(v, function(d) { return d.value; });
    var cases_day = v.filter(function(dt) { return dt.date === latest_date_data; })[0]["value"];
    var area_name = v[0]["area"];
    var area_pop = (populations[area_name]) ? populations[area_name] : 100000;
    var trend = (cases_day > d3.mean(v, function(d) {return d.value;})) ? "▲" : ((cases_day < d3.mean(v, function(d) {return d.value;})) ? "▼" : "➖")
    var lockdown = (tiers[area_name]) ? tiers[area_name] : 'N/A';
    return {
      cases_week: cases_week,
      cases_day: cases_day,
      rate_week: ((100000/area_pop)*cases_week).toFixed(2),
      rate_day: ((100000/area_pop)*(cases_week/7)).toFixed(2),
      trend: trend,
      lockdown: lockdown
    };  
  }).entries(all_data);

  var grouped_data2 = grouped_data.map(function(d) { return {
      name: d.key,
      cases_week: d.value.cases_week,
      cases_day: d.value.cases_day,
      rate_week: d.value.rate_week,
      rate_day: d.value.rate_day,
      trend: d.value.trend,
      lockdown: d.value.lockdown
  }});
  return grouped_data2; 
}

function process_data(all_data) {
  all_data.forEach(function(d) {
    data.set(d.name, [+d.rate_day, d.lockdown, d.cases_day, d.rate_week, d.trend, d.cases_week]);
  });
  build_table(all_data);
d3.queue()
  .defer(d3.json, "uk_la.geojson")
  .await(ready);
}


//Listeners
window.onclick = function(event){
  if(!(event.target.className.baseVal=="map_area")){
    if (!(event.target.innerText)) {              
      d3.selectAll(".map_area").style("opacity", 1); 
      clicked_area = ""; 
      div.style("opacity", 0);
        
    }
  }
}

window.addEventListener('resize', function() {
  console.log("The window was resized!");
});

function popup(d){
  //form text for local authority popup information
  var mouseover_txt = "<strong><u>" + d.properties.lad18nm + "</strong></u><br/>";
  var risk_color;
  var risk_text;

  d.cases = (typeof data.get(d.properties.lad18nm) == "undefined") ? "unavailable":data.get(d.properties.lad18nm)[2];
  d.trend = (typeof data.get(d.properties.lad18nm) == "undefined") ? "unavailable":data.get(d.properties.lad18nm)[4];
  d.weekly = (typeof data.get(d.properties.lad18nm) == "undefined") ? "unavailable":data.get(d.properties.lad18nm)[3];
  d.cases_week = (typeof data.get(d.properties.lad18nm) == "undefined") ? "unavailable":data.get(d.properties.lad18nm)[5];
          
  if (d.total < 1){
    risk_text1 = "On Track for Containment";
    risk_text = "Monitor with test and trace";
    risk_color = "green";
  }
  else if (d.total < 10) {
    risk_text1 = "Community Spread";
    risk_text = "Rigorous test and trace advised";
    risk_color = "yellow";
  }
  else if (d.total < 25) {
    risk_text1 = "Accelerated Spread";
    risk_text = "Stay-at-home orders advised";
    risk_color = "orange";
  }
  else {
    risk_text1 = "Tipping Point";
    risk_text = "Stay-at-home orders necessary";
    risk_color = "red";
  }
  if (d.total == "unavailable") {
    mouseover_txt += "No Data Available";
  }   
  else {
    mouseover_txt = mouseover_txt + "Daily cases per 100k: " + d.total + "<br/>" + "Weekly cases per 100k: " + d.weekly ;
    if(d.trend == "") { //"▲") {
      mouseover_txt = mouseover_txt + "<label style='color:red'>" + d.trend + "</label>";
    }
    else if (d.trend == "") { // "▼") {
      mouseover_txt = mouseover_txt + "<label style='color:green'>" + d.trend + "</label>";
    }
//    else {
//      mouseover_txt = mouseover_txt + "<label>" + d.trend + "</label>";
//    }
    mouseover_txt = mouseover_txt + "<br/>New cases today: " + d.cases + "<br/>New cases past week: " + d.cases_week + "<br/><i>" + d.lockdown + "<br/><span style='background-color:" + risk_color + "'>" + risk_text1 + "</span><br/><span style='background-color:" + risk_color + "'>" + risk_text + "</span>";
    //Add link to PHE page"<br/><a href='https://coronavirus.data.gov.uk/cases?areaType=ltla&areaName=" + d.properties.lad18nm +"' target='_blank'>details</a>";
  }  
  return mouseover_txt;
}

function ready(error, topo) {
  //draw map
  $('.loading').hide();
  $('.legend').show();
  var clicked_area = "";

  projection.fitSize([(h-h_var)*w_var,h-h_var], topo);
  g
    .selectAll("path")
    .data(topo.features)
    .enter()
    .append("path")
      .attr("d", d3.geoPath().projection(projection))
      .attr("id", function(d) { 
        return d.properties.lad18nm.toLowerCase().replace(/[\s&,]/g,"_");
      })
      .attr("class", "map_area")
      .attr("stroke", function(d) {
      	d.lockdown = (typeof data.get(d.properties.lad18nm) == "undefined") ? "unavailable":data.get(d.properties.lad18nm)[1];
      	if (d.lockdown == "Level 3 - Very High") {
      		return "black";
      	}
      	else if (d.lockdown == "Level 2 - High") {
      		return "blue";
      	}
      	else {
      		return "grey";
      	}
      })
      .attr("stroke-opacity", function(d) {
        d.lockdown = (typeof data.get(d.properties.lad18nm) == "undefined") ? "unavailable":data.get(d.properties.lad18nm)[1];
        if (d.lockdown == "Level 1 - Medium" || d.lockdown == "N/A") {
          return 0.3;
        }
        else {
          return 1;
        }
      })
      .attr("fill", function (d) {
        d.total = (typeof data.get(d.properties.lad18nm) == "undefined") ? "unavailable":data.get(d.properties.lad18nm)[0];
        if (d.total < 1) { return "green";}
        else if (d.total < 10) {return "yellow";}
        else if (d.total < 25) {return "orange";}
        else if (d.total >= 25) {return "red";}
        else {return "silver";}
      })
      .on("mouseover", function(d) { 
        if (clicked_area == ""){
        var mouseover_txt = popup(d);
          div.transition()    
            .duration(200)    
            .style("opacity", .9);    
          div.html(mouseover_txt)  
            .style("left", (d3.event.pageX) + "px")   
            .style("top", (d3.event.pageY - 28) + "px"); 
        }
      })          
      .on("mouseout", function(d) {  
        if (clicked_area == ""){ 
          div.transition()    
            .duration(500)    
            .style("opacity", 0);
          } 
      })
      .on("click", function(d) {
        var mouseover_txt = popup(d); 

        if (clicked_area != d.properties.lad18nm.toLowerCase().replace(/[\s&,]/g,"_")) {
          d3.selectAll(".map_area").style("opacity", 0.5); 
          d3.select(this).style("opacity", 1); 
          clicked_area = d.properties.lad18nm.toLowerCase().replace(/[\s&,]/g,"_");
          div.style("opacity", .9);    
          div .html(mouseover_txt)  
            .style("left", (d3.event.pageX) + "px")   
            .style("top", (d3.event.pageY - 28) + "px");
              
        } else {
          d3.selectAll(".map_area").style("opacity", 1); 
          clicked_area = ""; 
          div.style("opacity", 0);   
        }       
      });        
}
/*
d3.selectAll(".map_area").sort(function (a, b) { // select the parent and sort the path's
      if(a.lockdown == "Area of Intervention") {
        return 1;
        console.log("area");
      }    
      else {
        return -1;
      }               // a is the hovered element, bring "a" to the front
  });
*/ 
//set up legend
var svg2 = d3.select("#container_legend").append("svg");
svg2.append("circle").attr("cx",20).attr("cy",20).attr("r", 6).style("fill", "green").style("stroke", "black").attr("class", "legend");
svg2.append("circle").attr("cx",20).attr("cy",55).attr("r", 6).style("fill", "yellow").style("stroke", "black").attr("class", "legend");
svg2.append("circle").attr("cx",20).attr("cy",90).attr("r", 6).style("fill", "orange").style("stroke", "black").attr("class", "legend");;
svg2.append("circle").attr("cx",20).attr("cy",125).attr("r", 6).style("fill", "red").style("stroke", "black").attr("class", "legend");
svg2.append("rect").attr("x",20).attr("y",160).attr("width", 10).attr("height", 2).style("fill", "black").attr("class", "legend");
svg2.append("rect").attr("x",20).attr("y",180).attr("width", 10).attr("height", 2).style("fill", "blue").attr("class", "legend");
svg2.append("rect").attr("x",20).attr("y",200).attr("width", 10).attr("height", 2).style("fill", "grey").style("opacity", 0.3).attr("class", "legend");

svg2.append("text").attr("x", 40).attr("y", 20).text("On Track for Containment (<1 daily case per 100k)").style("font-size", legend_font + "px").attr("alignment-baseline","middle").attr("class", "legend");
svg2.append("text").attr("x", 40).attr("y", 35).text("Monitor with test and trace").style("font-size", legend_font + "px").style("font-style", "italic").attr("alignment-baseline","middle").attr("class", "legend");

svg2.append("text").attr("x", 40).attr("y", 55).text("Community Spread (1-9 daily cases per 100k)").style("font-size", legend_font + "px").attr("alignment-baseline","middle").attr("class", "legend");
svg2.append("text").attr("x", 40).attr("y", 70).text("Rigorous test and trace advised").style("font-size", legend_font + "px").style("font-style", "italic").attr("alignment-baseline","middle").attr("class", "legend");

svg2.append("text").attr("x", 40).attr("y", 90).text("Accelerated Spread (10-24 daily cases per 100k)").style("font-size", legend_font + "px").attr("alignment-baseline","middle").attr("class", "legend");
svg2.append("text").attr("x", 40).attr("y", 105).text("Stay-at-home orders advised").style("font-size", legend_font + "px").style("font-style", "italic").attr("alignment-baseline","middle").attr("class", "legend");

svg2.append("text").attr("x", 40).attr("y", 125).text("Tipping Point (25+ daily cases per 100k)").style("font-size", legend_font + "px").attr("alignment-baseline","middle").attr("class", "legend");
svg2.append("text").attr("x", 40).attr("y", 140).text("Stay-at-home orders necessary").style("font-size", legend_font + "px").style("font-style", "italic").attr("alignment-baseline","middle").attr("class", "legend");

svg2.append("text").attr("x", 40).attr("y", 160).text("Tier 3 Restrictions").style("font-size", legend_font + "px").attr("alignment-baseline","middle").attr("class", "legend")
svg2.append("text").attr("x", 40).attr("y", 180).text("Tier 2 Restrictions").style("font-size", legend_font + "px").attr("alignment-baseline","middle").attr("class", "legend")
svg2.append("text").attr("x", 40).attr("y", 200).text("Tier 1 Restrictions").style("font-size", legend_font + "px").attr("alignment-baseline","middle").attr("class", "legend")

/* zoom function (disabled)
svg.call(zoom);

function zoomed() {
      g
        .selectAll('path') // To prevent stroke width from scaling
        .attr('transform', d3.event.transform);
    }
*/
function build_table(data) {

  /* calculate total cases from data
  var totalSum = d3.sum(data.map(function(d){ return d.cases_day}));
  svg2.append("text").attr("x", 10).attr("y", 45).attr("font-weight", "bold").text("Total New Daily Cases (N. Irl not included): "+ totalSum);
  */
  //get all local authority areas to populate search autocomplete
  //var updated = data[0]["last_updated"];
  //d3.select("#updated_date").text("(updated " + updated + ")");

  var areas = []; 
  data.map(function(e) {
    areas.push(e.name);
  });
  $( "#search_box" ).autocomplete({
      source: areas
  });

  //Build scrolling table of daily case rates by local authority
  var valueFunc = function(data) {return data.rate_day;}
  var textFunc = function(data) {return data.name;}
  var columns = ["Local Authority", "Daily cases per 100k"];

  function drawTable(data, tableid, dimensions, valueFunc, textFunc, columns) {
    var sortValueAscending = function (a, b) {return valueFunc(a) - valueFunc(b);}
    var sortValueDescending = function (a, b) {return valueFunc(b) - valueFunc(a);}
    var sortNameAscending = function (a, b) {return textFunc(a).localeCompare(textFunc(b));}
    var sortNameDescending = function (a, b) {return textFunc(b).localeCompare(textFunc(a));}
    var metricAscending = true;
    var nameAscending = true;

    var width = dimensions.width + "px";
    var height = dimensions.height + "px";
    var twidth = (dimensions.width - 25) + "px";
    var divHeight = (dimensions.height - 60) + "px";

    var outerTable = d3.select(tableid).append("table").attr("width", width);

    outerTable.append("tr").append("td")
      .append("table").attr("class", "headerTable").attr("width", twidth)
      .append("tr").selectAll("th").data(columns).enter()
        .append("th").attr("id", function(column) {return column;}).text(function (column) { return column + "▼"; })
        .on("click", function (d) {
          // Choose appropriate sorting function.
          if (d === columns[1]) {
            var sort = metricAscending ? sortValueAscending : sortValueDescending;
            metricAscending = !metricAscending;             
          } else if(d === columns[0]) {
            var sort = nameAscending ? sortNameAscending : sortNameDescending
            nameAscending = !nameAscending;
          }     
          var rows = tbody.selectAll("tr").sort(sort);
        })
        .style("font-size", 16 + mobile_titles +"px");

    var inner = outerTable.append("tr").append("td")
      .append("div").attr("class", "scroll").attr("width", width).attr("style", "height:" + divHeight + ";")
      .append("table").attr("class", "bodyTable").attr("border", 1).attr("width", twidth).attr("height", height).attr("style", "table-layout:fixed");

    var tbody = inner.append("tbody");
    // Create a row for each object in the data and perform an intial sort.
    var rows = tbody.selectAll("tr").data(data).enter().append("tr")
      .attr("class", "table_row").sort(sortValueDescending)
      .on("click", function(d){
        var clickval = d.name.toLowerCase().replace(/[\s&,]/g,"_");
        d3.select("#openSidebarMenu").property('checked', false);
        d3.selectAll(".map_area").style("opacity", 0.5); 
        d3.select("#" + clickval).style("opacity", 1); 
        clicked_area = clickval;            
        mouseover_txt = popup(d3.select("#" + clickval).data()[0]);
        div.style("opacity", .9);    
        div .html(mouseover_txt)  
          .style("left", ($("#"+clickval)[0].getBoundingClientRect().x + 10) + "px")   
          .style("top", ($("#"+clickval)[0].getBoundingClientRect().y - 28) + "px"); 
      });

    // Create a cell in each row for each column
    var cells = rows.selectAll("td")
      .data(function (d) {
        return columns.map(function (column) {
            return { column: column, text: textFunc(d), value: valueFunc(d)};
        });
      }).enter().append("td")
        .style("text-align", "center")
        .text(function (d) {
          if (d.column === columns[0]) return d.text;
          else if (d.column === columns[1]) return d.value;
        })
        .style("background-color", function(d) {
          if(d.value < 1) {return "green";}
          else if (d.value < 10) {return "yellow";}
          else if (d.value < 25) {return "orange";}
          else {return "red";}
        })
        .style("border", 0)
        .style("font-size", 14+ mobile_font + "px");
  }
  drawTable(data, "#container_list", { width: table_width, height: table_height}, valueFunc, textFunc, columns);
}
