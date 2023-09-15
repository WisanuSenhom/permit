async function getProfile() {
    document.getElementById("loading").style.display = "block";
   const profile = await liff.getProfile()
   const xurl = `https://script.google.com/macros/s/AKfycbzPZ15Ufez7zuWaZItw6hCU6PdWcxfAaNS2XD2yW2zBGMASvFWZLzSC7PqQIpnZ45c8HQ/exec?user=${profile.userId}&name=${profile.displayName}`;
   
   const records = await fetch(xurl);
   const data = await records.json();
    
    let tab = '';
    data.user.forEach(function (user) {
        
      tab += `<tr>
            <td>${user.date}</td>
            <td>${user.office}</td>
            <td>${user.cool}</td>
            <td>${user.range}</td>
            <td>${user.temp}</td>
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
            { "data": 'cool' },
            { "data": 'range' },
            { "data": 'temp' },
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

async function main() {
    await liff.init({ liffId: "1654797991-3mwO60Od" })
      if (liff.isLoggedIn()) {
        getProfile() 
      } else {
        liff.login()
      }
  }
  main()
