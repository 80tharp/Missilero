
//INGRESS Module
var missileArray= [
    {
        "missile_cat": "1",
        "missile_country": "China",
        "missile_descript": "Descript",
        "missile_id": 1,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Dong Feng 11",
        "missile_origin": "China",
        "missile_range": "186",
        "missile_range_class": "SRBM",
        "missile_range_km": "300"
    },
    {
        "missile_cat": "2",
        "missile_country": "China",
        "missile_descript": "Descript",
        "missile_id": 2,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Dong Feng 12",
        "missile_origin": "China",
        "missile_range": "174",
        "missile_range_class": "SRBM",
        "missile_range_km": "280"
    },
    {
        "missile_cat": "3",
        "missile_country": "China",
        "missile_descript": "Descript",
        "missile_id": 3,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Dong Feng 15",
        "missile_origin": "China",
        "missile_range": "372",
        "missile_range_class": "SRBM",
        "missile_range_km": "600"
    },
    {
        "missile_cat": "4",
        "missile_country": "China",
        "missile_descript": "Descript",
        "missile_id": 4,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Dong Feng 16",
        "missile_origin": "China",
        "missile_range": "621",
        "missile_range_class": "SRBM",
        "missile_range_km": "1000"
    },
    {
        "missile_cat": "5",
        "missile_country": "China",
        "missile_descript": "Descript",
        "missile_id": 5,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Dong Feng 17",
        "missile_origin": "China",
        "missile_range": "1553",
        "missile_range_class": "HGV",
        "missile_range_km": "2500"
    },
    {
        "missile_cat": "6",
        "missile_country": "China",
        "missile_descript": "Descript",
        "missile_id": 6,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Dong Feng 21",
        "missile_origin": "China",
        "missile_range": "1336",
        "missile_range_class": "MEBM",
        "missile_range_km": "2150"
    },
    {
        "missile_cat": "1",
        "missile_country": "China",
        "missile_descript": "Descript",
        "missile_id": 7,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Dong Feng 26",
        "missile_origin": "China",
        "missile_range": "2486",
        "missile_range_class": "IRBM",
        "missile_range_km": "4000"
    },
    {
        "missile_cat": "2",
        "missile_country": "China",
        "missile_descript": "Descript",
        "missile_id": 8,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Dong Feng 31",
        "missile_origin": "China",
        "missile_range": "7271",
        "missile_range_class": "ICBM",
        "missile_range_km": "11700"
    },
    {
        "missile_cat": "3",
        "missile_country": "China",
        "missile_descript": "Descript",
        "missile_id": 9,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Dong Feng 4",
        "missile_origin": "China",
        "missile_range": "3418",
        "missile_range_class": "IRBM",
        "missile_range_km": "5500"
    },
    {
        "missile_cat": "4",
        "missile_country": "China",
        "missile_descript": "Descript",
        "missile_id": 10,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Dong Feng 41",
        "missile_origin": "China",
        "missile_range": "9322",
        "missile_range_class": "ICBM",
        "missile_range_km": "15000"
    },
    {
        "missile_cat": "5",
        "missile_country": "China",
        "missile_descript": "Descript",
        "missile_id": 11,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Dong Feng 5",
        "missile_origin": "China",
        "missile_range": "8079",
        "missile_range_class": "ICBM",
        "missile_range_km": "13000"
    },
    {
        "missile_cat": "6",
        "missile_country": "China",
        "missile_descript": "Descript",
        "missile_id": 12,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Hong Niao 1",
        "missile_origin": "China",
        "missile_range": "403",
        "missile_range_class": "Cruise Missile",
        "missile_range_km": "650"
    },
    {
        "missile_cat": "1",
        "missile_country": "China",
        "missile_descript": "Descript",
        "missile_id": 13,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Hong Niao 2",
        "missile_origin": "China",
        "missile_range": "1118",
        "missile_range_class": "Cruise Missile",
        "missile_range_km": "1800"
    },
    {
        "missile_cat": "2",
        "missile_country": "China",
        "missile_descript": "Descript",
        "missile_id": 14,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Hong Niao 3",
        "missile_origin": "China",
        "missile_range": "1864",
        "missile_range_class": "Cruise Missile",
        "missile_range_km": "3000"
    },
    {
        "missile_cat": "3",
        "missile_country": "China",
        "missile_descript": "Descript",
        "missile_id": 15,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Ju Lang 2",
        "missile_origin": "China",
        "missile_range": "5593",
        "missile_range_class": "SLBM",
        "missile_range_km": "9000"
    },
    {
        "missile_cat": "4",
        "missile_country": "China",
        "missile_descript": "Descript",
        "missile_id": 16,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Yingji 18",
        "missile_origin": "China",
        "missile_range": "335",
        "missile_range_class": "Cruise Missile",
        "missile_range_km": "540"
    },
    {
        "missile_cat": "5",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 17,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SS-N-30A",
        "missile_origin": "Russia",
        "missile_range": "1553",
        "missile_range_class": "LACM",
        "missile_range_km": "2500"
    },
    {
        "missile_cat": "6",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 18,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SS-N-27",
        "missile_origin": "Russia",
        "missile_range": "186",
        "missile_range_class": "ASCM",
        "missile_range_km": "300"
    },
    {
        "missile_cat": "1",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 19,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SS-26",
        "missile_origin": "Russia",
        "missile_range": "310",
        "missile_range_class": "SRBM",
        "missile_range_km": "500"
    },
    {
        "missile_cat": "2",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 20,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SSC-8",
        "missile_origin": "Russia",
        "missile_range": "1553",
        "missile_range_class": "GLCM",
        "missile_range_km": "2500"
    },
    {
        "missile_cat": "3",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 21,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Kh-101",
        "missile_origin": "Russia",
        "missile_range": "1740",
        "missile_range_class": "ALCM",
        "missile_range_km": "2800"
    },
    {
        "missile_cat": "4",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 22,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Kh-102",
        "missile_origin": "Russia",
        "missile_range": "1740",
        "missile_range_class": "ALCM",
        "missile_range_km": "2800"
    },
    {
        "missile_cat": "5",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 23,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Kh-47",
        "missile_origin": "Russia",
        "missile_range": "1243",
        "missile_range_class": "ALBM",
        "missile_range_km": "2000"
    },
    {
        "missile_cat": "6",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 24,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "Kh-55",
        "missile_origin": "Russia",
        "missile_range": "1553",
        "missile_range_class": "ALCM",
        "missile_range_km": "2500"
    },
    {
        "missile_cat": "1",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 25,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SS-21",
        "missile_origin": "Russia",
        "missile_range": "74",
        "missile_range_class": "SRBM",
        "missile_range_km": "120"
    },
    {
        "missile_cat": "2",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 26,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SS-N-26",
        "missile_origin": "Russia",
        "missile_range": "186",
        "missile_range_class": "ASCM",
        "missile_range_km": "300"
    },
    {
        "missile_cat": "3",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 27,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SS-N-6",
        "missile_origin": "Russia",
        "missile_range": "1988",
        "missile_range_class": "SLBM",
        "missile_range_km": "3200"
    },
    {
        "missile_cat": "4",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 28,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SS-N-18",
        "missile_origin": "Russia",
        "missile_range": "4039",
        "missile_range_class": "SLBM",
        "missile_range_km": "6500"
    },
    {
        "missile_cat": "5",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 29,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SS-N-21",
        "missile_origin": "Russia",
        "missile_range": "1864",
        "missile_range_class": "Cruise Missile",
        "missile_range_km": "3000"
    },
    {
        "missile_cat": "6",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 30,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SS-N-23",
        "missile_origin": "Russia",
        "missile_range": "6836",
        "missile_range_class": "SLBM",
        "missile_range_km": "11000"
    },
    {
        "missile_cat": "1",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 31,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SS-18",
        "missile_origin": "Russia",
        "missile_range": "9944",
        "missile_range_class": "ICBM",
        "missile_range_km": "16000"
    },
    {
        "missile_cat": "2",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 32,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SS-27m2",
        "missile_origin": "Russia",
        "missile_range": "6525",
        "missile_range_class": "ICBM",
        "missile_range_km": "10500"
    },
    {
        "missile_cat": "3",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 33,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SS-20",
        "missile_origin": "Russia",
        "missile_range": "3107",
        "missile_range_class": "IRBM",
        "missile_range_km": "5000"
    },
    {
        "missile_cat": "4",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 34,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SS-N-32",
        "missile_origin": "Russia",
        "missile_range": "5158",
        "missile_range_class": "SLBM",
        "missile_range_km": "8300"
    },
    {
        "missile_cat": "5",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 35,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SS-25",
        "missile_origin": "Russia",
        "missile_range": "6836",
        "missile_range_class": "ICBM",
        "missile_range_km": "11000"
    },
    {
        "missile_cat": "6",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 36,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SS-27m1",
        "missile_origin": "Russia",
        "missile_range": "6836",
        "missile_range_class": "ICBM",
        "missile_range_km": "11000"
    },
    {
        "missile_cat": "1",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 37,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SS-1",
        "missile_origin": "Russia",
        "missile_range": "341",
        "missile_range_class": "SRBM",
        "missile_range_km": "550"
    },
    {
        "missile_cat": "2",
        "missile_country": "Russia",
        "missile_descript": "Descript",
        "missile_id": 38,
        "missile_img": "https://science.howstuffworks.com/difference-ballistic-cruise-missile.htm",
        "missile_name": "SS-19",
        "missile_origin": "Russia",
        "missile_range": "6215",
        "missile_range_class": "ICBM",
        "missile_range_km": "10000"
    }
]
//sets missile array to built in json
//NEEDS TO BE SWAPPED WITH API CALL

