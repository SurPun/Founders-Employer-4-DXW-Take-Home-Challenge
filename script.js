// Function

const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = storeitems.getElementsByTagName("h2")
    const inputError = document.querySelector(".error");

    for(let i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName("h2")[0];

        if(match) {
            let textvalue = match.textContent || match.innerHTML;

            if(textvalue.toUpperCase().indexOf(searchbox) > - 1) {
                product[i].style.display = "";
                inputError.textContent = "";
            } else {
                product[i].style.display = "none";
            }
        } 
    }
}

// HTML

const list = [
    {id:"AGO", name:"Attorney General's Office"},
    {id:"AGO", name:"Attorney General's Office"},
    {id:"APA", name:"Asset Protection Agency"},
    {id:"BIS", name:"Department for Business, Innovation and Skills"},
    {id:"BEIS", name:"Department for Business, Energy and Industrial Strategy"},
    {id:"CO", name:"Cabinet Office"},
    {id:"CxD", name:"Chancellor's Departments (APA, DMO, GAD, HMRC, HMT, NS&I, OBR)"},
    {id:"DCLG", name:"Department for Communities and Local Government"},
    {id:"DCMS", name:"Department for Digital, Culture, Media and Sport"},
    {id:"DECC", name:"Department of Energy and Climate Change"},
    {id:"Defra", name:"	Department for Environment, Food and Rural Affairs"},
    {id:"DE&S", name:"Defence Equipment and Support (part of MoD)"},
    {id:"DExEU", name:"Department for Exiting the European Union"},
    {id:"DfE", name:"Department for Education"},
    {id:"DfID", name:"Department for International Development"},
    {id:"DfT", name:"Department for Transport"},
    {id:"DH", name:"Department of Health"},
    {id:"DHSC", name:"Department of Health and Social Care"},
    {id:"DMO", name:"Debt Management Office"},
    {id:"DPM", name:"Deputy Prime Minister"},
    {id:"DVLA", name:"Driver and Vehicle Licensing Agency (part of DfT)"},
    {id:"DWP", name:"Department for Work and Pensions"},
    {id:"ERG", name:"Efficiency and Reform Group (part of CO)"},
    {id:"FCO", name:"Foreign and Commonwealth Office"},
    {id:"GAD", name:"Government Actuary's Department"},
    {id:"GDS", name:"Government Digital Service"},
    {id:"HCS", name:"Home Civil Service (all civil servants in UK, Scottish and Welsh governments)"},
    {id:"HMRC", name:"Her Majesty's Revenue and Customs"},
    {id:"HMT", name:"Her Majesty's Treasury"},
    {id:"HO", name:"Home Office"},
    {id:"HofC", name:"House of Commons"},
    {id:"HofL", name:"House of Lords"},
    {id:"IPA", name:"Infrastructure and Projects Authority"},
    {id:"Law", name:"Law officers (AGO, Office of the Advocate General for Scotland)"},
    {id:"MHCLG", name:"MInistry of Housing, Communities and Local Government"},
    {id:"MoD", name:"Ministry of Defence"},
    {id:"MoJ", name:"Ministry for Justice"},
    {id:"MPA", name:"Major Projects Authority (part of CO)"},
    {id:"NAO", name:"National Audit Office"},
    {id:"NHS", name:"National Health Service"},
    {id:"NICS", name:"Northern Ireland Civil Service"},
    {id:"NIO", name:"Northern Ireland Office"},
    {id:"NS&I", name:"National Savings and Investments"},
    {id:"OBR", name:"Office for Budget Responsibility"},
    {id:"ONS", name:"Office for National Statistics"},
    {id:"PM", name:"Prime Minister"},
    {id:"Scot", name:"Scotland Office"},
    {id:"SG", name:"Scottish Government"},
    {id:"Wal", name:"Wales Office"},
    {id:"WG", name:"Welsh Government"},
]

const listMainContainer = document.querySelector(".product-list")

for (let i = 1 ; i < list.length; i++) {

    const listContainer = document.createElement("div");
    listContainer.classList.add("product")
    listContainer.innerHTML = `
        <img src="https://www.bassisolicitors.co.uk/wp-content/uploads/2017/05/1c0d0f0cb8b7f2fb2685da9798efe42b_big-image-png-placeholder-clipart_2400-2400.png" alt="" width="200px">

        <div class="p-details">
            <h2>${[i]}. ${list[i].id}</h2>
            <h3>${list[i].name}</h3>
        </div>
    `

    listMainContainer.appendChild(listContainer);
}
