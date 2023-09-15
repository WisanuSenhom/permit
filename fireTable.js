async function getData() {
    document.getElementById("loading").style.display = "block";
    const records = await fetch('https://script.google.com/macros/s/AKfycbyB9-NUwszqnFiGghC-avzUS0nglje20_xLgF6_ossLTmEaElHyKHpf1tg-p9bWdLE3XA/exec');
    const data = await records.json();
    
    let tab = '';
    data.user.forEach(function (user) {
        
        tab += `<tr>
            <td>${user.date}</td>
            <td>${user.office}</td>
            <td>${user.fireciful}</td>
            <td>${user.spray}</td>
            <td>${user.force}</td>
            <td>${user.body}</td>
            <td>${user.pressure}</td>
            <td>${user.obstacle}</td>
            <td>${user.details}</td>
            <td>${user.name}</td>
            <td>${user.dupdate}</td>      
          
        </tr>`
    });
    console.log(tab)
    document.getElementById('tbody').innerHTML = tab;
    document.getElementById("loading").style.display = "none";
    $('#userTable').DataTable({
        "data": data.user,
        "columns": [
            { "data": 'date' },
            { "data": 'office' },
            { "data": 'fireciful' },
            { "data": 'spray' },
            { "data": 'force' },
            { "data": 'body' },
            { "data": 'pressure' },
            { "data": 'obstacle' },
            { "data": 'details' },
            { "data": 'name' },
            { "data": 'dupdate' }
                ],
           "processing": true,
           "responsive":true,
        //    "colReorder": true,
        //    "fixedColumns": true,
        //    "fixedHeader": true,
        //    "keys": true,
           "dom": 'Bfrtip',
           "buttons": [
            'copy', 'csv', 'excel', 'print'
        ]
        
    });
   
}