//builds table from JSON
function buildTable(data){
    var table = document.getElementById('missile-data')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                          <td>${data[i].missile_name}</td>
                          <td>${data[i].missile_cat}</td>
                          <td>${data[i].missile_range}</td>
                          <td>${data[i].missile_country}</td>
                    </tr>`
        table.innerHTML += row
    }
}
// END OF INGRESS Module

//SORT AND FILTER Module
//Sorts column values when heading is clicked
$('th').on('click', function(){
    var column = $(this).data('column')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length - 1)
    if(order == 'desc'){
        $(this).data('order', "asc")
        missileArray = missileArray.sort((a,b) => a[column] > b[column] ? 1 : -1)
        text += '&#9660'
    }else{
        $(this).data('order', "desc")
        missileArray = missileArray.sort((a,b) => a[column] < b[column] ? 1 : -1)
        text += '&#9650'
    }
    $(this).html(text)
    buildTable(missileArray)
})

//Filters Rows based on text search of name
function searchTable(value, data){
    var filteredData = []
    for (var i = 0; i < data.length; i++){
        value = value.toLowerCase()
        var name = data[i].missile_name.toLowerCase()
        if (name.includes(value)){
            filteredData.push(data[i])  }
    }
    return filteredData
}
$('#search-input').on('keyup', function(){
    var value = $(this).val()
    var data = searchTable(value, missileArray)
    buildTable(data)
})

$('.missilero_drop').change(function() {
    var countryValue = $('#country-drop').val(),
        rangeValue = $('#range-drop').val(),
        catValue = $('#category-drop').val();
    var table = $("#missile-data");
    var trs = table.find('tr');
    trs.hide();
    var filtered = trs.filter(function (index, elem) {
        var tds = $(elem).find('td');
        if (countryValue !== "All" && tds.eq(3).text() !== countryValue) {
            return false;
        }
        if (rangeValue !== "All" && tds.eq(2).text() !== rangeValue) {
            return false;
        }
        if (catValue !== "All" && tds.eq(1).text() !== catValue) {
            return false;
        }
        return true;
    })
    filtered.show();
});
//END OF SORT AND FILTER Module


//DISPLAY Module
$('#missile-data').on('click','tr', function(){
    var name = document.getElementById('missile_name')
    var range = document.getElementById('missile_range')
    var category = document.getElementById('missile_category')
    var country = document.getElementById('missile_country')
    var description = document.getElementById('missile_description')
    var index= $(this).index()
    name.innerText = missileArray[index].missile_name
    range.innerText = missileArray[index].missile_range
    category.innerText = missileArray[index].missile_cat
    country.innerText = missileArray[index].missile_country
    description.innerText = missileArray[index].missile_descript
    console.log(missileArray[index])
});
//END OF Display Module

buildTable(missileArray)


